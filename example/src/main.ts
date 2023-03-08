import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import YmssUi from '@ymss-ui/ymss-ui'
// createApp(App).mount('#app')
const env = import.meta.env
console.log(env)
const app = createApp(App)
app.use(ElementPlus)
app.use(YmssUi)
app.mount('#app')
