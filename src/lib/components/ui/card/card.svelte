<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";
	import { cn } from "$lib/utils";

	type $$Props = HTMLAttributes<HTMLDivElement>;

	let className: $$Props["class"] = undefined;
	export { className as class };
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	class={cn("rounded-xl border bg-card text-card-foreground grid grid-cols-[min(170px,_40%)_1fr] grid-rows-[minmax(0,_auto)_1fr_minmax(0,_auto)] p-3 gap-x-3 text-left", className)}
	{...$$restProps}
	on:click
	on:focusin
	on:focusout
	on:mouseenter
	on:mouseleave
>
	<slot />
</div>

<style>
    .the-card {
        --id: the-card;
        view-transition-name: var(--id);
    }
</style>
