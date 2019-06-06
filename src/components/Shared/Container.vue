<template>
  <div :style="{ backgroundColor: cor, height: altura, maxWidth: '100%' }">
    <slot></slot>
  </div>
</template>

<script>
    export default {
        name: "Container",

        props: {
          cor:{
            type: String,
          },
          altura:{
            type: String,
            default(){
                return '300px'
            }
          }
        }
    }
</script>
