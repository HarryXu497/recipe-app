<script lang="ts">
	import HeroSection from "$lib/components/HomePage/HeroSection.svelte";
	import type { PageServerData } from "./$types";

	export let data: PageServerData;

</script>

<svelte:head>
	<title>RecipeBook</title>
</svelte:head>

<main>
	<HeroSection recipes={data.recipes}/>
</main>

<style lang="scss">
	@use "../styles/exports.scss" as exports;
</style>