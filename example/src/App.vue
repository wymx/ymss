<template>
  <div class="site">
    <h1>组件库测试</h1>
    <p>测试站点主要用于开发过程中测试组件，即在开发过程中由业务驱动组件开发。</p>
    <ymss-button :msg="msg" backColor="#ff0000"></ymss-button>
    <ymss-swiper>ssss</ymss-swiper>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const msg = ref('hello world')
</script>
<style scoped lang="scss">
.site {
  padding: 20px;
}

</style>
