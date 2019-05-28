<template>
  <div :style="{ backgroundColor: cor, height: '250px', maxWidth: '100%' }">
    <slot></slot>
  </div>
</template>

<script>
    export default {
        name: "Container",

        props: ['cor']
    }
</script>
