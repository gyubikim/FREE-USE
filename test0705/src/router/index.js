import {
  createRouter,
  createWebHistory
} from "vue-router";
import Home from "../views/Home.vue";
import KakaoLogin from "../views/KakaoLogin.vue";
import NaverLogin from "../views/NaverLogin.vue";



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
    path: "/kakaologin",
    name: "kakaologin",
    component: KakaoLogin,
  },
  {
    path: "/naverlogin",
    name: "NaverLogin",
    component: NaverLogin,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;