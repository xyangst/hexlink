<script lang="ts">
	import { cn } from "$lib"
	let className: string | null = null
	export { className as class }
</script>

<div
	class={cn(
		className,
		"rounded-3xl shadow-md border-4 border-gray-50 bg-gradient-to-b bg-gray-800 px-5 py-2 -tracking-tighter"
	)}
>
	<slot />
</div>
