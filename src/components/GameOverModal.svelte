<script lang="ts">
	import Button from "$components/Button.svelte"
	import InfoBox from "$components/InfoBox.svelte"
	import { generateRandomBoard } from "$lib/game"
	import { board, gameOver, moves } from "$lib/store"
	$:visible = $gameOver
</script>

<div
	class="overlay fixed top-0 left-0 right-0 bottom-0 bg-opacity-60 bg-black p-6 hidden justify-center items-center"
	class:visible
>
	<InfoBox class="px-5 py-10 w-80 gap-y-6 text-center text-3xl">
		<div class="text-4xl font-bold">you won.</div>
		<div class="text-4xl">with {$moves} moves</div>
		<Button
			on:click={() => {
				$gameOver = false
				$moves = 0
				$board = generateRandomBoard()
			}}>Play Again</Button
		>
	</InfoBox>
</div>

<style>
	.visible {
		display: flex;
	}
</style>
