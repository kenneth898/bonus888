<template>
	<div class="not-found">
		<h1>404 - Page Not Found</h1>
		<p>The page you are looking for doesn't exist.</p>
		<router-link to="/">← Go back to Home</router-link>
	</div>
</template>

<script>
export default {
	name: 'NotFound'
};
</script>

<style scoped>
.not-found {
	text-align: center;
	padding: 80px 20px;
}

.not-found h1 {
	font-size: 3rem;
	color: #d9534f;
}

.not-found p {
	font-size: 1.2rem;
	margin: 20px 0;
}

a {
	color: #007bff;
	text-decoration: underline;
}
</style>
