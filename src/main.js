import { createApp } from 'vue'
import router from './router/index'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

import './assets/main.css'

createApp(App).use(router).mount('#app')
