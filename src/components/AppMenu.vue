<script>

</script>

<template>
    <header class="bg-dark text-white p-3 mb-3">
        <h1>Almacén central de productos - ACME SL</h1>
    <nav>
        <router-link to="/" class="btn btn-light">Productos</router-link>
        <router-link to="/add-product" class="btn btn-light">Añadir producto</router-link>
    </nav>
    </header>
</template>

<style>
    h1 {
        padding: 10px;
    }

    nav {
        display: flex;
        gap: 10px;
    }
</style>
