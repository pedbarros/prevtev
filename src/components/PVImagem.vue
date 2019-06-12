<template>
  <div class="container">
    <q-img
      :src="imagem"
      spinner-color="white"
      @click="$emit('click', $event)"/>

    <div class="bottomright" v-if="imagemBottomRight">
      <img :src="imagemBottomRight" width="38" height="39" @click="$emit('clickBottomRight', $event)">

    </div>
  </div>

</template>

<script>
  export default {
    name: "PVImagem",
    data () {
      return {
        audio: ''
      };
    },
    props: {
      imagem: {
        type: String,
        required: true
      },
      imagemBottomRight: {
        type: String
      }
    },
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
    right: 3%;
    font-size: 18px;
  }


</style>
