<script lang="ts">
	import { currentUser, pb } from "$lib/pocketbase";
	import type User from "../../user.model";

</script>

{#if currentUser !== null}
<div class="account">
	<aside>
		<ul>
			<li><a href="/account/profile">Profile</a></li>
			<li><a href="/account/profile">Acc</a></li>
			<li><a href="/account/profile">Profile</a></li>
		</ul>
	</aside>
	<div class="account-info">
		<!-- { JSON.stringify($currentUser) } -->
		<div class="form-control">
			<label for="name">Name</label>
			<input type="text" name="name" id="name" value={$currentUser?.username}>
		</div>
		<div class="form-control">
			<label for="email">Email</label>
			<input type="email" name="email" id="email" value={$currentUser?.email}>
		</div>
	</div>
</div>
{/if}

<style lang="scss">
	@use "../../styles/exports.scss" as exports;

	.account {
		font-family: exports.$font-sans-serif;

		max-width: 40rem;
		margin: 0 auto;
		margin-top: 4rem;

		background-color: exports.$color-primary-100;
		
		display: flex;
		flex-direction: row;
		
		> aside {
			flex-basis: 20%;
			background-color: exports.$color-primary-300;

			padding: 2rem;
			padding-right: 0;
		}

		.account-info {
			flex-basis: 80%;

			padding: 2rem;
			padding-left: 1rem;
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
		.account {
			width: clamp(16rem, 72%, 40rem);
		}
	}

	@include exports.media-tablet-2 {
		.account {
			width: clamp(16rem, 72%, 40rem);
		}
	}
</style>