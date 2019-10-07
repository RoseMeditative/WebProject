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
    
                        <v-btn v-on:click="newUser" class="mx-12" fab dark color="green">
                         <v-icon dark>mdi-check</v-icon>
                        </v-btn>
    
                    </v-container>
    
    
                    <v-container v-if="Register">
                        <h1>Connection</h1>
                        <v-text-field v-model="username" label="Username" required></v-text-field>
                        <v-text-field v-model="password" label="Password" type="password" required></v-text-field>

                        <v-btn v-on:click="login" class="mx-12" fab dark color="green">
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
    username: '',
    password: '',
    //newPassword:'',
    //newLog:'',
    todos: [],
    url: 'http://localhost:4000'
  }),
 
 
 
 methods: {
    async login () {
      // connecter l'utilisateur
      const response = await this.axios.post(this.url + '/api/login', {login: this.username,password: this.password})
      //console.log('response is:', response)
      console.log('CONNECTION !')
      this.message = response.data.message

      if (this.message === 'connected') {
      this.notConnect=false
      
    console.log('CONNECTE !')
      }
    },
    
    async onClickNotRegister () {
    this.notRegister=true
    this.Register=false
    },

    async onClickRegister () {
    this.notRegister=false
    this.Register=true
    },

    async newUser () {
    const response = await this.axios.post(this.url + '/api/newUser', {login: this.username,password: this.newPassword})
    this.message = response.data.message
    },

    logout () {
    },
    
  }
}
</script>
