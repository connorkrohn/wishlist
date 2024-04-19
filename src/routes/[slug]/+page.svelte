<script lang="ts">
	import type { PageData } from './$types';
  import { page } from '$app/stores';

	export let data: PageData;
</script>

<div class="mx-auto flex w-full max-w-xl flex-col gap-4">
  {#await data.wishlist then wishlist}
    <img src="{wishlist.filter((obj)=>obj.id == $page.params.slug)[0].image}" alt="">
    <p>{wishlist.filter((obj)=>obj.id == $page.params.slug)[0].title}</p>
  {/await}
</div>