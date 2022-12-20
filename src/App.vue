<script>
import AppMenu from './components/AppMenu.vue'
import Error from './components/Error.vue'
import ProductosTable from './components/ProductosTable.vue'
import AddProduct from './components/AddProduct.vue'

import { store } from './store'

export default {
  components: {
    AppMenu,
    Error,
    ProductosTable,
    AddProduct,
  },
  mounted() {
    store.loadProducts()
  },
}
</script>

<template>
  <div>
    <app-menu></app-menu>
    <productos-table></productos-table>
    <add-product></add-product>
  </div>
</template>