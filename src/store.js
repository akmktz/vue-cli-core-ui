import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    testData: 'Test',
  },
  getters: {
    getTestData: state => 'testData = ' + state.testData,
  },
  mutations: {
    setTestData(state, value) {
      state.testData = value;
    },
    setTestDataFromAPI(state) {
      axios.get('https://rapidapi.p.rapidapi.com/')
        .then((response) => {
          state.testData = 'API: ' + response.statusText;
        })
        .catch((error) => {
          state.testData = 'ERR: ' + error.response.statusText;
        });
    },
  },
  actions: {

  },
});
