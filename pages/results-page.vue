<template>
  <v-container 
    fluid 
    grid-list-xl>
    <v-layout
      row 
      wrap>
      <v-flex 
        d-flex 
        xs12>
        <single-page-graph
          :resultsdata="data"
          title="Results Metrics"/>
        <single-page-table 
          :resultsdata="data"/>
      </v-flex>
      <v-flex d-flex>
        <v-layout 
          row >
          <v-flex
            d-flex
            xs12
          >
            <circular-rotate :resultsdata="data"/>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import data from '../assets/Desktop/results.report.json'
import circularRotate from '@/components/circularRotate'
import singlePageTable from '@/components/singlePageTable'
import singlePageGraph from '@/components/singlePageGraph'

export default {
  components: {
    'circular-rotate': circularRotate,
    'single-page-table': singlePageTable,
    'single-page-graph': singlePageGraph
  },
  data() {
    return {
      data: data
    }
  }
}
</script>
