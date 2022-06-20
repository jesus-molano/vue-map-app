<script lang="ts" src="./MyLocationBtn.ts" />

<template>
  <button
    v-if="isBtnReady"
    @click="onMyLocationClicked"
    class="btn btn-primary d-flex justify-content-center align-items-center">
    <i class="las la-compass"></i>
  </button>
</template>

<style scoped>
button {
  position: fixed;
  top: 30px;
  right: 30px;
}
i::before{
  font-size: 25px
}
</style>
