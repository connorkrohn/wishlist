<script lang="ts">
    import type { PageData } from './$types';
    import * as Card from "$lib/components/ui/card";
    import { Badge } from "$lib/components/ui/badge";
    let each = [0,0,0,0,0,0,0,0,0,0]

    export let data: PageData;
    console.log(data);
</script>

<div class="w-full max-w-2xl mx-auto flex flex-col gap-4">
    {#each each as item, i}
    <Card.Root>
        <Card.Image>
            <img src="https://source.unsplash.com/random/500x500/?product&sig={i + 1}" alt="">
        </Card.Image>
        <Card.Header>
          <Card.Title>Card Title</Card.Title>
          <Card.Description>Card Description</Card.Description>
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
