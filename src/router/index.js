import { createRouter, createWebHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";
import LandingPage from "../views/LandingPage.vue";
import ServiceHistorySA from "../views/ServiceHistorySA.vue";
import BookingPage from "../views/BookingPage.vue";
import WorkerProfile from "../views/WorkerProfileCx.vue";
import WriteReview from "../views/WriteReview.vue";
import paymentDetails from "../views/payment.vue";
import ServicesView from "../views/ServicesView.vue";
import AddAgency from "../views/AddAgency.vue";
import AgancyDash from "../views/AgancyDash.vue";
import WorkerPageDashboard from "../views/workerPageDashboard.vue";
import dashReviews from "../views/dashReviews.vue";
import aboutus from "../views/About.vue";
import allAgencies from "../views/allAgencySDash.vue";
import Allworker from "../views/AllWorker.vue";

import CleaningView from "../views/CleaningView.vue";
import GardeningView from "../views/GardeningView.vue";
import BabysittingView from "../views/BabysittingView.vue";
import ElderlycareView from "../views/ElderlycareView.vue";
import HousenursingView from "../views/HousenursingView.vue";
import ChefsView from "../views/ChefsView.vue";
import FoodcateringView from "../views/FoodcateringView.vue";
import SADashHome from "../views/SADashHome.vue";
import AllWorkerFromCX from "../views/AllWorkerFromCX.vue";
import SACatigory from "@/views/SACatigory.vue";
import SAServiceCategories from "@/views/SAServiceCategories.vue";
import AddCatigory from "@/views/AddCatigory.vue";
import AddServiceSA from "@/views/AddServiceSA.vue";
import AddWorker from "../views/AddWorker.vue";
import PlumbingView from "../views/PlumbingView.vue";
import CarpentryView from "../views/CarpentryView.vue";
import MovingfurnitureView from "../views/MovingfurnitureView.vue";
import HouseguardView from "../views/HouseguardView.vue";
import DriverView from "../views/DriverView.vue";
import CXprofileView from "../views/CXprofileView.vue";
import SAAgencyProfile from "../views/SAAgencyProfile.vue";
import AdminAgencyProfile from "../views/AdminAgencyProfile.vue";
import ServicesidView from "../views/ServicesidView.vue";

// >>>>>>> 7daaeeb6701d2e0c36ee0a5e20989dc98c5f82d5

import ServiceHistoryAgency from "../views/ServiceHistoryAgency.vue";
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
    path: "/workerProfile/:id",
    name: "WorkerProfile",
    component: WorkerProfile,
  },
  {
    path: "/ServicesView",
    name: "ServicesView",
    component: ServicesView,
  },
  {
    path: "/workerpageDash/:id",
    name: "WorkerPageDashboard",
    component: WorkerPageDashboard,
  },
  {
    path: "/payment",
    name: "paymentDetails",
    component: paymentDetails,
  },
  {
    path: "/writereview/:id",
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
    path: "/allAgencies",
    name: "allAgencies",
    component: allAgencies,
  },
  {
    path: "/AllWorker",
    name: "AllWorker",
    component: Allworker,
  },
  {
    path: "/ServiceHistorySA",
    name: "ServiceHistorySA",
    component: ServiceHistorySA,
  },
  {
    path: "/booking/:id",
    name: "BookingPage",
    component: BookingPage,
  },
  {
    path: "/ServiceHistoryAgency/:id",
    name: "ServiceHistoryAgency",
    component: ServiceHistoryAgency,
  },
  {
    path: "/CleaningView",
    name: "CleaningView",
    component: CleaningView,
  },
  {
    path: "/GardeningView",
    name: "GardeningView",
    component: GardeningView,
  },
  {
    path: "/BabysittingView",
    name: "BabysittingView",
    component: BabysittingView,
  },
  {
    path: "/ElderlycareView",
    name: "ElderlycareView",
    component: ElderlycareView,
  },
  {
    path: "/HousenursingView",
    name: "HousenursingView",
    component: HousenursingView,
  },
  {
    path: "/ChefsView",
    name: "ChefsView",
    component: ChefsView,
  },
  {
    path: "/FoodcateringView",
    name: "FoodcateringView",
    component: FoodcateringView,
  },
  {
    path: "/SADashHome",
    name: "SADashHome",
    component: SADashHome,
  },
  {
    path: "/AllWorkerFromCX",
    name: "AllWorkerFromCX",
    component: AllWorkerFromCX,
  },
  {
    path: "/AddAgency",
    name: "AddAgency",
    component: AddAgency,
    // meta: false,
  },
  {
    path: "/SACatigory",
    name: "SACatigory",
    component: SACatigory,
  },
  {
    path: "/SAServiceCategories",
    name: "SAServiceCategories",
    component: SAServiceCategories,
  },
  {
    path: "/AddCatigory",
    name: "AddCatigory",
    component: AddCatigory,
  },
  {
    path: "/AddServiceSA",
    name: "AddServiceSA",
    component: AddServiceSA,
  },
  {
    path: "/AddWorker",
    name: "AddWorker",
    component: AddWorker,
  },
  {
    path: "/PlumbingView",
    name: "PlumbingView",
    component: PlumbingView,
  },
  {
    path: "/CarpentryView",
    name: "CarpentryView",
    component: CarpentryView,
  },
  {
    path: "/MovingfurnitureView",
    name: "MovingfurnitureView",
    component: MovingfurnitureView,
  },
  {
    path: "/HouseguardView",
    name: "HouseguardView",
    component: HouseguardView,
  },
  {
    path: "/DriverView",
    name: "DriverView",
    component: DriverView,
  },
  {
    path: "/CXprofileView",
    name: "CXprofileView",
    component: CXprofileView,
  },
  {
    path: "/SAAgencyProfile",
    name: "SAAgencyProfile",
    component: SAAgencyProfile,
  },
  {
    path: "/AdminAgencyProfile",
    name: "AdminAgencyProfile",
    component: AdminAgencyProfile,
  },
  {
    path: "/Services/:id",
    name: "ServicesidView",
    component: ServicesidView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to) => {
  // token
  const userData = JSON.parse(localStorage.getItem("cxInfo"));
  const agencyData = JSON.parse(localStorage.getItem("agInfo"));
  const suber_adminData = JSON.parse(localStorage.getItem("saInfo"));

  if (userData == null && agencyData == null && suber_adminData == null) {
    // not authenticated user or agency or suber admin
    if (
      // agency
      to.name == "WorkerPageDashboard" ||
      to.name == "ServiceHistoryAgency" ||
      to.name == "AgancyDash" ||
      to.name == "dashReviews" ||
      to.name == "AllWorker" ||
      // customer
      to.name == "paymentDetails" ||
      to.name == "WriteReview" ||
      to.name == "BookingPage"
    ) {
      return "/login";
    } else if (
      // suberadmin
      to.name == "allAgencies" ||
      to.name == "ServiceHistorySA" ||
      to.name == "AddAgency" ||
      to.name == "SADashHome" ||
      to.name == "SACatigory" ||
      to.name == "SAServiceCategories" ||
      to.name == "AddCatigory" ||
      to.name == "AddServiceSA" ||
      to.name == "AddWorker" ||
      to.name == "AdminAgencyProfile" ||
      to.name == "SAAgencyProfile"
    ) {
      return "/cpanel-login";
    }
  } else if (
    userData != null &&
    agencyData == null &&
    suber_adminData == null
  ) {
    // authenticated user but not agency or suber admin
    if (
      to.name == "login" ||
      to.name == "signup" ||
      to.name == "reset-password" ||
      to.name == "reset-password-confirm" ||
      to.name == "setup-password" ||
      // agency
      to.name == "WorkerPageDashboard" ||
      to.name == "ServiceHistoryAgency" ||
      to.name == "AgancyDash" ||
      to.name == "dashReviews" ||
      to.name == "AllWorker" ||
      // suber admin
      to.name == "allAgencies" ||
      to.name == "ServiceHistorySA" ||
      to.name == "AddAgency" ||
      to.name == "SADashHome" ||
      to.name == "SACatigory" ||
      to.name == "SAServiceCategories" ||
      to.name == "AddCatigory" ||
      to.name == "AddServiceSA" ||
      to.name == "AddWorker" ||
      to.name == "AdminAgencyProfile" ||
      to.name == "SAAgencyProfile"
    ) {
      return "/";
    }
  } else if (
    userData == null &&
    agencyData != null &&
    suber_adminData == null
  ) {
    // authenticated agency but not user or suber admin
    if (
      to.name == "login" ||
      to.name == "signup" ||
      to.name == "reset-password" ||
      to.name == "reset-password-confirm" ||
      to.name == "setup-password" ||
      // customer
      to.name == "paymentDetails" ||
      to.name == "WriteReview" ||
      to.name == "BookingPage" ||
      // suberadmin
      to.name == "allAgencies" ||
      to.name == "ServiceHistorySA" ||
      to.name == "AddAgency" ||
      to.name == "SADashHome" ||
      to.name == "SACatigory" ||
      to.name == "SAServiceCategories" ||
      to.name == "AddCatigory" ||
      to.name == "AddServiceSA" ||
      to.name == "AddWorker" ||
      to.name == "AdminAgencyProfile" ||
      to.name == "SAAgencyProfile"
    ) {
      return "/agancydash";
    }
  } else if (
    userData == null &&
    agencyData == null &&
    suber_adminData != null
  ) {
    // authenticated suber admin but not user or agency
    if (
      to.name == "cpanel-login" ||
      to.name == "cpanel-signup" ||
      to.name == "cpanel-reset-password" ||
      to.name == "cpanel-reset-password-confirm" ||
      to.name == "cpanel-setup-password" ||
      // agency
      to.name == "WorkerPageDashboard" ||
      to.name == "ServiceHistoryAgency" ||
      to.name == "AgancyDash" ||
      to.name == "dashReviews" ||
      to.name == "AllWorker" ||
      // customer
      to.name == "paymentDetails" ||
      to.name == "WriteReview" ||
      to.name == "BookingPage"
    ) {
      return "/SADashHome";
    }
  } else if (
    userData == null &&
    agencyData != null &&
    suber_adminData != null
  ) {
    // authenticated suber admin and agency but not user
    if (
      to.name == "cpanel-login" ||
      to.name == "cpanel-signup" ||
      to.name == "cpanel-reset-password" ||
      to.name == "cpanel-reset-password-confirm" ||
      to.name == "cpanel-setup-password" ||
      to.name == "login" ||
      to.name == "signup" ||
      to.name == "reset-password" ||
      to.name == "reset-password-confirm" ||
      to.name == "setup-password" ||
      // customer
      to.name == "paymentDetails" ||
      to.name == "WriteReview" ||
      to.name == "BookingPage"
    ) {
      return "/";
    }
  } else if (
    userData != null &&
    agencyData == null &&
    suber_adminData != null
  ) {
    // authenticated suber admin and user but not agency
    if (
      to.name == "cpanel-login" ||
      to.name == "cpanel-signup" ||
      to.name == "cpanel-reset-password" ||
      to.name == "cpanel-reset-password-confirm" ||
      to.name == "cpanel-setup-password" ||
      to.name == "login" ||
      to.name == "signup" ||
      to.name == "reset-password" ||
      to.name == "reset-password-confirm" ||
      to.name == "setup-password" ||
      // agency
      to.name == "WorkerPageDashboard" ||
      to.name == "ServiceHistoryAgency" ||
      to.name == "AgancyDash" ||
      to.name == "dashReviews" ||
      to.name == "allAgencies" ||
      to.name == "AllWorker"
    ) {
      return "/";
    }
  }
});

export default router;
