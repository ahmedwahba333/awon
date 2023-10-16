import { createRouter, createWebHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import LandingPage from "../views/LandingPage.vue" ;
import WorkerProfile from "../views/WorkerProfileCx.vue";
import AllWorker from "../views/AllWorker.vue"
const routes = [
  {
    path: "/",
    name: "LandingPage",
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
    path: "/workerProfile",
    name: "WorkerProfile",
    component: WorkerProfile,
  },
  {
    path:"/AllWorker",
    name:"AllWorker",
    component: AllWorker,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
