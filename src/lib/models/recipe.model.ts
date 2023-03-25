import type { Record } from "pocketbase"
import type Ingredient from './ingredient.model';

export default interface Recipe extends Record {
	name: string;
	description: string;
	rating: number;
	time: number;
	expand: {
		ingredients: Ingredient[];
		author: any;
	}
	images: string[];
}
