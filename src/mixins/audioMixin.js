import { urlFirebase } from '../helpers/storage-api'
export default {
  data(){
    return {
      audioObj: new Audio()
    }
  },

  methods: {
    executarSom (sound) {
      this.$q.loading.show({
        message: '<p><b>Por favor, espere um pouco. O áudio está sendo carregado...<b></p>'
      })

      if(sound) {
        let soundFirebase = urlFirebase(sound)
        this.audioObj.src = soundFirebase

        this.audioObj.play()
          .then(res =>{}).finally( () => this.$q.loading.hide())
      }
    }
  },

  destroyed(){
    this.audioObj.pause();
    this.audioObj.currentTime = 0;
  }

}
