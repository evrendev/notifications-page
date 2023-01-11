import App from "./App.vue";
import { createApp } from "vue";
import { pinia } from "./plugins";

const app = createApp(App);
app.use(pinia).mount("#app");
