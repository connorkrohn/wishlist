<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";
	import { cn } from "$lib/utils";
	import type { HeadingLevel } from ".";

	type $$Props = HTMLAttributes<HTMLHeadingElement> & {
		tag?: HeadingLevel;
	};

	let className: $$Props["class"] = undefined;
	export let tag: $$Props["tag"] = "h2";
	export { className as class };
</script>

<svelte:element
	this={tag}
	class={cn("text-3xl font-black leading-none tracking-tight", className)}
	{...$$restProps}
>
	<slot />
</svelte:element>
