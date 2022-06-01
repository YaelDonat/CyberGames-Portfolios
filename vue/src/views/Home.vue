<template>
  <PageComponent title="Home">
    <div class="text-gray-900 dark:text-white">
    
      <p class="mx-auto w-3/5 h-fit py-3 px-3 bg-gray-50 bg-opacity-50 rounded-lg text-lg font-sans">
        Coucou c'est nous
      </p>
      <!-- <fa :icon="['fa','download']"/> -->

       <!-- Game images loop -->
      <div class="flex grid-cols-3 gap-10 mt-[5%] justify-center">
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