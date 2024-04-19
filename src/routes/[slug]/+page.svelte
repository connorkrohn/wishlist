<script lang="ts">
	import type { PageData } from './$types';
  import { page } from '$app/stores';

	export let data: PageData;
</script>

<div class="mx-auto flex w-full max-w-xl flex-col gap-4">
    <p data-flip-id="test0" class="text-left leading-none tracking-tight">{data.wishlist.filter((obj)=>obj.id == $page.params.slug)[0].title}</p>
</div>