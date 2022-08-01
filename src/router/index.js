import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/homevmodel",
    name: "homeVModel",
    component: () =>
      import(
        /* webpackChunkName: "HomeVModelView" */ "@/views/HomeVModelView.vue"
      ),
  },
  // Catch all / 404 Not found Route
  {
    path: "*",
    name: "NotFound404",
    component: () =>
      import(
        /* webpackChunkName: "NotFound404View" */ "@/views/NotFound404View.vue"
      ),
  },
  // Catch all / 404 Not found Route - Redireciona para `/`
  // {
  //   path: "*",
  //   redirect: "/"
  // },
  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  // },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
