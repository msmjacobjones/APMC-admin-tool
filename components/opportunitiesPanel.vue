<template>
  <v-expansion-panel>
    <blockquote class="blockquote">
      Opportunities
    </blockquote>
    <v-expansion-panel-content
      v-for="i in 3"
      :key="i"
    >
      <div slot="header">{{ opportunities[i - 1].title }}</div>
      <v-card>
        <v-card-text>{{ opportunities[i - 1].description }}</v-card-text>
        <v-card-text>Potential savings of {{ (opportunities[i - 1].details.overallSavingsMs * 0.001).toFixed(2) }} Seconds</v-card-text>
      </v-card>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
import helperFunctions from '../helpers/helperFunctions.js'

export default {
  props: {
    resultsdata: {
      type: Object,
      required: true
    }
  },
  data() {
    /*eslint-disable */
    return {
      opportunities: helperFunctions.search(this.resultsdata)
    }
  },

  mounted () {
    this.opportunities = helperFunctions.search(this.resultsdata)
  }
}
</script>

