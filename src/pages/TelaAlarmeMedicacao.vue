<template>
  <Conteudo classeConteudo="full-height" :paddingPage="false">

    <Titulo imagem="statics/imgs/alarme/002.png"/>

    <div class="q-pl-sm q-pr-sm">
      <Linha>
        <Coluna>
          <PVImagem imagem="statics/imgs/alarme/004.png"/>
        </Coluna>
      </Linha>
    </div>


  </Conteudo>
</template>

<script>
  import Conteudo from "../components/Shared/Conteudo";
  import Linha from "../components/Shared/Linha";
  import Coluna from "../components/Shared/Coluna";
  import PVImagem from "../components/PVImagem";
  import Titulo from "../components/Shared/Titulo";
  import Container from "../components/Shared/Container";
  import audioMixin from "../mixins/audioMixin";

  export default {
    name: "Alarme",

    components: {Container, Titulo, PVImagem, Coluna, Linha, Conteudo},


    mixins: [audioMixin],

    data() {
      return {
        medicamento: {
          nome: '',
          qtdDias: '',
          horarios: [],
        },
        hora: '',
        minuto: '',
        optionsHoras: Array.from(Array(24), (d, i) => String(i).padStart(2, '0')),
        optionsMinutos: Array.from(Array(60), (d, i) => String(i).padStart(2, '0')),
      }
    },

    computed: {
      validarCamposAddMedicamento() {
        return (this.medicamento.nome !== '' && this.medicamento.qtdDias !== '' && this.hora !== '' && this.minuto !== '')
      },

      validarCamposAlarme() {
        return (this.medicamento.nome !== '' && this.medicamento.qtdDias !== '' && this.medicamento.horarios.length > 0)
      },
    },

    methods: {

      acessoRestrito (parametroEntrada) {
        this.$q.dialog({
          title: 'Acesso Restrito',
          message: 'Digite a senha de acesso: ',
          prompt: {
            model: '',
            type: 'password'
          },
          cancel: true,
          persistent: true
        }).onOk(data => {

          if (data === "prevtev987"){
            if(parametroEntrada === 1)
              this.addMedicamento()
            if(parametroEntrada === 2)
              this.$router.push( { name: 'TelaListaMedicamentos' } )

          }else
            this.$q.notify({position: 'top-right', textColor: 'error', message: `Credenciais de acesso incorreta!`})
        }).onDismiss(() => {
          console.log('I am triggered on both OK and Cancel')
        })


      },

      addMedicamento() {
        if (this.medicamento.horarios.some(e => ( e.hora === this.hora && e.minuto === this.minuto )))
          this.$q.notify({position: 'top-right', textColor: 'warning', message: `Esse horário já foi agendado para este medicamento!`})
        else
          this.$q.notify({position: 'top-right', message: `Horário do medicamento adicionado com sucesso!`})

        let horario = {hora: this.hora, minuto: this.minuto}
        this.medicamento.horarios.push(horario)

      },

      salvarAgendamento() {
        let medicamentosStorage = this.$q.localStorage.getItem('medicamentos')

        if (!medicamentosStorage) {
          this.$q.localStorage.set('medicamentos', JSON.stringify([this.medicamento]))
        } else {
          let arrMedicamentos = JSON.parse(medicamentosStorage)

          if (arrMedicamentos.some(e => e.nome === this.medicamento.nome)) {
            this.$q.notify({
              position: 'top-right',
              textColor: 'warning',
              message: `Esse medicamento já foi adicionado.`
            })
          } else {
            arrMedicamentos.push(this.medicamento)
            this.$q.localStorage.set('medicamentos', JSON.stringify(arrMedicamentos))
          }
        }

        let medicamentosStorage2 = JSON.parse(this.$q.localStorage.getItem('medicamentos'))


        let configuracoesDoAlarme = medicamentosStorage2.map(medicamento => {
          return medicamento.horarios.map((horario, indice) => {
            let date = new Date()
            date.setDate(date.getDate());
            date.setHours(horario.hora);
            date.setMinutes(horario.minuto);
            date.setSeconds(0);

            return {
              id: indice,
              title: 'TOMAR MEDICAÇÃO!',
              vibrate: true,
              priority: 1, // High priority
              sound: true,
              text: `O médicamento ${medicamento.nome} deve ser tomado neste exato momento!!`,
              at: date,
              every: 'day'
            }
          });
        })

        this.$q.cordova.plugins.notification.local.schedule(configuracoesDoAlarme.flat())


        this.$q.notify({position: 'top-right', message: `O medicamento será alertado em seus devidos horários cadastrados!!`})
        this.$router.go(-1)
      }
    }

  }
</script>
