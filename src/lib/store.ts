import { generateRandomBoard } from "$lib/game"
import { writable } from "svelte/store"
export const moves = writable(0)
export const board = writable(generateRandomBoard())
export const selected = writable(2)
export const modalState = writable<"gameover" | "help" | "none">("none")
export function resetGame() {
	moves.set(0)
	board.set(generateRandomBoard())
	modalState.set("none")
}
