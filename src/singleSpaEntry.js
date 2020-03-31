/* eslint-disable import/no-unresolved */
import Vue from 'vue';
import singleSpaVue from 'single-spa-vue';
import App from './App.vue';

import './assets/css/tailwind.css';


Vue.config.productionTip = false;

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    el: '#micro-frontends-layout',
    render: (h) => h(App),
  },
});

export const { bootstrap } = vueLifecycles;
export const { mount } = vueLifecycles;
export const { unmount } = vueLifecycles;
