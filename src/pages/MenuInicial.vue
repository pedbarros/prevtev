<template>
  <Pagina>
    <br><br>
    <Linha linha="row justify-around">
      <Coluna coluna="col-5 justify-around">
        <PVImagem @click="$router.push( { name: 'TelaOQueTEV' } )" imagem="statics/imgs/menuinicial/btnOqueTev.png"/>
      </Coluna>

      <Coluna coluna="col-5 justify-around">
        <PVImagem @click="$router.push( { name: 'TelaQuandoSuspeitar' } )" imagem="statics/imgs/menuinicial/btnQuandoSuspeitar.png"/>
      </Coluna>
    </Linha>

    <br><br>
    <Linha linha="row justify-around">
      <Coluna coluna="col-5 justify-around">
        <PVImagem @click="$router.push( { name: 'TelaComoPrevenir' } )" imagem="statics/imgs/menuinicial/btnComoPrevenir.png"/>
      </Coluna>

      <Coluna coluna="col-5 justify-around">
        <PVImagem  @click="$router.push( { name: 'TelaConsequencias' } )" imagem="statics/imgs/menuinicial/btnConsequencias.png"/>
      </Coluna>
    </Linha>


    <br><br>
    <Linha linha="row justify-around">
      <Coluna coluna="col-5 justify-around">
        <PVImagem @click="$router.push( { name: 'TelaCuidadosCasa' } )" imagem="statics/imgs/menuinicial/btnCuidadosCasa.png"/>
      </Coluna>

      <Coluna coluna="col-5 justify-around">
        <PVImagem @click="$router.push( { name: 'AlarmeMedicacao' } )"
                  imagem="statics/imgs/menuinicial/btnAlarmeMedicacao.png"/>
      </Coluna>
    </Linha>

    <video width="0" height="0" controls id="myvideo">
      <source src="statics/videos/oceans.mp4"></source>
    </video>
  </Pagina>
</template>

<script>
  import PVImagem from "../components/PVImagem";
  import Pagina from "../components/Shared/Pagina";
  import Linha from "../components/Shared/Linha";
  import Coluna from "../components/Shared/Coluna";
  import {Notify} from 'quasar'

  export default {
    name: 'MenuInicial',

    components: {Coluna, Linha, Pagina, PVImagem},

    data(){
      return {
        mostrarVideo: ''
      }
    },

    created(){
      console.log("created")
    },

    mounted() {
      console.log("mounted")
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

