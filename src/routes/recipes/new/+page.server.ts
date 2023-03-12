import type { Actions } from './$types';
import type Recipe from '../../../recipe.model';
import PocketBase from 'pocketbase';

const pb = new PocketBase("http://127.0.0.1:8090");

export const actions = {
	default: async (event) => {
		const formData = await event.request.formData();
		const ingredientsData = await formData.get('ingredients');

		console.log("HERE")
		formData.forEach(console.log)
		console.log(formData.get('ingredient0'))

		// const dataIngredients: Recipe = {
		// 	name: <string> formData.get('name') || "",
		// 	description: <string> formData.get('description') || "",
		// 	rating: 0,
		// 	time: <number><unknown> formData.get('time') || 0,
			
		// }

		const data = {
			name: <string> formData.get('name') || "",
			description: <string> formData.get('description') || "",
			rating: 0,
			time: <number><unknown> formData.get('time') || 0,
			
		}

		pb.collection("recipe").create({

		})
	}
} satisfies Actions;