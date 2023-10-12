<script lang="ts">
	import Board from "$components/Board.svelte"
	import GameOverModal from "$components/GameOverModal.svelte"
	import { score } from "$lib/store"
	let showModal = false
</script>

<main class="flex flex-col h-100 max-w-6xl">
	<Board on:gameover={() => (showModal = true)} />
	<GameOverModal bind:score={$score} bind:visible={showModal} />
</main>
