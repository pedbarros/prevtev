<template>
  <q-page :padding="paddingPage">
    <div :class="classePagina">
      <slot></slot>
    </div>
  </q-page>
</template>

<script>
  export default {
    name: "Pagina",
    props: {
      classePagina: {
        type: String,
        default() {
          return "q-ma-lg-lg"
        }
      },

      paddingPage: {
        type: Boolean,
        default() {
          return true
        }
      }
    }
  }
</script>
