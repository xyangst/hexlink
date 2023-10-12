<script lang='ts'>
	import { colors } from "$lib/config"
	import { selected } from "$lib/store"

</script>
<div class="flex justify-between">
    {#each colors as color,i}
    {#if $selected==i}
    <div class="relative w-14 h-14"  style="background-color: {color};">
        <div class="absolute w-full h-full border-2 border-black">

    </div>
    </div>
    {:else}
    <button class="w-14 h-14"  style="background-color: {color};" on:click={()=>{
        selected.set(i)
    }}/>

    {/if}
    {/each}
</div>
