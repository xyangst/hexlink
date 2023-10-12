<script lang="ts">
	import ColorSelect from "$components/ColorSelect.svelte"
	import GameOverModal from "$components/GameOverModal.svelte"
	import Grid from "$components/Grid.svelte"
	import { moves } from "$lib/store"
</script>

<main class="flex flex-col max-w-6xl">
	{$moves}
	<div class="flex flex-col max-w-6xl p-2 bg-gray-800 gap-2">
		<Grid/>
		<ColorSelect/>
	</div>
	<GameOverModal/>
</main>
