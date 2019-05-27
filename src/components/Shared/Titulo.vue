<template>
  <Linha>
    <Coluna>
      <PVImagem :imagem="imagem"/>
    </Coluna>
  </Linha>
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
