<script lang="ts">
	import StarRating from "./StarRating.svelte";
  	import ImageCarousel from "./ImageCarousel.svelte";
  	import type Recipe from "../../recipe.model";

	export let recipe: Recipe;
</script>


<main class="content">
	<a href="/recipes" class="close-button">&#10005;</a>
	<div class="recipe-header">
		<h1>{recipe.name}</h1>
		<h2>{recipe.description}</h2>
		<div class="recipe-info">
			<span>{recipe.time} min</span>
			<StarRating rating={recipe.rating} starWidth={1.75}/>
		</div>
	</div>
	<div class="image-container">
		<ImageCarousel images={recipe.images}/>
	</div>
</main>

<style lang="scss">
  @use "../../styles/exports.scss" as exports; 

  $top-padding: 3rem;

  .content {
	position: relative;

	padding: 1.5rem;
	margin: 0 auto;
	height: calc(100vh - $top-padding);
  }

  .close-button {
	position: absolute;

	font-weight: bold;
	font-size: 1.5rem;
	color: exports.$color-dark-100;
	text-decoration: none;;
  }

  .recipe-header {
	  padding-top: $top-padding;
	  margin-bottom: 1rem;

	  display: flex;
	  flex-direction: column;
	  gap: 0.25rem;

	  h1 {
		  font-size: 3.5rem;
		  /* font-weight: bold; */
		  line-height: 1.4;
		  font-family: exports.$font-serif;

		  color: exports.$color-dark-100
	  }

	  h2 {
		  font-size: 1.3rem;
		  line-height: 1;
		  color: exports.$color-dark-400
	  }
  }

  .recipe-info {
	  display: flex;
	  flex-direction: row;
	  justify-content: space-between;
	  margin-top: 0.75rem;

	  font-family: exports.$font-sans-serif;

	  span {
		  font-size: 1.5rem;
	  }
  }

  .image-container {
	  height: 28rem;
  }
</style>