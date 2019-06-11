<template>
  <Pagina classePagina="full-height" :paddingPage="false">
    <Titulo imagem="statics/imgs/alarme/002.png"/>

    <div class="q-pl-sm q-pr-sm">
      <Linha>
        <Coluna>
          <q-list bordered class="rounded-borders">
            <q-expansion-item
              expand-separator
              header-class="bg-white text-orange"
              icon="perm_identity"
              :label="itemMedicamento.nome"
              :caption="'Quantidade: ' + itemMedicamento.qtdDias + ' dia(s)'"
              v-for="(itemMedicamento, indice) in medicamentos"
              :key="indice"
            >
              <q-card>
                <q-card-section>
                  <q-item clickable v-ripple v-for="(horario, indiceHorario) in itemMedicamento.horarios"
                          :key="indiceHorario" @click="removerHorario(itemMedicamento, horario)">
                    <q-item-section>
                      <q-item-label> Horario {{ indiceHorario + 1}} - {{ horario.hora }}:{{ horario.minuto }}
                      </q-item-label>
                    </q-item-section>
                  </q-item>
                </q-card-section>
              </q-card>
            </q-expansion-item>
          </q-list>
        </Coluna>
      </Linha>
      <br>
    </div>
  </Pagina>
</template>

<script>
  import Pagina from "../components/Shared/Pagina";
  import Titulo from "../components/Shared/Titulo";
  import Coluna from "../components/Shared/Coluna";
  import Linha from "../components/Shared/Linha";

  export default {

    name: "ListaMedicamentos",

    components: {Linha, Coluna, Titulo, Pagina},

    data() {
      return {
        medicamentos: []
      }
    },


    mounted(){
        this.medicamentos = JSON.parse(this.$q.localStorage.getItem('medicamentos')) || []

        if (this.medicamentos.length === 0) this.$q.notify('O paciente não contém medicamento(s) para serem alarmado(s)!!')
    },

    methods: {
      removerHorario(item, horario) {
        try {
          item.horarios.splice(item.horarios.indexOf(horario), 1);
          let qtdHorariosMedicamentos = item.horarios.length

          if (qtdHorariosMedicamentos === 0){
            this.medicamentos = this.medicamentos.filter( medicamento => medicamento.nome !== item.nome)
          }

          this.$q.localStorage.set('medicamentos', JSON.stringify(this.medicamentos))
          this.$q.notify('Horário removido com sucesso!')
        } catch(e) {
          this.$q.notify('Ocorreu um erro na remoção do horário!')
        }
      }
    }

  }
</script>
