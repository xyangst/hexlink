import { randomInt } from "$lib"
import { height, width } from "$lib/config"
export type color = 0 | 1 | 2 | 3 | 4
const color = [0, 1, 2, 3, 4] as const
export class Tile {
	type: color = color[randomInt(0, 4)]
}
export function generateRandomBoard() {
	const board: Tile[][] = []

	for (let x = 0; x < width; x += 1) {
		board[x] = []
		for (let y = 0; y < height; y += 1) {
			board[x][y] = new Tile()
		}
	}
	return board
}
