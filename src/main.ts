import { createApp } from 'vue'
import App from './App.vue'
import { router } from './app/router'
import { vReveal } from './directives/reveal'
import './styles/main.css'

const app = createApp(App)
app.use(router)
app.directive('reveal', vReveal)
app.mount('#app')
