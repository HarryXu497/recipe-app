import type { Actions } from "./$types";
import { pb } from '../../../lib/pocketbase';
import { fail } from "@sveltejs/kit";
import { ClientResponseError } from "pocketbase";
import { ZodError } from "zod";
import registerSchema from '../account.schema';

export const actions = {
	default: async (event) => {
		const formData = await event.request.formData();

		const data = {
			email: <string> formData.get("email"),
			username: <string> formData.get("username"),
			password: <string> formData.get("password"),
			passwordConfirm: formData.get("passwordConfirm"),
		}

		try {
			registerSchema.parse(data);

			const users = pb.collection('users');
	
			await users.create(data);
			
			users.authWithPassword(<string> formData.get("username"), <string> formData.get("password"));
		} catch (err) {
			if (err instanceof ClientResponseError) {
				return fail(400, { error: {...err} })
			}
			if (err instanceof ZodError) {
				const errors = err.flatten().fieldErrors
				const { username, email, password } = data;

				return fail(400, {
					username,
					email,
					password,
					errors,
				})
			}
			return fail(400)
		}

		return { success: true };
	}
} satisfies Actions;