import { createRouter, createWebHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";
import LandingPage from "../views/LandingPage.vue";
<<<<<<< HEAD
import ServiceHistorySA from "../views/ServiceHistorySA.vue";
import BookingPage from "../views/BookingPage.vue";
=======
import ServiceHistorySA from '../views/ServiceHistorySA.vue';
import BookingPage from '../views/BookingPage.vue'
>>>>>>> 2999239ceeac042317057a81b78477fd55151032
import WorkerProfile from "../views/WorkerProfileCx.vue";
import WriteReview from "../views/WriteReview.vue";
import paymentDetails from "../views/payment.vue";
import ServicesView from "../views/ServicesView.vue";
<<<<<<< HEAD
import AgancyDash from "../views/AgancyDash.vue";
import WorkerPageDashboard from "../views/workerPageDashboard.vue";
import dashReviews from "../views/dashReviews.vue";
import aboutus from "../views/About.vue";
import allAgencies from "../views/allAgencySDash.vue";
import Allworker from "../views/AllWorker.vue";
import AddAgency from "../views/AddAgency.vue";
=======
import AgancyDash from '../views/AgancyDash.vue'
import WorkerPageDashboard from '../views/workerPageDashboard.vue'
import dashReviews from "../views/dashReviews.vue";
import aboutus from "../views/About.vue";
import allAgencies from "../views/allAgencySDash.vue";
import Allworker from "../views/AllWorker.vue"

>>>>>>> 2999239ceeac042317057a81b78477fd55151032

// start of auth
// user auth
import LoginView from "../views/auth/user_auth/LoginView.vue";
import SignupView from "../views/auth/user_auth/SignupView.vue";
import AuthResetView from "../views/auth/user_auth/AuthResetView.vue";
import AuthConfirmView from "../views/auth/user_auth/AuthConfirmView.vue";
import AuthSetupPassView from "../views/auth/user_auth/AuthSetupPassView.vue";
// admin auth
import CpanelLoginView from "../views/auth/admin_auth/CpanelLoginView.vue";
import CpanelSignupView from "../views/auth/admin_auth/CpanelSignupView.vue";
import CpanelAuthResetView from "../views/auth/admin_auth/CpanelAuthResetView.vue";
import CpanelAuthConfirmView from "../views/auth/admin_auth/CpanelAuthConfirmView.vue";
import CpanelAuthSetupPassView from "../views/auth/admin_auth/CpanelAuthSetupPassView.vue";
// end of auth

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

  // start of auth
  // user auth
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/signup",
    name: "signup",
    component: SignupView,
  },
  {
    path: "/reset-password",
    name: "reset-password",
    component: AuthResetView,
  },
  {
    path: "/reset-password-confirm",
    name: "reset-password-confirm",
    component: AuthConfirmView,
  },
  {
    path: "/setup-password",
    name: "setup-password",
    component: AuthSetupPassView,
  },

  // admin auth
  {
    path: "/cpanel-login",
    name: "cpanel-login",
    component: CpanelLoginView,
  },
  {
    path: "/cpanel-signup",
    name: "cpanel-signup",
    component: CpanelSignupView,
  },
  {
    path: "/cpanel-reset-password",
    name: "cpanel-reset-password",
    component: CpanelAuthResetView,
  },
  {
    path: "/cpanel-reset-password-confirm",
    name: "cpanel-reset-password-confirm",
    component: CpanelAuthConfirmView,
  },
  {
    path: "/cpanel-setup-password",
    name: "cpanel-setup-password",
    component: CpanelAuthSetupPassView,
  },
  // end of auth

  {
    path: "/workerProfile",
    name: "WorkerProfile",
    component: WorkerProfile,
  },
  {
    path: "/ServicesView",
    name: "ServicesView",
    component: ServicesView,
  },
  {
<<<<<<< HEAD
    path: "/workerprofileDash",
    name: "WorkerPageDashboard",
    component: WorkerPageDashboard,
=======
    path:"/workerprofileDash",
    name:"WorkerPageDashboard",
    component:WorkerPageDashboard,
>>>>>>> 2999239ceeac042317057a81b78477fd55151032
  },
  {
    path: "/payment",
    name: "paymentDetails",
    component: paymentDetails,
  },
  {
    path: "/writereview",
    name: "WriteReview",
    component: WriteReview,
  },
  {
    path: "/agancydash",
    name: "AgancyDash",
    component: AgancyDash,
  },
  {
    path: "/dashReviews",
    name: "dashReviews",
    component: dashReviews,
  },
  {
    path: "/aboutus",
    name: "aboutUs",
    component: aboutus,
  },
  {
    path: "/Agencies",
    name: "allAgencies",
    component: allAgencies,
  },
  {
    path: "/AllWorker",
    name: "AllWorker",
    component: Allworker,
  },
  {
<<<<<<< HEAD
    path: "/serviceHistorySA",
    name: "ServiceHistorySA",
    component: ServiceHistorySA,
=======
      path: "/serviceHistorySA",
      name: "ServiceHistorySA",
      component:ServiceHistorySA
>>>>>>> 2999239ceeac042317057a81b78477fd55151032
  },
  {
    path: "/booking",
    name: "BookingPage",
<<<<<<< HEAD
    component: BookingPage,
  },
  {
    path: "/AddAgency",
    name: "AddAgency",
    component: AddAgency,
  },
=======
    component:BookingPage
},
>>>>>>> 2999239ceeac042317057a81b78477fd55151032
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
