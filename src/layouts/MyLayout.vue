<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <PVToolbar imagem="statics/imgs/logo-toolbar.png"></PVToolbar>
    </q-layout-header>

    <q-page-container>
      <router-view/>
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

<style>

</style>
