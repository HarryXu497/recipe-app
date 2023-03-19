<script lang="ts">
	import { currentUser } from "$lib/pocketbase";
	import { page } from '$app/stores';  
</script>

{#if currentUser !== null}
	<main>
		<h1>Settings</h1>
		<hr>
		<div class="account">
			<aside>
				<ul>
					<li><a href="/settings/profile" class:active-route={$page.url.pathname === '/settings/profile'}>Profile</a></li>
					<li><a href="/settings/account" class:active-route={$page.url.pathname === '/settings/account'}>Account</a></li>
					<li><a href="/settings/security" class:active-route={$page.url.pathname === '/settings/security'}>Security</a></li>
				</ul>
			</aside>
			<div class="account-info">
				<slot/>
			</div>
		</div>
	</main>
{/if}

<style lang="scss">
	@use "../../styles/exports.scss" as exports;

	h1 {
		font-family: exports.$font-sans-serif;
		font-size: 3rem;
	}

	main {
		max-width: 52rem;
		margin: 0 auto;
		margin-top: 4rem;
	}

	a {
		text-decoration: none;
		color: exports.$color-dark-100;

		&.active-route {
			background-color: exports.$color-secondary-600;

			font-weight: bold;
		}
	}

	.account {
		font-family: exports.$font-sans-serif;


		
		display: flex;
		flex-direction: row;
		
		> aside {
			flex-basis: 20%;


		}

		.account-info {
			flex-basis: 80%;

			padding: 2rem;
			padding-left: 1rem;
		}
	}

	.account aside ul {
		display: flex;
		flex-direction: column;

		li {
			position: relative;

			display: flex;
			flex-direction: row;
			flex-grow: 1;
		}

		a {
			display: flex;
			flex-direction: row;
			flex: 1;

			display: inline-block;
			padding: 1rem 2rem;
	
			inset: 0;
		}
	}

	.img-container {
		width: 4rem;

		img {
			width: 100%;
		}
	}

	.account-info {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.form-control {
		display: flex;
		flex-direction: column;
	}

	@include exports.media-tablet {
		main {
			width: clamp(16rem, 72%, 52rem);
		}
	}

	@include exports.media-tablet-2 {
		main {
			width: clamp(16rem, 72%, 52rem);
		}
	}
</style>