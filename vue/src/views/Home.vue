<template>
  <PageComponent title="Home">
    <div class="text-gray-900 dark:text-white">

        <p class="mx-auto w-3/5 h-fit py-10 px-10 rounded-lg text-2xl font-semibold font-sans bg-no-repeat bg-cover bg-center bg-[#694d08] " style="background-image: url('../src/assets/images/Others/presentation.svg');">
          Plongez dans un monde où la technologie est désormais une norme acceptée de 
          tous et de toutes. Tout est dévasté par des IA rebelles. Essayez de trouver un
          moyen de sortir de cette boucle infernal infesté d'ennemis en progressant à chaque
          nouvel essai
        </p>

       <!-- Game images loop -->
      <div class="grid grid-cols-3 gap-10 mt-[5%] ">
        <div v-for="(img, index) in gameImg">
          <label :for="img.slug" class="block text-md font-sans">{{img.title}}</label>
          <img :key="index" :src="img.name" class="rounded-lg" :alt="img.slug" :id="img.slug" />
        </div>
      </div>

       <!-- dowload button -->
       <div class="flex justify-center mt-[5%]">
        <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center ">
          <fa :icon="['fa','download']" class="pr-2"/>
          <span>Download</span>
        </button>
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