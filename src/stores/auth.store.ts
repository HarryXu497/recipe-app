import { writable } from "svelte/store";

const authStore = writable(true);

export default authStore;