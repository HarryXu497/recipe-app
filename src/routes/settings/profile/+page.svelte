<script lang="ts">
  import { enhance } from "$app/forms";
	import Settings from "$lib/components/Settings.svelte";
	import { currentUser, pb } from "$lib/pocketbase";

	let nameInput: HTMLInputElement;
	let emailInput: HTMLInputElement;
	let fileInput: HTMLInputElement;
	let avatarImg: HTMLImageElement;

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
		return () => {
			nameInput.value = $currentUser?.username || ""; 
			emailInput.value = $currentUser?.email || "";
		}
	}}>
		<div class="form-controls">
			<div class="img-container">
				<div class="profile-picture">
					<img src={$currentUser?.avatar ? pb.getFileUrl($currentUser, $currentUser.avatar, { thumb: "128x128" }) : "../default_pfp.svg"} alt="" bind:this={avatarImg}>
				</div>
				<button on:click={() => fileInput.click()} type="button"></button>
				<input type="file" name="avatar" id="avatar" value="" accept="image/*" hidden on:change={showPreview} bind:this={fileInput}>
			</div>
			<div class="form-control">
				<label for="name">Name</label>
				<input type="text" name="name" id="name" value={$currentUser?.username} bind:this={nameInput}>
			</div>
			<div class="form-control">
				<label for="email">Email</label>
				<input type="email" name="email" id="email" value={$currentUser?.email} bind:this={emailInput}>
			</div>
		</div>

		<div class="button-group">
			<button type="submit">Save Changes</button>
			<span>You have unsaved changes</span>
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

		button {
			border: none;
			padding: 0.75rem 1rem;

			font-family: exports.$font-sans-serif;

			background-color: exports.$color-secondary-600;
			font-weight: bold;

			&:hover {
				cursor: pointer;
			}
		}
		
		span {
			color: red;
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