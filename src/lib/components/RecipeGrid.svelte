<script lang="ts">
	import type Recipe from "$lib/models/recipe.model";
  	import RecipeCard from "./RecipeCard.svelte";

  	export let recipes: Recipe[];

</script>

{#each recipes as recipe}
	<RecipeCard recipe={recipe}/>
{/each}