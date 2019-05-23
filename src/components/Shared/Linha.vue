<template>
  <div :class="linha">
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
          }
        }
    }
</script>
