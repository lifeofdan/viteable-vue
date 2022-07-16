import { createRouter, createWebHistory } from "vue-router";
import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import "../index.css";
import routes from "./routes/index";

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount("#app");
