<script lang="ts">
	import { cn } from "$lib"
	let className: string | null = null
	export { className as class }
</script>

<button
	on:click
	class={cn(
		className,
		`hover:bg-gray-900 uppercase rounded-3xl shadow-md border-4 px-5 py-2 -tracking-tighter border-gray-50
        bg-gray-950`
	)}
>
	<slot />
</button>
