<script lang="ts">
	import { board } from "$lib/store"
	import Tile from "./Tile.svelte"




</script>

{#each $board as width, x}
	{#each width as tile, y}
	 <Tile {tile}></Tile>
{/each}
{/each}
