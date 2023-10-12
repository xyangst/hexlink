<script lang="ts">
	import { BOARD_PADDING, TILE_SIZE, height, width } from "$lib/config"
	import { createEventDispatcher, onMount } from "svelte"
	import Grid from "./Grid.svelte"
	const dispatch = createEventDispatcher()
	let docWidth = document.body.clientWidth
	function getTileSize() {
		docWidth = document.body.clientWidth
		let sizes = [60, 50, 40, 30]
		let minWdth
		for (let size of sizes) {
			minWdth = BOARD_PADDING * 2 + 40 * 2 + height * size
			if (docWidth >= minWdth) {
				return size
			}
		}
		return sizes[sizes.length - 1]
	}

	onMount(() => {
		addEventListener("resize", () => {
			if (getTileSize() != $TILE_SIZE) TILE_SIZE.set(getTileSize())
		})
	})
</script>

<main class="flex items-center">
	<div
		class="relative bg-crack shadow-xl rounded-md"
		style="
    width: {$TILE_SIZE * height + BOARD_PADDING * 2}px;
    height: {$TILE_SIZE * width + BOARD_PADDING * 2}px;
    --tile-size: {$TILE_SIZE}px;
  "
	>
		<Grid on:gameover={() => dispatch("gameover")} />
	</div>
</main>
