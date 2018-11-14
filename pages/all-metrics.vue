<template>
  <v-layout>
    <v-flex text-xs-center>
      <chartjs-bar 
        :beginzero="beginZero"
        :datalabel="title"
        :labels="labels"
        :data="averageMetricsTable"/>
      <blockquote class="blockquote">
        &#8220;Average metrics from all pages.&#8221;
      </blockquote>
    </v-flex>
    <v-data-table
      :headers="headers"
      :items="averageMetrics"
      hide-actions
      class="elevation-1"
    >
      <template 
        slot="items" 
        slot-scope="props">
        <td>{{ props.item.name }}</td>
        <td class="text-xs-center">{{ props.item.aboutthehome }}</td>
        <td class="text-xs-center">{{ props.item.aboutthepolicyholder }}</td>
        <td class="text-xs-center">{{ props.item.highimpactquestions }}</td>
        <td class="text-xs-center">{{ props.item.homePage }}</td>
        <td class="text-xs-center">{{ props.item.results }}</td>
      </template>
    </v-data-table>
  </v-layout>
</template>

<script>
import aboutthehome from '../assets/Desktop/aboutthehome.report.json'
import aboutthepolicyholder from '../assets/Desktop/aboutthepolicyholder.report.json'
import highimpactquestions from '../assets/Desktop/highimpactquestions.report.json'
import homePage from '../assets/Desktop/home-page.report.json'
import results from '../assets/Desktop/results.report.json'

export default {
  data() {
    return {
      msg: aboutthehome.categories.performance.title,
      beginZero: true,
      title: 'Average metrics from all pages',
      labels: ['Performance', 'Progressive Web App', 'Accessibility', 'SEO'],
      /*eslint-disable */
      averageMetricsTable: [
        Math.round(((aboutthehome.categories.performance.score + aboutthepolicyholder.categories.performance.score + highimpactquestions.categories.performance.score + homePage.categories.performance.score + results.categories.performance.score ) / 5) * 100),
        Math.round(((aboutthehome.categories.pwa.score + aboutthepolicyholder.categories.pwa.score + highimpactquestions.categories.pwa.score + homePage.categories.pwa.score + results.categories.pwa.score ) / 5) * 100),
        Math.round(((aboutthehome.categories.accessibility.score + aboutthepolicyholder.categories.accessibility.score + highimpactquestions.categories.accessibility.score + homePage.categories.accessibility.score + results.categories.accessibility.score ) / 5) * 100),
        Math.round(((aboutthehome.categories.seo.score + aboutthepolicyholder.categories.seo.score + highimpactquestions.categories.seo.score + homePage.categories.seo.score + results.categories.seo.score ) / 5) * 100),
      ],
      
      headers: [
        {
          text: 'Lighthouse Report',
          align: 'left',
          sortable: false,
          value: 'name'
        },
        { text: 'About The Home', value: '' },
        { text: 'About The Policy Holder', value: '' },
        { text: 'High Impact Questions', value: '' },
        { text: 'Home Page', value: '' },
        { text: 'Results Page', value: '' }
      ],
      averageMetrics: [
        {
          value: false,
          name: 'Performance',
          aboutthehome: Math.round(aboutthehome.categories.performance.score * 100),
          aboutthepolicyholder: Math.round(aboutthepolicyholder.categories.performance.score * 100),
          highimpactquestions: Math.round(highimpactquestions.categories.performance.score * 100),
          homePage: Math.round(homePage.categories.performance.score * 100),
          results: Math.round(results.categories.performance.score * 100)
        },
        {
          value: false,
          name: 'Progressive Web App',
          aboutthehome: Math.round(aboutthehome.categories.pwa.score * 100),
          aboutthepolicyholder: Math.round(aboutthepolicyholder.categories.pwa.score * 100),
          highimpactquestions: Math.round(highimpactquestions.categories.pwa.score * 100),
          homePage: Math.round(homePage.categories.pwa.score * 100),
          results: Math.round(results.categories.pwa.score * 100)
        },
        {
          value: false,
          name: 'Accessibility',
          aboutthehome: Math.round(aboutthehome.categories.accessibility.score * 100),
          aboutthepolicyholder: Math.round(aboutthepolicyholder.categories.accessibility.score * 100),
          highimpactquestions: Math.round(highimpactquestions.categories.accessibility.score * 100),
          homePage: Math.round(homePage.categories.accessibility.score * 100),
          results: Math.round(results.categories.accessibility.score * 100)
        },
        {
          value: false,
          name: 'SEO',
          aboutthehome: Math.round(aboutthehome.categories.seo.score * 100),
          aboutthepolicyholder: Math.round(aboutthepolicyholder.categories.seo.score * 100),
          highimpactquestions: Math.round(highimpactquestions.categories.seo.score * 100),
          homePage: Math.round(homePage.categories.seo.score * 100),
          results: Math.round(results.categories.seo.score * 100)
        }
      ]
    }
  }
}
</script>
