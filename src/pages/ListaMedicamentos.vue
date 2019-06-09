<template>

  <Pagina classePagina="full-height" :paddingPage="false">
    <Titulo imagem="statics/imgs/alarme/002.png"/>
    <div class="q-pa-md">
      <q-list bordered class="rounded-borders">
        <q-expansion-item
          expand-separator
          header-class="bg-white text-orange"
          icon="perm_identity"
          :label="itemMedicamento.nome"
          :caption="'Quantidade: ' + itemMedicamento.qtdDias + ' dia(s)'"
          v-for="(itemMedicamento, indice) in listarMedicamentos"
          :key="indice"
        >
          <q-card>
            <q-card-section>
              <q-item clickable v-ripple v-for="(horario, indiceHorario) in itemMedicamento.horarios"
                      :key="indiceHorario" @click="removerHorario(horario)">
                <q-item-section>
                  <q-item-label> Horario {{ indiceHorario + 1}} - {{ horario.hora }}:{{ horario.minuto }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-card-section>
          </q-card>
        </q-expansion-item>
      </q-list>
    </div>
  </Pagina>
</template>

<script>
  import Pagina from "../components/Shared/Pagina";
  import Titulo from "../components/Shared/Titulo";

  export default {

    name: "ListaMedicamentos",

    components: {Titulo, Pagina},

    computed: {
      listarMedicamentos() {
        try {
          let medicamentos = JSON.parse(this.$q.localStorage.getItem('medicamentos'))
          return medicamentos
        } catch {
          return []
        }
      }

    },

    methods: {
      removerHorario(horario) {
        alert(JSON.stringify(horario))
      }
    }

  }
</script>
