import PocketBase, { Record } from "pocketbase"
import type { PageServerLoad } from './$types';
import type Ingredient from '../../../ingredient.model';
import type Recipe from '../../../recipe.model';

const pb = new PocketBase("http://127.0.0.1:8090");

export const load = (async (context) => {
	const recipesCollection = pb.collection("recipes");
	const recipe = await recipesCollection.getOne<Recipe>(context.params.id, {
		expand: 'ingredients'
	});

	return {
		recipe: {
			...recipe,
			expand: {
				ingredients: recipe.expand.ingredients.map((o: Record) => ({...o})) as Ingredient[],
			}
		}
	};
}) satisfies PageServerLoad;