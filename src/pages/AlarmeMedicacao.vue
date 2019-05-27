<template>
  <Pagina classePagina="full-height" :paddingPage="false">

    <Titulo imagem="statics/imgs/alarme/tituloAlarme.png"/>
    <Linha>
      <Coluna>
        <PVImagem imagem="statics/imgs/alarme/textoAlarme.png" class="q-pl-lg q-pr-lg"/>
      </Coluna>
    </Linha>

    <Linha class="q-ml-lg q-mr-lg">
      <Coluna>
        <Container cor="#7887C4">
          <q-input v-model="text" style="background-color: white; color: #000;" label="Medicamento"/>
        </Container>
      </Coluna>
    </Linha>

  </Pagina>
</template>

<script>
  import Pagina from "../components/Shared/Pagina";
  import Linha from "../components/Shared/Linha";
  import Coluna from "../components/Shared/Coluna";
  import PVImagem from "../components/PVImagem";
  import Titulo from "../components/Shared/Titulo";
  import Container from "../components/Shared/Container";

  export default {
    name: "Alarme",

    components: {Container, Titulo, PVImagem, Coluna, Linha, Pagina},

    data() {
      return {
        text: ''
      }
    }

  }
</script>
