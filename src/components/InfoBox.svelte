<script lang="ts">
	import { cn } from "$lib"
	let className: string | null = null
	export { className as class }
</script>

<div
	class={cn(
		className,
		"border-4 border-gray-400 bg-gray-900 px-5 py-2 -tracking-tighter"
	)}
>
	<slot />
</div>
