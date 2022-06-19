import { createStore } from 'vuex'
import { PlacesState } from '@/store/places/state'
import { MapState } from '@/store/map/state'
import placesModule from '@/store/places'
import mapModule from '@/store/map'

export interface StateInterface {
  places: PlacesState,
  map: MapState
}

export default createStore<StateInterface>({
  modules: {
    places: placesModule,
    map: mapModule
  }
})
