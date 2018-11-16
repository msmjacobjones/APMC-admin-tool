<template>
  <v-flex xs10>
    <chartjs-bar 
      :beginzero="beginZero"
      :datalabel="title"
      :labels="labels"
      :data="data"/>
    <blockquote class="blockquote">
      &#8220;First, solve the problem. Then, write the code.&#8221;
      {{ myTest }}
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
      title: this.title,
      myTest: '',
      interval: {},
      value: 0,
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
  },
    methods: {
    init(){
      console.log(this.$route.query.page)
    }
  },
  mounted() {
    this.init()
  }
}
</script>
