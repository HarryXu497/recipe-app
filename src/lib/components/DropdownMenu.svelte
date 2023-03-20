<script>
	let isOpen = false;

</script>

<svelte:window on:click={() => isOpen = false}/>

<div class="dropdown">
	<button on:click|stopPropagation={() => isOpen = true}>
		<slot name="button"/>
	</button>
	{#if isOpen}
		<div class="dropdown-menu">
			<slot/>
		</div>
	{/if}
</div>

<style>
	.dropdown {
		position: relative;
	}

	button {
		all: unset;
	}

	.dropdown-menu {
		background-color: white;
		position: absolute;
		top: 100%;
		width: 100%;
		
	}
</style>