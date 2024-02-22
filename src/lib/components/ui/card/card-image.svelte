<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";
	import { cn } from "$lib/utils";

	type $$Props = HTMLAttributes<HTMLDivElement>;

	let className: $$Props["class"] = undefined;
	export { className as class };
</script>

<div class={cn("inline-block rounded-lg overflow-hidden row-span-3 aspect-square", className)} {...$$restProps}>
	<slot />
</div>
