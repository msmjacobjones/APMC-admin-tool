<template>
  <v-flex xs10>
    <chartjs-bar 
      :beginzero="beginZero"
      :labels="labels"
      :data="data"
      :datalabel="title"/>
    <blockquote class="blockquote">
      &#8220;First, solve the problem. Then, write the code.&#8221;
    </blockquote>
  </v-flex>
</template>

<script>
import data from '../assets/Desktop/results.report.json'
import helperFunctions from '../helpers/helperFunctions.js'

export default {
  props: {
    resultsdata: {
      type: Object,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      /*eslint-disable */
      beginZero: true,
      labels: [
        data.categories.performance.title,
        data.categories.pwa.title,
        data.categories.accessibility.title,
        data.categories.seo.title
      ],
      data: helperFunctions.getScore(this.resultsdata),
      headers: [
        {
          text: 'Lighthouse Report',
          align: 'left',
          sortable: false,
          value: 'name'
        }
      ],
    }
  }
}
</script>
