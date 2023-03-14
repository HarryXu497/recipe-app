import type { Actions } from './$types';
 
export const actions = {
	default: async (event) => {
		const data = Object.fromEntries(await event.request.formData());
		console.log(data);
	}
} satisfies Actions;