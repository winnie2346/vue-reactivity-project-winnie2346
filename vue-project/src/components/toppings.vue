<template>
  <img :src="ineetopoopoo.doodoo" alt="" />
</template>

<script setup>
defineProps({
  ineetopoopoo: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped>
</style>
