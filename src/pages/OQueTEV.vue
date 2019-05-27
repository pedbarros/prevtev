<template>
  <Pagina classePagina="full-height" :paddingPage="false">
    <Titulo imagem="statics/imgs/oque-tev/tituloOqueTev.png"/>

    <div class="q-pl-sm q-pr-sm">
      <Linha>
        <Coluna>
          <PVImagem imagem="statics/imgs/oque-tev/OQueETEV.png"/>
        </Coluna>
      </Linha>


      <Linha>
        <Coluna>
          <PVImagem @click="executeAudio()" imagem="statics/imgs/oque-tev/conteudoOqueTev.png"/>
        </Coluna>
      </Linha>

      <audio id="audioTrombose">
        <source src="statics/audios/o-que-e-trombose-venosa-profunda.m4a" type="audio/mpeg">
      </audio>
    </div>

  </Pagina>
</template>

<script>
  import Pagina from "../components/Shared/Pagina";
  import Linha from "../components/Shared/Linha";
  import Coluna from "../components/Shared/Coluna";
  import PVImagem from "../components/PVImagem";
  import Titulo from "../components/Shared/Titulo";

  export default {
    name: "OQueTEV",
    components: {Titulo, PVImagem, Coluna, Linha, Pagina},
    /* data() {
       return {
         audio: ''
       }
     },*/
    methods: {
      executeAudio() {
        let x = document.getElementById("audioTrombose");
        x.play();
      }
    }

  }
</script>

