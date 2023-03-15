import { z } from "zod";

export const recipeSchema = z.object({
    name: z
        .string({ required_error: 'Name is required' })
        .trim()
        .max(60, { message: 'Name must be less than 64 characters' }),
    description: z
        .string({ required_error: 'Description is required' })
        .trim()
        .max(400, { message: 'Email must be less than 400 characters' }),
    password: z
        .string({ required_error: 'Password is required' })
        .min(8, { message: 'Password must be at least 8 characters' })
        .trim(),
	passwordConfirm: z
		.string()
		.min(8)
		.trim(),
})

recipeSchema.parse(new FormData())

export default recipeSchema;