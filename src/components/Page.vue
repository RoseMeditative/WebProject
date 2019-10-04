<template >
    <v-container >
        
        <v-layout>

            <v-form v-model="valid">

                <v-container v-if="notConnect">

                    <br><br>
                    <div class="center-text">
                    <v-btn v-on:click="onClickNotRegister" rounded color="orange" dark>Not Registered</v-btn>
                    <v-btn v-on:click="onClickRegister" rounded color="blue" dark>Already Registered</v-btn>
                    </div>
                    <v-container v-if="notRegister">
                        <h1>Create your Account</h1>
                        <v-text-field v-model="username" label="Create Username" required></v-text-field>
                        <v-text-field v-model="password" label="Create Password" type="password" required></v-text-field>
                       //fixer ce bouton au centre
                        <v-btn class="mx-12" fab dark color="green">
                         <v-icon dark>mdi-check</v-icon>
                        </v-btn>
                    </v-container>
                    <v-container v-if="Register">
                        <h1>Connection</h1>
                        <v-text-field v-model="username" label="Username" required></v-text-field>
                        <v-text-field v-model="password" label="Password" type="password" required></v-text-field>

                        <v-btn class="mx-12" fab dark color="green">
                         <v-icon dark>mdi-check</v-icon>
                        </v-btn>
                    </v-container>
                </v-container>

            </v-form>

        </v-layout>
    </v-container>
    
</template>

<script>


export default {
  data: () => ({
    valid: false,
    notConnect: true,
    notRegister: false,
    Register: false,
    todos: [],
    url: 'http://localhost:4000'
  }),
 
 
 
 methods: {
    async login () {
      // connecter l'utilisateur
      const response = await this.axios.post(this.url + '/api/login', {
        login: 'admin',
        password: 'admin'
      })
      console.log('response is:', response)
    },
    
async onClickNotRegister () {
    this.notRegister=true
    this.Register=false
    },

    async onClickRegister () {
    this.notRegister=false
    this.Register=true
    },

    logout () {
    },
    
  }
}
</script>
