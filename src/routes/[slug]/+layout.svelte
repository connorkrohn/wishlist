<script lang="ts">
	import { afterNavigate, goto } from "$app/navigation";
	import { base } from "$app/paths";
  import { Button } from "$lib/components/ui/button";

  let back = false;

  afterNavigate(({from}) => {
    if (from) back = true;
  })
</script>

<div class="absolute z-50 grid place-items-center top-6 left-6 h-12 px-2 text-card-foreground">
  {#if back}
  <Button on:click={() => history.back()} variant="ghost" size="icon" class="h-8 w-8">
		<span class="sr-only">Home</span>
		<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
			<path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
		</svg>
	</Button>
  {:else}
  <Button variant="ghost" size="icon" class="h-8 w-8">
    <a href="/">
		<span class="sr-only">Home</span>
		<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
      <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
    </svg>
    </a>    
	</Button>
  {/if}
	
</div>
<slot />