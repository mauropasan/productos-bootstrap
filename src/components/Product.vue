<script>
import { store } from '../store'

export default {
    props: {
        product: Object,
    },
    methods: {
        raiseProdUnits() {
            store.editProd(this.product, this.product.units + 1)
        },
        lowerProdUnits() {
            store.editProd(this.product, this.product.units - 1)
        },
        delProd() {
            if (confirm(`¿Seguro que quieres borrar el producto? (${this.product.name})`)) {
                store.delProd(this.product.id)
            }
        },
    },
    computed: {
        productImport() {
            return this.product.units * this.product.price
        }
    }
}
</script>

<template>
    <tr>
        <td>{{ product.id }}</td>
        <td>{{ product.name }}</td>
        <td>{{ product.category }}</td>
        <td>{{ product.units }}</td>
        <td>{{ product.price }} €</td>
        <td>{{ productImport.toFixed(2) }} €</td>
        <td class="buttons">
            <button type="button" class="btn btn-dark" @click="raiseProdUnits" :disabled="product.units >= 100"><i
                    class="bi bi-arrow-up"></i></button>
            <button type="button" class="btn btn-dark" @click="lowerProdUnits" :disabled="product.units <= 0"><i
                    class="bi bi-arrow-down"></i></button>
            <button type="button" class="btn btn-dark" @click="$router.push(`/edit-product/${product.id}`)"><i
                    class="bi bi-pencil-square"></i></button>
            <button type="button" class="btn btn-danger" @click="delProd"><i class="bi bi-trash"></i></button>
        </td>
    </tr>
</template>

<style>
    .buttons {
        display: flex;
        gap: 5px;
    }
</style>