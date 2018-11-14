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
      </blockquote>
    </v-flex>
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
        <td class="text-xs-center">{{ props.item.score }}</td>
      </template>
    </v-data-table>
  </v-layout>
</template>

<script>
import data from '../assets/Desktop/highimpactquestions.report.json'

export default {
  data() {
    return {
      msg: data.categories.performance.title,
      beginZero: true,
      title: 'about the home metrics',
      labels: [
        data.categories.performance.title,
        data.categories.pwa.title,
        data.categories.accessibility.title,
        data.categories.seo.title
      ],
      data: [
        Math.round(data.categories.performance.score * 100),
        Math.round(data.categories.pwa.score * 100),
        Math.round(data.categories.accessibility.score * 100),
        Math.round(data.categories.seo.score * 100)
      ],
      headers: [
        {
          text: 'Lighthouse Report',
          align: 'left',
          sortable: false,
          value: 'name'
        },
        { text: 'About The Home', value: 'title' }
      ],
      metrics: [
        {
          value: false,
          name: 'Performance',
          score: Math.round(data.categories.performance.score * 100)
        },
        {
          value: false,
          name: 'Progressive Web App',
          score: Math.round(data.categories.pwa.score * 100)
        },
        {
          value: false,
          name: 'Accessibility',
          score: Math.round(data.categories.accessibility.score * 100)
        },
        {
          value: false,
          name: 'SEO',
          score: Math.round(data.categories.seo.score * 100)
        }
      ]
    }
  }
}
</script>
