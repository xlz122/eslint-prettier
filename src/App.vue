<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <p>{{ msg }}</p>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'App',
  setup() {
    const msg = ref<string>('hello wrold');

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
