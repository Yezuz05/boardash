import Vue from 'vue';
import App from './App.vue';
import router from './router';

import {
  MdButton,
  MdToolbar,
  MdIcon,
  MdAvatar
} from 'vue-material/dist/components';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';

Vue.use(MdButton);
Vue.use(MdToolbar);
Vue.use(MdAvatar);
Vue.use(MdIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
