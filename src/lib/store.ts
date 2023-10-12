import { generateRandomBoard } from "$lib/game"
import { writable } from "svelte/store"
export const moves = writable(0)
export const board = writable(generateRandomBoard())
export const selected = writable(2)
export const gameOver = writable(false)
