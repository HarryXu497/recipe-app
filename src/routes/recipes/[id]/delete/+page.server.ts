import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types';


export const actions = {
	default: async (event) => {
		if (!event.locals.user) return;

		const recipeCollection = event.locals.pb.collection("recipes")
		await recipeCollection.delete(event.params.id)
		
		throw redirect(303, "/")
	}
} satisfies Actions