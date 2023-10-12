<script lang="ts">
	import { board } from "$lib/store"
	import Tile from "./Tile.svelte"




</script>
<div class="bg-crack p-2">
	{#each $board as width, x}
	<div>
		{#each width as tile, y}

		<Tile {tile}></Tile>
		{/each}
	</div>
	{/each}
</div>
