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
	}
};
</script>
<style scoped></style>