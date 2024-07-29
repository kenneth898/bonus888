// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue'; // Example component


const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	}

	// Add more routes as needed
];

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
});

export default router;
