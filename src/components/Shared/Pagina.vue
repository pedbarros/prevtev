<template>
  <q-page padding>
    <div :class="classePagina">
      <slot></slot>
    </div>
  </q-page>
</template>

<script>
  export default {
    name: "Pagina",
    props:{
        classePagina:{
            type: String,
            default(){
                return "q-ma-lg-lg"
            }
        }
    }
  }
</script>
