<script>
import AppMenu from './components/AppMenu.vue'
import Error from './components/Error.vue'
import AddProduct from './components/AddProduct.vue'

import { store } from './store'

export default {
  components: {
    AppMenu,
    Error,
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
    <error></error>
    <router-view></router-view>
  </div>
</template>