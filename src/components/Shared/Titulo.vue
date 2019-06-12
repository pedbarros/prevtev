<template>
  <PVImagem :imagem="imagem"/>
</template>

<script>
  import Linha from "./Linha";
  import Coluna from "./Coluna";
  import PVImagem from "../PVImagem";

  export default {
    name: "Titulo",
    components: {PVImagem, Coluna, Linha},
    props: ['imagem']
  }
</script>

<style scoped>
  PVImagem {
    padding: 0 !important;
    border: 1px solid #4CAF50;
  }
</style>
