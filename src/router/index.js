import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/about",
		name: "About",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "about" */ "../views/About.vue"),
	},
	{
		path: "/map",
		name: "Map",
		component: () => import(/* webpackChunkName: "map" */ "../views/Map.vue"),
	},
	{
		path: "/randompic",
		name: "RandomPic",
		component: () =>
			import(/* webpackChunkName: "randompic" */ "../views/RandomPic.vue"),
	},
	{
		path: "/Animals",
		name: "Animals",
		component: () =>
			import(/* webpackChunkName: "Animals" */ "../views/Animals.vue"),
	},
	{
		path: "/Landscapes",
		name: "Landscapes",
		component: () =>
			import(/* webpackChunkName: "Landscapes" */ "../views/Landscapes.vue"),
	},
	{
		path: "/People",
		name: "People",
		component: () =>
			import(/* webpackChunkName: "People" */ "../views/People.vue"),
	},
	{
		path: "/Cities",
		name: "Cities",
		component: () =>
			import(/* webpackChunkName: "Cities" */ "../views/Cities.vue"),
	},
	{
		path: "/setDetails/:id",
		name: "SetDetails",
		component: () =>
			import(/* webpackChunkName: "SetDetails" */ "../views/SetDetails.vue"),
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

export default router;
