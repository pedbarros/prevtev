<template>
  <Conteudo>
    <br><br>
    <Linha linha="row justify-around">
      <Coluna coluna="col-5 col-sm-3 justify-around">
        <PVImagem @click="$router.push( { name: 'TelaOQueTEV' } )" imagem="statics/imgs/menuinicial/003.png"/>
      </Coluna>

      <Coluna coluna="col-5 col-sm-3 justify-around">
        <PVImagem @click="$router.push( { name: 'TelaQuandoSuspeitar' } )" imagem="statics/imgs/menuinicial/004.png"/>
      </Coluna>
    </Linha>

    <br><br>
    <Linha linha="row justify-around">
      <Coluna coluna="col-5 col-sm-3 justify-around">
        <PVImagem @click="$router.push( { name: 'TelaComoPrevenir' } )" imagem="statics/imgs/menuinicial/005.png"/>
      </Coluna>

      <Coluna coluna="col-5 col-sm-3 justify-around">
        <PVImagem  @click="$router.push( { name: 'TelaConsequencias' } )" imagem="statics/imgs/menuinicial/006.png"/>
      </Coluna>
    </Linha>


    <br><br>
    <Linha linha="row justify-around">
      <Coluna coluna="col-5 col-sm-3 justify-around">
        <PVImagem @click="$router.push( { name: 'TelaCuidadosCasa' } )" imagem="statics/imgs/menuinicial/007.png"/>
      </Coluna>

      <Coluna coluna="col-5 col-sm-3 justify-around" v-if="false">
        <PVImagem @click="$router.push( { name: 'TelaAlarmeMedicacao' } )"
                  imagem="statics/imgs/menuinicial/008.png"/>
      </Coluna>
    </Linha>
  </Conteudo>
</template>

<script>
  import PVImagem from "../components/PVImagem";
  import Conteudo from "../components/Shared/Conteudo";
  import Linha from "../components/Shared/Linha";
  import Coluna from "../components/Shared/Coluna";
  import {Notify} from 'quasar'

  export default {
    name: 'MenuInicial',

    components: {Coluna, Linha, Conteudo, PVImagem},

    data(){
      return {
        mostrarVideo: ''
      }
    },

    methods: {
      openVideo() {
        let elem = document.getElementById("myvideo");
        if (elem.requestFullscreen) {
          elem.requestFullscreen();
        }

        if (elem.exitFullscreen) {
          elem.exitFullscreen();
          alert("The audio has ended");
        }
      }
    }
  }
</script>

