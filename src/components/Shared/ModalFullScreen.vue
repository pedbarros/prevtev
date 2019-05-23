<template>

  <q-dialog v-model="modalControl">
    <q-layout view="Lhh lpR fff" container class="bg-white">
      <q-header class="bg-primary">
        <q-toolbar>
          <q-toolbar-title>{{ title }}</q-toolbar-title>
          <q-btn flat v-close-popup round dense icon="close" />
        </q-toolbar>
      </q-header>


      <q-page-container>
        <q-page padding>
          <slot name="conteudo"></slot>
        </q-page>
      </q-page-container>
    </q-layout>
  </q-dialog>



  <!-- <q-modal v-model="modalControl" :content-css="{minWidth: '80vw', minHeight: '80vh'}">
    <q-modal-layout>
      <q-toolbar slot="header">
        <q-btn
          flat
          round
          dense
          v-close-overlay
          icon="keyboard_arrow_left"
        />
        <q-toolbar-title>
          {{ title }}
        </q-toolbar-title>
      </q-toolbar>
      <div class="layout-padding">
        <slot name="conteudo"></slot>
      </div>

      <q-toolbar slot="footer">
        <q-toolbar-title>
          <q-btn
            class="full-width"
            color="primary"
            v-close-overlay
            label="Fechar"
          />
        </q-toolbar-title>
      </q-toolbar>

    </q-modal-layout>
  </q-modal> -->

</template>

<script>
  export default {
    name: "ModalFullScreen",
    props: ['title', 'show'],
    computed: {
      modalControl: {
        get() {
          return this.show
        },
        set(value) {
          this.$emit('close', value);
        }
      }
    },
    methods: {
      close() {
        this.$emit('close');
      },
    },
  }
</script>
