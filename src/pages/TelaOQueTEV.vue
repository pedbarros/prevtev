<template>
  <Conteudo classeConteudo="full-height" :paddingPage="false">
    <Titulo imagem="statics/imgs/oque-tev/002.png"/>

    <div class="q-pl-sm q-pr-sm">
      <Linha>
        <Coluna>
          <PVImagem @clickBottomRight="executarSom('TEV%20-%2001.wav')"
                    imagemBottomRight="statics/imgs/audio.png"
                    imagem="statics/imgs/oque-tev/003.png"/>
        </Coluna>
      </Linha>


      <Linha>
        <Coluna>
          <PVImagem
            @clickBottomRight="executarSom('TEV%20-%2002.wav')"
            imagemBottomRight="statics/imgs/audio.png"
            imagem="statics/imgs/oque-tev/005.png"/>
        </Coluna>
      </Linha>


      <Container cor="#7887C4" altura="auto" class="q-pa-sm">
        <Coluna>
          <PVImagem imagem="statics/imgs/oque-tev/007.png"/>
        </Coluna>
      </Container>


      <Linha>
        <Coluna>
          <PVImagem
            @clickBottomRight="executarSom('TEV%20-%2003.wav')"
            imagemBottomRight="statics/imgs/audio.png"
            imagem="statics/imgs/oque-tev/009.png"/>
        </Coluna>
      </Linha>


      <Container cor="#7887C4" altura="auto" class="q-pa-sm">
        <Coluna>
          <PVImagem imagem="statics/imgs/oque-tev/011.png"/>
        </Coluna>
      </Container>

      <Linha>
        <Coluna id="idContainerVideo">
          <PVImagem imagem="statics/imgs/oque-tev/013.png"/>
          <PVVideo video="https://firebasestorage.googleapis.com/v0/b/pedroapp-c2d3d.appspot.com/o/TEV.mp4?alt=media&token=2ea489f4-22da-4159-a5f6-3b262ddb3ca0"/>
        </Coluna>
      </Linha>
      <br><br>


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
  import PVVideo from "../components/PVVideo";

  export default {
    name: "TelaOQueTEV",
    components: {PVVideo, Container, Titulo, PVImagem, Coluna, Linha, Conteudo},
    mixins: [audioMixin]
  }
</script>

<style scoped>
  #idContainerVideo {
    position: relative;
    text-align: center;
  }


</style>
