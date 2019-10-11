<template>
  <v-app>
    <!-- QUESTIONS TIMELINE-->
    <v-timeline :dense="$vuetify.breakpoint.smAndDown">
      <!-- QUESTION 1-->
      <v-timeline-item color="purple lighten-2" fill-dot right>
        <v-card>
          <v-card-title class="purple lighten-2">
            <h2 class="display-1 white--text font-weight-light">Tu préfères</h2>
          </v-card-title>
          <v-container>
            <v-row>
              <!-- QUEST-->
              <v-col cols="12" md="10">Avoir tout le temps faim OU Avoir tout le temps soif ?</v-col>
              <v-col class="hidden-sm-and-down text-right" md="2"></v-col>
              <!-- ANSW-->
              
              <v-row align="center" justify="center">
              <v-btn v-if="answ1===false" v-on:click="logout" rounded color="pink" dark>Faim</v-btn>
              <v-btn v-if="answ1===false" v-on:click="logout" rounded color="orange" dark>Soif</v-btn>
              <v-btn v-if="answ1===true" class="ma-2" outlined color="pink">Reponse %</v-btn>
              <v-btn v-if="answ1===true" class="ma-2" outlined color="orange">Reponse %</v-btn>
            </v-row>
            </v-row>
          </v-container>
        </v-card>
      </v-timeline-item>

      <!-- QUESTION 2-->
      <v-timeline-item color="amber lighten-1" fill-dot left small>
        <v-card>
          <v-card-title class="amber lighten-1 justify-end">
            <h2 class="display-1 mr-4 white--text font-weight-light">Tu préfères</h2>
          </v-card-title>
          <v-container>
            <v-row>
              <!-- QUEST-->
              <v-col cols="12" md="10">Vivre le même jour toute ta vie OU Oublier chaque jour ce que tu as fait la veille ?</v-col>
              <v-col class="hidden-sm-and-down text-right" md="2"></v-col>
              <!-- ANSW-->
              <v-row align="center" justify="center">
              <v-btn v-on:click="logout" rounded color="pink" dark>Meme jour</v-btn>
              <v-btn v-on:click="logout" rounded color="orange" dark>Oublier</v-btn>
            </v-row>
            </v-row>
          </v-container>
        </v-card>
      </v-timeline-item>

      <!-- QUESTION 3-->
      <v-timeline-item color="cyan lighten-1" fill-dot right>
        <v-card>
          <!-- TITLE-->
          <v-card-title class="cyan lighten-1">
            <h2 class="display-1 white--text font-weight-light">Tu préfères</h2>
          </v-card-title>
          <v-container>
            <v-row>
              <!-- QUEST-->
              <v-col cols="12" md="10">Avoir une trompe sur le ventre OU Avoir un doigt sur le front ?</v-col>
              <v-col class="hidden-sm-and-down text-right" md="2"></v-col>
              <!-- ANSW-->
              <v-row align="center" justify="center">
              <v-btn v-on:click="logout" rounded color="pink" dark>Trompe</v-btn>
              <v-btn v-on:click="logout" rounded color="orange" dark>Doigt</v-btn>
            </v-row>
            </v-row>
          </v-container>
        </v-card>
      </v-timeline-item>

<!-- QUESTION 4-->
      <v-timeline-item color="green lighten-1" fill-dot left small>
        
        <v-card>
          <!-- TITLE-->
          <v-card-title class="green lighten-1 justify-end">
            <h2 class="display-1 mr-4 white--text font-weight-light">Tu préfères</h2>
          </v-card-title>
          <v-container>
            <v-row>
              <!-- QUEST-->
              <v-col class="hidden-sm-and-down" md="2"></v-col>
              <v-col cols="12" md="10">Avoir les pouvoirs de Superman OU Avoir la plus belle femme en tant que petite amie ?</v-col>
             <!-- ANSW-->
             <v-row align="center" justify="center">
              <v-btn v-on:click="logout" rounded color="pink" dark>Superman</v-btn>
              <v-btn v-on:click="logout" rounded color="orange" dark>Belle femme</v-btn>
             </v-row>
            </v-row>
          </v-container>
        </v-card>
      </v-timeline-item>

      <!-- QUESTION 5-->
      <v-timeline-item color="red lighten-1" fill-dot right>
        <v-card>
          <!-- TITLE-->
          <v-card-title class="red lighten-1">
            <h2 class="display-1 white--text font-weight-light">Tu préfères</h2>
          </v-card-title>
          <v-container>
            <v-row>
              <!-- QUEST-->
              <v-col class="hidden-sm-and-down" md="2"></v-col>
              <v-col cols="12" md="10">Voler aussi haut que tu veux mais seulement à 10 kmh OU Voler à 1 m du sol mais aussi vite que tu veux ?</v-col>
              <!-- ANSW-->
              <v-row align="center" justify="center">
              <v-btn v-on:click="logout" rounded color="pink" dark>Aussi haut</v-btn>
              <v-btn v-on:click="logout" rounded color="orange" dark>1m du sol</v-btn>
            </v-row>
            </v-row>
          </v-container>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </v-app>
</template>


<script>
export default {
  answ1=false
}

 methods: {
  
 }
</script>