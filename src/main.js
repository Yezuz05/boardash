import Vue from 'vue';
import App from './App.vue';
import router from './router';

import {
  MdButton,
  MdToolbar,
  MdIcon,
  MdAvatar,
  MdCard,
  MdList,
  MdDivider,
  MdCheckbox,
  MdProgress
} from 'vue-material/dist/components';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';

import Axios from 'axios';

Axios.defaults.baseURL = 'https://api.github.com';
Axios.defaults.headers = { accept: 'application/vnd.github.v3+json' };

Vue.use(MdToolbar);
Vue.use(MdCard);
Vue.use(MdButton);
Vue.use(MdAvatar);
Vue.use(MdIcon);
Vue.use(MdList);
Vue.use(MdDivider);
Vue.use(MdCheckbox);
Vue.use(MdProgress);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
