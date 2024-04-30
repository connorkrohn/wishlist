<script lang="ts">
	import { page } from '$app/stores';
	import { count } from '$lib/stores';
	import type { PageData } from './$types';
	import { Skeleton } from '$lib/components/ui/skeleton';
	import { derived } from 'svelte/store';

	export let data: PageData;

  const item = derived(count, $count => $count?.filter((obj) => obj.id == $page.params.slug)[0]);
  const itemIndex = derived(count, $count => $count?.findIndex((obj) => obj.id == $page.params.slug));

  let itemStreamed: Awaited<typeof data.streamed.wishlist>[0],
  itemStreamedIndex: number;
  
  data.streamed.wishlist.then(result => {
    itemStreamed = result.filter((obj) => obj.id == $page.params.slug)[0]
    itemStreamedIndex = result.findIndex((obj) => obj.id == $page.params.slug)
  })
</script>

<div class="mx-auto flex w-full max-w-xl flex-col gap-4">
	{#if data.isDataRequest && $count !== undefined}
  <div class="aspect-square">
		{#if $item.image}
			<img
				alt=""
				src={$item.image}
				data-flip-id="image{$itemIndex}"
				class="aspect-square rounded-xl bg-white object-contain"
			/>
		{:else}
			<div
				data-flip-id="image{$itemIndex}"
				class="grid aspect-square place-items-center rounded-xl bg-muted"
			>
				<span>No Image</span>
			</div>
		{/if}
    </div>
    <div>{$item.title}</div>
	{:else}
		{#await data.streamed.wishlist}
			<Skeleton class="grid aspect-square" />
		{:then}
    <div class="aspect-square">
      {#if itemStreamed.image}
			<img
				alt=""
				src={itemStreamed.image}
				data-flip-id="image{itemStreamedIndex}"
				class="aspect-square rounded-xl bg-white object-contain"
			/>
		{:else}
			<div
				data-flip-id="image{itemStreamedIndex}"
				class="grid aspect-square place-items-center rounded-xl bg-muted"
			>
				<span>No Image</span>
			</div>
		{/if}
    </div>
		{/await}
	{/if}
</div>
