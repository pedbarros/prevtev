<template>
  <div :style="{ backgroundColor: cor, height: '300px', maxWidth: '100%' }">
    <slot></slot>
  </div>
</template>

<script>
    export default {
        name: "Container",

        props: ['cor']
    }
</script>
