<script>
import { useMapStore } from '@/composables'

export default {
  setup () {
    const { distance, duration } = useMapStore()
    return {
      distance,
      duration
    }
  }
}
</script>

<template>
  <div v-if='distance' class='trip-container column'>
    <div class="col">Distance: <strong>{{distance}} km</strong></div>
    <div class="col">Duration: <strong>{{duration}} min</strong></div>
  </div>
</template>

<style scoped>
.trip-container {
  background-color: #fff;
  border-radius: 10px;
  bottom: 50px;
  box-shadow: 0 10px 10px rgb(0, 0, 0, 0.2);
  font-size: 20px;
  left: 20px;
  padding: 10px;
  position: fixed;
}
strong {
  color: #0275d8;
}
</style>
