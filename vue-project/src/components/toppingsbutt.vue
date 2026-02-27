<template>
  <button class="boonoo"><img :src="grrrwiththreer.shyt" alt="" /></button>
</template>

<script setup>
defineProps({
  grrrwiththreer: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped>
.boonoo {
  background: transparent;
  border-color: transparent;
}
button:hover {
  transform: scale(110%);
}
</style>
