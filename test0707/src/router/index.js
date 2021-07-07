import {
  createRouter,
  createWebHistory
} from "vue-router";
import Home from "../views/Home.vue";
import naverlogin2 from "../views/naverlogin2.vue";


const routes = [{
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( /* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/naverlogin2",
    name: "naverlogin2",
    component: naverlogin2,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;