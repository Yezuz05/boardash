import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from './views/dashboard/Dashboard.vue';
import Messages from './views/dashboard/Messages.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/dashboard'
    },
    {
      path: '/dashboard',
      component: Dashboard,
      children: [
        { path: '', redirect: 'messages' },
        { path: 'messages', name: 'messages', component: Messages }
      ]
    }
  ]
});
