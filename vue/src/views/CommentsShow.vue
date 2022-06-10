<template>
    <PageComponent>
        <template v-slot:header>
            <div class="flex item-center justify-between">
                <h1 class="text-3xl font-bold text-gray-50">
                {{ route.params.id ? model.title.toUpperCase() : "Ajoutez un commentaire" }}
                </h1>
            </div>
        </template>
        
        <div v-if="commentLoading" class="flex justify-center">
          <fa :icon="['fa','spinner']" class=" animate-spin h-5 w-5 mr-3 ..." />
          Chargement...
        </div>
        <form v-else @submit.prevent="saveComment() ; saveRating()">
            <div class="shadow sm:rounded-md sm-overflow-hidden">
                <!-- Comments Fiels-->
                <div class="px-4 py-5 bg-white space-y-6 sm:p-6 rounded-sm text-black">

                    <div>
                        <!-- Title Field -->
                        <label class="block text-sm font-medium text-gray-700">
                            Titre
                        </label>
                        <input type="text" name="title" id="title" v-model="model.title" autocomplete="comment_title" class="mt-1 focus:ring-violet-500 focus:border-violet-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" 
                        />
                    </div>

                    <div>
                    <!-- Content Field -->
                        <label for="content" class="block text-sm font-medium text-gray-700">
                        Commentaire
                        </label>
                        <div class="mt-1">
                            <textarea id="content" name="content" row="3" v-model="model.content" autocomplete="comment_content" class="shadow-sm focus:ring-violet-500 focus:border-violet-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" placeholder="Entrez votre commentaire ici"
                        />
                        <starRatings id="rate" name="rate" v-model="modelRate.rate" type="number" inactiveColor="#2e5090" :showControl="false" :step="0.5" class="border-0"  />
                        </div>
                    </div>
                </div>
            </div>
            

            <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500">
                    Enregistrer
                </button>
            </div>
            

        </form>
    </PageComponent>
</template>

<script setup>
import PageComponent from "../components/PageComponent.vue";
import store from "../store";
import { ref, watch, computed } from "vue";
import { useRouter, useRoute } from "vue-router";
import starRatings from 'vue3-star-ratings';

const router = useRouter();
const route = useRoute();

// Get survey loading state, which only changes when we fetch survey from backend
const commentLoading = computed(() => store.state.currentComment.loading);
const currentRate = computed(() => store.state.currentRating.data.rate);

let model = ref({
    title : "",
    slug:"",
    content :null,
});

let modelRate =ref({
  rate:currentRate,
});

// Watch to current Comment data change and when this happens we update local model
watch(
  () => store.state.currentComment.data,
  (newVal, oldVal) => {
    model.value = {
      ...JSON.parse(JSON.stringify(newVal)),
    };
  }
);
// Watch to current Rating data
watch(
  () => store.state.currentRating.data,
  (newVal, oldVal) => {
    modelRate.value = {
      ...JSON.parse(JSON.stringify(newVal)),
    };
  }
); 


if(route.params.id){
    store.dispatch("getComment", route.params.id);
    store.dispatch("getRating", store.state.user.data.id);
}else{
    store.dispatch("getRating", store.state.user.data.id);
};

function saveComment() {
  let action = "créé";
  if (model.value.id) {
    action = "mis à jour";
  }
  store.dispatch("saveComment", { ...model.value }).then(({ data }) => {
    store.commit("notify", {
      type: "success",
      message: "Le commentaire a été " + action + " avec succès !",
    });
    router.push({
      name: "Comments",
      params: {},
    });
  });
};

function saveRating(){
  let action = "créée";
  if (modelRate.value.user_id) {
    action = "mis à jour";
  }
  store.dispatch("saveRating", { ...modelRate.value } ).then(({ data }) => {
    store.commit("notify", {
      type: "success",
      message: "La note à été " + action + " avec succès !",
    });
  })
};

function deleteComment() {
  if (
    confirm(
      `Are you sure you want to delete this comment? Operation can't be undone!!`
    )
  ) {
    store.dispatch("deleteComment", model.value.id).then(() => {
      router.push({
        name: "Comments",
      });
    });
  }
}
</script>

<style>

</style>