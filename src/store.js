import axios from 'axios'
import { reactive } from 'vue'

const SERVER = 'http://localhost:3000'

export const store = {
    debug: true,
    state: reactive({
        products: [],
        categories: []
    }),
    async loadProducts() {
        try {
            if (this.state.products.length === 0 && this.state.categories.length === 0) {
                const [responseProducts, responseCategories] = await Promise.all([axios.get(`${SERVER}/products`), axios.get(`${SERVER}/categories`)])
                responseCategories.data.forEach(category => this.state.categories.push(category))
                responseProducts.data.forEach(product => this.state.products.push(product))
            }
        } catch (err) {
            alert(err)
        }
    },
    async addProduct(product) {
        try {
            const response = await axios.post(`${SERVER}/products`, {
                name: `${product.name}`,
                category: `${Number(product.category)}`,
                units: `${Number(product.units)}`,
                price: `${Number(product.price)}`,
            })
            this.state.products.push(response.data)
        } catch(err) {
            alert(err)
        }
    },
    async editProd(product, units) {
        try {
            const response = await axios.put(`${SERVER}/products/${product.id}`, {
                id: product.id,
                name: product.name,
                category: product.category,
                price: product.price,
                units: units !== undefined ? units : product.units
            })
            this.state.products.splice(this.state.products.findIndex(productToFind => productToFind.id === product.id), 1, response.data)
        } catch (err) {
            alert(err)
        }

    },
    async delProd(id) {
        try {
            await axios.delete(`${SERVER}/products/${id}`)
            let index = this.state.products.findIndex(product => product.id === id)
            this.state.products.splice(index, 1)
        } catch (err) {
            alert(err)
        }
    },
    async getProduct(id) {
        try {
            const response = await axios.get(`${SERVER}/products/${id}`)
            return response.data
        } catch(err) {
            alert(err)
        }
    }
}