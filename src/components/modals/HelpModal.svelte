<script lang="ts">
	import InfoBox from "$components/InfoBox.svelte"
	import { modalState } from "$lib/store"
		$:visible = $modalState == "help"
</script>

<button
	class="overlay w-full fixed top-0 left-0 right-0 bottom-0 bg-opacity-60 bg-black p-6 hidden justify-center items-center"
	class:visible
    on:click={()=>$modalState = "none"}
>
	<InfoBox class="px-5 py-10 w-80 gap-y-6">
        <h1 class="text-xl font-bold text-center">hexlink</h1>
        <p>try to connect the colors in the least moves.</p>
        if all blocks of the same color are connected (adjacent), you win
	</InfoBox>
</button>

<style>
	.visible {
		display: flex;
	}
</style>
