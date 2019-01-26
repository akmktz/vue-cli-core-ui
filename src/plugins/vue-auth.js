import Vue from 'vue';

import VueAuth from '@websanova/vue-auth';
import router from '../router';

Vue.router = router;

Vue.use(VueAuth, {
  auth: {
    request(req, token) {
      this.options.http._setHeaders.call(this, req, {Authorization: 'Bearer ' + token});
    },

    response: (response) => {
      return response.data.token;
    },
  },
  http: require('@websanova/vue-auth/drivers/http/axios.1.x.js'),
  router: require('@websanova/vue-auth/drivers/router/vue-router.2.x.js'),
  loginData: {
    url: 'login',
    method: 'POST',
    redirect: '/about',
    fetchUser: true,
  },
  logoutData: {
    url: 'logout',
    method: 'POST',
    redirect: '/login',
    makeRequest: false,
  },
  fetchData: {
    url: 'user',
    method: 'GET',
    enabled: true,
  },
  refreshData: {
    url: 'refresh',
    method: 'GET',
    enabled: false,
    interval: 300,
  },
  parseUserData: user => user,
});
