<script lang="ts">
  	import StarRating from "../../../components/StarRating.svelte";
	import ImageCarousel from "../../../components/ImageCarousel.svelte";
  	import type { PageServerData } from "./$types";

	export let data: PageServerData;
</script>


<main class="content">
	<div class="recipe-header">
		<h1>{data.recipe.name}</h1>
		<h2>{data.recipe.description}</h2>
		<div class="recipe-info">
			<span>{data.recipe.time} min</span>
			<StarRating rating={data.recipe.rating} starWidth={1.75}/>
		</div>
	</div>
	<div class="image-container">
		<ImageCarousel images={data.recipe.images}/>
	</div>
</main>

<style lang="scss">
	@use "../../../styles/exports.scss" as exports; 

	.content {
		width: clamp(20rem, 40%, 60rem);
		margin: 0 auto;
	}

	.recipe-header {
		padding-top: 3rem;
		margin-bottom: 1rem;

		display: flex;
		flex-direction: column;
		gap: 0.25rem;

		h1 {
			font-size: 3.5rem;
			/* font-weight: bold; */
			line-height: 1.4;
			font-family: exports.$font-serif;

			color: exports.$color-dark-400
		}

		h2 {
			font-size: 1.5rem;
			line-height: 1.1;
			color: exports.$color-dark-800
		}
	}

	.recipe-info {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		margin-top:0.75rem;

		font-family: exports.$font-sans-serif;

		span {
			font-size: 1.5rem;
		}
	}

	.image-container {
		height: 28rem;
	}
</style>