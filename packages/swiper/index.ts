import Swiper from './src/swiper.vue'
import { App } from 'vue'

Swiper.name = 'ymss-swiper'

Swiper.install = (app: App): void => {
  // 注册组件
  app.component(Swiper.name, Swiper)
}

export default Swiper
