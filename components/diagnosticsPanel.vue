<template>
  <v-expansion-panel>
    <blockquote class="blockquote">
      Diagnostics
    </blockquote>
    <v-expansion-panel-content
      v-for="i in opportunities.length"
      :key="i"
    >
      <div slot="header">{{ opportunities[i - 1].title }}</div>
      <v-card>
        <v-card-text>{{ opportunities[i - 1].description }}</v-card-text>
        <v-card-text> {{ opportunities[i - 1].displayValue }} </v-card-text>
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
      opportunities: helperFunctions.diagnosticsSearch(this.resultsdata)
      }
  },

  mounted () {
    this.opportunities = helperFunctions.diagnosticsSearch(this.resultsdata)
  }
}
</script>

