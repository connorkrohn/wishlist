<script lang="ts">
	import type { PageData } from './$types';
	import * as Card from '$lib/components/ui/card';
	import { Skeleton } from '$lib/components/ui/skeleton';

	export let data: PageData;
	let placeholder = [0,0,0,0,0,0,0,0,0,0];
</script>

<div class="mx-auto flex w-full max-w-xl flex-col gap-4">
	{#await data.wishlist}
		{#each placeholder as item}
		<Card.Root>
			<Card.Image>
				<Skeleton class="grid h-full place-items-center" />
			</Card.Image>
			<Card.Header>
				<Card.Title><Skeleton class="w-full h-5 mb-1" /><Skeleton class="w-1/3 h-5 mb-1" /></Card.Title>
				<Card.Description><Skeleton class="w-7 h-2" /></Card.Description>
			</Card.Header>
		</Card.Root>
		{/each}
	{:then wishlist}
		{#each wishlist as item, i}
			<a href="/{item.id}">
			<Card.Root>
				<Card.Image>
					{#if item.image}
						<img src={item.image} alt="" class="bg-white" loading="lazy"/>
					{:else}
						<div class="grid h-full place-items-center bg-muted">
							<span>No Image</span>
						</div>
					{/if}
				</Card.Image>
				<Card.Header>
					<Card.Title data-flip-id="test{i}">{item.title}</Card.Title>
					<Card.Description>${item.price ? item.price : '--'}</Card.Description>
				</Card.Header>
				{#if item.note}
					<Card.Content>
						<p>{item.note}</p>
					</Card.Content>
				{/if}
			</Card.Root>
		</a>
		{/each}
	{/await}
</div>
