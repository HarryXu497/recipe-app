<script lang="ts">
  	import RecipeGrid from "$lib/components/RecipeGrid.svelte";
  	import RecipeInfo from "$lib/components/RecipeInfo.svelte";
	import type { PageServerData } from "./$types";

  	export let data: PageServerData;
</script>

<svelte:head>
	<title>{ data.recipe.name }</title>
</svelte:head>


<main>
	<div class="recipe-grid">
		<RecipeGrid recipes={data.recipes}/>
	</div>
	<div class="recipe-info">
		<RecipeInfo recipe={data.recipe}/>
	</div>
</main>

<style lang="scss">
	@use "../../../styles/exports.scss" as exports;

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

			flex: 40%;
		}

		.recipe-info {
			flex: 60%;
		}
	}


	@include exports.media-tablet {
		.recipe-grid {
			--padding: 2rem;

			display: grid;
			align-content: flex-start;
			align-items: flex-start;
			grid-template-columns: repeat(1, 1fr);

			flex: 20%;
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
	}

	@include exports.media-desktop {
		.recipe-grid {
			display: grid;
			align-content: flex-start;
			align-items: flex-start;
			grid-template-columns: repeat(3, 1fr);
			grid-auto-rows: max-content;
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
	}
</style>