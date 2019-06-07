<template>
  <div  :style="{ backgroundColor: cor, height: altura, maxWidth: '100%', borderRadius: radius }">
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
          },
          radius: {
            type: String,
            default(){
              return '15px'
            }
          }
        }


    }
</script>

