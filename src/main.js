import "./set-public-path";
import singleSpaVue from 'single-spa-vue';
import { createMemoryHistory, createRouter } from "vue-router";
import { h, createApp } from "vue";

import App from "./App.vue";

const routes = [
  { path: "/", exact: true, redirect: '/link-1'}
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

const vueLifecycles = singleSpaVue({
  createApp,
  appOptions: {
    render() {
      return h(App, {
        links: this.links,
        name: this.name,
        mountParcel: this.mountParcel,
        // singleSpa: this.singleSpa,
      });
    },
  },
  handleInstance: (app) => {
    app.use(router);
  },
});

export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;
