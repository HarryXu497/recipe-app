import { currentUser } from '$lib/pocketbase';
import type User from '$lib/models/user.model';
import type { Actions } from './$types';
import { redirect } from '@sveltejs/kit';

export const actions = {
	default: async ({ request, locals, url }) => {
		if (!locals.user) return;

		const data = await request.formData();
		
		if (data.has("avatar") && (data.get("avatar") as File).size === 0) {
			data.delete("avatar")
		}
		
		try {
			const r = await locals.pb.collection("users").update<User>(locals?.user?.id, data);
			currentUser.set(r)
		} catch (err) {
			console.error(err);
		}

		throw redirect(301, url.pathname);
	}
} satisfies Actions
