
export default {
  data(){
    return {
      audioObj: new Audio()
    }
  },
  methods: {
    executarSom (sound) {
      if(sound) {
        this.audioObj.src = sound
        this.audioObj.play();
      }
    }
  }
}
