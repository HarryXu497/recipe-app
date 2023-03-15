import { pb } from '$lib/pocketbase';
import type { Record } from 'pocketbase';
import type { IngredientObject } from '../../../ingredient.model';
import type { Actions } from './$types';
import { redirect } from '@sveltejs/kit';
 
export const actions = {
	default: async (event) => {
		const formDataAsObject = Object.fromEntries(await event.request.formData());

		
		const ingredientsCollection = pb.collection('ingredients');
		const recipeCollection = pb.collection('recipes');
		
		const ingredientsLength = (<number><unknown> formDataAsObject.ingredientsLength || 0)
		const formIngredients: IngredientObject[] = []

		
		for (let i = 0; i < ingredientsLength; i++) {
			formIngredients.push({
				name: <string> formDataAsObject[`ingredient.${i}.name`] || "",
				amount: <number><unknown> formDataAsObject[`ingredient.${i}.amount`] || 0,
				units: <string> formDataAsObject[`ingredient.${i}.units`] || "",
			})
		}
		
		const ingredients = await Promise.all(formIngredients.map(async (ingredient) => ingredientsCollection.create(ingredient)))
		const ingredientIds = ingredients.map(ingredient => ingredient.id);


		const finalFormData = new FormData();

		if (!event.locals.user) {
			return;
		}

		finalFormData.append("name", formDataAsObject.name)
		finalFormData.append("description", formDataAsObject.description)
		finalFormData.append("time", formDataAsObject.time)
		finalFormData.append("author", event.locals.user.id)
		finalFormData.append("images", formDataAsObject.images)
		finalFormData.append("rating", "5")
		
		for (const ingredient of ingredientIds) {
			finalFormData.append("ingredients", ingredient);
		}

		let newRecipe: Record;

		try {
			newRecipe = await recipeCollection.create(finalFormData);
		} catch (err) {
			throw redirect(303, `/recipes/new`)
		}

		throw redirect(303, `/recipes/${newRecipe.id}`)
	}
} satisfies Actions;