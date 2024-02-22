<script lang="ts">
    import type { PageData } from './$types';
    import * as Card from "$lib/components/ui/card";
    import { Badge } from "$lib/components/ui/badge";
    let each = [0,0,0,0,0,0,0,0,0,0]

    export let data: PageData;
</script>

<div class="w-full max-w-2xl mx-auto flex flex-col gap-4">
    {#each data.wishlist as item, i}
    <Card.Root>
        <Card.Image>
            {#if item.image}
                <img src={item.image} alt="" class="bg-white">
            {:else}
                <div class="grid place-items-center aspect-square bg-muted">
                    <span>No Image</span>
                </div>
            {/if}
        </Card.Image>
        <Card.Header>
          <Card.Title>{item.title}</Card.Title>
          <Card.Description>${item.price ? item.price : "--"}</Card.Description>
        </Card.Header>
        <Card.Content>
          <p>Card Content</p>
        </Card.Content>
        <Card.Footer>
          <div class="flex gap-2">
            <Badge variant="default">Amazon</Badge>
            <Badge variant="default">The Iconic</Badge>
            <Badge variant="default">Rebel</Badge>
          </div>
        </Card.Footer>
      </Card.Root>
      {/each}
</div>
