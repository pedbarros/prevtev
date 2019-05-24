<template>
  <q-toolbar>

    <q-btn flat round dense icon="arrow_back" @click="$router.go(-1)" />

    <q-toolbar-title class="text-center">
      <img :src="imagem">
    </q-toolbar-title>
  </q-toolbar>
</template>

<script>
    export default {
        name: "PVToolbar",
        props:{
            imagem:{
              type: String,
              required: true
            }
        }
    }
</script>
