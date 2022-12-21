<script>
import { store } from '../store'

export default {
    data() {
        return {
            messages: store.state.messages
        }
    }, methods: {
        del() {
            this.messages.shift()
        }
    }
}

</script>

<template v-if="messages.length > 0">
    <div v-for="message in messages" class="alert alert-danger alert-dismissible">
        {{ message }}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" @click="del"></button>
    </div>
</template>