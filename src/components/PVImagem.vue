<template>
  <div class="container">
    <q-img
      :src="imagem"
      spinner-color="white"
      @click="$emit('click', $event)"/>

    <div class="bottomright" v-if="imagemBottomRight">
      <img :src="imagemBottomRight" width="32" height="33" @click="$emit('clickBottomRight', $event)">

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
      }/*,
      audioBottomRight: {
        type: String
      }*/
    },

    methods: {
      executeAudio(event) {
       /* let audio1 = this.$refs.audioImagem
        audio1.play();*/
       /* if (audio.paused) {
          audio.play();
        } else {
          audio.currentTime = 0
        }*/


      },
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
