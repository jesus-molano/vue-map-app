import axios from 'axios'

const searchApi = axios.create({
  baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
  params: {
    limit: 5,
    language: 'es',
    access_token: 'pk.eyJ1IjoiamVzdXMtbW9sYW5vIiwiYSI6ImNsNGtrYjM5ZTB0dDMza21uMWE0dGdjczAifQ.c87kIx5JpTVeQ5f8TY2gjg'
  }
})
export default searchApi
