<template>
  <ymss-button :msg="msg"></ymss-button>
  <ymss-button type="primary">主要按钮</ymss-button>
 <!-- <ymss-button type="success">成功按钮</ymss-button>
  <ymss-button type="info">信息按钮</ymss-button>
  <ymss-button type="warning">警告按钮</ymss-button>
  <ymss-button type="danger">危险按钮</ymss-button>
  <ymss-button type="text">文字按钮</ymss-button> -->
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  const msg = ref('hello world')
</script>

<style scoped lang="scss">
</style>
