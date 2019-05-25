<template>
  <Pagina classePagina="full-height" :paddingPage="false">
    <Linha>
      <Coluna>
        <PVImagem imagem="statics/imgs/alarme/tituloAlarme.png"/>
      </Coluna>
    </Linha>


    <Linha>
      <Coluna>
        <PVImagem imagem="statics/imgs/alarme/textoAlarme.png" class="q-pl-lg q-pr-lg"/>
      </Coluna>
    </Linha>

    <div class="q-ml-lg q-mr-lg">
      <div id="pedo">
        <q-input v-model="text" label="Standard" />
      </div>
    </div>


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

    data() {
      return {
        text: ''
      }
    }

  }
</script>
<style scoped>
  #pedo {
    background-color: #7887C4;
    height: 300px;
    max-width: 100%;
  }
</style>
