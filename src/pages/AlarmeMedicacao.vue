<template>
  <Pagina classePagina="full-height" :paddingPage="false">
    <Linha>
      <Coluna>
        <PVImagem imagem="statics/imgs/alarme/tituloAlarme.png"/>
      </Coluna>
    </Linha>


    <Linha>
      <Coluna>
        <PVImagem imagem="statics/imgs/alarme/textoAlarme.png"/>
      </Coluna>
    </Linha>


  </Pagina>
</template>

<script>
  import Pagina from "../components/Shared/Pagina";
  import Linha from "../components/Shared/Linha";
  import Coluna from "../components/Shared/Coluna";
  import PVImagem from "../components/PVImagem";

  export default {
    name: "Alarme",

    components: {PVImagem, Coluna, Linha, Pagina},

    data(){
      return{
          text: ''
      }
    }

  }
</script>

