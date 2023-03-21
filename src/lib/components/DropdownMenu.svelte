<script>
	let isOpen = false;

</script>

<svelte:window on:click={() => isOpen = false}/>

<div class="dropdown">
	<button on:click|stopPropagation={() => isOpen = true}>
		<slot name="button"/>
	</button>
	{#if isOpen}
		<!-- svelte-ignore a11y-click-events-have-key-events -->.
		<div class="dropdown-menu" on:click|stopPropagation>
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
</style>