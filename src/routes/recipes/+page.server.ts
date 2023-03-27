import { pb } from "$lib/pocketbase";
import type { Record } from "pocketbase";
import type Ingredient from '$lib/models/ingredient.model';
import type Recipe from '$lib/models/recipe.model';
import type { PageServerLoad } from './$types';


export const load = (() => {
	const recipesCollection = pb.collection("recipes");
	const recipes = recipesCollection.getList<Recipe>(1, 40, {
		expand: "",
	})

	return {
		recipes: recipes
			.then(recipes => {
				return { ...recipes }
			})
			.then(recipes => recipes.items.map(o => ({
				...o,
				images: o.images.map((url: string) => pb.getFileUrl(o, url)),
			})))
	
	};
}) satisfies PageServerLoad;