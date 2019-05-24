<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <PVToolbar imagem="statics/imgs/logo-toolbar.png"></PVToolbar>
    </q-layout-header>

    <q-page-container>
      <router-view id="layout"/>
    </q-page-container>
  </q-layout>
</template>

<script>
  import PVToolbar from "../components/PVToolbar";
  export default {
    name: 'MyLayout',
    components: {PVToolbar},
  }
</script>

<style scoped>
  #layout {
    background-color: #00C1DA;
    background-image: linear-gradient(#00C1DA, #0086D4);
  }
</style>
