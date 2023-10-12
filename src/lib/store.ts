import { generateRandomBoard } from "$lib/game"
import { writable } from "svelte/store"
export const moves = writable(0)
export const board = writable(generateRandomBoard())
export const selected = writable(2)
export const gameOver = writable(false)
export const helpModal = writable(false)
export function resetGame() {
	moves.set(0)
	board.set(generateRandomBoard())
	gameOver.set(false)
}
