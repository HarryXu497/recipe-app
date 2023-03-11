<script lang="ts">
	import StarRating from "../../../components/StarRating.svelte";
	import ImageCarousel from "../../../components/ImageCarousel.svelte";
	import type { PageServerData } from "./$types";
	import type Recipe from "../../../recipe.model";
	import RecipesList from "../../../components/RecipesList.svelte";

  	export let data: PageServerData;

	console.log(data)
</script>


<RecipesList recipes={data.recipes} selectedRecipe={data.recipe}/>
