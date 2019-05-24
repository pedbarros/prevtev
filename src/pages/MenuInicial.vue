<template>
  <Pagina>

    <Linha linha="row justify-around">

      <Coluna coluna="col-5 justify-around">
        <PVImagem imagem="statics/imgs/pg03/btnOqueTev.png"/>
      </Coluna>

      <Coluna coluna="col-5 justify-around">
        <PVImagem imagem="statics/imgs/pg03/btnQuandoSuspeitar.png"/>
      </Coluna>
    </Linha>


    <Linha linha="row justify-around">

      <Coluna coluna="col-5 justify-around">
        <PVImagem imagem="statics/imgs/pg03/btnComoPrevenir.png"/>
      </Coluna>

      <Coluna coluna="col-5 justify-around">
        <PVImagem imagem="statics/imgs/pg03/btnComoPrevenir.png"/>
      </Coluna>
    </Linha>

  </Pagina>
</template>

<script>
  import PVImagem from "../components/PVImagem";
  import Pagina from "../components/Shared/Pagina";
  import Linha from "../components/Shared/Linha";
  import Coluna from "../components/Shared/Coluna";

  export default {
    name: 'PageIndex',
    components: {Coluna, Linha, Pagina, PVImagem}
  }
</script>

