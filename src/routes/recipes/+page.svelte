<script lang="ts">
	import type { PageServerData } from './$types';
	import RecipesList from "$lib/components/RecipesList.svelte";

	export let data: PageServerData;
</script>

<div>
	<RecipesList recipes={data.recipes}/>
</div>