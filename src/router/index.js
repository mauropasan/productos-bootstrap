import { createRouter, createWebHistory } from 'vue-router'
import ProductsTable from '../components/ProductsTable.vue'
import AddProduct from '../components/AddProduct.vue'
import CategoriesTable from '../components/CategoriesTable.vue'
import AddCategory from '../components/AddCategory.vue'
import AboutUs from '../components/AboutUs.vue'

const routes = [
  {
    path: '/',
    name: 'ProductsTable',
    component: ProductsTable
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
  },
  {
    path: '/categories',
    name: 'Categories',
    component: CategoriesTable
  },
  {
    path: '/add-category',
    name: 'AddCategory',
    component: AddCategory
  },
  {
    path: '/edit-category/:id',
    name: 'EditCategory',
    component: AddCategory,
    props: true
  },
  {
    path: '/about-us',
    name: 'AboutUs',
    component: AboutUs
  }
]

const router = createRouter({
    history: createWebHistory(),
    routes
  })

export default router
