/*eslint-disable */
import aboutthehome from '../assets/Desktop/aboutthehome.report.json'
import aboutthepolicyholder from '../assets/Desktop/aboutthepolicyholder.report.json'
import highimpactquestions from '../assets/Desktop/highimpactquestions.report.json'
import homePage from '../assets/Desktop/home-page.report.json'
import results from '../assets/Desktop/results.report.json'
import * as axios from 'axios'

export default {
  checkPerformance: function() {
    var performance = this.averagePerformanceTable();
      if(performance[performance.length - 1] < 10) {
        return 'Red'
      }
  },
  averageMetricsTable: function() {
    return [
      Math.round(((aboutthehome.categories.performance.score + aboutthepolicyholder.categories.performance.score + highimpactquestions.categories.performance.score + homePage.categories.performance.score + results.categories.performance.score ) / 5) * 100),
      Math.round(((aboutthehome.categories.pwa.score + aboutthepolicyholder.categories.pwa.score + highimpactquestions.categories.pwa.score + homePage.categories.pwa.score + results.categories.pwa.score ) / 5) * 100),
      Math.round(((aboutthehome.categories.accessibility.score + aboutthepolicyholder.categories.accessibility.score + highimpactquestions.categories.accessibility.score + homePage.categories.accessibility.score + results.categories.accessibility.score ) / 5) * 100),
      Math.round(((aboutthehome.categories.seo.score + aboutthepolicyholder.categories.seo.score + highimpactquestions.categories.seo.score + homePage.categories.seo.score + results.categories.seo.score ) / 5) * 100),
    ]
  },
  averageMetrics: function() {
    return [
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
  },
  averagePerformanceTable: function() {
    return [
      Math.round(((aboutthehome.categories.performance.score + aboutthepolicyholder.categories.performance.score + highimpactquestions.categories.performance.score + homePage.categories.performance.score + results.categories.performance.score ) / 5) * 100),
      Math.round(((aboutthehome.categories.performance.score + aboutthepolicyholder.categories.performance.score + highimpactquestions.categories.performance.score + homePage.categories.performance.score + results.categories.performance.score ) / 5) * 100 + 10),
      Math.round(((aboutthehome.categories.performance.score + aboutthepolicyholder.categories.performance.score + highimpactquestions.categories.performance.score + homePage.categories.performance.score + results.categories.performance.score ) / 5) * 100 + 5),
      Math.round(((aboutthehome.categories.performance.score + aboutthepolicyholder.categories.performance.score + highimpactquestions.categories.performance.score + homePage.categories.performance.score + results.categories.performance.score ) / 5) * 100 - 60),
      Math.round(((aboutthehome.categories.performance.score + aboutthepolicyholder.categories.performance.score + highimpactquestions.categories.performance.score + homePage.categories.performance.score + results.categories.performance.score ) / 5) * 100 + 11),
      Math.round(((aboutthehome.categories.performance.score + aboutthepolicyholder.categories.performance.score + highimpactquestions.categories.performance.score + homePage.categories.performance.score + results.categories.performance.score ) / 5) * 100 + 3),
      Math.round(((aboutthehome.categories.performance.score + aboutthepolicyholder.categories.performance.score + highimpactquestions.categories.performance.score + homePage.categories.performance.score + results.categories.performance.score ) / 5) * 100 + 9),
      Math.round(((aboutthehome.categories.performance.score + aboutthepolicyholder.categories.performance.score + highimpactquestions.categories.performance.score + homePage.categories.performance.score + results.categories.performance.score ) / 5) * 100 - 33),
      Math.round(((aboutthehome.categories.performance.score + aboutthepolicyholder.categories.performance.score + highimpactquestions.categories.performance.score + homePage.categories.performance.score + results.categories.performance.score ) / 5) * 100 + 30),
      Math.round(((aboutthehome.categories.performance.score + aboutthepolicyholder.categories.performance.score + highimpactquestions.categories.performance.score + homePage.categories.performance.score + results.categories.performance.score ) / 5) * 100 + 60)
    ]
  },
  getScore: function(data) {
    return [
      Math.round(data.categories.performance.score * 100),
      Math.round(data.categories.pwa.score * 100),
      Math.round(data.categories.accessibility.score * 100),
      Math.round(data.categories['best-practices'].score * 100),
      Math.round(data.categories.seo.score * 100)
    ]
  },
  getTableMetrics: function(data) {
    return [
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
  },
  getRoutes: function(data) {
    if (data === '/about-the-home') {
      return aboutthehome
    } else if (data === '/about-the-policy-holder') {
      return aboutthepolicyholder
    } else if (data === '/high-impact-questions') {
      return highimpactquestions
    } else if (data === '/home-page') {
      return homePage
    } else {
      return results
    }
  }
}
