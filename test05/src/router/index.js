import {
  createRouter,
  createWebHistory
} from "vue-router";
import Home from "../views/Home.vue";
import shop from "../views/shop.vue";
import collections from "../views/collections.vue";
import characters from "../views/characters.vue";
import review from "../views/review.vue";

const routes = [{
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/shop",
    name: "shop",
    component: shop,
  },
  {
    path: "/collections",
    name: "collections",
    component: collections,
  },
  {
    path: "/characters",
    name: "characters",
    component: characters,
  },
  {
    path: "/review",
    name: "review",
    component: review,
  },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;