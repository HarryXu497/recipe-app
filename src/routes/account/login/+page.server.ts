import type { Actions } from "./$types";
import { pb } from '../../../lib/pocketbase';
import { fail } from "@sveltejs/kit";
import { ClientResponseError } from "pocketbase";
import { ZodError } from "zod";

interface ErrorControls {
	username?: string[];
	email?: string[];
	password?: string[];
}

export const actions = {
	default: async (event) => {
		const data = Object.fromEntries(await event.request.formData());

		const users = pb.collection("users");

		try {
			// loginSchema.parse(data);

			await users.authWithPassword(<string> data.username, <string> data.password);
			// users.requestVerification(formData.get("email");
		} catch (err) {
			if (err instanceof ClientResponseError) {
				return fail(400, { error: true })
			}
			if (err instanceof ZodError) {
				const errors = err.flatten().fieldErrors as ErrorControls
				const { username, password } = data;

				return fail(400, {
					username,
					password,
					errors,
				})
			}
			return fail(400);
		}

		return { success: true };
	}
} satisfies Actions;