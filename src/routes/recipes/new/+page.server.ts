import { pb } from '$lib/pocketbase';
import { fail, redirect } from '@sveltejs/kit';
import { ClientResponseError, type Record } from 'pocketbase';
import { ZodError } from 'zod';
import type { IngredientObject } from '$lib/models/ingredient.model';
import recipeSchema from '../recipe.schema';
import type { Actions } from './$types';

function formDataToObject(formData: FormData, arraySet: Set<string>, convertToObject: Set<string>) {
	return Object.fromEntries(
		Array.from(formData.keys()).map(key => [
			key, (arraySet.has(key)) ? 
			(convertToObject.has(key) ? formData.getAll(key).map(v => JSON.parse(v as string)) : formData.getAll(key)) : formData.get(key)
		]).filter(v => v[1] !== "")
	)
}

export const actions = {
	default: async (event) => {
		if (!event.locals.user) {
			return;
		}
		
		const formData = await event.request.formData();
		const formDataAsObject = Object.fromEntries(formData);

		
		const ingredientsCollection = pb.collection('ingredients');
		const recipeCollection = pb.collection('recipes');
	
		const obj = formDataToObject(formData, new Set(["ingredients", "images"]), new Set(["ingredients"]));

		/// Form Validation
		try {
			obj["time"] = +obj["time"];
			recipeSchema.parse(obj)
		} catch (err) {
			if (err instanceof ZodError) {
				const errors = err.flatten().fieldErrors
				const { name, description, time, ingredients } = obj;


				return fail(400, {
					name,
					description,
					time,
					ingredients,
					errors,
				})
			}
			return fail(400)
		}

		/// Processing Data
		const finalFormData = new FormData();

		const formIngredients: IngredientObject[] = formData.getAll("ingredients").map(v => JSON.parse(v as string))
		const ingredients = await Promise.all(formIngredients.map(ingredient => ingredientsCollection.create(ingredient, { $autoCancel: false })))
		const ingredientIds = ingredients.map(ingredient => ingredient.id);

		finalFormData.append("name", formDataAsObject.name)
		finalFormData.append("description", formDataAsObject.description)
		finalFormData.append("time", formDataAsObject.time)
		finalFormData.append("author", event.locals.user.id)

		for (const v of formData.getAll("images")) {
			finalFormData.append("images", v)
		}

		finalFormData.append("rating", "5")
		
		for (const ingredient of ingredientIds) {
			finalFormData.append("ingredients", ingredient);
		}
		
		let newRecipe: Record;
		
		try {
			newRecipe = await recipeCollection.create(finalFormData);
		} catch (err) {
			if (err instanceof ClientResponseError) {
				return fail(400, { error: {...err} })
			}
			return fail(400)
		}

		throw redirect(303, `/recipes/${newRecipe.id}`)
	}
} satisfies Actions;