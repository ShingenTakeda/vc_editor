import { writable } from "svelte/store"
export const userStore = writable(0)
export const badUser = {user: "admin", password: "admin"}