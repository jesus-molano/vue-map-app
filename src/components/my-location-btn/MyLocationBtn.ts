import { computed, defineComponent } from 'vue'
import { useMapStore, usePlacesStore } from '@/composables'

export default defineComponent({
  name: 'MyLocationBtn',
  setup () {
    const { userLocation, isUserLocationReady } = usePlacesStore()
    const { map, isMapReady } = useMapStore()

    return {
      isBtnReady: computed(() => isUserLocationReady.value && isMapReady.value),
      onMyLocationClicked: () => {
        map.value?.flyTo({
          center: userLocation.value,
          zoom: 14
        })
      }
    }
  }
})
