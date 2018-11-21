<template>
  <div>
    <v-btn 
      color="info"
      @click="download(opportunities)">
      Download Lighthouse scores
    </v-btn>
  </div>
</template>

<script>
import helperFunctions from '../helpers/helperFunctions.js'
import data from '../assets/Desktop/results.report.json'

export default {
  data() {
    return {
      opportunities: helperFunctions.formatforcsv(data)
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
