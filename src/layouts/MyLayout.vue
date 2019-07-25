<template>
  <q-layout view="lHh lpr lFf">
    <q-header elevated>
      <PVToolbar imagem="statics/imgs/logo-toolbar.png"></PVToolbar>
    </q-header>

    <PVFooter>
      <Linha linha="row">
        <Coluna coluna="col-6">
          <PVImagem @click="$router.push( { name: 'TelaSobre' } )" imagem="statics/imgs/geral/001.png"/>
        </Coluna>

        <Coluna coluna="col-6">
          <PVImagem @click="$router.push( { name: 'TelaComoNavegar' } )" imagem="statics/imgs/geral/002.png"/>
        </Coluna>
      </Linha>
    </PVFooter>

    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script>
  import PVToolbar from "../components/PVToolbar";
  import Linha from "../components/Shared/Linha";
  import PVImagem from "../components/PVImagem";
  import Coluna from "../components/Shared/Coluna";
  import PVFooter from "../components/PVFooter";

  export default {
    name: 'MyLayout',
    components: {PVFooter, Coluna, PVImagem, Linha, PVToolbar},
  }
</script>
