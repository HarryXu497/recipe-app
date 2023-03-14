<script lang="ts">
  	import AccountForm from "$lib/components/AccountForm.svelte";
  	import { currentUser, pb } from "$lib/pocketbase";

	interface Controls {
		name: string;
		description: string;
		files: (string | ArrayBuffer | null | undefined)[];
		time: number;
		ingredients: {
			name: string,
			amount: number | null,
			units?: string,
		}[]
	}
	

	let files: FileList;

	let controls: Controls = {
		name: "",
		description: "",
		files: [],
		time: 0,
		ingredients: [
			{
				name: "",
				amount: null,
				units: "",
			}
		]
	}
	
	function addIngredient() {
		controls.ingredients = [...controls.ingredients, {
			name: "",
			amount: null,
			units: "",
		}]
	}

	function removeIngredient(index: number) {
		// Minimum one ingredient
		if (controls.ingredients.length !== 1) {
			controls.ingredients = controls.ingredients.filter((v, i) => i !== index)
		}
	}

	async function onSubmit() {
		if (!$currentUser) {
			return;
		}

		const formData = new FormData();

		const ingredientsCollection = pb.collection('ingredients');
		const recipeCollection = pb.collection('recipes');
		
		const ingredients = await Promise.all(controls.ingredients.map(async (ingredient) => ingredientsCollection.create(ingredient)))
		const ingredientIds = ingredients.map(ingredient => ingredient.id);

		formData.set("name", controls.name);
		formData.set("description", controls.description);
		formData.set("author", $currentUser.id);
		formData.set("rating", "5");
		formData.set("time", "" + controls.time);

		for (const ingredient of ingredientIds) {
			formData.append("ingredients", ingredient);
		}

		for (const file of files) {
			formData.append("images", file);
		}

		await recipeCollection.create(formData);
	}

	function getBase64(images: FileList) {
		for (const image of images) {
			const reader = new FileReader();
			reader.readAsDataURL(image);
			reader.onload = e => {
				console.log(e.target?.result);
				controls.files.push(e.target?.result)
			}
		}
	}
</script>

<AccountForm>
	<div slot="form-nav">
		Create Your Recipe
	</div>
	<form slot="form-content" on:submit|preventDefault={onSubmit} enctype="multipart/form-data">
		<div class="form-controls">
			<div class="form-control name-input">
				<label for="name">Name</label>
				<input type="text" name="name" id="name" bind:value={controls.name}>
			</div>
			<div class="form-control description-input">
				<label for="description">Description</label>
				<input type="text" name="description" id="description" bind:value={controls.description}>
			</div>
			<div class="form-control name-input">
				<label for="time">Time (min)</label>
				<input type="number" name="time" id="time" bind:value={controls.time}>
			</div>
			<div class="form-control image-input">
				<label for="image">Images</label>
				<input type="file" name="image" id="image" bind:files on:change={() => getBase64(files)} multiple accept=".png,.jpg">
			</div>
			<fieldset class="form-control ingredients-input" name="ingredients">
				<legend>Ingredients</legend>
				{#each controls.ingredients as _, i (i)}
					<div class="ingredient-input">
						<input type="text" bind:value={controls.ingredients[i].name} placeholder="Name">
						<input type="number" bind:value={controls.ingredients[i].amount} placeholder="Amount">
						<input type="text" bind:value={controls.ingredients[i].units} placeholder="Units">
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