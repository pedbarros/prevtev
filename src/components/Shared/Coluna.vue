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
                 return "col-lg-3 col-md-4 col-sm-6 col-xs-12"
              }
          }
        }
    }
</script>
