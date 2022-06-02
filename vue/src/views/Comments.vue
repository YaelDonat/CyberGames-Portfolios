<template>
  <PageComponent>
    <template v-slot:header>
      <div class="text-gray-900 dark:text-white">
        <h1 class="text-3xl font-bold mb-5">Commentaires</h1>

        <router-link
          :to="{ name: 'CommentsCreate' }"
          class="py-2 px-3 text-white bg-violet-500 rounded-md hover:bg-violet-600"
        >
        <fa :icon="['fa','plus']" class="h-4 w-4 -mt-1 inline-block" />
        Publier un nouveau commentaire
        </router-link>
      </div>

    </template>
      <div class="grid grid-cols-1 gap-1 sm:grid-cols-1 md:grid-cols-1 text-black place-items-center">
        <!-- Comments -->
        <div v-for="comment in comments" :key="comments.id" class="flex flex-col py-4 px-6 mb-5 shadow-sm bg-white hover:bg-gray-100 rounded-lg h-[400px] w-1/2">
          
          <h4 class="mt-4 text-xl font-bold "> {{comment.title}}</h4>
          <div v-html="comment.content" class="overflow-hidden flex-1"></div>

          <div class="flex justify-between items-center mt-3">
          <router-link :to=" { name:'CommentsShow', params: {id:comment.id} }" class="flex py-2 px-4 border border-transparent text-sm rounded-md text-white bg-violet-600 hover:bg-violet-700 focus:ring-2 focus:ring-offset-2 focus:ring-violet-500">
            <fa :icon="['fa','pen']" class="h-5 w-5 mr-2" />
            Modifier
          </router-link>

          <button v-if="comment.id"
            type="button"
            @click="deleteComment(comment)"
            class="h-8 w-8 flex items-center justify-center rounded-full border border-transparent text-sm text-red-500 focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
            <fa :icon="['fa','trash']" class="h-5 w-5 -mt-1 inline-block" />
          </button>

        </div>
      </div>
    </div>
  </PageComponent>
</template>

<script setup>
import PageComponent from '../components/PageComponent.vue';
import store from "../store"
import {computed} from 'vue';

//const comments = computed(()=>store.state.comments)

function deleteComment(comment){
  if(confirm(`Voulez-vous vraiment supprimer ce commentaire "${comment.title}" ? `)){
    //delete
  }
}

</script>

<style scoped>

</style>