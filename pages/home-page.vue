<template>
  <default-page 
    :datafrompage="data"
    titlefrompage="Home Page Metrics"/>
</template>

<script>
import defaultPage from '@/components/defaultPage'
import data from '../assets/Desktop/home-page.report.json'

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
