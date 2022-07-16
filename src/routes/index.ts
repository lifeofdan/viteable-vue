import { RouteRecordRaw } from "vue-router";
import DefaultLayout from "../layouts/default.vue";
import Index from "../pages/index.vue";
const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      {
        path: "",
        component: Index,
      },
    ],
  },
];

export default routes;
