<script lang="ts">
	import type { Tile } from "$lib/game"

	export let tile: Tile
</script>


{#if tile.type !== null}
	<button
		on:click
		class="p-1 w-14 h-14"
		><div class="tile tile{tile.type}"/>
	</button>
{/if}

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
	.tile {
		@apply bg-cover bg-center w-full h-full bg-orange-500;

		/* background-image: url(https://cdn.discordapp.com/attachments/728137623775739995/1157238636299952149/fd2c8a111c5425b2404ab9e5560f2586.png); */
	}
</style>
