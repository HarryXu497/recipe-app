import PocketBase, { Admin } from 'pocketbase';
import { writable } from 'svelte/store';
import type User from '../user.model';

export const pb = new PocketBase("http://127.0.0.1:8090");

export const currentUser = writable(pb.authStore.model as (User | Admin | null));
