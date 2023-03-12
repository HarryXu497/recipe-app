<script lang="ts">
  	import type Recipe from "../recipe.model";
  	import RecipeGrid from "./RecipeGrid.svelte";
  	import RecipeInfo from "./RecipeInfo.svelte";

	export let recipes: Recipe[];
	export let selectedRecipe: Recipe | null = null;
</script>

<main>
	<div class="recipe-grid" class:recipe-grid-open={!selectedRecipe}>
		<RecipeGrid recipes={recipes}/>
	</div>
	{#if selectedRecipe}
		<div class="recipe-info">
			<RecipeInfo recipe={selectedRecipe}/>
		</div>
	{/if}
</main>

<style lang="scss">
	@use "../styles/exports.scss" as exports;

	main {
		display: flex;
		flex-direction: row;
		align-items: flex-start;
		height: 100%;
	}

	.recipe-grid {
		--padding: 2rem;

		display: grid;
		align-content: flex-start;
		align-items: flex-start;
		grid-auto-rows: max-content;

		padding: var(--padding);
		flex: 70%;
		overflow-y: auto;
		height: calc(100% - calc(2 * var(--padding)));

		gap: 1rem;
	}

	.recipe-info {
		flex: 30%;
	}

	.recipe-grid {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.recipe-info {
		background-color: exports.$color-secondary-800;
		overflow-y: hidden;
	}

	@include exports.media-mobile {
		.recipe-grid {
			--padding: 2rem;

			display: grid;
			align-content: flex-start;
			align-items: flex-start;
			grid-template-columns: repeat(1, 1fr);
		}

		.recipe-grid-open {
			grid-template-columns: repeat(2, 1fr);
		}
	}


	@include exports.media-tablet {
		.recipe-grid {
			--padding: 2rem;

			display: grid;
			align-content: flex-start;
			align-items: flex-start;
			grid-template-columns: repeat(1, 1fr);
		}

		.recipe-grid-open {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@include exports.media-tablet-2 {
		.recipe-grid {
			--padding: 2rem;

			display: grid;
			align-content: flex-start;
			align-items: flex-start;
			grid-template-columns: repeat(1, 1fr);

			flex: 40%;
		}

		.recipe-info {
			flex: 60%;
		}

		.recipe-grid-open {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@include exports.media-laptop {
		.recipe-grid {
			--padding: 2rem;

			display: grid;
			align-content: flex-start;
			align-items: flex-start;
			grid-template-columns: repeat(2, 1fr);
			flex: 60%;
			gap: 1rem;
		}

		.recipe-info {
			flex: 40%;
		}

		.recipe-grid-open {
			grid-template-columns: repeat(3, 1fr);
		}
	}

	@include exports.media-laptop-2 {
		.recipe-grid {
			--padding: 2rem;

			display: grid;
			align-content: flex-start;
			align-items: flex-start;
			grid-template-columns: repeat(2, 1fr);

			flex: 60%;
		}

		.recipe-info {
			flex: 40%;
		}

		.recipe-grid-open {
			grid-template-columns: repeat(3, 1fr);
		}
	}

	@include exports.media-desktop {
		.recipe-grid {
			display: grid;
			align-content: flex-start;
			align-items: flex-start;
			grid-template-columns: repeat(3, 1fr);
			grid-auto-rows: max-content;
		}

		.recipe-grid-open {
			grid-template-columns: repeat(4, 1fr);
		}
	}

	@include exports.media-larger {
		.recipe-grid {
			display: grid;
			align-content: flex-start;
			align-items: flex-start;
			grid-template-columns: repeat(4, 1fr);
			grid-auto-rows: max-content;
			max-width: exports.$breakpoint-desktop;
		}

		.recipe-grid-open {
			grid-template-columns: repeat(5, 1fr);
		}
	}
	
</style>