<script lang="ts">
	import { colors } from "$lib/config"
	import type { Tile } from "$lib/game"
	import { selected } from "$lib/store"

	export let tile: Tile
</script>


	<button
		on:click={()=>{
			tile.type = $selected
		}}
		style="background-color: {colors[tile.type]};"
		class="w-14 h-14">
	</button>
