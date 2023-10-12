<script lang="ts">
	import type { Tile } from "$lib/game"

	export let tile: Tile
</script>


	<button
		on:click
		class="w-14 h-14 bg-orange-500 tile{tile.type}"
		>
	</button>

<style>
	.tile1 {
		@apply hue-rotate-[200deg];
	}
	.tile2 {
		@apply hue-rotate-[280deg];
	}
	.tile3 {
		@apply hue-rotate-[100deg];
	}
	.tile4 {
		@apply hue-rotate-[50deg];
	}
</style>
