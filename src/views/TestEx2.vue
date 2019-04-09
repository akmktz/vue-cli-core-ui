<template>
  <div class="testex">
    <h2>TESTEX 2</h2>
    <TestExParent></TestExParent>
    <hr>
    <TestExInfo></TestExInfo>
  </div>
</template>

<script>
import TestExInfo from '@/components/TestExInfo.vue';
import TestExParent from '@/components/TestExParent.vue';

export default {
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
