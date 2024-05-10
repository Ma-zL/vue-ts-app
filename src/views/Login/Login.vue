<template>
  <div>hello login</div>
</template>

<script setup lang="ts">
import http from '@/utils/http'

http
  .post('/users/login', {
    email: 'huangrong@imooc.com',
    pass: 'huangrong'
  })
  .then((res) => {
    console.log(res.data)
  })
</script>

<style scoped lang="scss"></style>
