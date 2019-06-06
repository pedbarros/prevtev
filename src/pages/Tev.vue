<template>
  <Pagina classePagina="full-height" :paddingPage="false">

    <Titulo imagem="statics/imgs/tev/tituloTev.png"/>

    <Linha>
      <Coluna>
        <PVImagem widht="5px" @click="clik" imagem="statics/imgs/tev/corpoHumanoTev.png"></PVImagem>
      </Coluna>
    </Linha>

    <Linha>
      <Coluna>
        <PVImagem @click="$router.push( { name: 'MenuInicial', query: { msg: true }  } )"
                  imagem="statics/imgs/tev/btnTev.png"/>
      </Coluna>
    </Linha>


  </Pagina>
</template>

<script>
  import Linha from "../components/Shared/Linha";
  import Coluna from "../components/Shared/Coluna";
  import PVImagem from "../components/PVImagem";
  import Pagina from "../components/Shared/Pagina";
  import Titulo from "../components/Shared/Titulo";
  import { LocalStorage } from 'quasar'

  export default {
    name: "Tev",
    components: {Titulo, Pagina, PVImagem, Coluna, Linha},
    methods: {
      clik() {
        let v = JSON.stringify([{nome: 'pedro', idade: 123}])
        LocalStorage.set('teste', v)
        let value = LocalStorage.getItem('teste')
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
