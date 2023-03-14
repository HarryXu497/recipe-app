<script lang="ts">
	import type { ActionData } from "./$types";
	import { applyAction, enhance } from "$app/forms";
  	import AccountForm from "$lib/components/AccountForm.svelte";
  	import { pb } from "$lib/pocketbase";

	export let form: ActionData;
</script>


<AccountForm>
	<div slot="form-nav" class="form-mode">
		<a href="/account/login" class="login">
			Login
		</a>
		<a href="/account/register">
			Register
		</a>
	</div>

	<form slot="form-content" method="POST" use:enhance={({ form }) => {
		return async ({ result }) => {
			pb.authStore.loadFromCookie(document.cookie);

			if (result.type == "success") {
				form.reset();
			}

			await applyAction(result);
		}
	}}>
		<div class="form-controls">
			<div class="form-control username-input">
				<label for="username">Username</label>
				<input type="text" name="username" id="username">
			</div>
			<div class="form-control password-input">
				<label for="password">Password</label>
				<input type="password" name="password" id="password">
			</div>
	
			{#if form?.error}
				<span class="error-message">The username or password is incorrect</span>
			{/if}
		</div>

		<div class="button-group">
			<button type="submit">Login</button>
		</div>
	</form>
</AccountForm>

<style lang="scss">
	@use "../../../styles/exports.scss" as exports;

	form {
		display: flex;
		flex-direction: column;
		gap: 2rem;

		input:focus {
			outline: none;
		}
	}

	.form-mode {
		display: flex;
		flex-direction: row;

		top: 0;
		left: 0;
		right: 0;
	}

	.form-mode a {
		flex: 1;
		padding: 0.5rem;
		border: none;
		border-radius: 0;

		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;

		font-size: 1.25rem;
		
		text-decoration: none;


		background-color: exports.$color-secondary-600;
		color: exports.$color-dark-100;
		
		&.login {
			background-color: exports.$color-secondary-800;
		}
	}

	.form-controls {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.error-message {
		margin-top: 0.125rem;
		color: red;
	}

	.form-control {
		display: flex;
		flex-direction: column;
		gap: 0.125rem;
	}

	.button-group button {
		background-color: exports.$color-secondary;
		border: none;
		font-size: 1.25rem;
		padding: 0.5rem 1.25rem;
	}
</style>