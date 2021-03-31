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
		path: "/set1",
		name: "Set1",
		component: () => import(/* webpackChunkName: "set1" */ "../views/Set1.vue"),
	},
	{
		path: "/set2",
		name: "Set2",
		component: () => import(/* webpackChunkName: "set2" */ "../views/Set2.vue"),
	},
	{
		path: "/set3",
		name: "Set3",
		component: () => import(/* webpackChunkName: "set3" */ "../views/Set3.vue"),
	},
	{
		path: "/set4",
		name: "Set4",
		component: () => import(/* webpackChunkName: "set4" */ "../views/Set4.vue"),
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
