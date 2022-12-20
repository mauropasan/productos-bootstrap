<script>
import { store } from '../store'
import CategoryList from './CategoryList.vue'

export default {
    components: {
        CategoryList
    },
    data() {
        return {
            categories: store.state.categories,
            name: '',
            category: '',
            units: '',
            price: '',
        }
    },
    methods: {
        addProduct() {
            if (this.name !== "" && this.category !== "" && this.units !== "" && this.price !== "") {
                store.addProduct( {name: this.name, category: this.category, units: this.units, price: this.price} )
            }
        }
    }
}

</script>

<template>
    <h3 class="bg-dark text-white">Añadir producto</h3>
    <form @submit.prevent="addProduct">
        <div class="my-3">
            <label class="mx-3" for="name">Nom: </label>
            <input name="name" id="name" v-model="name" type="text"/><br />
        </div>
        <div class="my-3">
            <label class="mx-3" for="category">Categoría: </label>
            <select v-model="category">
                <option value="">---</option>
                <category-list v-for="category in categories" :key="category.id" :category="category"></category-list>
            </select><br />
        </div>
        <div class="my-3">
            <label class="mx-3" for="units">Unidades: </label>
            <input name="units" id="units" v-model="units" type="number" step="1"/><br />
        </div>
        <div class="my-3">
            <label class="mx-3" for="price">Precio: </label>
            <input name="price" id="price" v-model="price" type="number" step="0.01" /><br/>
        </div>
        <input class="btn btn-primary mx-3" type="submit" value="Añadir producto" />
    </form>
</template>

<style>
h3 {
    padding: 10px;
}
</style>
