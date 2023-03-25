import PocketBase, { Admin } from 'pocketbase';
import { writable } from 'svelte/store';
import type User from '$lib/models/user.model';
import { DB_URL } from '$env/static/private';



export const pb = new PocketBase(DB_URL);

export const currentUser = writable(pb.authStore.model as (User | Admin | null));
