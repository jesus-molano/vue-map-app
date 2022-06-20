<script lang="ts" src="./SearchResults.ts" />

<template>
  <div v-if='isLoadingPlaces' class="alert alert-primary text-center">
    <h5>Loading</h5>
    <span>Please wait a moment...</span>
  </div>
  <ul v-else-if='places.length > 0' class="list-group mt-3">
    <li
      v-for="place in places"
      :key="place.id"
      :class="{ 'active': place.id === activePlace }"
      @click="onPlaceClicked(place)"
      class="list-group-item list-group-item-action"
    >
      <h5>{{place.text}}</h5>
      <p>{{place.place_name}}</p>
      <div class="d-flex justify-content-end">
        <button
          :class="(place.id === activePlace) ? 'btn-outline-light' : 'btn-outline-primary'"
          class="btn btn-sm"
          @click.self="getRouteDirections(place)"
        >Addresses</button>
      </div>
    </li>
  </ul>
</template>

<style scoped>
  h5 {
    font-size: 15px;
  }
  p {
    font-size: 10px;
  }
</style>
