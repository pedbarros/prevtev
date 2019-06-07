<template>
  <Pagina classePagina="full-height" :paddingPage="false">

    <Titulo imagem="statics/imgs/cuidados-casa/tituloCuidadoCasa.png"/>

    <div class="q-pl-sm q-pr-sm">
      <Container cor="#7887C4" altura="auto" class="q-pa-sm">
        <Coluna>
          <PVImagem @click="executeAudio()" imagem="statics/imgs/cuidados-casa/professoraExplicacao.png"/>
        </Coluna>
      </Container><br>

      <Linha>
        <Coluna>
          <PVImagem imagem="statics/imgs/cuidados-casa/informacao01.png"/>
        </Coluna>
      </Linha><br>


      <Linha>
        <Coluna>
          <PVImagem imagem="statics/imgs/cuidados-casa/informacao02.png"/>
        </Coluna>
      </Linha>

      <br>
      <Linha>
        <Coluna>
          <PVImagem imagem="statics/imgs/cuidados-casa/informacao03.png"/>
        </Coluna>
      </Linha>

      <br>
      <Linha>
        <Coluna>
          <PVImagem imagem="statics/imgs/cuidados-casa/informacao04.png"/>
        </Coluna>
      </Linha>

      <br>
      <Linha>
        <Coluna>
          <PVImagem imagem="statics/imgs/cuidados-casa/informacao05.png"/>
        </Coluna>
      </Linha>
      <br>

      <Linha>
        <Coluna>
          <PVImagem imagem="statics/imgs/cuidados-casa/informacao06.png"/>
        </Coluna>
      </Linha><br>

      <Linha>
        <Coluna>
          <PVImagem imagem="statics/imgs/cuidados-casa/informacao07.png"/>
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
    name: "TelaCuidadosCasa",
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
