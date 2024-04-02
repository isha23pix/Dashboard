

import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";

import MaskGroup from "./pages/MaskGroup.vue";
import "./global.css";


import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import vuetifyConfig from '@/plugins/vuetify';

const vuetify = createVuetify({
  components,
  directives,
})

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: MaskGroup,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((toRoute, _, next) => {
  const metaTitle = toRoute?.meta?.title;
  const metaDesc = toRoute?.meta?.description;

  window.document.title = metaTitle || "Dashboard";
  if (metaDesc) {
    addMetaTag(metaDesc);
  }
  next();
});

const addMetaTag = (value) => {
  const element = document.querySelector(`meta[name='description']`);
  if (element) {
    element.setAttribute("content", value);
  }
};

createApp(App).use(router).use(vuetify).use(vuetifyConfig).mount("#app");

export default router;
