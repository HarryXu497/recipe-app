<script lang="ts">
	import RecipesList from "$lib/components/RecipesList.svelte";
	import type { PageServerData } from "./$types";

  	export let data: PageServerData;
</script>


<RecipesList recipes={data.recipes} selectedRecipe={data.recipe}/>
