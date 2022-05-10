<template>
    <PageComponent title = "Regardez ou ajoutez des commentaires">
        <template v-slot:header>
            <div class="flex item-center justify-between">
                <h1 class="text-3xl font-bold text-gray-900">
                <!--     {{model.id ? model title : "Ajoutez un commentaire" }} -->
                </h1>
            </div>
        </template>
        <form @submit.prevent="saveComment" class="shadow sm:rounded-md sm-overflow-hidden">
            <!-- Comments Fiels-->
            <div class="">
            </div>
        </form>
    </PageComponent>
</template>

<script setup>
import PageComponent from "../components/PageComponent.vue";
import store from "../store";
import { ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute; 

let model = ref({

    title : "",
    content :null,
});

if(route.params.id){
    model.value = store.state.comments.find(
        (s) => s.id === parseInt(route.params.id)
    );
}

</script>

<style>

</style>