import {
  createApp
} from "vue";
import App from "./App.vue";
import router from "./router";

import store from "./store/store";

createApp(App).use(store).use(router).mount("#app");

window.Kakao.init('88edb7c5a9d349511f12cc6232d3e1a9');
window.Kakao.isInitialized();