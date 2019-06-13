import '@babel/polyfill';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Icon from 'vue-awesome/components/Icon';

import VueEcho from 'vue-echo-laravel';
// import SocketIOClient from 'socket.io-client';

import './plugins/axios';
import './plugins/bootstrap-vue';
import './plugins/vue-auth';
import 'vue-awesome/icons/flag';
import 'vue-awesome/icons';

// Vue.use(VueEcho, {
//   broadcaster: 'socket.io',
//   host: 'localhost:6001',
//   client: SocketIOClient,
// });

const bearerToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vYXBpLnNwZWFyYWQubG9jYWwvYXBpL3VzZXJzL2xvZ2luIiwiaWF0IjoxNTYwNDE0NjE1LCJleHAiOjE1NjA1MDEwMTUsIm5iZiI6MTU2MDQxNDYxNSwianRpIjoicFd2cjhtUDB6RWs2Rlg3SSIsInN1YiI6MSwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyIsImlkIjoxLCJsb2dpbiI6ImFkbWluQGVtYWlsLmNvbSJ9.e35YbxTBPlWmI9qMoaQsrLtD2UI98HKLQCgAiNvS-xk';

window.Pusher = require('pusher-js');

Vue.use(VueEcho, {
  namespace: '',
  broadcaster: 'pusher',
  key: 'zz',

  wsHost: 'api.spearad.local',
  wsPort: 6001,

  authEndpoint: 'http://api.spearad.local/api/broadcasting/auth',
  auth: {
    headers: {
      Authorization: 'Bearer ' + bearerToken,
    },
  },
});

Vue.component('v-icon', Icon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
