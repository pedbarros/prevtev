<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <PVToolbar imagem="statics/imgs/logo-toolbar.png" :mostrarBotaoVoltar="false"/>
    </q-header>

    <q-page-container>
        <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script>
  import PVToolbar from "../components/PVToolbar";

  export default {
    name: 'MyLayoutSemBotaoToolbar',
    components: {PVToolbar},
  }
</script>
