<script lang="ts">
import { page } from '$app/stores';
import { count } from '$lib/stores';
import type { PageData } from './$types';
import { Skeleton } from '$lib/components/ui/skeleton';

export let data: PageData;
</script>

<div class="mx-auto flex w-full max-w-xl flex-col gap-4">
  {#if data.isDataRequest && $count !== undefined}
    <img 
      alt=""
      src="{$count.filter((obj)=>obj.id == $page.params.slug)[0].image}"
      data-flip-id="image{$count.findIndex((obj)=>obj.id == $page.params.slug)}"
      class="bg-white rounded-xl object-contain">
  {:else}
    {#await data.streamed.wishlist}
      <Skeleton class="grid aspect-square" />
    {:then wishlist}
      <img 
        alt=""
        src="{wishlist.filter((obj)=>obj.id == $page.params.slug)[0].image}"
        data-flip-id="image{wishlist.findIndex((obj)=>obj.id == $page.params.slug)}"
        class="bg-white rounded-xl object-contain">
    {/await}
  {/if}
</div>