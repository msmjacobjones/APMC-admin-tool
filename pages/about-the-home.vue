<template>
  <default-page 
    :datafrompage="data"
    titlefrompage="About The Home Metrics"/>
</template>

<script>
import defaultPage from '@/components/defaultPage'
import data from '../assets/Desktop/aboutthehome.report.json'

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
