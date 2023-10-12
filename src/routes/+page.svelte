<script lang="ts">
	import ColorSelect from "$components/ColorSelect.svelte"
	import Grid from "$components/Grid.svelte"
	import GameOverModal from "$components/modals/GameOverModal.svelte"
	import HelpModal from "$components/modals/HelpModal.svelte"
	import { ghlink } from "$lib/config"
	import { modalState, moves, resetGame } from "$lib/store"
	import { Github, RotateCcw } from "lucide-svelte"
</script>

<main class="flex flex-col max-w-6xl">
	<p class="w-full text-center text-3xl">hexlink</p>
	<div class="flex justify-between text-3xl">
		<p>{($moves < 10 ? `0${$moves}` : $moves)}</p>
		<div class="flex gap-2">
			<button on:click={resetGame}>
				<RotateCcw/>
			</button>
			<button on:click={()=>{$modalState='help'}}>
				?
			</button>
			<button><a target="_blank" href={ghlink}><Github/></a></button>

	</div>
	</div>
	<div class="flex flex-col max-w-6xl p-2 bg-gray-800 gap-2">
		<Grid/>
		<ColorSelect/>
	</div>
	<HelpModal/>
	<GameOverModal/>
</main>
