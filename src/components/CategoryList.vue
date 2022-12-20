<script>
import { store } from '../store'

export default {
    props: {
        category: Object,
    },
}
</script>

<template>
    <option name="category" :value="category.id">{{ category.name }}</option>
</template>