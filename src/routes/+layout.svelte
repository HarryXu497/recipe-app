<script>
	import { currentUser, pb } from "$lib/pocketbase";
	import "../styles/global.scss";
</script>

<nav>
	<div class="nav-logo">
		<img src="../logo.png" alt="">
		<a href="/">RecipeBook!</a>
	</div>
	<div class="nav-links">
		<a href="/recipes">Recipes</a>
		<a href="/recipes/new">Add Your Own</a>
		<a href="/recipes">Recipes</a>
	</div>
	<div class="nav-account">
		{#if $currentUser}
			<a href="/account">{ $currentUser.username }</a>
			<button on:click={() => pb.authStore.clear()}>
				Logout
			</button>
		{:else}
			<a href="/account/login">Log in</a>
		{/if}
	</div>
</nav>

<slot/>

<style lang="scss">
	@use "../styles/exports.scss" as exports;

	a {
		color: exports.$color-dark;
	}

	nav {
		display: relative;

		background-color: exports.$color-secondary;
		padding: 1.5rem 2.5rem;

		font-family: exports.$font-sans-serif;

		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	.nav-logo {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 0.75rem;

		font-family: exports.$font-serif;

		font-size: 2rem;

		img {
			width: 3rem;
		}

		a {
			text-decoration: none;
		}
	}

	.nav-links {
		position: absolute;
		left: 50%;
		transform: translateX(-50%);

		display: flex;
		flex-direction: row;
		justify-content: space-between;
		gap: 4rem;

		font-size: 1.25rem;

	}
</style>