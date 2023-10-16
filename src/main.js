import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "./scss/main.scss";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import 'popper.js/dist/umd/popper.min.js';
import 'jquery/dist/jquery.min.js';
createApp(App).use(store).use(router).mount("#app");
