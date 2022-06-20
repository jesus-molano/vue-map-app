<script lang="ts" src="./SearchBar.ts"/>

<template>
  <div class="searchbar-container">
    <input v-model="searchTerm" type="search" class="form-control" placeholder="Search places...">
    <SearchResults />
  </div>
</template>

<style scoped>
.searchbar-container {
  position: fixed;
  top: 30px;
  left: 30px;
  background-color: #fff;
  z-index: 11;
  box-shadow: 0 5px 10px rgb(0, 0, 0, 0.2);
  border-radius: 10px;
  width: 250px;
  overflow: hidden;
  padding: 4px;
  user-select: none;
}
</style>
