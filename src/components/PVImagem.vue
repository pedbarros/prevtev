<template>
  <div class="container">
    <q-img
      :src="imagem"
      spinner-color="white"
      @click="$emit('click', $event)"/>

    <div id="bottomright" v-if="imagemBottomRight">
      <img id="imgAudio" :src="imagemBottomRight" @click="$emit('clickBottomRight', $event)">
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

  #bottomright {
    position: absolute;
    bottom: 1%;
    right: 3%;
    font-size: 18px;
  }

  @media (min-width: 300px) {
    #imgAudio {
      width: 27px;
      height: 28px;
    }
  }


  @media (min-width: 400px) {
    #imgAudio {
      width: 35px;
      height: 36px;
    }
  }


  @media (min-width: 700px) {
    #imgAudio {
      width: 65px;
      height: 66px;
    }
  }

</style>
