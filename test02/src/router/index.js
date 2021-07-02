import {
  createRouter,
  createWebHistory
} from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
// import DataBinding from "../views/DataBinding.vue";
// import DataBindingHtml from "../views/DataBindingHtml.vue";
import box from "../views/box.vue";

const routes = [{
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  // {
  //   path: "/databinding",
  //   name: "DataBinding",
  //   component: DataBinding,
  // },
  // {
  //   path: "/databindinghtml",
  //   name: "DataBindingHtml",
  //   component: DataBindingHtml,
  // },
  {
    path: "/box",
    name: "box",
    component: box,
  }
  // , {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import( /* webpackChunkName: "about" */ "../views/About.vue"),
  // },
  // {
  //   path: "/databinding",
  //   name: "DataBinding",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import( /* webpackPrefetch:true,  webpackChunkName: "databinding" */ "../views/DataBinding.vue"),
  // }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;