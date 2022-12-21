<script>
import { store } from '../store'

export default {
    props: {
        id: String,
    },
    data() {
        return {
            category: {}
        }
    },
    methods: {
        addCat() {
            if (this.category.name !== "" && this.category.description !== "") {
                if (!this.id) {
                    store.addCat({ name: this.category.name,  description: this.category.description })
                } else {
                    store.editCat(this.category)
                }
            }
            this.$router.push('/categories')
        }
    },
    async mounted() {
        if (this.id) {
            this.category = await store.getCategory(this.id) || {}
        }
    }
}

</script>

<template>
    <div class="col-6 m-auto">
        <h3 class="bg-dark text-white p-3" v-if="id">Editar categoría</h3>
        <h3 class="bg-dark text-white p-3" v-else>Añadir categoría</h3>
        <form @submit.prevent="addCat">
            <div class="my-3">
                <label for="name">Nom: </label><br />
                <input class="w-100" name="name" id="name" v-model="category.name" type="text" /><br />
            </div>
            <div class="my-3">
                <label for="description">Descripción: </label><br />
                <textarea class="w-100" name="description" id="description" v-model="category.description" /><br />
            </div>
            <input v-if="id" class="btn btn-dark" type="submit" value="Editar categoría" />
            <input v-else class="btn btn-dark" type="submit" value="Añadir categoría" />
            <input class="btn btn-warning mx-2" type="reset" value="Borrar datos introducidos" />
        </form>
    </div>
</template>