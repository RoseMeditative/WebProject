<template>  
  <v-app>

    <v-parallax src="https://images7.alphacoders.com/958/958598.jpg">
      <v-row align="center" justify="center">
        <h1>ET TOI QUE PREFERES-TU ?</h1>
      </v-row>
    </v-parallax>
    <v-content class="mx-auto">
      <HelloWorld />
    </v-content>

  </v-app>
</template>


<script>

//IMPORT FILES.VUE
import HelloWorld from "./components/Page";

//DATA & COMPONENTS.VUE
export default {
  name: "App",

  components: {HelloWorld},

  data: () => ({})
};
</script>
