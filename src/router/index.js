import { createRouter, createWebHistory } from 'vue-router'
import ProductosTable from '../components/ProductosTable.vue'
import AddProduct from '../components/AddProduct.vue'

const routes = [
  {
    path: '/',
    name: 'ProductosTable',
    component: ProductosTable
  },
  {
    path: '/add-product',
    name: 'AddProduct',
    component: AddProduct
  },
  {
    path: '/edit-product/:id',
    name: 'EditProduct',
    component: AddProduct,
    props: true
  }
]

const router = createRouter({
    history: createWebHistory(),
    routes
  })

export default router
