<script lang="ts">
	import { colors } from "$lib/config"
	import { checkIfDone, getUniqueNumbers, type Tile } from "$lib/game"
	import { board, selected } from "$lib/store"

	export let tile: Tile
</script>


	<button
		on:click={()=>{
			tile.type = $selected
			const weWin = checkIfDone($board)
			console.log(weWin)
			if(weWin==getUniqueNumbers($board)){
				alert('you win')
			}
		}}
		style="background-color: {colors[tile.type]};"
		class="w-14 h-14">
	</button>
