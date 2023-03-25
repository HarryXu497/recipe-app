import { redirect, type Handle, error } from '@sveltejs/kit';
import { pb } from './lib/pocketbase';
import { sequence } from '@sveltejs/kit/hooks';
import type Recipe from '$lib/models/recipe.model';
 
interface Route {
	path: string;
	match?: 'exact' | 'prefix';
}

const first = (async ({ event, resolve }) => {

	/// User Auth
	pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '');

	if (pb.authStore.isValid) {
		try {
			await pb.collection('users').authRefresh()
		} catch (_) {
			pb.authStore.clear()
		}
	}

	event.locals.pb = pb;
	event.locals.user = structuredClone(pb.authStore.model);

	const response = await resolve(event);

	response.headers.set('set-cookie', pb.authStore.exportToCookie({ httpOnly: false }));

	return response;
}) satisfies Handle;

const second = (async ({ event, resolve }) => {
	const needToBeLoggedIn: Route[] = [
		{ path: "/recipes/new", match: "exact"},
		{ path: "/settings", match: "prefix"},
	]

	/// Route Guards
	for (const route of needToBeLoggedIn) {
		if ((!event.locals.user)) {
			if ((route.match === "exact") && (event.url.pathname === route.path)) {
				throw redirect(302, `/login?redirectTo=${route.path}`)
			}
			if ((route.match === "prefix") && (event.url.pathname.startsWith(route.path))) {
				throw redirect(302, `/login?redirectTo=${route.path}`)
			}
		}
	}

	if (event.url.pathname.startsWith("/recipes") && event.url.pathname.endsWith("/delete") && event.params.id) {
		if (!event.locals.user) {
			throw redirect(302, `/login?redirectTo=${event.url.pathname}`)
		}

		const userId = event.locals.user?.id

		const recipe = await event.locals.pb.collection("recipes").getOne<Recipe>(event.params.id, { expand: "author" })

		if (recipe.expand.author.id !== userId) {
			throw error(403, { message: "Unauthorized" })
		}
	}


	const response = await resolve(event);

	return response;
}) satisfies Handle;

export const handle = sequence(first, second) satisfies Handle;