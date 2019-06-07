<template>
  <Pagina classePagina="full-height" :paddingPage="false">
    <Titulo imagem="statics/imgs/oque-tev/tituloOqueTev.png"/>

    <div class="q-pl-sm q-pr-sm">
      <Linha>
        <Coluna>
          <PVImagem imagem="statics/imgs/oque-tev/OQueETEVDescricaoGeral.png"/>
        </Coluna>
      </Linha>


      <Linha>
        <Coluna>
          <PVImagem @click="executeAudio('statics/audios/o-que-e-trombose-venosa-profunda.m4a')"
                    imagem="statics/imgs/oque-tev/OQueETrombose.png"/>
        </Coluna>
      </Linha>


      <Container cor="#7887C4" altura="auto" class="q-pa-sm">
        <Coluna>
          <PVImagem @click="executeAudio()" imagem="statics/imgs/oque-tev/imgTrombose.png"/>
        </Coluna>
      </Container>


      <Linha>
        <Coluna>
          <PVImagem @click="executeAudio()" imagem="statics/imgs/oque-tev/OQueEmbolia.png"/>
        </Coluna>
      </Linha>


      <Container cor="#7887C4" altura="auto" class="q-pa-sm">
        <Coluna>
          <PVImagem @click="executeAudio()" imagem="statics/imgs/oque-tev/imgEmbolia.png"/>
        </Coluna>
      </Container>

      <Linha>
        <Coluna id="idContainerVideo">
          <PVImagem @click="executeAudio()" imagem="statics/imgs/oque-tev/videoTEV.png"/>
          <div class="centered">
            <!--<video class="centered" controls id="myvideo">
              <source src="statics/videos/oceans.mp4"/>
            </video>-->
            <iframe id="myvideo" src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
          </div>
        </Coluna>
      </Linha><br><br><br>


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
    name: "TelaOQueTEV",
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
    top: 70%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  #myvideo {
    width: 85% !important;
    height: 70% !important;
  }
</style>
