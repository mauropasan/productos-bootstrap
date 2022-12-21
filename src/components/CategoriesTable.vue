<script>
import { store } from '../store'
import Category from './Category.vue'

export default {
  components: {
    Category,
  },
  data() {
    return {
      categories: store.state.categories,
    }
  },
}
</script>

<template>
  <h1 class="bg-dark text-white w-75 m-auto mb-3">Listado de categorías</h1>
  <template v-if="categories.length">
    <table class="table w-75 m-auto">
      <thead class="bg-dark text-white">
        <th>Id</th>
        <th>Nombre</th>
        <th>Descripción</th>
        <th>Acciones</th>
      </thead>
      <tbody class="table-striped">
        <category v-for="category in categories" :key="category.id" :category="category"></category>
      </tbody>
    </table>
    <div class="row w-75 m-auto bg-dark text-white text-center p-1">
      <span>Categorías: {{ categories.length }}</span>
    </div>
  </template>
  <p v-else class="w-75 m-auto">No hay categorías en la tienda</p>
</template>

<style>
  thead {
    padding: 10px;
  }
</style>