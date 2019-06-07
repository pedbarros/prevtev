<template>
  <audio id="audioTrombose">
    <source :src="audio" type="audio/mpeg">
  </audio>
</template>

<script>
  export default {
    name: "PVAudio",
    data(){
      return {
        audio: ''
      }
    },
    // props: ['audio'], //statics/audios/o-que-e-trombose-venosa-profunda.m4a,
    methods: {
      executeAudio(audio) {
        this.audio = audio
        let x = document.getElementById("audioTrombose");
        x.play();
      }
    }
  }
</script>
