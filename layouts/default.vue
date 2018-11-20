<template>
  <v-app dark>
    <v-navigation-drawer
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      fixed
      app
    >
      <no-ssr>
        <v-list>
          <v-list-tile
            v-for="(item, i) in items"
            :to="item.to"
            :key="i"
            router
            exact
          >
            <v-list-tile-action>
              <v-icon v-html="item.icon" />
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title v-text="item.title" />
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </no-ssr>
    </v-navigation-drawer>
    <v-toolbar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-toolbar-side-icon @click="drawer = !drawer" />
      <v-btn
        icon
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'" />
      </v-btn>
      <v-btn
        icon
        @click.stop="clipped = !clipped"
      >
        <v-icon>web</v-icon>
      </v-btn>
      <v-btn
        icon
        @click.stop="fixed = !fixed"
      >
        <v-icon>remove</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title"/>
      <v-btn
        icon
        @click.stop="rightDrawer = !rightDrawer"
        @click="thisShouldTriggerRecompute"
      >
        <v-icon>menu</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-navigation-drawer
      :right="right"
      v-model="rightDrawer"
      temporary
      fixed
    >
      <v-list>
        <v-list-tile @click.native="right = !right">
          <v-list-tile-action>
            <v-icon light>compare_arrows</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Switch drawer (click me)
            {{ metricData.categories.performance.score }} <!-- TODO: find a way to update data passed to circular-rotate depending on page -->
          </v-list-tile-title>
        </v-list-tile>
      </v-list>
      <circular-rotate :resultsdata="metricData"/>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
import circularRotate from '@/components/circularRotate'
import helperFunctions from '../helpers/helperFunctions.js'

export default {
  components: {
    'circular-rotate': circularRotate
  },
  data() {
    return {
      metricData: helperFunctions.getRoutes(this.$route.path),
      show: false,
      clipped: false,
      drawer: true,
      fixed: false,
      items: [
        { icon: 'home', title: 'Welcome', to: '/' },
        {
          icon: 'bubble_chart',
          title: 'About The Home',
          to: '/about-the-home'
        },
        {
          icon: 'bubble_chart',
          title: 'About The Policy Holder',
          to: '/about-the-policy-holder'
        },
        {
          icon: 'bubble_chart',
          title: 'High Impact Questions',
          to: '/high-impact-questions'
        },
        {
          icon: 'bubble_chart',
          title: 'Home Page',
          to: '/home-page'
        },
        { icon: 'bubble_chart', title: 'Results Page', to: '/results-page' },
        { icon: 'warning', title: 'All Metrics', to: '/all-metrics' }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Site Speed Metircs'
    }
  },
  methods: {
    thisShouldTriggerRecompute() {
      this.metricData = helperFunctions.getRoutes(this.$route.path)
    }
  }
}
</script>
