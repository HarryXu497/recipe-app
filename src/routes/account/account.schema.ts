import { z } from "zod";

export const registerSchema = z.object({
    username: z
        .string({ required_error: 'Username is required' })
        .min(2, { message: 'Username must be at least 2 characters' })
        .max(64, { message: 'Username must be less than 64 characters' })
        .trim(),
    email: z
        .string({ required_error: 'Email is required' })
        .trim()
        .max(64, { message: 'Email must be less than 64 characters' })
        .email({ message: 'Email must be a valid email address' }),
    password: z
        .string({ required_error: 'Password is required' })
        .min(8, { message: 'Password must be at least 8 characters' })
        .trim(),
	passwordConfirm: z
		.string()
		.min(8)
		.trim(),

}).refine((data) => data.password === data.passwordConfirm, {
	message: "Passwords don't match",
	path: ["passwordConfirm"],
});
export default registerSchema;