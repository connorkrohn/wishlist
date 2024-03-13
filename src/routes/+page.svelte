<script lang="ts">
    import type { PageData } from './$types';
    import * as Card from "$lib/components/ui/card";
    import { Badge } from "$lib/components/ui/badge";
    let each = [0,0,0,0,0,0,0,0,0,0]

    export let data: PageData;
</script>

<div class="w-full max-w-xl mx-auto flex flex-col gap-4">
    {#each data.wishlist as item, i}
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
            <!-- <Card.Footer>
              <div class="flex gap-2">
                <Badge variant="default">Amazon</Badge>
                <Badge variant="default">The Iconic</Badge>
                <Badge variant="default">Rebel</Badge>
              </div>
            </Card.Footer> -->
          </Card.Root>
    </a>
    {/each}
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
