<script lang="ts">
	import type { PageServerData } from './$types';
	import RecipesList from "../../components/RecipesList.svelte";

	export let data: PageServerData;
</script>

<div>
	<RecipesList recipes={data.recipes}/>
</div>