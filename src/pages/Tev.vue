<template>
  <Pagina classePagina="full-height" :paddingPage="false">

    <Titulo imagem="statics/imgs/tev/tituloTev.png"/>
    <br><br>

    <Linha add-class="justify-around">
      <Coluna coluna="col-xs-12 col-sm-6 col-md-6">
        <PVImagem widht="5px" @click="clik" imagem="statics/imgs/tev/corpoHumanoTev.png"></PVImagem>
      </Coluna>
    </Linha>

    <Linha add-class="justify-around">
      <Coluna coluna="col-6 col-lg-10">
        <PVImagem @click="$router.push( { name: 'MenuInicial'  } )"
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
