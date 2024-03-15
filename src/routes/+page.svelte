<script lang="ts">
    import type { PageData } from './$types';
    import * as Card from "$lib/components/ui/card";

    export let data: PageData;

    const placeholder = [0,0,0,0,0,0,0];
</script>

<div class="w-full max-w-xl mx-auto flex flex-col gap-4">
  {#await data.streamed.wishlist}
  {#each placeholder as item}
  <Card.Root>
      <Card.Image>
        <div class="grid place-items-center h-full bg-muted"></div>
      </Card.Image>
  </Card.Root>
  {/each}
  {:then list}
    {#each list as item}
    <Card.Root>
        <Card.Image>
            {#if item.image}
                <img src={item.image} alt="">
            {:else}
                <div class="grid place-items-center h-full bg-muted">
                    <span>No Image</span>
                </div>
            {/if}
        </Card.Image>
        <Card.Header>
          <Card.Title>{item.title}</Card.Title>
          <Card.Description>${item.price ? item.price : "--"}</Card.Description>
        </Card.Header>
        {#if item.note}
            <Card.Content>
              <p>{item.note}</p>
            </Card.Content>
        {/if}
    </Card.Root>
    {/each}
  {:catch error}
    <p>error loading comments: {error.message}</p>
  {/await}
</div>
<img src="" alt="">
