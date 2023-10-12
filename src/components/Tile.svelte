<script lang="ts">
	import { colors } from "$lib/config"
	import { checkIfDone, getUniqueNumbers, type Tile } from "$lib/game"
	import { board, gameOver, moves, selected } from "$lib/store"

	export let tile: Tile
</script>


	<button
		on:click={()=>{
			if(tile.type==$selected)return
			tile.type = $selected
			const weWin = checkIfDone($board)
			console.log(weWin)
			$moves+=1

			if(weWin==getUniqueNumbers($board)){
				gameOver.set(true)
			}

		}}
		style="background-color: {colors[tile.type]};"
		class="w-14 h-14 transition-colors ease-in-out duration-300">
	</button>
