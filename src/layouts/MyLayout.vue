<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <PVToolbar imagem="statics/imgs/logo-toolbar.png"/>
    </q-header>

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
