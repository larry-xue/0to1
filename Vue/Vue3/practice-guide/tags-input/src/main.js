import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import TagsInput from './components/TagsInput.vue'

const app = createApp(App)

// global register
app.component('tags-input', TagsInput)

app.mount('#app')
