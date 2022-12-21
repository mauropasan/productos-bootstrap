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
        editProd() {
            store.editProd(this.product)
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
        <td>
            <button type="button" class="btn btn-dark mx-1" @click="raiseProdUnits"><i
                    class="bi bi-arrow-up"></i></button>
            <button type="button" class="btn btn-dark mx-1" @click="lowerProdUnits"><i
                    class="bi bi-arrow-down"></i></button>
            <button type="button" class="btn btn-dark mx-1" @click="$router.push(`/edit-product/${product.id}`)"><i
                    class="bi bi-pencil-square"></i></button>
            <button type="button" class="btn btn-danger mx-1" @click="delProd"><i class="bi bi-trash"></i></button>
        </td>
    </tr>
</template>