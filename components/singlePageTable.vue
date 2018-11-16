<template>
  <v-flex xs3>
    <v-data-table
      :headers="headers"
      :items="metrics"
      hide-actions
      class="elevation-1"
    >
      <template 
        slot="items" 
        slot-scope="props">
        <td>{{ props.item.name }}</td>
        <td class="text-xs-left">{{ props.item.score }}</td>
      </template>
    </v-data-table>
  </v-flex>
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
    return {
      /*eslint-disable */
      beginZero: true,
      title: 'Score',
      headers: [
        {
          text: 'Report',
          align: 'left',
          sortable: false,
          value: 'name'
        },
        { text: 'Score', value: 'title' }
      ],
      metrics: helperFunctions.getTableMetrics(this.resultsdata)
    }
  }
}
</script>
