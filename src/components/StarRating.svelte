<script lang="ts">
	export let rating: number;
</script>

<div>
	{#each { length: Math.floor(rating) } as _, i}
		<img src="../star/star.png" alt={`${rating}`} class="star">
	{/each}
	{#each { length: 5 - Math.floor(rating) } as _, i}
		<img src="../star/empty-star.png" alt={`${rating}`} class="star">
	{/each}
</div>

<style>
	.star {
		width: 1rem;
		aspect-ratio: 1 / 1;
	}
</style>