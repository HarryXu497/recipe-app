import { pb } from "$lib/pocketbase";
import type { Record } from "pocketbase";
import type Ingredient from '$lib/models/ingredient.model';
import type Recipe from '$lib/models/recipe.model';
import type { PageServerLoad } from './$types';


export const load = (async () => {
	const recipesCollection = pb.collection("recipes");
	const recipes = await recipesCollection.getList<Recipe>(1, 40, {
		expand: "",
	})

	return {
		recipes: recipes.items.map(o => ({
			...o,
			images: o.images.map((url: string) => pb.getFileUrl(o, url)),
		}))
	};
}) satisfies PageServerLoad;