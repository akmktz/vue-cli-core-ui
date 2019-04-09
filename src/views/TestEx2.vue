<template>
  <div class="testex">
    <h2>TESTEX 2</h2>
    <TestExInfo></TestExInfo>
    <hr>
    <TestExParent></TestExParent>
  </div>
</template>

<script>
import TestExInfo from '@/components/TestExInfo.vue';
import TestExParent from '@/components/TestExParent.vue';

export default {
  name: 'home',
  components: {
    TestExInfo,
    TestExParent,
  },
};
</script>

<style>
  .testex {
    margin-bottom: 20px;
  }
</style>
