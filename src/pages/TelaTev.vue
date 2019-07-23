<template>
  <span>
    <Titulo imagem="statics/imgs/tev/tituloTev.png"/>
  <Conteudo classeConteudo="full-height">


    <Linha add-class="justify-around">
      <Coluna coluna="col-xs-7 col-sm-6 col-md-6">
        <PVImagem widht="5px" imagem="statics/imgs/tev/corpoHumanoTev.png"></PVImagem>
      </Coluna>
    </Linha>

    <Linha add-class="justify-around">
      <Coluna coluna="col-xs-12 col-sm-6 col-md-6">
        <PVImagem @click="openView('TelaMenuInicial')"
                  imagem="statics/imgs/tev/btnTev.png"/>
      </Coluna>
    </Linha>


  </Conteudo>
  </span>
</template>

<script>
  import Linha from "../components/Shared/Linha";
  import Coluna from "../components/Shared/Coluna";
  import PVImagem from "../components/PVImagem";
  import Conteudo from "../components/Shared/Conteudo";
  import Titulo from "../components/Shared/Titulo";
  import {LocalStorage} from 'quasar'

  export default {
    name: "Tev",
    components: {Titulo, Conteudo, PVImagem, Coluna, Linha} ,
    methods:{
      openView(view){
        this.$router.push( { name: view  } )
      }
    }
  }
</script>
