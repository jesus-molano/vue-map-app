import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import mapboxgl from 'mapbox-gl'
mapboxgl.accessToken = 'pk.eyJ1IjoiamVzdXMtbW9sYW5vIiwiYSI6ImNsNGtrYjM5ZTB0dDMza21uMWE0dGdjczAifQ.c87kIx5JpTVeQ5f8TY2gjg'

if (!navigator.geolocation) {
  alert('Geolocation not available in your browser')
  throw new Error('Your browser does not support geolocation. Please check your browser configuration.')
}
const app = createApp(App)
app.use(store)
app.use(router)
app.mount('#app')
