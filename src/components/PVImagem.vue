<template>
  <img :src="imagem" @click="$emit('click', $event)">
</template>

<script>
  export default {
    name: "PVImagem",
    props: {
      imagem: {
        type: String,
        required: true
      }
    },
  }
</script>

<style scoped>
  img {
    height: 100%;
    width: 100%;
  }
</style>
