<template>
  <div>
    <div class="buttt">
      <h1>Chef Bob's 5 Mitchellin stor Pizzaria</h1>
      <h2>NO REFUNDS</h2>
      <h3>a dolloar a slice, no complaints</h3>
      <h4>(Cookin' like a chef I'm a 5 star 미슐랭 "미"의 정점을 찍고 눈에 보여 illusion)</h4>
      <h5>((im not korean ion know what that means))</h5>
    </div>

    <div class="display">
      <img src="/chefbob.png" alt="" />
      <caca v-for="poopoo in ttopings" :key="poopoo.doodoo" :ineetopoopoo="poopoo">{{ poopoo.doodoo }}</caca>
    </div>
    <div class="notdisplay">   <toilet v-for="burton in ttopingsbutbuttons" :key="burton.shyt" :grrrwiththreer="burton">{{ burton.shyt }}</toilet></div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import caca from '@/components/toppings.vue'
import toilet from '@/components/toppingsbutt.vue'
const ttopings = ref([{
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
  }, ])
const ttopingsbutbuttons = ref([{
  shyt: "/cheebutton.png"
}, 
{
  shyt: "/redsaucebutton.png"
}, 
{
  shyt: "/pigbutton.png" 
}, 
{
  shyt: "/pnapplebutton.png" 
},
{
  shyt: "/penobutton.png"
},  
])</script>

<style scoped>
.display {
  place-items: left;
}
.text {
  place-items: center;
}
</style>
