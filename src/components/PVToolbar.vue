<template>
  <q-toolbar class="bg-primary">
    <img v-if="mostrarBotaoVoltar" src="statics/imgs/voltar.png" width="38" @click="voltar">

    <q-toolbar-title class="text-center">
      <img :src="imagem">
    </q-toolbar-title>
  </q-toolbar>
</template>

<script>
  export default {
    name: "PVToolbar",
    props: {
      imagem: {
        type: String,
        required: true
      },
      mostrarBotaoVoltar: {
        type: Boolean,
        default: true
      }
    },

    methods: {
      voltar() {
        this.$router.go(-1)
      }
    }
  }
</script>
