import { generateRandomBoard, type color } from "$lib/game"
import { writable } from "svelte/store"
export const score = writable(0)
export const board = writable(generateRandomBoard())
export const selected = writable<color>(2)
