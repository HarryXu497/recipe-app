<script lang="ts">
  import StarRating from "../../../components/StarRating.svelte";
  	import type { PageServerData } from "./$types";

	export let data: PageServerData;
</script>


<section>
	<div>
		<h1>{data.recipe.name}</h1>
		<h2>{data.recipe.description}</h2>
		<div class="recipe-info">
			<StarRating rating={data.recipe.rating}/>
		</div>
	</div>
</section>

<style>

</style>