<template>
  <Conteudo classeConteudo="full-height" :paddingPage="false">
    <Titulo imagem="statics/imgs/quando-suspeitar/002.png"/>

    <div class="q-pl-sm q-pr-sm">
      <Linha>
        <Coluna>
          <PVImagem  @clickBottomRight="executarSom('http://soundbible.com/mp3/Air Plane Ding-SoundBible.com-496729130.mp3')"
                     imagemBottomRight="statics/imgs/audio.png"
                     imagem="statics/imgs/quando-suspeitar/003.png"/>
        </Coluna>
      </Linha>

      <Container cor="#7887C4" altura="auto" class="q-pa-sm">
        <Coluna>
          <PVImagem imagem="statics/imgs/quando-suspeitar/005.png"/>
        </Coluna>
      </Container>



      <Linha>
        <Coluna>
          <PVImagem @clickBottomRight="executarSom('http://soundbible.com/mp3/Air Plane Ding-SoundBible.com-496729130.mp3')"
                    imagemBottomRight="statics/imgs/audio.png"
                    imagem="statics/imgs/quando-suspeitar/007.png"/>
        </Coluna>
      </Linha>

      <Container cor="#7887C4" altura="auto" class="q-pa-sm">
        <Coluna>
          <PVImagem imagem="statics/imgs/quando-suspeitar/009.png"/>
          <PVImagem imagem="statics/imgs/quando-suspeitar/010.png"/> <br><br>
          <PVImagem @clickBottomRight="executarSom('http://soundbible.com/mp3/Air Plane Ding-SoundBible.com-496729130.mp3')"
                    imagemBottomRight="statics/imgs/audio.png"
                    imagem="statics/imgs/quando-suspeitar/012.png"/><br>
        </Coluna>
      </Container>
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
    name: "TelaQuandoSuspeitar",
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
