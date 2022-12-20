<script>
import { store } from '../store'
import Producto from './Producto.vue'

export default {
  components: {
    Producto,
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
  <h1>Listado de productos</h1>
  <template v-if="products.length">
    <table class="table">
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
        <producto v-for="product in products" :key="product.id" :product="product"></producto>
      </tbody>
    </table>
    <div class="row">
      <span class="col-6">Productos: {{ products.length }}</span><span class="col-6">Importe total: {{ totalImport }}</span>
    </div>
  </template>
  <p v-else>No hay productos en la tienda</p>
</template>

<style>
  thead {
    padding: 10px;
  }
</style>