<script lang="ts">
	import '../app.pcss';
	import { ModeWatcher, toggleMode } from "mode-watcher";
	import { Button } from "$lib/components/ui/button";
	import { base } from '$app/paths';
	import type { LayoutData } from './$types';
	import { draw, fade, fly, slide } from 'svelte/transition';
	import { onMount } from 'svelte';

	export let data: LayoutData;
	let transition = false;
	$: innerHeight = 0

	onMount(()=>{
		transition = true;
	})
</script>

<svelte:window bind:innerHeight />
<ModeWatcher />

<div class="fixed top-0 inset-x-0 h-32 text-background bg-gradient-to-b from-current to-transparent pointer-events-none"></div>
<!-- <div class="fixed bottom-0 inset-x-0 h-20 text-background bg-gradient-to-t from-current to-transparent pointer-events-none"></div> -->

{#if data.splashScreen && transition}
<header class="fixed flex gap-2 justify-between items-center top-0 h-12 m-4 mt-6 px-2 rounded-xl border bg-card text-card-foreground shadow-xl"
transition:fly={{ delay: 2500, y: (innerHeight/2)-48, duration: 500, opacity: 1 }}>
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 -5 138 133" class="h-8 ml-1">
		<style type="text/css">
			header path {
				fill: transparent;
				stroke: currentColor;
				stroke-width: 5px;
    			stroke-linejoin: round;
				animation-name: fillsvg;
				animation-duration: 0.3s;
				animation-fill-mode: forwards;
			}
			@keyframes fillsvg {
		from {
    		fill: transparent;
			stroke-width: 5px;
			stroke: currentColor;
  		}
  		to {
    		fill: currentColor;
			stroke-width: 0px;
			stroke: transparent;
  		}
	}
		</style>
		<path
			transition:draw={{ duration: 2000}}
		 	d="M25.2,111.4c-9,0-15.6-2.8-19.7-8.3c-4.2-5.5-5.4-13.7-3.7-24.4l5.1-32.1c1.6-10.3,4.9-17.9,9.7-22.7
				c4.9-4.8,11.7-7.2,20.4-7.2c6.2,0,11.2,1.4,15.1,4.1c3.9,2.7,6.5,6.6,7.9,11.5c1.4,4.9,1.3,10.7-0.4,17.2c-0.3,1.1-0.9,1.7-1.8,1.7
				H44.1c-1.3,0-1.8-0.6-1.6-1.7c1.1-5.4,1.2-9.6,0.1-12.6c-1-3-3.5-4.5-7.2-4.5c-3.4,0-6,1.2-7.7,3.5c-1.8,2.3-3.1,6.1-3.9,11.3
				l-5.1,32.1c-0.9,5.6-0.6,9.7,0.6,12.4c1.3,2.7,3.8,4,7.5,4c3.8,0,6.5-1.6,8.2-4.7c1.7-3.1,2.7-7.2,3.1-12.4
				c0.1-1.2,0.7-1.8,1.7-1.8h13.8c0.5,0,0.9,0.1,1.2,0.4c0.3,0.3,0.4,0.8,0.4,1.4c-0.6,10.1-3.3,18.1-8.2,24
				C42,108.5,34.7,111.4,25.2,111.4z"/>
		<path
			transition:draw={{ duration: 2000}}
			d="M61.8,110.6c-1.2,0-1.8-0.6-1.6-1.7l14.2-89.6c0.3-1.1,0.9-1.7,1.8-1.7h13.6c1.2,0,1.8,0.6,1.6,1.7l-3.1,20.2
				c-0.6,3.3-1.2,6.7-1.8,10.2c-0.6,3.5-1.3,6.9-2.2,10.4h0.3c1.8-3.5,3.6-7,5.5-10.4c1.9-3.4,3.8-6.8,5.7-10.1l12.4-20.3
				c0.7-1.1,1.5-1.7,2.4-1.7h15.5c0.5,0,0.8,0.2,1.1,0.5c0.2,0.3,0.2,0.7-0.2,1.2l-24,39l11.8,50.6c0.2,1.1-0.3,1.7-1.6,1.7H98.5
				c-0.9,0-1.5-0.6-1.7-1.7l-7.7-37.1l-7.7,11.1l-4.3,26c-0.1,1.1-0.7,1.7-1.7,1.7H61.8z"/>
		</svg>
	<h1 class="mr-1">Wishlist</h1>
</header>
{:else}
<header class="fixed flex gap-2 justify-between items-center top-0 h-12 m-4 mt-6 px-2 rounded-xl border bg-card text-card-foreground shadow-xl">
	<img src="{base}/favicon.svg" alt="" class="h-7 ml-1">
	<h1 class="mr-1">Wishlist</h1>
</header>
{/if}



{#if data.splashScreen && transition}
<div 
transition:fade={{delay: 3000}}
class="absolute grid place-items-center top-6 right-6 h-12 px-2 text-card-foreground">
	<Button on:click={toggleMode} variant="ghost" size="icon" class="h-8 w-8">
		<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0">
			<path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
		  </svg>
		  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100">
			<path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
		  </svg>
		<span class="sr-only">Toggle theme</span>
	  </Button>
</div>
<div 
	transition:fade={{delay: 3000}}
	class="w-full p-4 py-24 grid text-center">
	<slot />
</div>
{:else}
<div class="absolute grid place-items-center top-6 right-6 h-12 px-2 text-card-foreground">
	<Button on:click={toggleMode} variant="ghost" size="icon" class="h-8 w-8">
		<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0">
			<path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
		  </svg>
		  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100">
			<path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
		  </svg>
		<span class="sr-only">Toggle theme</span>
	  </Button>
</div>
<div class="w-full p-4 py-24 grid text-center">
	<slot />
</div>
{/if}