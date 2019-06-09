<template>
  <Pagina classePagina="full-height" :paddingPage="false">
    <Titulo imagem="statics/imgs/consequencias/002.png"/>

    <div class="q-pl-sm q-pr-sm">
      <Linha>
        <Coluna>
          <PVImagem imagem="statics/imgs/consequencias/003.png"/>
        </Coluna>
      </Linha>

      <Container cor="#7887C4" altura="auto" class="q-pa-sm">
        <Coluna>
          <PVImagem @click="executeAudio('statics/audios/o-que-e-trombose-venosa-profunda.m4a')" imagem="statics/imgs/consequencias/005.png"/>
        </Coluna>
      </Container>

      <Linha>
        <Coluna>
          <PVImagem imagem="statics/imgs/consequencias/007.png"/>
        </Coluna>
      </Linha>
      <br>
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
    name: "TelaConsequencias",
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
