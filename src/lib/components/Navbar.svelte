<script lang="ts">
  	import DropdownMenu from "$lib/components/DropdownMenu.svelte";
	import DropdownItem from "$lib/components/DropdownItem.svelte";
	import { enhance } from "$app/forms";
  	import type { Admin, Record } from "pocketbase";
  	import { pb } from "$lib/pocketbase";
  	import type User from "$lib/models/user.model";


	export let user: Record | Admin | undefined;
	$: u = user as Record;
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

		{#if user}
			<DropdownMenu>
				<button slot="button">{ user.username } <span class="dropdown-arrow"></span></button>
				<a href="/settings/profile">
					<DropdownItem>
						Profile
					</DropdownItem>
				</a>
				<a href="/settings/account">
					<DropdownItem>
						Account
					</DropdownItem>
				</a>
				<a href="/settings/security">
					<DropdownItem>
						Security
					</DropdownItem>
				</a>
				<DropdownItem>
					<form action="/logout" method="POST" use:enhance>
						<button type="submit">
							Logout
						</button>
					</form>
				</DropdownItem>
			</DropdownMenu>
			<div class="image-container">
				<img src={user?.avatar ? pb.getFileUrl(u, user.avatar, { thumb: "48x48f" }) : "../default_pfp.svg"} alt={ user.username } title={ user.username }>
			</div>
		{:else}
			<a href="/login">Log in</a>
		{/if} 
	</div>
</nav>

<style lang="scss">
	@use "../../styles/exports.scss" as exports;

	a {
		color: exports.$color-dark;
	}

	.nav-account {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 1rem;

		button {
			all: unset;
			font-weight: bold;

			&:hover {
				cursor: pointer;
			}
		}

		.dropdown-arrow {
			border: solid black;
			border-width: 0 2px 2px 0;
			display: inline-block;
			padding: 3px;

			transform: rotate(45deg) translateY(-4px);
  			-webkit-transform: rotate(45deg) translateY(-4px);
		}

		form button[type="submit"] {
			display: inline-block;
			width: 100%;
		}
	}

	.image-container {
		width: 3rem;
		aspect-ratio: 1 / 1;

		img {
			border-radius: 50%;
			width: 100%;
		}
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

