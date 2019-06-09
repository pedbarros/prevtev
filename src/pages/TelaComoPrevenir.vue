<template>
  <Pagina classePagina="full-height" :paddingPage="false">
    <Titulo imagem="statics/imgs/como-prevenir/002.png"/>

    <div class="q-pl-sm q-pr-sm">
      <Linha>
        <Coluna>
          <PVImagem imagem="statics/imgs/como-prevenir/003.png"/>
        </Coluna>
      </Linha> <br>

      <Linha>
        <Coluna>
          <PVImagem imagem="statics/imgs/como-prevenir/005.png"/>
        </Coluna>
      </Linha> <br>


      <Linha>
        <Coluna>
          <PVImagem imagem="statics/imgs/como-prevenir/008.png"/>
        </Coluna>
      </Linha> <br>


      <Linha>
        <Coluna>
          <PVImagem imagem="statics/imgs/como-prevenir/010.png"/>
        </Coluna>
      </Linha> <br>


      <Linha>
        <Coluna>
          <PVImagem imagem="statics/imgs/como-prevenir/012.png"/>
        </Coluna>
      </Linha> <br>


      <Linha>
        <Coluna>
          <PVImagem imagem="statics/imgs/como-prevenir/013.png"/>
        </Coluna>
      </Linha> <br>

      <Linha>
        <Coluna>
          <PVImagem imagem="statics/imgs/como-prevenir/015.png"/>
        </Coluna>
      </Linha> <br>


      <Linha>
        <Coluna>
          <PVImagem imagem="statics/imgs/como-prevenir/017.png"/>
        </Coluna>
      </Linha> <br>


      <Linha>
        <Coluna>
          <PVImagem imagem="statics/imgs/como-prevenir/019.png"/>
        </Coluna>
      </Linha> <br>


      <Linha>
        <Coluna>
          <PVImagem imagem="statics/imgs/como-prevenir/020.png"/>
        </Coluna>
      </Linha> <br>

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
    name: "TelaComoPrevenir",
    components: {Container, Titulo, PVImagem, Coluna, Linha, Pagina},
    data() {
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
