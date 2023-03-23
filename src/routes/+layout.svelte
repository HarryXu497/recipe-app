<script lang="ts">
  	import Footer from '$lib/components/Footer.svelte';
	import Navbar from '../lib/components/Navbar.svelte';
	import "../styles/global.scss";
  	import type { LayoutServerData } from "./$types";

	export let data: LayoutServerData;
</script>

<div class="content">
	<Navbar user={data.user}/>
	<slot/>
</div>
<Footer/>

<style lang="scss">
	.content {
		min-height: 100vh;
	}
</style>