<template>
  <v-layout>
    <v-flex 
      v-for="i in 5" 
      :key="`1${i}`" 
      xs2>
      <div class="text-xs-center">
        <blockquote class="blockquote">
          {{ title[i - 1] }}
        </blockquote>
        <v-progress-circular
          :rotate="-90"
          :size="100"
          :width="15"
          :value="value[i - 1]"
          :color="colour[i - 1]"
        >
          {{ value[i - 1] }}
        </v-progress-circular>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import helperFunctions from '../helpers/helperFunctions.js'
import results from '../assets/Desktop/results.report.json'

export default {
  data() {
    /*eslint-disable */
    return {
      value: helperFunctions.averageMetricsTable(),
      title: helperFunctions.getTitle(results),
      colour: []
    }
  },
  mounted () {
    for(var i = 0; i < this.value.length; i++) {
        if (this.value[i] < 50) {
          this.colour.push('red')
      } else if (this.value[i] > 70) {
        this.colour.push('green')
      } else {
        this.colour.push('orange')
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .v-progress-circular
    margin: 1rem
</style>
