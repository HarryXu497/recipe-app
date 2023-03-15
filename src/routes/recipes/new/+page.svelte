<script lang="ts">
  	import { enhance } from "$app/forms";
  	import AccountForm from "$lib/components/AccountForm.svelte";
  	import type { IngredientObject } from "../../../ingredient.model";

	interface FormIngredient extends Omit<IngredientObject, 'amount'> {
		amount: number | null;
	}

	let files: FileList;
	let ingredients: FormIngredient[] = [{
		name: "",
		amount: null,
		units: "",
	}]

	$: ingredientsLength = ingredients.length;

	function addIngredient() {
		ingredients = [...ingredients, {
			name: "",
			amount: null,
			units: "",
		}]
	}

	function removeIngredient(index: number) {
		// Minimum one ingredient
		if (ingredientsLength !== 1) {
			ingredients = ingredients.filter((v, i) => i !== index)
		}
	}

</script>

<AccountForm>
	<div slot="form-nav">
		Create Your Recipe
	</div>
	<!-- svelte-ignore missing-declaration -->
	<form slot="form-content" enctype="multipart/form-data" method="POST" use:enhance={({ data }) => {
		for (const file of files) {
			data.append("images", file);
		}

		data.set("ingredientsLength", `${ingredientsLength}`)
	}}>
		<div class="form-controls">
			<div class="form-control name-input">
				<label for="name">Name</label>
				<input type="text" name="name" id="name">
			</div>
			<div class="form-control description-input">
				<label for="description">Description</label>
				<input type="text" name="description" id="description">
			</div>
			<div class="form-control name-input">
				<label for="time">Time (min)</label>
				<input type="number" name="time" id="time">
			</div>
			<div class="form-control image-input">
				<label for="images">Images</label>
				<input type="file" name="images" id="images" bind:files multiple accept=".png,.jpg">
			</div>
			<fieldset class="form-control ingredients-input" name="ingredients">
				<legend>Ingredients</legend>
				{#each ingredients as _, i (i)}
					<div class="ingredient-input">
						<input type="text" name={`ingredient.${i}.name`} bind:value={ingredients[i].name} placeholder="Name">
						<input type="number" name={`ingredient.${i}.amount`} bind:value={ingredients[i].amount} placeholder="Amount">
						<input type="text" name={`ingredient.${i}.units`} bind:value={ingredients[i].units}  placeholder="Units">
						<button type="button" on:click={() => removeIngredient(i)}>&#10005;</button>
					</div>
				{/each}
				<button type="button" on:click={addIngredient}>Add Ingredient</button>
			</fieldset>
		</div>

		<div class="button-group">
			<button type="submit">Submit</button>
		</div>
	</form>
</AccountForm>

<style lang="scss">
	@use "../../../styles/exports.scss" as exports;

	form {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;

		label, legend {
			font-size: 1.125rem;
		}

		legend {
			padding-bottom: 0.125rem;
		}

		input {
			font-size: 1.05rem;
		}
	}

	div[slot="form-nav"] {
		display: flex;
		flex-direction: row;
		flex-grow: 1;
		justify-content: center;
		align-items: center;
		padding: 0.5rem;
		background-color: exports.$color-secondary-600;
		font-size: 1.25rem;
	}

	.ingredient-input {
		display: flex;
		flex-direction: row;
	}
	
	.ingredients-input {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;

		> button {
			padding: 0.25rem;
			background-color: exports.$color-secondary-600;
			font-size: 1rem;
			border: 1px solid exports.$color-dark-300;

			&:hover {
				cursor: pointer;
			}
		}
	}

	.ingredient-input > input {
		width: 100%;


		border: 1px solid exports.$color-dark-300;

		border-right-width: 0;

		&:nth-of-type(1) {
			border-bottom-right-radius: 0;
			border-top-right-radius: 0;
		}
		&:nth-of-type(2), &:nth-of-type(3) {
			border-radius: 0;
		}
	}

	.ingredient-input > button {
		font-weight: bold;
		background-color: exports.$color-red;
		border: 1px solid exports.$color-dark-300;

		border-bottom-left-radius: 0;
		border-top-left-radius: 0;

		&:hover {
			cursor: pointer;
		}
	}

	.button-group {
		button[type="submit"] {
			background-color: exports.$color-secondary-600;
			border: 1px solid exports.$color-dark-100;
			padding: 0.25rem 1.25rem;
			font-size: 1.25rem;
			
		}
		button:hover {
			cursor: pointer;
		}
	}


	.form-controls {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.form-control {
		display: flex;
		flex-direction: column;
		gap: 0.125rem;
	}
</style>