<template>
  <PageComponent title="Home">
    <div class="text-gray-900 dark:text-white">

      <div class="grid grid-cols-1 gap-4 min-h-screen min-w-full bg-cover place-content-center place-items-center rounded-lg" style="background-image: url('../src/assets/images/Others/landscape.webp');">

       <p class="mx-auto h-fit py-10 px-10 rounded-lg text-6xl text-black font-bold font-zcoolkuaiLe ">
          INNER <br> ‎ ‎ ‎  CHAOS
        </p>
        <div class="p-1 mb-3 w-3/5 min-h-fit rounded-lg animate-animatedgradient " >
          <p class="mx-auto h-fit py-10 px-10 rounded-lg text-2xl font-semibold font-sans dark:bg-[#759296] bg-slate-200 ">
          Plongez dans un monde où la technologie est désormais une norme acceptée de 
          tous et de toutes. Tout est dévasté par des IA rebelles. Essayez de trouver un
          moyen de sortir de cette boucle infernale infestée d'ennemis en progressant à chaque
          nouvel essai.
          </p>
        </div>
        <button class="mt-2 p-5 w-fit min-h-full rounded-lg bg-black bg-opacity-[30%] hover:bg-opacity-100 hover:ease-in duration-300 hover:animate-bounce font-zcoolkuaiLe" >
          <fa :icon="['fa','download']" class="pr-2"/>TELECHARGER MAINTENANT
        </button>
        <div class="relative min-w-full min-h-[0%]"></div>
      </div>

       <!-- Game images loop -->
      <div class="grid grid-cols-3 gap-10 mt-[5%] ">
        <div v-for="(img, index) in gameImg" class="mx-auto">
          <label :for="img.slug" class="block text-md font-sans">{{img.title}}</label>
          <img :key="index" :src="img.name" class="rounded-lg" :alt="img.slug" :id="img.slug" />
        </div>
      </div>
    </div> 
  </PageComponent>
</template>

<script setup>
import PageComponent from '../components/PageComponent.vue';
import store from "../store"
import { computed } from 'vue'

const gameImg = computed(() => store.state.gameImage)
  

</script>

<style scoped>

</style>