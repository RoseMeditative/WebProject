<template>
  <v-app>
<v-parallax src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"></v-parallax>
    <v-content class="mx-auto">
      <HelloWorld/>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/Page';

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
  data: () => ({
    //
  }),
};
</script>
