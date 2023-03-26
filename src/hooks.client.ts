import type User from "$lib/models/user.model";
import { pb, currentUser } from "$lib/pocketbase";
import type { Admin } from "pocketbase";

pb.authStore.loadFromCookie(document.cookie)

pb.authStore.onChange((auth) => {
	console.log('author changed', auth);
	currentUser.set(pb.authStore.model as User | Admin | null)
	document.cookie = pb.authStore.exportToCookie({ httpOnly: false })
})