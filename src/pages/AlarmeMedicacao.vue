<template>
  <Pagina classePagina="full-height" :paddingPage="false">

    <Titulo imagem="statics/imgs/alarme/tituloAlarme.png"/>

    <div class="q-pl-sm q-pr-sm">
      <Linha>
        <Coluna>
          <PVImagem imagem="statics/imgs/alarme/textoAlarme.png"/>
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
            <div class="q-pa-sm q-mt-md">
              <q-btn round color="primary" icon="add" @click="addMedicamento()"/>
            </div>
          </Coluna>
        </Linha>

        <q-btn color="primary" class="full-width q-mt-md" @click="salvarAgendamento()" label="Salvar"
               :disable="!validarCamposAlarme"/>
      </Container>
    </div>
  </Pagina>
</template>

<script>
  import Pagina from "../components/Shared/Pagina";
  import Linha from "../components/Shared/Linha";
  import Coluna from "../components/Shared/Coluna";
  import PVImagem from "../components/PVImagem";
  import Titulo from "../components/Shared/Titulo";
  import Container from "../components/Shared/Container";

  export default {
    name: "Alarme",

    components: {Container, Titulo, PVImagem, Coluna, Linha, Pagina},

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
      validarCamposAlarme() {
        return (this.medicamento.nome !== '' && this.medicamento.qtdDias !== '' && this.medicamento.horarios.length > 0)
      },
    },

    methods: {
      clearFields() {
        /*const {item_compra, produtoSelecionado, item} = this.$options.data.call(this)
        this.item_compra = item_compra
        this.item = item
        this.produtoSelecionado = produtoSelecionado*/
      },
      addMedicamento() {
        let horario = {hora: this.hora, minuto: this.minuto}
        this.medicamento.horarios.push(horario)

        this.$q.notify({position: 'top-right', message: `Horário do medicamento adicionado com sucesso!`})
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
            var today = new Date();
            var tomorrow = new Date();
            tomorrow.setDate(today.getDate() + 1);
            tomorrow.setHours(6);
            tomorrow.setMinutes(0);
            tomorrow.setSeconds(0);
            var tomorrow_at_6_am = new Date(tomorrow);

            return {
              id: indice,
              title: 'TOMAR MEDICAÇÃO!',
              text: `O médicamento ${medicamento.nome} deve ser tomado neste exato momento!!`,
              //firstAt: monday,
              firstAt: tomorrow_at_6_am,
              every: "day" // "minute", "hour", "week", "month", "year"
              // every: { hour: Number(horario.hora), minute:  Number(horario.minuto )}
              //trigger: {every: { hour: Number(horario.hora), minute:  Number(horario.minuto )}}
            }
          });
        })

        this.$q.cordova.plugins.notification.local.schedule(configuracoesDoAlarme.flat())


        this.$q.cordova.plugins.notification.local.on('trigger', (e) => {
          alert(e)
        })

        /*   let configuracoesDoAlarme = medicamentosStorage2.map( medicamento => {
             return medicamento.horarios.map((horario, indice) => {
               return {
                 id: indice,
                 title: 'TOMAR MEDICAÇÃO!',
                 text: `O médicamento ${medicamento.nome} deve ser tomado neste exato momento!!`,
                 trigger: {every: { hour: horario.hora, minute:  horario.minuto }}
               };
             })
           }) */

//console.log(JSON.parse(configuracoesDoAlarme))

        //  let { nome, qtdDias } = this.medicamento
        // this.$q.notify({position: 'top-right', message: `O medicamento ${nome} foi adicionado para ser alarmado durante  ${qtdDias} dia(s)!`})

        /*this.$q.cordova.plugins.notification.local.schedule([
          {
            id: 1,
            title: 'My first notification',
            text: 'First notification test one',
            trigger: {every: {hour: 16, minute: 20}}
          },
          {
            id: 2,
            title: 'My Second notification',
            text: 'Second notification on 12 pm',
            trigger: {every: {hour: 16, minute: 21}}
          },
          {
            id: 3,
            title: 'My Second notification',
            text: 'Second notification on 16 pm',
            trigger: {every: {hour: 16, minute: 22}}
          }
        ]);*/
        /* this.$q.cordova.plugins.notification.local.schedule({
           id: 0,
           title: 'My first notification',
           text: 'Thats pretty easy...',
           trigger: {
             every: 'second',
             count: 1440,
           },
         })

         this.$q.cordova.plugins.notification.local.on("trigger", function (notification) {
           this.$q.cordova.plugins.notification.local.clear(notification.id)
           alert("triggered: " + notification.id);
         });*/

        /* this.$q.cordova.plugins.notification.local.on('trigger').subscribe(notification => {
           alert("Triggering notification (Page)", notification);
           if (notification.id == 999) {
             this.$q.cordova.plugins.notification.local.clear(notification.id).then((result) => {
               alert('Successfully cleared', result);
               var d1 = new Date();
               d1.setDate(d1.getDate() + 1);
               d1.setHours(5, 0, 0, 0);
               this.$q.cordova.plugins.notification.local.schedule({
                 id: 999,
                 trigger: {at: d1}
               });
             }).catch((err) => {
               alert('Failed clearing notification', err);
             })
           }
         })*/

        /*this.$q.cordova.plugins.notification.local.schedule({
          title: 'My first notification',
          text: 'Thats pretty easy...',
          foreground: true
        });*/

        /* this.$q.cordova.plugins.notification.local.schedule({
           title: 'My first notification',
           text: 'Thats pretty easy...',
           trigger: { every: 'second'  }
         });*/

        /*window.wakeuptimer.wakeup(function (result) {
            let arr = ['08:00', '10:00', '12:00'];
            let horaDeAlarmar = arr.includes('12:00');
            if (horaDeAlarmar) {
              alert("chegou a hora de alarmar!!!!!")
            }
          },
          function (a) {
            alert(JSON.stringify(a));
          },
          {
            alarms: [{
              type: 'repeating',
              skipOnAwake: false, // set timer, but skip launch if user is using the phone (screen is on)
              skipOnRunning: false, // set wakeup timer, but skip launch if app is already running
              startInBackground: false,
              time: {seconds: 1},
              extra: {message: 'json containing app-specific information to be posted when alarm triggers'},
              message: 'Alarm has expired!'
            }]
          }
        );*/

      }
    }

  }
</script>
