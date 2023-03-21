<div class="dropdown-item">
	<slot/>
</div>

<style lang="scss">
	@use "../../styles/exports.scss" as exports;

	.dropdown-item {
		font-size: 1rem;
		background-color: exports.$color-primary-200;
		padding: 0.75rem 1.25rem;
		
		&:hover {
			cursor: pointer;
			background-color: exports.$color-primary-400;
		}
	}
</style>