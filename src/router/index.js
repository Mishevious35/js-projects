import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "../views/Dashboard.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "dashboard",
    component: Dashboard,
  },
  {
    path: "/example",
    name: "example",

    component: () =>
      import(/* webpackChunkName: "example" */ "../views/Example.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
