<template>
  <div>
    <div class="text">
      <h1>Chef Bob's 5 Mitchellin stor Pizzaria</h1>
      <h2>NO REFUNDS</h2>
      <h3>a dolloar a slice, no complaints</h3>
      <h4>(Cookin' like a chef I'm a 5 star 미슐랭 "미"의 정점을 찍고 눈에 보여 illusion)</h4>
      <h5>((im not korean ion know what that means))</h5>
    </div>

    <div class="display">
      <caca v-for="poopoo in ttopings" :key="poopoo.doodoo" :ineetopoopoo="poopoo">{{ poopoo.doodoo }}</caca>
      <img src="/chefbob.png" alt="" />

    </div>
  </div>
</template>

<script setup>
import caca from '@/components/toppings.vue'
const ttopings = [{
  doodoo: "/chee.png"
}, 
{
  doodoo: "/sauce.png"
}, 
{
  doodoo: "/ham.png" 
}, 
{
  doodoo: "/pnapple.png" 
},
{
  doodoo: "/halopeno.png"
},  
]</script>

<style scoped>
.display {
  place-items: left;
}
.text {
  place-items: center;
}
</style>
