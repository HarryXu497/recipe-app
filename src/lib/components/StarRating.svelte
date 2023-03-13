<script lang="ts">
	export let rating: number;
	export let starWidth: number = 1;
</script>

<div>
	{#each { length: Math.floor(rating) } as _, i}
		<img src="../star/star.png" alt={`${rating}`} class="star" style:width={`${starWidth}rem`}>
	{/each}
	{#each { length: 5 - Math.floor(rating) } as _, i}
		<img src="../star/empty-star.png" alt={`${rating}`} class="star" style:width={`${starWidth}rem`}>
	{/each}
</div>

<style>
	.star {
		aspect-ratio: 1 / 1;
	}
</style>