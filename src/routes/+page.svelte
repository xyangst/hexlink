<script lang="ts">
	import ColorSelect from "$components/ColorSelect.svelte"
	import GameOverModal from "$components/GameOverModal.svelte"
	import Grid from "$components/Grid.svelte"
	import { helpModal, moves, resetGame } from "$lib/store"
	import { RotateCcw } from "lucide-svelte"
</script>

<main class="flex flex-col max-w-6xl">
	<div class="flex justify-between text-3xl">
		<p>{$moves}</p>
		<div class="flex gap-2">
		<button on:click={resetGame}>
			<RotateCcw/>
		</button>
		<button on:click={()=>{$helpModal=true}}>
			?
		</button>
	</div>
	</div>
	<div class="flex flex-col max-w-6xl p-2 bg-gray-800 gap-2">
		<Grid/>
		<ColorSelect/>
	</div>
	<GameOverModal/>
</main>
