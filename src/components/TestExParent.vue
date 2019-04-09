<template>
    <div class="testex-parent">
        PARENT COMPONENT
        <TestExInfo></TestExInfo>
    </div>
</template>

<script>
import TestExInfo from '@/components/TestExInfo.vue';

export default {
  components: {
    TestExInfo,
  },
};
</script>

<style>
    .testex-parent {
        border: blue solid medium;
        background-color: aqua;
        padding: 10px;
        min-width: 200px;
        min-height: 100px;
    }
</style>