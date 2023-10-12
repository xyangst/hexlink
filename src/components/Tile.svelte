<script lang="ts">
	import { colors } from "$lib/config"
	import type { Tile } from "$lib/game"

	export let tile: Tile
</script>


	<button
		on:click
		style="background-color: {colors[tile.type]};"
		class="w-14 h-14 bg-orange-500">
	</button>
