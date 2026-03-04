<template>
  <!-- <button data-category="grrrwiththreer.yoojin" class="boonoo"> -->
    <img :src="grrrwiththreer.shyt" alt="" />
    <slot></slot>
  <!-- </button> -->
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
/* .boonoo {
  background: transparent;
  border-color: transparent;
} */
img:hover {
  transform: scale(110%);
}


</style>
