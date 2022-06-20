import axios from 'axios'

const directionsApi = axios.create({
  baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
  params: {
    alternatives: false,
    geometries: 'geojson',
    overview: 'simplified',
    steps: false,
    access_token: 'pk.eyJ1IjoiamVzdXMtbW9sYW5vIiwiYSI6ImNsNGtrYjM5ZTB0dDMza21uMWE0dGdjczAifQ.c87kIx5JpTVeQ5f8TY2gjg'
  }
})
export default directionsApi
