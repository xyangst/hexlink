import { generateRandomBoard } from "$lib/game"
import { writable } from "svelte/store"
export const score = writable(0)
export const board = writable(generateRandomBoard())
