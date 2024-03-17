<script lang="ts">
    import type { PageData } from './$types';
    import * as Card from "$lib/components/ui/card";
    import { Skeleton } from "$lib/components/ui/skeleton";

    export let data: PageData;

    const placeholder = [0,0,0,0,0,0,0];
</script>

<div class="w-full max-w-xl mx-auto flex flex-col gap-4">
  {#await data.streamed.wishlist}
  {#each placeholder as item}
  <Card.Root class="animate-pulse rounded-md bg-card/70 border-transparent">
      <Card.Image>
        <Skeleton class="h-full"></Skeleton>
      </Card.Image>
      <Card.Header class="space-y-2">
        <Card.Title><Skeleton class="w-full h-4"></Skeleton></Card.Title>
        <Card.Description><Skeleton class="w-8 h-3"></Skeleton></Card.Description>
      </Card.Header>
  </Card.Root>
  {/each}
  {:then list}
    {#each list as item}
    <a href="/{item.id}">
    <Card.Root class="the-card" style="--id: card-{item.id}">
        <Card.Image>
            {#if item.image}
                    <img src={item.image} alt="" class="bg-white rounded-lg aspect-square object-cover the-img" style="--id: img-{item.id}">
                {:else}
                    <div class="grid place-items-center h-full bg-muted">
                        <span>No Image</span>
                    </div>
                {/if}
        </Card.Image>
        <Card.Header>
          <Card.Title><span class="the-title" style="--id: title-{item.id}">{item.title}</span></Card.Title>
              <Card.Description class="the-price" style="--id: price-{item.id}">${item.price ? item.price : "--"}</Card.Description>
        </Card.Header>
        {#if item.note}
            <Card.Content>
             <p class="the-note" style="--id: note-{item.id}">{item.note}</p>
            </Card.Content>
        {/if}
    </Card.Root>
</a>
    {/each}
  {:catch error}
    <p>error loading comments: {error.message}</p>
  {/await}
</div>
<style>
    .the-img {
        --id: the-imge;
        view-transition-name: var(--id);
    }
    .the-title {
        --id: the-title;
        view-transition-name: var(--id);
    }
    .the-note {
        --id: the-note;
        view-transition-name: var(--id);
    }
</style>