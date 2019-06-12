<template>
  <div :class="linhaComNovaClasse">
    <slot></slot>
  </div>
</template>

<script>
    export default {
        name: "Linha",
        props: {
          linha: {
            default(){
              return "row q-col-gutter-x-xs q-col-gutter-y-lg"
            }
          },

          addClass: {
            type: String,
            default(){
              return ""
            }
          }
        },

        computed:{
            linhaComNovaClasse(){
              return `${this.linha}  ${this.addClass}`
            }
        }
    }
</script>
