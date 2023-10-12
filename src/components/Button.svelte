<script lang="ts">
	import { cn } from "$lib"
	let className: string | null = null
	export { className as class }
</script>

<button
	on:click
	class={cn(
		className,
		`shadow-md border-4 px-5 py-2 -tracking-tighter border-gray-400
        bg-gray-800 hover:border-gray-600`
	)}
>
	<slot />
</button>
