import { redirect, type Handle } from '@sveltejs/kit';
import { pb } from './lib/pocketbase';
import { sequence } from '@sveltejs/kit/hooks';
 
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

	const needToBeLoggedIn = ["/recipes/new"]

	/// Route Guards
	for (const route of needToBeLoggedIn) {
		if ((event.url.pathname.startsWith(route)) && (!event.locals.user)) {
			throw redirect(302, `/account/login?redirectTo=${route}`)
		}
	}


	const response = await resolve(event);


	return response;
}) satisfies Handle;

export const handle = sequence(first, second) satisfies Handle;