<template>
  <v-layout>
    <v-flex text-xs-center>
      <img
        src="/v.png"
        alt="Vuetify.js"
        class="mb-5">
      <chartjs-bar 
        :beginzero="beginZero"
        :datalabel="title"
        :labels="labels"
        :data="data"/>
      <blockquote class="blockquote">
        &#8220;First, solve the problem. Then, write the code.&#8221;
        <footer>
          <small>
            <em>&mdash;{{ labels }}</em>
          </small>
        </footer>
      </blockquote>
    </v-flex>
  </v-layout>
</template>

<script>
import data from '../assets/Desktop/highimpactquestions.report.json'
export default {
  data() {
    return {
      msg: data.categories.performance.title,
      beginZero: true,
      title: 'High Impact question page metrics',
      labels: [
        data.categories.performance.title,
        data.categories.pwa.title,
        data.categories.accessibility.title,
        data.categories.seo.title
      ],
      data: [
        data.categories.performance.score * 100,
        data.categories.pwa.score * 100,
        data.categories.accessibility.score * 100,
        data.categories.seo.score * 100
      ]
    }
  }
}
</script>
