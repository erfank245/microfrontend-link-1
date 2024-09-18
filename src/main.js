import "./set-public-path";
import singleSpaVue from 'single-spa-vue';
import { createWebHistory, createRouter } from "vue-router";
import {} from "vue-router"
import { h, createApp } from "vue";

import App from "./App.vue";
import Link1 from "./component/Link1.vue";

const routes = [
  {path: "/link-1", component: Link1}
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

const vueLifecycles = singleSpaVue({
  createApp,
  appOptions: {
    render() {
      return h(App);
    },
  },
  handleInstance: (app) => {
    app.use(router);
  },
});

export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;
