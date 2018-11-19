<template>
  <v-layout>
    <div class="text-xs-center">
      <blockquote class="blockquote">
        {{ resultsdata.categories.performance.title }}
      </blockquote>
      <v-progress-circular
        :rotate="-90"
        :size="100"
        :width="15"
        :value="value[0]"
        :color="colour[0]"
      >
        {{ value[0] }}
      </v-progress-circular>
      <blockquote class="blockquote">
        {{ resultsdata.categories.pwa.title }}
      </blockquote>
      <v-progress-circular
        :rotate="-90"
        :size="100"
        :width="15"
        :value="value[1]"
        :color="colour[1]"
      >
        {{ value[1] }}
      </v-progress-circular>
      <blockquote class="blockquote">
        {{ resultsdata.categories.accessibility.title }}
      </blockquote>
      <v-progress-circular
        :rotate="-90"
        :size="100"
        :width="15"
        :value="value[2]"
        :color="colour[2]"
      >
        {{ value[2] }}
      </v-progress-circular>
      <blockquote class="blockquote">
        {{ resultsdata.categories['best-practices'].title }}
      </blockquote>
      <v-progress-circular
        :rotate="-90"
        :size="100"
        :width="15"
        :value="value[3]"
        :color="colour[3]"
      >
        {{ value[3] }}
      </v-progress-circular>
      <blockquote class="blockquote">
        {{ resultsdata.categories.seo.title }}
      </blockquote>
      <v-progress-circular
        :rotate="-90"
        :size="100"
        :width="15"
        :value="value[4]"
        :color="colour[4]"
      >
        {{ value[4] }}
      </v-progress-circular>
    </div>
  </v-layout>
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
      value: helperFunctions.getScore(this.resultsdata),
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
