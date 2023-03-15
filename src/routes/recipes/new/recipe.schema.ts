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
	time: z
		.number({
			required_error: 'Time is required',
			invalid_type_error: 'Age must be a number'
		})
		.int()
		.nonnegative({ message: 'Time must be positive' }),
	ingredients: z
		.array(z.object({
			name: z
				.string({ required_error: 'Name is required' }),
			amount: z
				.number({ required_error: 'Amount is required' })
				.positive({ message: "Amount must be positive" }),
			units: z
				.string(),
		})).nonempty(),
	// images: z
	// 	.instanceof(File)
	// 	.or({ })
	// 	.instanceof(FileList)
})

recipeSchema.parse(new FormData())

export default recipeSchema;