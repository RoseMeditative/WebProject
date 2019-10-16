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
                <v-btn v-if="answ1===false" v-on:click="addStats(11)" rounded color="pink" dark>Faim</v-btn>
                <v-btn
                  v-if="answ1===false"
                  v-on:click="addStats(12)"
                  rounded
                  color="orange"
                  dark
                >Soif</v-btn>
                <v-btn v-if="answ1===true" class="ma-2" outlined color="pink">{{Data11}}%</v-btn>
                <v-btn v-if="answ1===true" class="ma-2" outlined color="orange">{{Data12}}%</v-btn>
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
              <v-col
                cols="12"
                md="10"
              >Vivre le même jour toute ta vie OU Oublier chaque jour ce que tu as fait la veille ?</v-col>
              <v-col class="hidden-sm-and-down text-right" md="2"></v-col>
              <!-- ANSW-->
              <v-row align="center" justify="center">
                <v-btn
                  v-if="answ2===false"
                  v-on:click="addStats(21)"
                  rounded
                  color="pink"
                  dark
                >Meme jour</v-btn>
                <v-btn
                  v-if="answ2===false"
                  v-on:click="addStats(22)"
                  rounded
                  color="orange"
                  dark
                >Oublier</v-btn>
                <v-btn v-if="answ2===true" class="ma-2" outlined color="pink">{{Data21}}%</v-btn>
                <v-btn v-if="answ2===true" class="ma-2" outlined color="orange">{{Data22}}%</v-btn>
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
              <v-col
                cols="12"
                md="10"
              >Avoir une trompe sur le ventre OU Avoir un doigt sur le front ?</v-col>
              <v-col class="hidden-sm-and-down text-right" md="2"></v-col>
              <!-- ANSW-->
              <v-row align="center" justify="center">
                <v-btn
                  v-if="answ3===false"
                  v-on:click="addStats(31)"
                  rounded
                  color="pink"
                  dark
                >Trompe</v-btn>
                <v-btn
                  v-if="answ3===false"
                  v-on:click="addStats(32)"
                  rounded
                  color="orange"
                  dark
                >Doigt</v-btn>
                <v-btn v-if="answ3===true" class="ma-2" outlined color="pink">{{Data31}}%</v-btn>
                <v-btn v-if="answ3===true" class="ma-2" outlined color="orange">{{Data32}}%</v-btn>
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
              <v-col
                cols="12"
                md="10"
              >Avoir les pouvoirs de Superman OU Avoir la plus belle femme en tant que petite amie ?</v-col>
              <!-- ANSW-->

              <v-row align="center" justify="center">
                <v-btn
                  v-if="answ4===false"
                  v-on:click="addStats(41)"
                  rounded
                  color="pink"
                  dark
                >Superman</v-btn>
                <v-btn
                  v-if="answ4===false"
                  v-on:click="addStats(42)"
                  rounded
                  color="orange"
                  dark
                >Belle femme</v-btn>
                <v-btn v-if="answ4===true" class="ma-2" outlined color="pink">{{Data41}}%</v-btn>
                <v-btn v-if="answ4===true" class="ma-2" outlined color="orange">{{Data42}}%</v-btn>
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
              <v-col
                cols="12"
                md="10"
              >Voler aussi haut que tu veux mais seulement à 10 kmh OU Voler à 1 m du sol mais aussi vite que tu veux ?</v-col>
              <!-- ANSW-->

              <v-row align="center" justify="center">
                <v-btn
                  v-if="answ5===false"
                  v-on:click="addStats(51)"
                  rounded
                  color="pink"
                  dark
                >Aussi haut</v-btn>
                <v-btn
                  v-if="answ5===false"
                  v-on:click="addStats(52)"
                  rounded
                  color="orange"
                  dark
                >1m du sol</v-btn>
                <v-btn v-if="answ5===true" class="ma-2" outlined color="pink">{{Data51}}%</v-btn>
                <v-btn v-if="answ5===true" class="ma-2" outlined color="orange">{{Data52}}%</v-btn>
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
  data: () => ({
    answ1: false,
    answ2: false,
    answ3: false,
    answ4: false,
    answ5: false,
    Data11: 0,
    Data12: 0,
    Data21: 0,
    Data22: 0,
    Data31: 0,
    Data32: 0,
    Data41: 0,
    Data42: 0,
    Data51: 0,
    Data52: 0,
    Data1: 0,
    Data2: 0,
    totalData: 0,
    url: "http://localhost:4000"
  }),

  methods: {
    async addStats(ans) {
      const response = await this.axios.post(this.url + "/api/addStats", {
        ans: ans
      });

      console.log(response);

      this.Data1 = response.data.message1;
      this.Data2 = response.data.message2;
      this.totalData = this.Data1 + this.Data2;
      this.Data1 = (this.Data1 / this.totalData) * 100;
      this.Data2 = (this.Data2 / this.totalData) * 100;

      if (ans === 11 || ans === 12) {
        this.answ1 = true;
        this.Data11 = this.Data1;
        this.Data12 = this.Data2;
      }
      if (ans === 21 || ans === 22) {
        this.answ2 = true;
        this.Data21 = this.Data1;
        this.Data22 = this.Data2;
      }
      if (ans === 31 || ans === 32) {
        this.answ3 = true;
        this.Data31 = this.Data1;
        this.Data32 = this.Data2;
      }
      if (ans === 41 || ans === 42) {
        this.answ4 = true;
        this.Data41 = this.Data1;
        this.Data42 = this.Data2;
      }
      if (ans === 51 || ans === 52) {
        this.answ5 = true;
        this.Data51 = this.Data1;
        this.Data52 = this.Data2;
      }
    }
  }
};
</script>

