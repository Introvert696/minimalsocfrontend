import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
const Test = "test constanta";

createApp(App).use(store).use(router).mount("#app");
