<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="w-full max-w-xl mx-auto flex flex-col gap-3 rounded-xl border bg-card text-card-foreground p-3 text-left the-card" style="--id: card-{data.item.id}">
    <div class="inline-block rounded-lg overflow-hidden row-span-3 aspect-square">
    {#if data.item.image}
        <img src={data.item.image} alt="" class="bg-white rounded-lg aspect-square object-cover the-img" style="--id: img-{data.item.id}">
    {:else}
        <div class="grid place-items-center h-full bg-muted">
            <span>No Image</span>
        </div>
    {/if}
    </div>
    <div class="text-xl font-extrabold leading-none tracking-tight">
        <span class="the-title" style="--id: title-{data.item.id}">{data.item.title}</span>
        <p class="text-xs text-muted-foreground uppercase font-bold the-price" style="--id: price-{data.item.id}">
            ${data.item.price ? data.item.price : "--"}
        </p>
    </div>
    {#if data.item.note}
    <div>
        <p class="the-note" style="--id: note-{data.item.id}">{data.item.note}</p>
    </div>
    {/if}
</div>

<style>
    .the-card {
        --id: the-card;
        view-transition-name: var(--id);
    }
    .the-img {
        --id: the-img;
        view-transition-name: var(--id);
    }
    .the-title {
        --id: the-title;
        view-transition-name: var(--id);
    }
    .the-price {
        --id: the-price;
        view-transition-name: var(--id);
    }
    .the-note {
        --id: the-note;
        view-transition-name: var(--id);
    }
</style>
