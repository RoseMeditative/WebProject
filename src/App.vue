<template>
  <v-app>
    <!-- HOME PICTURE -->

    <v-parallax src="https://images7.alphacoders.com/958/958598.jpg">
      <v-row align="center" justify="center">
        <h1>What will you choose ?</h1>
      </v-row>
    </v-parallax>

    <!-- MAIN FRONT -->

    <v-form v-model="valid">
      <v-container v-if="notConnect===false">
        <!-- IF USER IS CONNECTED -->
        <v-row align="center" justify="center">
          <h1>Ok {{username}}, Let's play !</h1>
          <v-btn v-on:click="logout" class="ma-12" tile color="red">Quit</v-btn>
        </v-row>
        <!-- QUESTIONS -->
        <questPage />
      </v-container>

      <v-container v-if="notConnect">
        <!-- IF USER NOT CONNECTED -->
        <br />
        <br />
        <v-row align="center" justify="center">
          <div class="center-text">
            <v-btn v-on:click="onClickNotRegister" rounded color="orange" dark>Not Registered</v-btn>
            <v-btn v-on:click="onClickRegister" rounded color="blue" dark>Already Registered</v-btn>
          </div>

          <v-container v-if="notRegister">
            <!-- ADD USER FORM -->
            <h1 align="center" justify="center">Create your Account</h1>
            <v-text-field v-model="username" label="Create Username" required></v-text-field>
            <v-text-field v-model="password" label="Create Password" type="password" required></v-text-field>
            <v-row align="center" justify="center">
              <v-btn v-on:click="newUser" class="mx-12" fab dark color="green">
                <v-icon dark>mdi-check</v-icon>
              </v-btn>
            </v-row>
          </v-container>

          <v-container v-if="Register">
            <!-- REGISTER FORM -->
            <h1 align="center" justify="center">Connection</h1>
            <v-text-field v-model="username" label="Username" required></v-text-field>
            <v-text-field v-model="password" label="Password" type="password" required></v-text-field>
            <v-row align="center" justify="center">
              <v-btn v-on:click="login" class="mx-12" fab dark color="green">
                <v-icon dark>mdi-check</v-icon>
              </v-btn>
            </v-row>
          </v-container>
        </v-row>
      </v-container>
    </v-form>
  </v-app>
</template>




<script>
//IMPORT FILES.VUE
import questPage from "./components/questionsPage";

//DATA & COMPONENTS.VUE
export default {
  name: "App",

  components: { questPage },

  data: () => ({
    valid: false,
    notConnect: true,
    notRegister: false,
    Register: false,
    username: "",
    password: "",
    todos: [],
    url: "http://localhost:4000"
  }),

  //METHODS
  methods: {
    //LOG USER
    async login() {
      const response = await this.axios.post(this.url + "/api/login", {
        login: this.username,
        password: this.password
      });
      //console.log('response is:', response)
      console.log("CONNECTION !");
      this.message = response.data.message;

      if (this.message === "connected") {
        this.notConnect = false;
        alert("CONNECTED !");
      }
    },

    //PRINT FORM TO REGISTER
    async onClickNotRegister() {
      this.notRegister = true;
      this.Register = false;
    },

    //PRINT FORM TO CONNECT
    async onClickRegister() {
      this.notRegister = false;
      this.Register = true;
    },

    //ADD NEW USER
    async newUser() {
      const response = await this.axios.post(this.url + "/api/newUser", {
        login: this.username,
        password: this.password
      });
      this.message = response.data.message;
      alert("SUCCESSFULY ADDED !");
    },

    //LOG OUT USER
    async logout() {
      const response = await this.axios.post(this.url + "/api/logout", {});
      this.message = response.data.message;
      if (response.data.message === "disconnected") {
        alert("Currently Disconected");
        this.notConnect = true;

        //IMPLIQUE BLABLABLA
      }
    }
  }
};
</script>
