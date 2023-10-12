import { random } from "$lib"
import { height, width } from "$lib/config"

export class Tile {
	type = Math.floor(random(0, 5))
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
