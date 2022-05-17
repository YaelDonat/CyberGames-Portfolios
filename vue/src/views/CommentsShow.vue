<template>
    <PageComponent>
        <template v-slot:header>
            <div class="flex item-center justify-between">
                <h1 class="text-3xl font-bold text-gray-50">
                {{ model.id ? model.title : "Ajoutez un commentaire" }}
                </h1>
            </div>
        </template>
        <form @submit.prevent="saveComment">
            <div class="shadow sm:rounded-md sm-overflow-hidden">
                <!-- Comments Fiels-->
                <div class="px-4 py-5 bg-white space-y-6 sm:p-6 rounded-sm">

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
                    
                    <!-- 
                    <div v-if="!model.ratings_id">
                        Vous n'avez pas laissé d'évaluation encore
                        <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500">
                        Mettre des etoiles
                        </button>
                    </div>
                    -->
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
import { ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute(); 

let model = ref({
    title : "",
    content :null,
    ratings_id:1,
});

if(route.params.id){
    model.value = store.state.comments.find(
        (s) => s.id === parseInt(route.params.id)
    );
}

</script>

<style>

</style>