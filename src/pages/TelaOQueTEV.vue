<template>
  <Pagina classePagina="full-height" :paddingPage="false">
    <Titulo imagem="statics/imgs/oque-tev/002.png"/>

    <div class="q-pl-sm q-pr-sm">
      <Linha>
        <Coluna>
          <PVImagem @clickBottomRight="executarSom('statics/audios/o-que-e-trombose-venosa-profunda.m4a')"
                    imagemBottomRight="statics/imgs/audio.png"
                    imagem="statics/imgs/oque-tev/003.png"/>
        </Coluna>
      </Linha>


      <Linha>
        <Coluna>
          <PVImagem
            @clickBottomRight="executarSom('http://soundbible.com/mp3/Air Plane Ding-SoundBible.com-496729130.mp3')"
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
            @clickBottomRight="executarSom('http://soundbible.com/mp3/Air Plane Ding-SoundBible.com-496729130.mp3')"
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
          <div class="centered">
            <iframe id="myvideo" src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
          </div>
        </Coluna>
      </Linha>
      <br><br>


    </div>
  </Pagina>
</template>

<script>
  import Pagina from "../components/Shared/Pagina";
  import Linha from "../components/Shared/Linha";
  import Coluna from "../components/Shared/Coluna";
  import PVImagem from "../components/PVImagem";
  import Titulo from "../components/Shared/Titulo";
  import Container from "../components/Shared/Container";
  import audioMixin from "../mixins/audioMixin";

  export default {
    name: "TelaOQueTEV",
    components: {Container, Titulo, PVImagem, Coluna, Linha, Pagina},
    mixins: [audioMixin]
  }
</script>

<style scoped>
  #idContainerVideo {
    position: relative;
    text-align: center;
  }

  .centered {
    width: 100%;
    height: 80%;
    position: absolute;
    top: 70%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  #myvideo {
    width: 85% !important;
    height: 70% !important;
  }


</style>
