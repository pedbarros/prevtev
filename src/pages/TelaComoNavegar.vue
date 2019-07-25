<template>
  <Conteudo classeConteudo="full-height" :paddingPage="false">
    <Titulo imagem="statics/imgs/sobre-app/001.png"/>

    <div class="q-pl-sm q-pr-sm">
      <Linha>
        <Coluna>
          <PVImagem imagem="statics/imgs/sobre-app/002.png"/>
        </Coluna>
      </Linha>
      <Linha>
        <Coluna>
          <PVImagem imagem="statics/imgs/sobre-app/003.png"/>
        </Coluna>
      </Linha>


      <Linha>
        <Coluna>
          <PVImagem imagem="statics/imgs/sobre-app/004.png"/>
        </Coluna>
      </Linha>


    </div>
  </Conteudo>
</template>

<script>
  import Conteudo from "../components/Shared/Conteudo";
  import Linha from "../components/Shared/Linha";
  import Coluna from "../components/Shared/Coluna";
  import PVImagem from "../components/PVImagem";
  import Titulo from "../components/Shared/Titulo";
  import Container from "../components/Shared/Container";
  import audioMixin from "../mixins/audioMixin";

  export default {
    name: "TelaSobre",
    components: {Container, Titulo, PVImagem, Coluna, Linha, Conteudo},
    mixins: [audioMixin]

  }
</script>

<style scoped>
  video {
    width: 80% !important;
    height: 50% !important;
  }
</style>
