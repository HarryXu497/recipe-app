<script lang="ts">
	export let images: string[];

	let currentIndex = 0;

	// $: previousImagePath = images[currentIndex === 0 ? images.length - 1 : currentIndex - 1];
	$: currentImagePath = images[currentIndex];
	// $: nextImagePath = images[currentIndex === images.length - 1 ? 0 : currentIndex + 1];

	function nextImage() {
		currentIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
	}

	function prevImage() {
		currentIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
	}

</script>

<div class="carousel">
	<button class="previous-image arrow-button" on:click={prevImage}><img src="../left-arrow.png" alt=""></button>
	<!-- <div class="image-container previous">
		<img src={previousImagePath} alt="">
	</div> -->
	<div class="image-container current">
		<img src={currentImagePath} alt="">
	</div>
	<!-- <div class="image-container next">
		<img src={nextImagePath} alt="">
	</div> -->
	<button class="next-image arrow-button" on:click={nextImage}><img src="../right-arrow.png" alt=""></button>
</div>


<style lang="scss">
	@use "../styles/exports.scss" as exports;

	.carousel {
		position: relative;
		height: 100%;
	}

	.image-container {
		position: absolute;
		inset: 0;

		img {
			width: 100%;
			height: 100%;
			position: absolute;
			object-fit: cover;
		}
	}

	.arrow-button {
		position: absolute;
		z-index: 2;

		top: calc(50%);
		transform: translateY(-50%);
		
		padding: 0.75rem 0.75rem 1rem 1.25rem;
		border: none;
		
		background-color: rgba(0, 0, 0, 0.3);
		color: white;

		&.next-image {
			right: 0;
		}

		&:hover {
			cursor: pointer;
		}
	}
</style>