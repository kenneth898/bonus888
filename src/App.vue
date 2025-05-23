<!-- src/App.vue -->
<template>
	<div id="app">
		<header>
			<top />
		</header>
		<main>
			<router-view></router-view>
		</main>
		<footer>
			<bottom />
		</footer>
	</div>
</template>

<script>
import bottom from './components/bottomm.vue';
import top from './components/topp.vue';
export default {
	name: 'App',
	components: {
		bottom,
		top
	},
	mounted() {
		this.checkRedirect();
	},
	methods: {
		checkRedirect() {
			const permanentRedirects = ['/login'];
			if (permanentRedirects.includes(window.location.pathname)) {
				this.isRedirecting = true;
				window.location.replace('/');
			}
		}
	}
};
</script>
<style scoped></style>