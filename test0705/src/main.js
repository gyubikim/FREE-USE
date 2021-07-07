import {
  createApp
} from "vue";
import App from "./App.vue";
import router from "./router";

import store from "./store/store";

createApp(App).use(store).use(router).mount("#app");

Window.Kakao.init('6159fefafbf8a5a49d9ea950516465f3');
Window.Kakao.isInitialized();