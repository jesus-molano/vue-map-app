import { defineComponent, onMounted, ref, watch } from 'vue'
import { useMapStore, usePlacesStore } from '@/composables'
import Mapboxgl from 'mapbox-gl'

export default defineComponent({
  name: 'MapView',
  setup: () => {
    const { userLocation, isUserLocationReady } = usePlacesStore()
    const mapElement = ref<HTMLDivElement>()
    const { setMap } = useMapStore()

    const initMap = async () => {
      if (!mapElement.value) throw new Error('Map element must be specified')
      if (!userLocation.value) throw new Error('User location must be specified')

      await Promise.resolve()

      const map = new Mapboxgl.Map({
        container: mapElement.value, // container ID
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        center: userLocation.value, // starting position [lng, lat]
        zoom: 15 // starting zoom
      })

      const myLocationPopup = new Mapboxgl.Popup()
        .setLngLat(userLocation.value)
        .setHTML(`
          <h4>Here I am</h4>
          <p>Currently in Tenerife</p>
          <p>${userLocation.value}</p>
        `)

      const myLocationMarker = new Mapboxgl.Marker()
        .setLngLat(userLocation.value)
        .setPopup(myLocationPopup)
        .addTo(map)

      setMap(map)
    }

    onMounted(() => {
      if (isUserLocationReady.value) return initMap()
    })

    watch(isUserLocationReady, (newValue) => {
      if (isUserLocationReady.value) return initMap()
    })
    return {
      isUserLocationReady,
      mapElement
    }
  }
})
