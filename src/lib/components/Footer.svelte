<footer>
	<div class="content">
		<div class="info">
			<span class="info__title">RecipeBook</span>
			<span class="info__description">All your recipes, right where you need them</span>
		</div>
		<div class="links">
			<div class="links__about">
				<h2>About</h2>
				<a href="/about">About</a>
				<a href="/blog">Blog</a>
				<a href="/recipes">Recipes</a>
			</div>
			<div class="links__support">
				<h2>Support</h2>
				<a href="/help">Product Help</a>
				<a href="/issues">Report an Issue</a>
			</div>
			<div class="links__support">
				<h2>Support</h2>
				<a href="/help">Product Help</a>
				<a href="/issues">Report an Issue</a>
			</div>
			<div class="links__support">
				<h2>Support</h2>
				<a href="/help">Product Help</a>
				<a href="/issues">Report an Issue</a>
			</div>
		</div>
	</div>
	<div class="guidelines">
		<div>
			<span>Copyright &copy; { new Date().getFullYear() } Harry Xu. All Rights Reserved</span>
		</div>
	</div>
	
</footer>


<style lang="scss">
	@use "../../styles/exports.scss" as exports;

	footer {
		background-color: exports.$color-dark-100;
		color: exports.$color-primary-100;
		padding: 2rem;
		font-family: exports.$font-sans-serif;
		bottom: 0;
		left: 0;
		right: 0;
	}

	.content {
		display: flex;
	}

	.info {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;

		.info__title {
			font-family: exports.$font-serif;

			font-weight: bold;
			font-size: 2rem;;
		}
	}
</style>