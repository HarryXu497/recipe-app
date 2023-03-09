<script lang="ts">
  	import type Recipe from "../recipe.model";
	import RecipeCard from "./RecipeCard.svelte";

	export let recipes: Recipe[];
</script>

<main>
	{#each recipes as recipe}
		<RecipeCard recipe={recipe}/>
	{/each}
</main>

<style lang="scss">
	@use "../styles/exports.scss" as exports;

	main {
		display: flex;
		flex-direction: column;
		align-items: center;

		padding: 2rem
	}

	@include exports.media-tablet {
		main {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@include exports.media-laptop {
		main {
			display: grid;
			grid-template-columns: repeat(3, 1fr);
		}
	}

	@include exports.media-laptop-2 {
		main {
			display: grid;
			grid-template-columns: repeat(3, 1fr);
		}
	}

	@include exports.media-desktop {
		main {
			display: grid;
			grid-template-columns: repeat(4, 1fr);
		}
	}

	@include exports.media-larger {
		main {
			display: grid;
			grid-template-columns: repeat(4, 1fr);
			max-width: exports.$breakpoint-desktop;
		}
	}
	
</style>