<script lang="ts">
	import { page } from '$app/stores';
	import { count } from '$lib/stores';
	import type { PageData } from './$types';
	import { Skeleton } from '$lib/components/ui/skeleton';

	export let data: PageData;
</script>

<div class="mx-auto flex w-full max-w-xl flex-col gap-4">
	{#if data.isDataRequest && $count !== undefined}
		{#if $count.filter((obj) => obj.id == $page.params.slug)[0].image}
			<img
				alt=""
				src={$count.filter((obj) => obj.id == $page.params.slug)[0].image}
				data-flip-id="image{$count.findIndex((obj) => obj.id == $page.params.slug)}"
				class="aspect-square rounded-xl bg-white object-contain"
			/>
		{:else}
			<div
				data-flip-id="image{$count.findIndex((obj) => obj.id == $page.params.slug)}"
				class="grid aspect-square h-full place-items-center rounded-xl bg-muted"
			>
				<span>No Image</span>
			</div>
		{/if}
	{:else}
		{#await data.streamed.wishlist}
			<Skeleton class="grid aspect-square" />
		{:then wishlist}
			<img
				alt=""
				src={wishlist.filter((obj) => obj.id == $page.params.slug)[0].image}
				data-flip-id="image{wishlist.findIndex((obj) => obj.id == $page.params.slug)}"
				class="rounded-xl bg-white object-contain"
			/>
		{/await}
	{/if}
</div>
