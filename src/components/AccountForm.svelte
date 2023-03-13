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
	@use "../styles/exports.scss" as exports;

	.form-container {
		position: relative;

		/* border: 1px solid black; */
		background-color: exports.$color-primary-100;
		width: 40rem;
		margin: 0 auto;
		margin-top: 4rem;

		font-family: exports.$font-sans-serif;
	}

	.form {
		padding: 1rem;
	}

	.form-mode {
		display: flex;
		flex-direction: row;

		top: 0;
		left: 0;
		right: 0;
	}

	.form-mode button {
		flex: 1;
		padding: 0.5rem;
		border: none;
		border-radius: 0;

		font-size: 1.25rem;

		background-color: exports.$color-secondary-600;

		&.selected-button {
			background-color: exports.$color-secondary-800;
		}
	}

	@include exports.media-tablet {
		form {
			width: clamp(16rem, 72%, 40rem);
		}
	}

	@include exports.media-tablet-2 {
		form {
			width: clamp(16rem, 72%, 40rem);
		}
	}
</style>