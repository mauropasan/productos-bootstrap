<script>
import { store } from '../store'
import Product from './Product.vue'

export default {
  components: {
    Product,
  },
  data() {
    return {
      products: store.state.products,
    }
  },
  computed: {
    totalImport() {
        return this.products.reduce((total, product) => total += product.price * product.units, 0)
    }
  }
}
</script>

<template>
  <h1 class="bg-dark text-white w-75 m-auto mb-3">Listado de productos</h1>
  <template v-if="products.length">
    <table class="table w-75 m-auto">
      <thead class="bg-dark text-white">
        <th>Id</th>
        <th>Nombre</th>
        <th>Categoría</th>
        <th>Uds.</th>
        <th>Precio/u</th>
        <th>Importe</th>
        <th>Acciones</th>
      </thead>
      <tbody class="table-striped">
        <product v-for="product in products" :key="product.id" :product="product"></product>
      </tbody>
    </table>
    <div class="row w-75 m-auto bg-dark text-white text-center p-1">
      <span class="col-6">Productos: {{ products.length }}</span><span class="col-6">Importe total: {{ totalImport }} €</span>
    </div>
  </template>
  <p v-else class="w-75 m-auto">No hay productos en la tienda</p>
</template>

<style>
  thead {
    padding: 10px;
  }
</style>