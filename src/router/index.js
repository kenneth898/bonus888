// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue'; // Example component
import NotFound from '@/views/404.vue';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/login',
		redirect: '/'
	},

	{
		path: '/:pathMatch(.*)*',
		name: 'NotFound',
		component: NotFound
	}

	// Add more routes as needed
];

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
});

router.beforeEach((to, from, next) => {
	const permanentRedirects = ['/login'];
	if (permanentRedirects.includes(to.path)) {
		window.location.replace('/');
		return;
	}
	next();
});

export default router;
