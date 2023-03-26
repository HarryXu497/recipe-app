import { pb } from '$lib/pocketbase';
import type { Record } from "pocketbase";
import type Ingredient from '$lib/models/ingredient.model';
import type Recipe from '$lib/models/recipe.model';
import type { PageServerLoad } from './$types';

export const load = (async (context) => {
	const recipesCollection = pb.collection("recipes");
	const recipe = await recipesCollection.getOne<Recipe>(context.params.id, {
		expand: 'ingredients'
	});
	const recipes = await recipesCollection.getList<Recipe>(1, 50);

	return {
		recipe: {
			...recipe,
			images: recipe.images.map((url: string) => pb.getFileUrl(recipe, url)),
			expand: {
				ingredients: recipe.expand.ingredients.map((o: Record) => ({...o})) as Ingredient[],
			}
		},
		recipes: recipes.items.map(o => ({
			...o,
			images: o.images.map((url: string) => pb.getFileUrl(o, url)),
		}))
	}
}) satisfies PageServerLoad;