<script lang="ts">
	import { page } from "$app/stores";
	import type { PageData } from "./$types";

  export let data: PageData;
</script>

<div class="mx-auto flex w-full max-w-xl flex-col gap-4">
{#await data.wishlist}
 <p>loading...</p>
{:then items} 
{#each items as item}
  {#if item.id === $page.params.item}
    <img src="{item.image}" alt="">
    <p>{item.title}</p>
    <p>{item.price}</p>
    {#if item.note}
      <p>{item.note}</p>
    {/if}
  {/if}
{/each}
{/await}
</div>