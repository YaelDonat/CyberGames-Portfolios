<template>
  <PageComponent title="Contactez-nous">
    <div class="text-gray-900">

        <div class="flex items-center ">
            <div class="flex-1 h-full max-w-4xl mx-auto bg-white rounded-lg shadow-xl">
                <div class="flex flex-col md:flex-row">
                    <div class="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
                        <div class="w-full">
                            <div class="flex justify-center">
                                <img class="mx-auto h-12 w-auto dark:bg-white dark:rounded-full"
                                    src="../assets/images/cybericon.svg" alt="Workflow" />
                            </div>
                            <br>
                            <h1 class="mb-4 text-2xl font-bold text-center text-gray-900">
                                Contactez-nous !
                            </h1>
                            <form class="mt-8 space-y-6" @submit="">

                                <input type="hidden" name="remember" value="true" />
                                <div>
                                    <label for="text" class="block text-sm text-gray-900">
                                        Nom
                                    </label>
                                    <input id="text" name="name" type="text" autocomplete="text" required="" v-model="user.name"

                                        class="w-full px-4 py-2 text-sm text-gray-900 border rounded-md focus:border-teal-400     focus:outline-none focus:ring-1 focus:ring-teal-600"
                                        placeholder="Nom" />
                                </div>
                                <div>
                                    <label for="email-address" class="block text-sm text-gray-900">
                                        E-mail
                                    </label>
                                    <input id="email-address" name="email" type="email" autocomplete="email" required="" v-model="user.email"

                                        class="w-full px-4 py-2 text-sm border rounded-md focus:border-teal-400     focus:outline-none focus:ring-1 focus:ring-teal-600 text-gray-900"
                                        placeholder="Votre adresse email" />
                                </div>
                                <div>
                                    <label for="message" class="block mt-4 text-sm text-gray-900">
                                        Message
                                    </label>
                                    <textarea id="message" name="message" 
                                        required="" v-model="user.message"
                                        class="w-full px-4 py-2 text-sm text-gray-900 border rounded-md focus:border-teal-400   focus:outline-none focus:ring-1 focus:ring-teal-600 "
                                        rows="8"
                                        placeholder="Dites-nous ce à quoi vous pensez..."
                                    ></textarea>
                                </div>

                                <button
                                    class="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white     transition-colors duration-150 bg-[#5b21b6] border border-transparent rounded-lg     active:bg-[#501da2] hover:bg-[#45198d] focus:outline-none focus:shadow-outline-teal"
                                    href="#" type=submit>
                                    Contactez-nous
                                </button>

                                <hr class="my-8 " />

                            </form>
                        </div>
                    </div>
                    <div class="h-32 md:h-auto md:w-1/2">
                        <img class="object-cover w-full h-full rounded-r-lg " src="..\assets\images\Others\contact.webp"
                            alt="img" />
                    </div>
                </div>
            </div>
        </div>

    </div> 
  </PageComponent>
</template>

<script setup>
import PageComponent from '../components/PageComponent.vue';
import { LockClosedIcon } from '@heroicons/vue/solid'
import store from '../store';
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const router = useRouter();

const user = {
    name: '',
    email: '',
    message: '',
};

</script>

<style scoped>

</style>