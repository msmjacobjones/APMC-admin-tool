<template>
  <default-page 
    :datafrompage="data"
    titlefrompage="Results Metrics"/>
</template>

<script>
import defaultPage from '@/components/defaultPage'
import data from '../assets/Desktop/results.report.json'

export default {
  components: {
    'default-page': defaultPage
  },
  data() {
    return {
      data: data
    }
  }
}
</script>
