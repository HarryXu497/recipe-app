import type { Record } from "pocketbase";

export default interface User extends Record {
	username: string;
	email: string;
	
}