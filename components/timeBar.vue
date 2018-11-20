<template>
  <div>
    <div 
      v-for="i in 5" 
      :key="i" >
      <blockquote class="blockquote">
        {{ title[i -1 ] }} in {{ loadtimes[i -1] }}
      </blockquote>
      <v-progress-linear
        :color="colour[i - 1]"
        :value="value[i - 1]"
        height="10"
      />
    </div>
  </div>
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
      value: helperFunctions.getPaintData(this.resultsdata),
      title: helperFunctions.getPaintTitle(this.resultsdata),
      loadtimes: helperFunctions.getPaintValue(this.resultsdata),
      colour: []
    }
  },
  mounted () {
    for(var i = 0; i < this.value.length; i++) {
        if (this.value[i] > 50) {
          this.colour.push('red')
      } else if (this.value[i] < 10) {
        this.colour.push('green')
      } else {
        this.colour.push('orange')
      }
    }
  }
}
</script>
