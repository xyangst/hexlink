<script lang="ts">
	import "../app.css"
</script>

<main class="md:p-10">
	<slot />
</main>

<style>
	main {
		@apply bg-gray-900 flex min-h-screen justify-center;
	}
</style>
