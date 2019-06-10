<template>
  <div class="container">
    <q-img
      :src="imagem"
      spinner-color="white"
      @click="$emit('click', $event)"/>

    <div class="bottomright" v-if="imagemBottomRight">
      <img :src="imagemBottomRight" width="32" height="33"  @click="$emit('clickAudio', $event)">

      <audio id="audioTrombose">
        <source src="statics/audios/o-que-e-trombose-venosa-profunda.m4a" type="audio/mpeg">
      </audio>
    </div>
  </div>

</template>

<script>
  export default {
    name: "PVImagem",
    props: {
      imagem: {
        type: String,
        required: true
      },
      imagemBottomRight: {
        type: String
      }
    }
  }
</script>

<style scoped>
  q-img {
    height: 100%;
    width: 100%;
  }

  .container {
    position: relative;
  }

  .bottomright {
    position: absolute;
    bottom: 1%;
    right: 2%;
    font-size: 18px;
  }


</style>
