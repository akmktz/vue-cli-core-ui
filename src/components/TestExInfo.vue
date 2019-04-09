<template>
    <div class="testex-info">
        <div>State: {{ testData }}</div>
        <div>Getter: {{ getTestData }}</div>
        <input v-model="newData" type="text"> <button @click.stop="changeData()">Change</button>
        <button @click.stop="changeDataAPI()">Change from api</button>
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
  data: () => ({
    newData: 'Test Changed!!!',
  }),
  computed: {
    ...mapState({
      testData: state => state.testData,
    }),
    ...mapGetters([
      'getTestData',
    ]),
  },
  methods: {
    changeData() {
      this.$store.commit('setTestData', this.newData);
    },
    changeDataAPI() {
      this.$store.commit('setTestDataFromAPI');
    },
  },
};
</script>

<style>
    .testex-info {
        border: red solid medium;
        min-width: 200px;
        min-height: 100px;
    }
</style>