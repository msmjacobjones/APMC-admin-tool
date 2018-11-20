<template>
  <default-page 
    :datafrompage="data"
    titlefrompage="About The Policy Holder"/>
</template>

<script>
import defaultPage from '@/components/defaultPage'
import data from '../assets/Desktop/aboutthepolicyholder.report.json'

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
