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
  </v-container>
</template>

<script>
import circularRotate from '@/components/circularRotate'
import singlePageTable from '@/components/singlePageTable'
import singlePageGraph from '@/components/singlePageGraph'

export default {
  components: {
    'circular-rotate': circularRotate,
    'single-page-table': singlePageTable,
    'single-page-graph': singlePageGraph
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
