import type { PageServerLoad } from './$types';
import type Recipe from '$lib/models/recipe.model';
import { pb } from "$lib/pocketbase";


export const load = (async (context) => {
	const recipesCollection = pb.collection("recipes");
	const recipes = await recipesCollection.getList<Recipe>(1, 6)



	return {
		recipes: recipes.items.map(o => ({
			...o,
			images: o.images.map((url: string) => pb.getFileUrl(o, url)),
		}))
	};
}) satisfies PageServerLoad;