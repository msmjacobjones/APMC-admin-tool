<template>
  <v-container 
    fluid 
    grid-list-md>
    <v-layout
      row 
      wrap>
      <v-flex 
        d-flex 
        xs12>
        <single-page-graph
          :resultsdata="datafrompage"
          :title="titlefrompage"/>
        <single-page-table 
          :resultsdata="datafrompage"/>
      </v-flex>
      <v-flex d-flex>
        <v-layout 
          row 
          wrap>
          <v-flex
            d-flex
            xs12
          >
            <circular-rotate :resultsdata="datafrompage"/>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
    <time-bar :resultsdata="datafrompage"/>
  </v-container>
</template>

<script>
import circularRotate from '@/components/circularRotate'
import singlePageTable from '@/components/singlePageTable'
import singlePageGraph from '@/components/singlePageGraph'
import timeBar from '@/components/timeBar'

export default {
  components: {
    'circular-rotate': circularRotate,
    'single-page-table': singlePageTable,
    'single-page-graph': singlePageGraph,
    'time-bar': timeBar
  },
  props: {
    datafrompage: {
      type: Object,
      required: true
    },
    titlefrompage: {
      type: String,
      required: true
    }
  }
}
</script>
