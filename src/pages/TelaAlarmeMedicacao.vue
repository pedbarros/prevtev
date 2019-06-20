<template>
  <Conteudo classeConteudo="full-height" :paddingPage="false">

    <Titulo imagem="statics/imgs/alarme/002.png"/>

    <div class="q-pl-sm q-pr-sm">
      <Linha>
        <Coluna>
          <PVImagem  @clickBottomRight="executarSom('Alarme%20de%20MedicaÆo.wav')"
                     imagemBottomRight="statics/imgs/audio.png"
                     imagem="statics/imgs/alarme/003.png"/>
        </Coluna>
      </Linha>

      <Container cor="#7887C4" altura="320px" class="q-pa-sm">
        <q-input color="grey-1" rounded outlined
                 v-model="medicamento.nome" label="Medicamento"
                 class="q-mt-sm"
                 :rules="[val => !!val || 'O medicamento é obrigatório']"/>
        <q-input color="grey-1" rounded outlined type="number"
                 v-model="medicamento.qtdDias" label="Quantidade de dias"
                 class="q-mt-sm"
                 :rules="[val => !!val || 'A quantidade de dias é obrigatória']"/>

        <Linha>
          <Coluna coluna="col-4">
            <q-select color="grey-1" rounded outlined :options="optionsHoras" v-model="hora" class="q-mt-md"/>
          </Coluna>

          <Coluna coluna="col-4">
            <q-select color="grey-1" rounded outlined :options="optionsMinutos" v-model="minuto" class="q-mt-md"/>
          </Coluna>

          <Coluna coluna="col-4">
            <div class="q-pa-xs q-mt-md">
              <q-btn round color="primary" icon="add" :disable="!validarCamposAddMedicamento" @click="addMedicamento()"/>
              <q-btn round color="primary" icon="list" @click="$router.push( { name: 'TelaListaMedicamentos' } )"/>
            </div>
          </Coluna>
        </Linha>

        <q-btn color="primary" class="full-width q-mt-md" @click="salvarAgendamento()" label="Salvar"
               :disable="!validarCamposAlarme"/>
      </Container>
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
            date.setDate(date.getDate()+1);
            date.setHours(horario.hora);
            date.setMinutes(horario.minuto);
            date.setSeconds(0);

            return {
              id: indice,
              title: 'TOMAR MEDICAÇÃO!',
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
