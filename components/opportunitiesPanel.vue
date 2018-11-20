<template>
  <v-expansion-panel>
    <blockquote class="blockquote">
      Opportunities
    </blockquote>
    <v-expansion-panel-content
      v-for="i in 4"
      :key="i"
    >
      <div slot="header">{{ mystuff[i - 1].title }}</div>
      <v-card>
        <v-card-text>{{ mystuff[i - 1].description }}</v-card-text>
        <v-card-text>{{ mystuff[i - 1].displayValue }}</v-card-text>
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
      value: helperFunctions.audits(this.resultsdata),
      mystuff: helperFunctions.search(this.resultsdata)
    }
  },

  mounted () {
    this.mystuff = helperFunctions.search(this.resultsdata)
  }
}
</script>

<style lang="stylus" scoped>
  .v-progress-circular
    margin: 1rem
</style>
