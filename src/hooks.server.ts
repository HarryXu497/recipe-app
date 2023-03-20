import { redirect, type Handle } from '@sveltejs/kit';
import { pb } from './lib/pocketbase';
import { sequence } from '@sveltejs/kit/hooks';
 
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


	const response = await resolve(event);


	return response;
}) satisfies Handle;

export const handle = sequence(first, second) satisfies Handle;