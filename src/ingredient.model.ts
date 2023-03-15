import type { Record } from "pocketbase"

export interface IngredientObject {
	name: string;
	amount: number;
	units?: string;
}

export default interface Ingredient extends Record, IngredientObject {}

