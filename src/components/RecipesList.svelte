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