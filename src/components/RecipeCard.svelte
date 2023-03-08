<script lang="ts">
  	import type Recipe from "../recipe.model";

	export let recipe: Recipe;
</script>

<div class="recipe-card">
	<h1>{ recipe.name }</h1>
	<img src={recipe.images[0]} alt="">
	<h2>{ recipe.rating }</h2>
	<p>{ recipe.description }</p>
	<ul>
		{#each recipe.expand.ingredients as ingredient}
			<li>{ ingredient.amount } {ingredient.units}s of {ingredient.name}</li>
		{/each}
	</ul>
</div>

<style lang="scss">
	@use "../styles/exports.scss" as exports;

	.recipe-card {
		border: 1px solid black;
		border-radius: 5px;
		
		h1 {
			font-size: 2rem;
			font-family: 'Gelasio', serif;
		}

		p, ul {
			font-family: 'Golos Text', serif;
		}
	}
</style>