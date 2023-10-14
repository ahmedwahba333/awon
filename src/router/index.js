import { createRouter, createWebHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import LandingPage from "../views/LandingPage.vue" ;
import WorkerPageDashboard from '../views/workerPageDashboard.vue';
import ServiceHistorySA from '../views/ServivesHistorySA.vue';

const routes = [
  {
    path: "/",
    name : "LandingPage",
     component: LandingPage,
  

    // name: "home",
    // component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },

  {
    path:"/workerpageDash",
    name:"WorkerPageDashboard",
    component:WorkerPageDashboard,
  },

  {
    path:"/ServiceHistorySA",
    name:"ServiceHistorySA",
    component:ServiceHistorySA,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
