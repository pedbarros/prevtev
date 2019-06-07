<template>
  <Pagina classePagina="full-height" :paddingPage="false">
    <Titulo imagem="statics/imgs/quando-suspeitar/tituloQuandoSuspeitar.png"/>

    <div class="q-pl-sm q-pr-sm">
      <Linha>
        <Coluna>
          <PVImagem imagem="statics/imgs/quando-suspeitar/QuandoSuspeitarTEVP.png"/>
        </Coluna>
      </Linha>

      <Container cor="#7887C4" altura="auto" class="q-pa-sm">
        <Coluna>
          <PVImagem @click="executeAudio()" imagem="statics/imgs/quando-suspeitar/imgQuandoSuspeitar1.png"/>
        </Coluna>
      </Container>



      <Linha>
        <Coluna>
          <PVImagem imagem="statics/imgs/quando-suspeitar/QuandoSuspeitarEmboliaPulmonar.png"/>
        </Coluna>
      </Linha>

      <Container cor="#7887C4" altura="auto" class="q-pa-sm">
        <Coluna>
          <PVImagem @click="executeAudio()" imagem="statics/imgs/quando-suspeitar/AlertaEmbolia.png"/>
          <PVImagem @click="executeAudio()" imagem="statics/imgs/quando-suspeitar/EmboliaBonecos.png"/> <br><br>
          <PVImagem @click="executeAudio()" imagem="statics/imgs/quando-suspeitar/AtencaoEmbolia.png"/><br>
        </Coluna>
      </Container>
    </div>

    <audio id="audioTrombose">
      <source :src="audio" type="audio/mpeg">
    </audio>
  </Pagina>
</template>

<script>
  import Pagina from "../components/Shared/Pagina";
  import Linha from "../components/Shared/Linha";
  import Coluna from "../components/Shared/Coluna";
  import PVImagem from "../components/PVImagem";
  import Titulo from "../components/Shared/Titulo";
  import Container from "../components/Shared/Container";

  export default {
    name: "TelaQuandoSuspeitar",
    components: {Container, Titulo, PVImagem, Coluna, Linha, Pagina},
    data(){
        return {
          audio: ''
        }
    },
    methods: {
      executeAudio(audio = '') {
        this.audio = audio
        let x = document.getElementById("audioTrombose");
        x.play();
      }
    }

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
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  video {
    width: 80% !important;
    height: 50% !important;
  }
</style>
