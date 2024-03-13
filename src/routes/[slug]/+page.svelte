<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="w-full max-w-xl mx-auto flex flex-col gap-3 rounded-xl border bg-card text-card-foreground p-3 text-left">
    <div class="inline-block rounded-lg overflow-hidden row-span-3 aspect-square bg-white">
    {#if data.item.image}
        <img src={data.item.image} alt="">
    {:else}
        <div class="grid place-items-center h-full bg-muted">
            <span>No Image</span>
        </div>
    {/if}
    </div>
    <div class="text-xl font-extrabold leading-none tracking-tight">
        {data.item.title}
        <div class="text-xs text-muted-foreground uppercase font-bold">
            ${data.item.price ? data.item.price : "--"}
        </div>
    </div>

    {#if data.item.note}
    <div>
        <p>{data.item.note}</p>
    </div>
    {/if}
</div>
