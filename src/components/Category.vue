<script>
import { store } from '../store'

export default {
    props: {
        category: Object,
    },
    methods: {
        delCat() {
            if (confirm(`¿Seguro que quieres borrar la categoría? (${this.category.name})`)) {
                store.delCat(this.category.id)
            }
        },
    },
}
</script>

<template>
    <tr>
        <td>{{ category.id }}</td>
        <td>{{ category.name }}</td>
        <td>{{  category.description  }}</td>
        <td class="buttons">
            <button type="button" class="btn btn-dark" @click="$router.push(`/edit-category/${category.id}`)"><i
                    class="bi bi-pencil-square"></i></button>
            <button type="button" class="btn btn-danger" @click="delCat"><i class="bi bi-trash"></i></button>
        </td>
    </tr>
</template>

<style>
    .buttons {
        display: flex;
        gap: 5px;
    }
</style>