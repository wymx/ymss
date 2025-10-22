import { App } from 'vue'
import Button from '@ymss-ui/button'
// import component end
import '../scss/index.scss'

const components = [
  Button
] // components

// 全局动态添加组件
const install = (app: App): void => {
  components.forEach(component => {
    if (component.name) {
      app.component(component.name, component)
    }
  })
}

export default {
  install
}
