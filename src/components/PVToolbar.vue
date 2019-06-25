<template>
  <q-toolbar class="bg-primary">

    <!--  <q-btn flat round dense icon="arrow_back" @click="voltar"/>-->
      <img src="statics/imgs/voltar.png" width="38" @click="voltar">

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
      }
    },

    methods:{
      voltar(){
        this.$router.go(-1)
      }
    }
  }
</script>
