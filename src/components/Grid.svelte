<script lang="ts">
	import { board } from "$lib/store"
	import Tile from "./Tile.svelte"




</script>
<div>
	{#each $board as width}
	<div>
		{#each width as tile}

			<Tile {tile}></Tile>
		{/each}
	</div>
	{/each}
</div>
