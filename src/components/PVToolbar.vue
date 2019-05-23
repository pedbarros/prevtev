<template>
  <q-toolbar>
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
