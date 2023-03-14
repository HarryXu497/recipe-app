<section class="form-container">
	<slot name="form-nav">
		<div>
			<button>
				Login
			</button>
			<button>
				Register
			</button>
		</div>
	</slot>
	<div class="form">
		<slot name="form-content"/>
	</div>
</section>

<style lang="scss">
	@use "../../styles/exports.scss" as exports;

	.form-container {
		position: relative;

		/* border: 1px solid black; */
		background-color: exports.$color-primary-100;
		max-width: 40rem;
		margin: 0 auto;
		margin-top: 4rem;

		font-family: exports.$font-sans-serif;
	}

	.form {
		padding: 1rem;
	}

	@include exports.media-tablet {
		section {
			width: clamp(16rem, 72%, 40rem);
		}
	}

	@include exports.media-tablet-2 {
		section {
			width: clamp(16rem, 72%, 40rem);
		}
	}
</style>