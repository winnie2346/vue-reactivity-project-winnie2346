<template>
  <div class="googoogaga">
    <div class="buttt">
      <h1>Chef Bob's 100 Mitchellin stor Pizzaria</h1>
      <h2>NO REFUNDS, NO COMPLAINTs</h2>

      <button class="bobbybobby"><RouterLink to="/pizzapizza">ALL DONE</RouterLink></button>
    </div>

    <div class="display">
      <img class="bobby" src="/chefbob.png" alt="" />
      <caca
        class="moyatopps"
        v-for="poopoo in ttopings"
        :key="poopoo.doodoo"
        :ineetopoopoo="poopoo"
      ></caca>
    </div>
    <div class="notdisplay">
      <toilet v-for="burton in ttopingsbutbuttons" :key="burton.shyt" :grrrwiththreer="burton">
        <button @click="makemybuttonsworkkimdokja(ahh)">gr</button></toilet
      >
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import caca from '@/components/toppings.vue'
import toilet from '@/components/toppingsbutt.vue'
const ttopings = ref([
  {
    calehentiuse: 'redhair',
    doodoo: '/sauce.png',
  },
  {
    calehentiuse: 'alberu',
    doodoo: '/chee.png',
  },
  {
    calehentiuse: 'mold',
    doodoo: '/halopeno.png',
  },
  {
    calehentiuse: 'sunghyunjae',
    doodoo: '/pnapple.png',
  },
  {
    calehentiuse: 'discordkitten',
    doodoo: '/ham.png',
  },
])
const ttopingsbutbuttons = ref([
  {
    yoojin: 'alberu',
    shyt: '/cheebutton.png',
  },
  {
    yoojin: 'redhair',
    shyt: '/redsaucebutton.png',
  },
  {
    yoojin: 'discordkitten',
    shyt: '/pigbutton.png',
  },
  {
    yoojin: 'sunghyunjae',
    shyt: '/pnapplebutton.png',
  },
  {
    yoojin: 'mold',
    shyt: '/penobutton.png',
  },
])

const ichooseyouyoojunghyuk = ref([])
function makemybuttonsworkkimdokja(ahh) {
  ichooseyouyoojunghyuk.value = [ichooseyouyoojunghyuk.value, ahh]
  console.log(ichooseyouyoojunghyuk.value.yoojin)
}
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
.bobbybobby {
  margin-bottom: 20px;
}
</style>
