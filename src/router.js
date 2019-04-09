import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';

import TestEx from './views/TestEx.vue';
import TestEx2 from './views/TestEx2.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', name: 'home', component: Home, meta: { auth: true } },
    { path: '/about', name: 'about', component: About, meta: { auth: true }  },
    { path: '/profile', name: 'profile', component: About, meta: { auth: false }  },
    { path: '/login', name: 'login', component: About, meta: { auth: false }  },
    { path: '/register', name: 'register', component: About, meta: { auth: false }  },

    { path: '/testex', name: 'testex', component: TestEx, meta: { auth: false }  },
    { path: '/testex2', name: 'testex2', component: TestEx2, meta: { auth: false }  },
  ],
});
