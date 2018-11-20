<template>
  <div>
    <div>
      <blockquote class="blockquote">
        {{ title[0] }} in {{ loadtimes[0] }}
      </blockquote>
      <v-progress-linear
        :color="colour[0]"
        :value="value[0]"
        height="10"
      />
      <blockquote class="blockquote">
        {{ title[1] }} in {{ loadtimes[1] }}
      </blockquote>
      <v-progress-linear
        :color="colour[1]"
        :value="value[1]"
        height="10"
      />
      <blockquote class="blockquote">
        {{ title[2] }} in {{ loadtimes[2] }}
      </blockquote>
      <v-progress-linear
        :color="colour[2]"
        :value="value[2]"
        height="10"
      />
      <blockquote class="blockquote">
        {{ title[3] }} in {{ loadtimes[3] }}
      </blockquote>
      <v-progress-linear
        :color="colour[3]"
        :value="value[3]"
        height="10"
      />
      <blockquote class="blockquote">
        {{ title[4] }} in {{ loadtimes[4] }}
      </blockquote>
      <v-progress-linear
        :color="colour[4]"
        :value="value[4]"
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
