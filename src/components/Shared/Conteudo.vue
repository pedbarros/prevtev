<template>
  <q-page :padding="paddingPage"  id="layout">
    <div :class="classeConteudo">
      <slot></slot>
    </div>
  </q-page>
</template>

<script>
  export default {
    name: "Conteudo",
    props: {
      classeConteudo: {
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

<style scoped>
  #layout {
    background-color: #00C1DA;
    background-image: linear-gradient(#00C1DA, #0086D4);
    height: 100%;
    width: 100%;
  }
</style>
