<template>
  <q-page>
    <div class="full-height">

    <Linha>
      <Coluna>
        <PVImagem imagem="statics/imgs/pg02/tituloTev.png"/>
      </Coluna>
    </Linha>

    <Linha>
      <Coluna>
        <PVImagem id="test" widht="10px" @click="clik" imagem="statics/imgs/pg02/corpoHumanoTev.png"></PVImagem> 
      <!-- <div class="scroll overflow-hidden" style="height: 30%">
        <PVImagem @click="clik" imagem="statics/imgs/pg02/corpoHumanoTev.png"></PVImagem>
      </div>-->
      </Coluna>
    </Linha>

    <Linha>
      <Coluna>
        <PVImagem @click="$router.push( { name: 'MenuInicial' } )" imagem="statics/imgs/pg02/btnTev.png"></PVImagem>
      </Coluna>
    </Linha>
    </div>
  </q-page>
</template>

<script>
  import Linha from "../components/Shared/Linha";
  import Coluna from "../components/Shared/Coluna";
  import PVImagem from "../components/PVImagem";

  export default {
    name: "Tev",
    components: {PVImagem, Coluna, Linha},
    methods: {
      clik(value) {
        console.log(value)
      }
    }
  }
</script>
<style scoped>
html, body {
  height: 100%;
  margin: 0;
}
 
</style>
