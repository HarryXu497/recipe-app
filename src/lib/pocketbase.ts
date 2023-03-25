import PocketBase, { Admin } from 'pocketbase';
import { writable } from 'svelte/store';
import type User from '$lib/models/user.model';
import { PUBLIC_DB_URL } from '$env/static/public';



export const pb = new PocketBase(PUBLIC_DB_URL);

export const currentUser = writable(pb.authStore.model as (User | Admin | null));
