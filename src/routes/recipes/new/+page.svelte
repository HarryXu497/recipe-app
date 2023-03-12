<script lang="ts">
  	import { pb } from "$lib/pocketbase";

	let controls = {
		name: "",
		description: "",
		time: "",
		ingredients: [
			{
				name: "",
				amount: 0,
				units: "",
			}
		]
	}
	// let name: string;
	// let description: string;
	// let time: number;
	
	// let ingredients: IngredientObject[] = [
	// 	{
	// 		name: "",
	// 		amount: 0,
	// 		units: "",
	// 	}
	// ];

	function addIngredient() {
		controls.ingredients = [...controls.ingredients, {
			name: "",
			amount: 0,
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
		const ingredientsCollection = pb.collection('ingredients');
		const recipeCollection = pb.collection('recipes');
		
		const ingredients = await Promise.all(controls.ingredients.map(async (ingredient) => ingredientsCollection.create(ingredient)))
		const ingredientIds = ingredients.map(ingredient => ingredient.id);

		recipeCollection.create({
			name: controls.name,
			description: controls.description,
			author: "",
			rating: 5,
			ingredients: ingredientIds,
			time: controls.time,
		})
	}
</script>

<form on:submit={onSubmit}>
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
		<fieldset class="form-control name-input" name="ingredients">
			<legend>Ingredients</legend>
			{#each controls.ingredients as ingredient, i (i)}
				<div>
					<input type="text" bind:value={controls.ingredients[i].name}>
					<input type="number" bind:value={controls.ingredients[i].amount}>
					<input type="text" bind:value={controls.ingredients[i].units}>
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

<style lang="scss">
	@use "../../../styles/exports.scss" as exports;

	form {
		border: 1px solid black;
		width: 40rem;
		margin: 0 auto;
		margin-top: 2rem;

		padding: 1rem;

		font-family: exports.$font-sans-serif;

		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.form-controls {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.form-control {
		display: flex;
		flex-direction: column;
	}

	@include exports.media-tablet {
		form {
			width: clamp(16rem, 72%, 40rem);
		}
	}

	@include exports.media-tablet-2 {
		form {
			width: clamp(16rem, 72%, 40rem);
		}
	}
</style>