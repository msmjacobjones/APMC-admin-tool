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
          <div id="components-demo">
            <testTable/>
          </div>
        </footer>
      </blockquote>
    </v-flex>
    <v-data-table
      :headers="headers"
      :items="desserts"
      hide-actions
      class="elevation-1"
    >
      <template 
        slot="items" 
        slot-scope="props">
        <td>{{ props.item.name }}</td>
        <td class="text-xs-left">{{ props.item.calories }}</td>
        <td class="text-xs-left">{{ props.item.fat }}</td>
        <td class="text-xs-left">{{ props.item.carbs }}</td>
        <td class="text-xs-left">{{ props.item.protein }}</td>
        <td class="text-xs-left">{{ props.item.iron }}</td>
      </template>
    </v-data-table>
  </v-layout>
</template>

<script>
import data from '../assets/Desktop/aboutthehome.report.json'
import testTable from '../components/testTable.js'
import Vue from 'vue'
new Vue({ el: '#components-demo' })
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
        data.categories.performance.score * 100,
        data.categories.pwa.score * 100,
        data.categories.accessibility.score * 100,
        data.categories.seo.score * 100
      ],
      headers: [
        {
          text: 'Lighthouse Report',
          align: 'left',
          sortable: false,
          value: 'name'
        },
        { text: 'About The Home', value: 'calories' },
        { text: 'About The Policy Holder', value: 'fat' },
        { text: 'High Impact Questions', value: 'carbs' },
        { text: 'Home Page', value: 'protein' },
        { text: 'Results Page', value: 'iron' }
      ],
      desserts: [
        {
          value: false,
          name: 'Performance',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: '1%'
        },
        {
          value: false,
          name: 'Progressive Web App',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: '1%'
        },
        {
          value: false,
          name: 'Accessibility',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: '7%'
        },
        {
          value: false,
          name: 'SEO',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: '8%'
        }
      ]
    }
  }
}
</script>
