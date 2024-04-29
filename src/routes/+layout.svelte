<script lang="ts">
	import type { LayoutData } from './$types';
	import '../app.pcss';
	import { ModeWatcher, toggleMode } from "mode-watcher";
	import { Button } from "$lib/components/ui/button";
	import Logo from "$lib/assets/Logo.svelte"
	import { count } from '$lib/stores';
	import { onMount } from 'svelte';
	import { gsap } from "gsap/dist/gsap";
  import { Flip } from "gsap/dist/Flip";
	import { afterNavigate, beforeNavigate } from '$app/navigation';
	export let data: LayoutData;

	gsap.registerPlugin(Flip);
	let state: Flip.FlipState;

	onMount(async()=>{
		count.set(await data.streamed.wishlist);
		state = Flip.getState("[data-flip-id]", {
			props: "borderRadius",
			simple: true,
		});
	});
	
	beforeNavigate((navigation) => {
		gsap.set("[data-flip-id]", { y: -window.scrollY });
		state = Flip.getState("[data-flip-id]", {
			props: "borderRadius",
			simple: true,
		});
	});

	afterNavigate((navigation) => {
		if(data.isDataRequest && $count !== undefined) {
			for (let el of state.elementStates) {
				el.matrix.f += window.scrollY;
			}
			Flip.from(state, {
				targets: document.querySelectorAll("[data-flip-id]"),
				simple: true,
				duration: 0.2,
				ease: "power1.inOut",
				absolute: true,
				zIndex: 99,
			});
		}		
	});
	
</script>

<ModeWatcher />

<div class="fixed top-0 inset-x-0 h-32 text-background bg-gradient-to-b from-current to-transparent pointer-events-none"></div>

<header class="fixed flex gap-2 justify-between items-center top-0 h-12 m-4 mt-6 px-3 rounded-xl border bg-card text-card-foreground shadow-xl">
	<Logo class="h-6" />
	<h1 class="">Wishlist</h1>
</header>

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
