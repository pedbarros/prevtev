<template>
  <Pagina classePagina="full-height" :paddingPage="false">

    <Titulo imagem="statics/imgs/alarme/tituloAlarme.png"/>

    <div class="q-pl-sm q-pr-sm">
      <Linha>
        <Coluna>
          <PVImagem imagem="statics/imgs/alarme/textoAlarme.png"/>
        </Coluna>
      </Linha>

      <Container cor="#7887C4" class="q-pa-sm">
        <q-input color="grey-1" rounded outlined v-model="text" label="Medicamento" />
        <q-input rounded outlined v-model="text" label="Dias" />
        <q-input rounded outlined v-model="text" label="Horário" />
      </Container>

    </div>
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
