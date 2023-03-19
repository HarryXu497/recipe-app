
export const actions = {
	default: async ({ request, locals }) => {
		if (!locals.user) return;

		const data = await request.formData();
		console.error(data);

		try {
			await locals.pb.collection("users").update(locals?.user?.id, data);
		} catch (err) {
			console.error(err);
		}
	}
}
