<template>
  <div :class="coluna">
    <slot></slot>
  </div>
</template>

<script>
    export default {
        name: "Coluna",
        props: {
          coluna: {
              default(){
                 return "col-12"
              }
          }
        }
    }
</script>
