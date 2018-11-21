<template>
  <v-container 
    grid-list-md 
    text-xs-center>
    <v-btn 
      color="info"
      @click="download(csvData)">
      Download Lighthouse scores
    </v-btn>
    <v-layout 
      row 
      wrap>
      <v-flex xs12>
        <chartjs-bar 
          :beginzero="beginZero"
          :datalabel="title"
          :labels="labels"
          :data="averageMetricsTable"/>
        <circular-rotate />
        <blockquote class="blockquote">
          Average metrics from all pages.
        </blockquote>
      </v-flex>
      <v-flex 
        wrap
        d-flex 
        child-flex>
        <v-data-table
          :headers="headers"
          :items="averageMetrics"
          hide-actions
          class="elevation-1"
        >
          <template 
            slot="items" 
            slot-scope="props">
            <td>{{ props.item.name }}</td>
            <td class="text-xs-center">{{ props.item.aboutthehome }}</td>
            <td class="text-xs-center">{{ props.item.aboutthepolicyholder }}</td>
            <td class="text-xs-center">{{ props.item.highimpactquestions }}</td>
            <td class="text-xs-center">{{ props.item.homePage }}</td>
            <td class="text-xs-center">{{ props.item.results }}</td>
          </template>
        </v-data-table>
      </v-flex>
      <v-flex xs12>
        <chartjs-line 
          :beginzero="false"
          :datalabel="performanceMetricTitle"
          :labels="performanceLabels"
          :data="averagePerformanceTable"
          :bordercolor="backgroundColor"/>
        <blockquote class="blockquote">
          Average metrics from all pages.
        </blockquote>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import helperFunctions from '../helpers/helperFunctions.js'
import results from '../assets/Desktop/results.report.json'
import circularRotate from '@/components/averageCircularRotate.vue'

export default {
  components: {
    'circular-rotate': circularRotate
  },
  data() {
    return {
      /*eslint-disable */
      beginZero: true,
      backgroundColor: helperFunctions.checkPerformance(),
      title: 'Average metrics from all pages',
      performanceMetricTitle: 'Average Site Performance',
      labels: ['Performance', 'Progressive Web App', 'Accessibility', 'Best practices', 'SEO'],
      performanceLabels: ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      averageMetricsTable: helperFunctions.averageMetricsTable(),
      averagePerformanceTable: helperFunctions.averagePerformanceTable(),
      headers: [
        {
          text: 'Lighthouse Report',
          align: 'left',
          sortable: false,
          value: 'name'
        },
        { text: 'About The Home', value: '' },
        { text: 'About The Policy Holder', value: '' },
        { text: 'High Impact Questions', value: '' },
        { text: 'Home Page', value: '' },
        { text: 'Results Page', value: '' }
      ],
      averageMetrics: helperFunctions.averageMetrics(),
      csvData: helperFunctions.formatforcsv()
    }
  },
  methods: {
    download: function(objArray) {
      var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray
      var str = ''

      for (var i = 0; i < array.length; i++) {
        var line = ''
        for (var index in array[i]) {
          if (line != '') line += ','

          line += array[i][index]
        }

        str += line + '\r\n'
      }
      var hiddenElement = document.createElement('a')
      hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(str)
      hiddenElement.target = '_blank'
      hiddenElement.download = 'report.csv'
      hiddenElement.click()
    }
  }
}
</script>
