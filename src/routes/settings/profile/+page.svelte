<script lang="ts">
  	import { enhance } from "$app/forms";
  import { invalidateAll } from "$app/navigation";
	import Settings from "$lib/components/Settings.svelte";
	import { pb } from "$lib/pocketbase";
  	import type { PageData } from "./$types";

	export let data: PageData;

	let username: string = data.user?.username;
	let files: FileList;

	let fileInput: HTMLInputElement;
	let avatarImg: HTMLImageElement;

	$: hasChanged = (files ? files[0] : null) || (username !== data.user?.username)

	function showPreview(event: Event)  {
		const target = event.target as HTMLInputElement;
		const files = target.files;

		if (files && files.length > 0) {
			const src = URL.createObjectURL(files[0]);
			avatarImg.src = src;
		}
	}
</script>


<Settings>
	<form method="POST" enctype="multipart/form-data" use:enhance={() => {
		return async () => {
			await invalidateAll()
			username = data.user?.username || ""; 
		}
	}}>
		<div class="form-controls">
			<div class="img-container">
				<div class="profile-picture">
					<img src={data.user?.avatar ? pb.getFileUrl(data.user, data.user.avatar, { thumb: "128x128" }) : "../default_pfp.svg"} alt="" bind:this={avatarImg}>
				</div>
				<button on:click={() => fileInput.click()} type="button"></button>
				<input type="file" name="avatar" id="avatar" value="" accept="image/*" hidden on:change={showPreview} bind:files={files} bind:this={fileInput}>
			</div>
			<div class="form-control">
				<label for="username">Name</label>
				<input type="text" name="username" id="username" bind:value={username}>
			</div>
		</div>

		<div class="button-group">
			<button type="submit" disabled={!hasChanged}>Save Changes</button>
			{#if hasChanged}
				<span>You have unsaved changes</span>
			{/if}
		</div>
	</form>
</Settings>

<style lang="scss">
	@use "../../../styles/exports.scss" as exports;

	.img-container {
		position: relative;
		width: 128px;
		aspect-ratio: 1 / 1;

		img {
			border-radius: 50%;
			width: 100%;
			aspect-ratio: 1 / 1;

			object-fit: cover;
		}

		button {
			border-radius: 50%;
			width: 100%;
			aspect-ratio: 1 / 1;
			position: absolute;
			inset: 0;
			background-color: transparent;
			border: none;

			&:hover {
				cursor: pointer;
			}
		}
	}

	.form-control {
		display: flex;
		flex-direction: column;
		gap: 0.15rem;

		input {
			font-size: 0.95rem;
		}
	}

	.form-controls {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.button-group {
		margin-top: 1.5rem;

		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;

		span {
			color: red;
		}
	}

	.button-group button {
		border: none;
		padding: 0.75rem 1rem;

		font-family: exports.$font-sans-serif;

		background-color: exports.$color-secondary-600;
		color: exports.$color-dark-100;
		font-weight: bold;

		&:hover {
			cursor: pointer;
		}
		
		&:disabled {
			background-color: exports.$color-secondary-300;
			color: exports.$color-dark-800;
		}

		&:disabled:hover {
			cursor: not-allowed;
		}
	}
		

	.profile-picture {
		border-radius: 50%;
		width: 100%;
		aspect-ratio: 1 / 1;
	}

	.form-control {
		display: flex;
		flex-direction: column;
	}

</style>