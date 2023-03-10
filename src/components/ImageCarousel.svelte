<script lang="ts">
	export let images: string[];

	let currentIndex = 0;
	// $: previousImage = images[currentIndex === 0 ? images.length - 1 : currentIndex - 1];
	$: currentImage = images[currentIndex];
	// $: nextImage = images[currentIndex === images.length - 1 ? 0 : currentIndex + 1];

	function nextImage() {
		currentIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1
	}

	function prevImage() {
		currentIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1
	}

	console.log(images);

</script>

<div class="carousel">
	<span class="previous-image" on:click={prevImage}>&lt;</span>
	<!-- <div class="image-container previous">
		<img src={previousImage} alt="">
	</div> -->
	<div class="image-container current">
		<img src={currentImage} alt="">
	</div>
	<!-- <div class="image-container next">
		<img src={nextImage} alt="">
	</div> -->
	<span class="next-image" on:click={nextImage}>&gt;</span>
</div>


<style lang="scss">
	.image-container {
		position: relative;

		img {
			position: absolute;
			inset: 0;
		}
	}
</style>