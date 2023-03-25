<script lang="ts">
  	import clickOutside from "$lib/directives/clickOutside";

	export let alignment: "left" | "right" | "" = ""
	let isOpen = false;
</script>

<div class="dropdown" use:clickOutside on:outclick={() => isOpen = false}>
	<button on:click|stopPropagation={() => isOpen = true}>
		<slot name="button"/>
	</button>
	{#if isOpen}
		<div class="dropdown-menu" class:align-left={alignment === "left"} class:align-right={alignment === "right"}>
			<slot/>
		</div>
	{/if}
</div>

<style lang="scss">
	@use "../../styles/exports.scss" as exports;

	.dropdown {
		position: relative;
		z-index: 10;
	}

	button {
		all: unset;
	}

	.dropdown-menu {
		background-color: white;
		position: absolute;
		top: calc(100% + 0.25rem);
		min-width: calc(100% + 2rem);
	}

	.align-left {
		left: 0;
	}

	.align-right {
		right: 0;
	}
</style>