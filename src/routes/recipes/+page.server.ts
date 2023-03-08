import PocketBase, { Record} from "pocketbase"
import type { PageServerLoad } from './$types';
import type Recipe from '../../recipe.model';
import type Ingredient from '../../ingredient.model';

const pb = new PocketBase("http://127.0.0.1:8090");


export const load = (async (context) => {
	const recipesCollection = pb.collection("recipes");
	const recipes = await recipesCollection.getList<Recipe>(1, 40, {
		expand: "author,ingredients",
	})

	return {
		recipes: recipes.items.map(o => ({
			...o,
			images: o.images.map((url: string) => pb.getFileUrl(o, url)),
			expand: {
				ingredients: o.expand.ingredients.map((o: Record) => ({...o})) as Ingredient[],
			}
		}))
	};
}) satisfies PageServerLoad;