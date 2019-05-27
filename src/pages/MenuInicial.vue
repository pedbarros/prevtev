<template>
  <Pagina>
    <br><br>
    <Linha linha="row justify-around">
      <Coluna coluna="col-5 justify-around">
        <PVImagem @click="$router.push( { name: 'OQueTEV' } )" imagem="statics/imgs/menuinicial/btnOqueTev.png"/>
      </Coluna>

      <Coluna coluna="col-5 justify-around">
        <PVImagem imagem="statics/imgs/menuinicial/btnQuandoSuspeitar.png"/>
      </Coluna>
    </Linha>

    <br><br>
    <Linha linha="row justify-around">
      <Coluna coluna="col-5 justify-around">
        <PVImagem imagem="statics/imgs/menuinicial/btnComoPrevenir.png"/>
      </Coluna>

      <Coluna coluna="col-5 justify-around">
        <PVImagem imagem="statics/imgs/menuinicial/btnComoPrevenir.png"/>
      </Coluna>
    </Linha>


    <br><br>
    <Linha linha="row justify-around">
      <Coluna coluna="col-5 justify-around">
        <PVImagem imagem="statics/imgs/menuinicial/btnComoPrevenir.png"/>
      </Coluna>

      <Coluna coluna="col-5 justify-around">
        <PVImagem @click="$router.push( { name: 'AlarmeMedicacao' } )" imagem="statics/imgs/menuinicial/btnAlarmeMedicacao.png"/>
      </Coluna>
    </Linha>


  </Pagina>
</template>

<script>
  import PVImagem from "../components/PVImagem";
  import Pagina from "../components/Shared/Pagina";
  import Linha from "../components/Shared/Linha";
  import Coluna from "../components/Shared/Coluna";
  import { Notify } from 'quasar'

  export default {
    name: 'MenuInicial',

    components: {Coluna, Linha, Pagina, PVImagem},

    mounted(){
      let { msg } = this.$route.query
      if (msg) {
        // Notify.create('Bem vindo ao PrevTev!!!!')
      }
    }
  }
</script>

