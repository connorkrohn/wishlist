<script>
    import * as Card from "$lib/components/ui/card";
    let each = [0,0,0,0,0,0,0,0,0,0]
</script>

<div class="w-full max-w-2xl mx-auto flex flex-col gap-6">
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
          <p>Card Footer</p>
        </Card.Footer>
      </Card.Root>
      {/each}
</div>
