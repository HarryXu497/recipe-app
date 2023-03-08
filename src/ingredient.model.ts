import type { Record } from "pocketbase"

export default interface Ingredient extends Record {
	name: string;
	amount: number;
	units: string;
}
