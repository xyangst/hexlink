import { randomInt } from "$lib"
import { height, width } from "$lib/config"
export class Tile {
	type = randomInt(0, 4)
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
export function getUniqueNumbers(board: Tile[][]) {
	const flattenedNumbers = board.flat().map((item) => item.type)
	return [...new Set(flattenedNumbers)].length
}
export function checkIfDone(board: Tile[][]) {
	type cord = { x: number; y: number }
	type x = cord[][]
	const tmp: x = []
	//what the fuck even is this
	const getItem = (x: number, y: number) =>
		tmp.findIndex((row) => row.some((item) => item.x == x && item.y == y))
	for (let x = 0; x < board.length; x += 1) {
		const row = board[x]
		for (let y = 0; y < row.length; y += 1) {
			const combine = (otherx: number, othery: number) => {
				const otherIndex = getItem(otherx, othery)
				const ourIndex = getItem(x, y)
				const other: cord[] | undefined = tmp[otherIndex]
				const our: cord[] | undefined = tmp[ourIndex]
				if (!other && !our) return tmp.push([{ x, y }])
				if (other == our) return
				//check if their define+ our not define
				if (!other) {
					//we know our is define because if other+our isnt define we would return early
					return our!.push({ x: otherx, y: othery })
				}
				//check if their not define + our define
				if (!our) {
					return other.push({ x, y })
				}
				//now we know both defined?e so need to merge them
				//push other to our
				our.push(...other)
				// Empty other.. we cant delete cuz no reference to index or sum
				other.length = 0
			}
			let found = false
			const current = board[x][y]
			//thank u chatgpt
			if (y + 1 < height && current.type === board[x][y + 1].type) {
				combine(x, y + 1)
				found = true
			}

			if (y - 1 >= 0 && current.type === board[x][y - 1].type) {
				combine(x, y - 1)
				found = true
			}

			if (x - 1 >= 0 && current.type === board[x - 1][y].type) {
				combine(x - 1, y)
				found = true
			}

			if (x + 1 < width && current.type === board[x + 1][y].type) {
				combine(x + 1, y)
				found = true
			}
			if (!found) tmp.push([{ x, y }])
		}
	}
	return tmp.filter((arr) => arr.length != 0).length
}
