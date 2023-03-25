<script lang="ts">
  	import NewRecipeForm from '../../../lib/components/NewRecipeForm.svelte';
  	import type { ActionData } from "./$types";

	export let form: ActionData;
</script>

<svelte:head>
	<title>Add A Recipe</title>
</svelte:head>

<NewRecipeForm form={form}/>
