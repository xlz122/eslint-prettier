<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <p>{{ msg }}</p>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const msg = ref<string>('hello world');

    return {
      msg
    };
  }
});
</script>

<style>
#app {
  margin: 30px auto;
  text-align: center;
}
</style>
