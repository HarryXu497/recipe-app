<script lang="ts">
	import RecipeGrid from "../components/RecipeGrid.svelte";
	import type { PageServerData } from "./$types";

	export let data: PageServerData;

</script>

<main>
	<div class="hero">
		<div class="hero-text">
			<h1>
				All Your Recipes.
				All In One Place
			</h1>
			<h2>
				RecipesBook has all your recipes right where you need them
			</h2>
		</div>
	</div>
	<div class="recipe-grid">
		<div class="stripe stripe1"></div>
		<div class="stripe stripe2"></div>
		<div class="recipe-columns">
			<div class="recipe-column recipe-column-1">
				<RecipeGrid recipes={data.recipes.slice(0, data.recipes.length / 2)}/>
			</div>
			<div class="recipe-column recipe-column-2">
				<RecipeGrid recipes={data.recipes.slice(data.recipes.length / 2)}/>
			</div>
		</div>
	</div>
</main>

<style lang="scss">
	@use "../styles/exports.scss" as exports;

	main {
		display: flex;
		flex-direction: row;	
	}

	.recipe-columns {
		display: flex;
		flex-direction: row;
		gap: 0.5rem;

		width: 40rem;
		margin: 0 auto;

		> div {
			flex-basis: 50%;
		}
	}

	.hero {
		flex-basis: 60%;
		flex-grow: 1;
		background-color: exports.$color-secondary-200;

		display: grid;
		grid-template-columns: repeat(12, 1fr);
		grid-template-rows: repeat(12, 1fr);

		height: 100vh;
	}

	.hero-text {
		grid-column: 2 / 11;
		grid-row: 2 / 6;

		display: flex;
		flex-direction: column;
		gap: 1rem;

		h1 {

			font-size: 6rem;

			font-family: exports.$font-serif;
		}

		h2 {
			font-size: 2rem;

			font-family: exports.$font-serif;
			color: exports.$color-dark-300;
		}
	}

	.recipe-grid {
		--padding-vertical: 3rem;

		position: relative;
		padding: var(--padding-vertical);
		padding-left: 5%;
		padding-right: 5%;

		align-items: center;
		
		flex-basis: 40%;
		flex-grow: 3;
		gap: 2rem;

		height: calc(100vh - calc(2 * var(--padding-vertical)));

		overflow: hidden;

		z-index: 3;
	}

	.recipe-column {
		display: flex;
		flex-direction: column;
		gap: 1rem;

		&.recipe-column-1 {
			animation: slide-up 10s infinite;
		}

		&.recipe-column-2 {
			animation: slide-down 10s infinite;
		}
	}

	.stripe {
		position: absolute;

		height: 16rem;
		width: 160%;

		&.stripe1 {
			background-color: exports.$color-accent-600;

			transform: rotate(55deg) translateY(20rem);
		}

		&.stripe2 {
			background-color: exports.$color-secondary-200;

			transform: rotate(55deg) translateY(22rem);

		}
	}

	@keyframes slide-up {
		0% {
			transform: translateY(-30%);
		}
		50% {
			transform: translateY(-5%);
		}
		100% {
			transform: translateY(-30%);
		}
	}

	@keyframes slide-down {
		0% {
			transform: translateY(-5%);
		}
		50% {
			transform: translateY(-30%);
		}
		100% {
			transform: translateY(-5%);
		}
	}
</style>