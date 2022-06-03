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
      <div class="grid grid-cols-2 gap-1 sm:grid-cols-2 md:grid-cols-3 text-black place-items-center">
        <!-- Comments -->
        <div v-for="comment in comments.data" :key="comments.id" class="flex flex-col py-4 px-6 mb-5 shadow-sm bg-white hover:bg-gray-100 rounded-lg h-[400px] w-3/4">
          
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

  <!-- PAGINATION -->
    <div class="flex justify-center mt-5">
        <nav
          class="relative z-0 inline-flex justify-center rounded-md shadow-sm -space-x-px"
          aria-label="Pagination"
        >
          <!-- Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" -->
          <a
            v-for="(link, i) of comments.links"
            :key="i"
            :disabled="!link.url"
            href="#"
            @click="getForPage($event, link)"
            aria-current="page"
            class="relative inline-flex items-center px-4 py-2 border text-sm font-medium whitespace-nowrap"
            :class="[
              link.active
                ? 'z-10 bg-violet-50 border-violet-500 text-violet-600'
                : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50',
              i === 0 ? 'rounded-l-md bg-gray-100 text-gray-700' : '',
              i === comments.links.length - 1 ? 'rounded-r-md' : '',
            ]"
            v-html="link.label"
          >
          </a>
        </nav>
      </div>

    </div>
  </PageComponent>
</template>

<script setup>
import PageComponent from '../components/PageComponent.vue';
import store from "../store"
import {computed} from 'vue';

const comments = computed(()=>store.state.comments)
store.dispatch("getComments")

function deleteComment(comment) {
  if (
    confirm(
      `Are you sure you want to delete this comment? Operation can't be undone!!`
    )
  ) {
    store.dispatch("deleteComment", comment.id).then(() => {
      store.dispatch("getComments");
    });
  }
}

function getForPage(ev, link) {
  ev.preventDefault();
  if (!link.url || link.active) {
    return;
  }
  store.dispatch("getComments", { url: link.url });
}

</script>

<style scoped>

</style>