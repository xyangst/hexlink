<script lang="ts">
	import "../app.css"
</script>

<main class="md:p-10">
	<slot />
</main>

<style>
	main {
		@apply bg-gray-900 flex overflow-hidden items-center h-screen justify-center bg-cover bg-center;
	}
</style>
