<script lang="ts">
	import GameOverModal from "$components/GameOverModal.svelte"
	import Grid from "$components/Grid.svelte"
	import { score } from "$lib/store"
	let showModal = false
</script>

<main class="flex flex-col max-w-6xl">
	<Grid/>
	<GameOverModal bind:score={$score} bind:visible={showModal} />
</main>
