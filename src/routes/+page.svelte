<script lang="ts">
	import type { PageData } from './$types';
	import * as Card from '$lib/components/ui/card';
	import { Skeleton } from '$lib/components/ui/skeleton';
	import { count } from '$lib/stores';

	export let data: PageData;
	let placeholder = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
</script>

<div class="mx-auto flex w-full max-w-xl flex-col gap-4">
	{#if data.isDataRequest && $count !== undefined}
		{#each $count as item, i}
			<a href="/{item.id}">
				<Card.Root>
					<Card.Image>
						{#if item.image}
							<img
								src={item.image}
								alt=""
								class="aspect-square rounded-md bg-white object-contain"
								loading="lazy"
								data-flip-id="image{i}"
							/>
						{:else}
							<div
								data-flip-id="image{i}"
								class="grid aspect-square place-items-center rounded-md bg-muted"
							>
								<span>No Image</span>
							</div>
						{/if}
					</Card.Image>
					<Card.Header>
						<Card.Title>{item.title}</Card.Title>
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
	{:else}
		{#await data.streamed.wishlist}
			{#each placeholder as item}
				<Card.Root>
					<Card.Image>
						<Skeleton class="grid h-full place-items-center" />
					</Card.Image>
					<Card.Header>
						<Card.Title
							><Skeleton class="mb-1 h-5 w-full" /><Skeleton class="mb-1 h-5 w-1/3" /></Card.Title
						>
						<Card.Description><Skeleton class="h-2 w-7" /></Card.Description>
					</Card.Header>
				</Card.Root>
			{/each}
		{:then wishlist}
			{#each wishlist as item, i}
				<a href="/{item.id}">
					<Card.Root>
						<Card.Image>
							{#if item.image}
								<img
									src={item.image}
									alt=""
									class="aspect-square rounded-lg bg-white object-contain"
									loading="lazy"
									data-flip-id="image{i}"
								/>
							{:else}
								<div class="grid h-full place-items-center bg-muted">
									<span>No Image</span>
								</div>
							{/if}
						</Card.Image>
						<Card.Header>
							<Card.Title>{item.title}</Card.Title>
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
	{/if}
</div>
