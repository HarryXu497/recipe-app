<script lang="ts">
	import type { ActionData } from "./$types";
	import { enhance } from "$app/forms";
  	import AccountForm from "../../../components/AccountForm.svelte";

	export let form: ActionData;
</script>


<AccountForm>
	<div slot="form-nav" class="form-mode">
		<a href="/account/login">
			Login
		</a>
		<a href="/account/register" class="register">
			Register
		</a>
	</div>

	<form method="POST" slot="form-content" use:enhance>
		<div class="form-controls">
			<div class="form-control username-input">
				<label for="username">Username</label>
				<input type="text" name="username" id="username">
				{#if form?.errors?.username}
					<span class="error-message">{form?.errors.username[0]}</span>
				{/if}
			</div>
			<div class="form-control email-input">
				<label for="email">Email</label>
				<input type="email" name="email" id="email">
				{#if form?.errors?.email}
					<span class="error-message">{form?.errors.email[0]}</span>
				{/if}
			</div>
			<div class="form-control password-input">
				<label for="password">Password</label>
				<input type="password" name="password" id="password">
				{#if form?.errors?.password}
					<span class="error-message">{form?.errors.password[0]}</span>
				{/if}
			</div>
			<div class="form-control password-input">
				<label for="password-confirm">Confirm Password</label>
				<input type="password" name="passwordConfirm" id="password-confirm">
				{#if form?.errors?.passwordConfirm}
					<span class="error-message">{form?.errors.passwordConfirm[0]}</span>
				{/if}
			</div>

			{#if form?.error}
				<p>Something Went Wrong</p>
			{/if}
		</div>

		<div class="button-group">
			<button type="submit">Register</button>
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

		&.register {
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