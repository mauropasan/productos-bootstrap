<script>
import { store } from '../store'
import CategoryList from './CategoryList.vue'

export default {
    props: {
        id: String,
    },
    components: {
        CategoryList
    },
    data() {
        return {
            categories: store.state.categories,
            product: {}
        }
    },
    methods: {
        addProduct() {
            if (this.product.name !== "" && this.product.category !== "" && this.product.units !== "" && this.product.price !== "") {
                if (!this.id) {
                    store.addProduct({ name: this.name, category: this.category, units: this.units, price: this.price })
                } else {
                    store.editProd(this.product)
                }
            }
            this.$router.push('/')
        }
    },
    async mounted() {
        if (this.id) {
            this.product = await store.getProduct(this.id) || {}
        }
    }
}

</script>

<template>
    <div class="col-6 m-auto">
        <h3 class="bg-dark text-white p-3" v-if="id">Editar producto</h3>
        <h3 class="bg-dark text-white p-3" v-else>Añadir producto</h3>
        <form @submit.prevent="addProduct">
            <div class="my-3">
                <label for="name">Nom: </label><br />
                <input name="name" id="name" v-model="product.name" type="text" /><br />
            </div>
            <div class="my-3">
                <label for="category">Categoría: </label><br />
                <select class="w-50" v-model="product.category">
                    <option value="">---</option>
                    <category-list v-for="category in categories" :key="category.id"
                        :category="category"></category-list>
                </select><br />
            </div>
            <div class="my-3">
                <label for="units">Unidades: </label><br/>
                <input name="units" id="units" v-model="product.units" type="number" min="0" max="100" step="1" /><br />
            </div>
            <div class="my-3">
                <label for="price">Precio: </label><br/>
                <input name="price" id="price" v-model="product.price" type="number" min="0" step="0.01" /><br />
            </div>
            <input v-if="id" class="btn btn-dark" type="submit" value="Editar producto" />
            <input v-else class="btn btn-dark" type="submit" value="Añadir producto" />
            <input class="btn btn-warning mx-2" type="reset" value="Borrar datos introducidos" />
        </form>
    </div>
</template>