<template>
  <div class="centered">
    <video id="myvideo" ref="videoTag" controls>
      <source
        :src="video"
        type="video/mp4">
    </video>
  </div>
</template>

<script>

  export default {
    name: "PVVideo",

    props: ['video'],

    mounted(){
      this.$refs.videoTag.addEventListener('play', () => {
        //console.log("Okok")
      }, false);
    }

  }
</script>
<style>
  .centered {
    width: 100%;
    height: 80%;
    position: absolute;
    top: 70%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  #myvideo {
    width: 85% !important;
    height: 70% !important;
  }
</style>
