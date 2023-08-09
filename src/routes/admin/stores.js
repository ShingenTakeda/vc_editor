import { writable } from "svelte/store";

export const showEdit = writable(false)
export const showDelete = writable(false)
export const intentStore = writable([])