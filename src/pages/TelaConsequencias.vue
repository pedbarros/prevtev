<template>
  <Conteudo classeConteudo="full-height" :paddingPage="false">
    <Titulo imagem="statics/imgs/consequencias/002.png"/>

    <div class="q-pl-sm q-pr-sm">
      <Linha>
        <Coluna>
          <PVImagem @clickBottomRight="executarSom('Consequencias_01.wav')"
                    imagemBottomRight="statics/imgs/audio.png"
                    imagem="statics/imgs/consequencias/003.png"/>
        </Coluna>
      </Linha>

      <Container cor="#7887C4" altura="auto" class="q-pa-sm">
        <Coluna>
          <PVImagem  imagem="statics/imgs/consequencias/005.png"/>
        </Coluna>
      </Container>

      <Linha>
        <Coluna>
          <PVImagem @clickBottomRight="executarSom('Consequencias_02.wav')"
                    imagemBottomRight="statics/imgs/audio.png"
                    imagem="statics/imgs/consequencias/007.png"/>
        </Coluna>
      </Linha>
      <br>
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
    name: "TelaConsequencias",
    components: {Container, Titulo, PVImagem, Coluna, Linha, Conteudo},
    mixins: [audioMixin]

  }
</script>
