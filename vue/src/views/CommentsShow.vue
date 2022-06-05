<template>
    <PageComponent>
        <template v-slot:header>
            <div class="flex item-center justify-between">
                <h1 class="text-3xl font-bold text-gray-50">
                {{ route.params.id ? model.title.toUpperCase() : "Ajoutez un commentaire" }}
                </h1>
            </div>
        </template>
        <div v-if="commentLoading" class="flex justify-center">Chargement...</div>
        <form v-else @submit.prevent="saveComment">
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

const router = useRouter();
const route = useRoute();

// Get survey loading state, which only changes when we fetch survey from backend
const commentLoading = computed(() => store.state.currentComment.loading);

let model = ref({
    title : "",
    slug:"",
    content :null,
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



if(route.params.id){
    store.dispatch("getComment", route.params.id);
};

function saveComment() {
  let action = "created";
  if (model.value.id) {
    action = "updated";
  }
  store.dispatch("saveComment", { ...model.value }).then(({ data }) => {
    store.commit("notify", {
      type: "success",
      message: "The comment was successfully " + action,
    });
    router.push({
      name: "CommentsShow",
      params: { id: data.data.id },
    });
  });
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