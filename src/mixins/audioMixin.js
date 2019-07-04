import {urlFirebase} from '../helpers/storage-api'
import { Dialog } from 'quasar'

export default {
  data() {
    return {
      audioObj: new Audio()
    }
  },

  mounted() {
    let msg;
    this.audioObj.addEventListener('error', function failed(e) {
      switch (e.target.error.code) {
        case e.target.error.MEDIA_ERR_ABORTED:
          msg = ('Você abortou a reprodução do vídeo.');
          break;
        case e.target.error.MEDIA_ERR_NETWORK:
          msg = ('Um erro de rede causou falha no download de áudio.');
          break;
        case e.target.error.MEDIA_ERR_DECODE:
          msg = ('A reprodução de áudio foi interrompida devido a um problema de corrupção ou porque o vídeo usou recursos que seu celular não suportava.');
          break;
        case e.target.error.MEDIA_ERR_SRC_NOT_SUPPORTED:
          msg = ('O áudio não pode ser carregado, pois o servidor ou a internet falhou ou porque o formato não é suportado.');
          break;
        default:
          msg = ('Ocorreu um erro desconhecido.');
          break;
      }

      Dialog.create({
        title: 'Alerta!',
        message: msg
      })
    }, true);
  },

  methods: {
    executarSom(sound) {
      this.$q.loading.show({
        message: '<p><b>Por favor, espere um pouco. O áudio está sendo carregado...<b></p>'
      })

      if (sound) {
        let soundFirebase = urlFirebase(sound)
        this.audioObj.src = soundFirebase

        this.audioObj.play()
          .then(res => {
          }).finally(() => this.$q.loading.hide())
      }
    }
  },

  destroyed() {
    this.audioObj.pause();
    this.audioObj.currentTime = 0;
  }

}
