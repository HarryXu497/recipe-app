<script lang="ts">
  	import type Recipe from "../../recipe.model";
  	import StarRating from "./StarRating.svelte";

	export let recipe: Recipe;
</script>

<a href={`/recipes/${encodeURIComponent(recipe.id)}`} class="recipe-card">
	<div class="image-container">
		<img src={recipe.images[0]} alt={recipe.name}>
	</div>
	<div class="recipe-information">
		<h1>{ recipe.name }</h1>
		<div class="recipe-data">
			<span>{recipe.time} min</span>
			<StarRating rating={recipe.rating}/>
		</div>
	</div>
</a>

<style lang="scss">
	@use "../../styles/exports.scss" as exports;

	.recipe-card {
		position: relative;
		isolation: isolate;

		display: inline-block;

		appearance: none;
		border: none;

		color: black;
		text-decoration: none;

		background-color: exports.$color-primary-100;
		
		position: relative;

		border-radius: 1px;

		overflow: hidden;
		
		width: max(16rem, 96%);

		/* min-height: 26rem; */
		/* aspect-ratio: 23 / 24; */
		
		h1 {
			font-size: 2.5rem;
			font-family: exports.$font-serif;

			padding: 0.75rem 0.5rem;
		}

		&:hover, &:focus {
			transform: translate(-2px,-2px);
    		box-shadow: 5px 5px 0 exports.$color-secondary-800;
		}
	}


	.recipe-information {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}


	/* .recipe-data {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
	} */

	.recipe-data {
		display: flex;
		flex-direction: row;
		justify-content: space-between;


		font-family: exports.$font-sans-serif;
		
		padding: 0.75rem 0.5rem;
	}

	.image-container {
		width: 100%;

		overflow: hidden;

		img {
			width: 100%;
			aspect-ratio: 4 / 3;
			object-fit: cover;
		}
	}

	@include exports.media-tablet {
		/* .recipe-card {
			width: auto;
		} */
	}
</style>