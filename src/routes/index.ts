import { RouteRecordRaw } from "vue-router";
import DefaultLayout from "../layouts/default.vue";
import Index from "../pages/index.vue";
import Ui from "../pages/ui.vue";
const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      {
        path: "",
        component: Index,
      },
      {
        path: "/ui",
        component: Ui,
      }
    ],
  },
];

export default routes;
