<template>
  <Conteudo classeConteudo="full-height" :paddingPage="false">
    <Titulo imagem="statics/imgs/como-navegar/001.png"/>
    <div class="q-pl-sm q-pr-sm">
      <Linha>
        <Coluna>
          <PVImagem imagem="statics/imgs/como-navegar/002.png"/>
        </Coluna>
      </Linha>
      <Linha>
        <Coluna>
          <PVImagem imagem="statics/imgs/como-navegar/003.png"/>
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

  export default {
    name: "TelaComoNavegar",
    components: {Container, Titulo, PVImagem, Coluna, Linha, Conteudo}

  }
</script>
