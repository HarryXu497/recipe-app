<script lang="ts">
	import type { PageServerData } from './$types';
  	import RecipeGrid from '$lib/components/RecipeGrid.svelte';

	export let data: PageServerData;
</script>

<main class="recipe-grid">
	<RecipeGrid recipes={data.recipes}/>
</main>

<style lang="scss">
	@use "../../styles/exports.scss" as exports;

	.recipe-grid {
		--padding: 2rem;

		display: flex;
		flex-direction: row;
		align-items: flex-start;
		height: 100%;

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

	.recipe-grid {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	@include exports.media-mobile {
		.recipe-grid {
			--padding: 2rem;

			display: grid;
			align-content: flex-start;
			align-items: flex-start;
			grid-template-columns: repeat(1, 1fr);
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
			grid-template-columns: repeat(2, 1fr);

			flex: 40%;
		}
	}

	@include exports.media-laptop {
		.recipe-grid {
			--padding: 2rem;

			display: grid;
			align-content: flex-start;
			align-items: flex-start;
			grid-template-columns: repeat(3, 1fr);
			flex: 60%;
			gap: 1rem;
		}
	}

	@include exports.media-laptop-2 {
		.recipe-grid {
			--padding: 2rem;

			display: grid;
			align-content: flex-start;
			align-items: flex-start;
			grid-template-columns: repeat(4, 1fr);

			flex: 60%;
		}
	}

	@include exports.media-desktop {
		.recipe-grid {
			display: grid;
			align-content: flex-start;
			align-items: flex-start;
			grid-template-columns: repeat(5, 1fr);
			grid-auto-rows: max-content;
		}
	}

	@include exports.media-larger {
		.recipe-grid {
			display: grid;
			align-content: flex-start;
			align-items: flex-start;
			grid-template-columns: repeat(5, 1fr);
			grid-auto-rows: max-content;
			max-width: exports.$breakpoint-desktop;
		}
	}
</style>