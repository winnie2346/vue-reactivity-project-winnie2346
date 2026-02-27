<template>
  <div class="googoogaga">
    <div class="buttt">
      <h1>Chef Bob's 5 Mitchellin stor Pizzaria</h1>
      <h2>NO REFUNDS, NO COMPLAINTs</h2>
      <h3>(Cookin' like a chef I'm a 5 star 미슐랭 "미"의 정점을 찍고 눈에 보여 illusion)</h3>
      <h4>((im not korean ion know what that means))</h4>
    </div>

    <div class="display">
      <img class="bobby" src="/chefbob.png" alt="" />
      <caca
        class="moyatopps"
        v-for="poopoo in ttopings"
        :key="poopoo.doodoo"
        :ineetopoopoo="poopoo"
        >{{ poopoo.doodoo }}</caca
      >
    </div>
    <div class="notdisplay">
      <toilet v-for="burton in ttopingsbutbuttons" :key="burton.shyt" :grrrwiththreer="burton">{{
        burton.shyt
      }}</toilet>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import caca from '@/components/toppings.vue'
import toilet from '@/components/toppingsbutt.vue'
const ttopings = ref([
  {
    doodoo: '/sauce.png',
  },
  {
    doodoo: '/chee.png',
  },
  {
    doodoo: '/halopeno.png',
  },
  {
    doodoo: '/pnapple.png',
  },
  {
    doodoo: '/ham.png',
  },
])
const ttopingsbutbuttons = ref([
  {
    shyt: '/cheebutton.png',
  },
  {
    shyt: '/redsaucebutton.png',
  },
  {
    shyt: '/pigbutton.png',
  },
  {
    shyt: '/pnapplebutton.png',
  },
  {
    shyt: '/penobutton.png',
  },
])
</script>

<style scoped>
.googoogaga {
  display: flex;
  flex-direction: column;
  place-items: center;
}
.bobby {
  border: 2px solid black;
}
.display {
  position: relative;
}
.moyatopps {
  position: absolute;
  z-index: order;
  top: 0.5%;
  left: 0.5%;
}
.buttt {
  text-align: center;
}
</style>

<!-- document.querySelector(".btn").addEventListener("click", function () {
  if (document.body.classList.contains("light")) {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
  } else {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
  }
}); -->
