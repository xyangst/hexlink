<script lang="ts">
	import ColorSelect from "$components/ColorSelect.svelte"
	import GameOverModal from "$components/GameOverModal.svelte"
	import Grid from "$components/Grid.svelte"
	import { score } from "$lib/store"
	let showModal = false
</script>

<main class="flex flex-col max-w-6xl">
	<Grid/>
	<ColorSelect/>
	<GameOverModal bind:score={$score} bind:visible={showModal} />
</main>
