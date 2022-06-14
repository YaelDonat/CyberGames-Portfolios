<template>
     <div class="flex items-center min-h-screen">
        <div class="flex-1 h-full max-w-4xl mx-auto bg-white rounded-lg shadow-xl">
            <div class="flex flex-col md:flex-row">

                <div class="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
                    <div class="w-full">
                        <div class="flex justify-center">
                            <img class="mx-auto h-24 w-auto dark:bg-white dark:rounded-full"
                                src="../assets/images/others/logoTDS.webp" alt="Workflow" />
                        </div>
                        <br>
                        <h1 class="mb-4 text-2xl font-bold text-center text-gray-700">
                            Mot de passe oublié
                        </h1>
                        <form class="mt-8 space-y-6" @submit="reset">
                            <div v-if="errorMsg"
                                class="flex item-center justify-between py-3 px-5 bg-red-500 text-white rounded">
                                {{ errorMsg }}
                                <span @click="errorMsg = ''"
                                    class="w-8 h-8 flex items-center justify-center text-2xl rounded-full transition-colors cursor-pointer hover:bg-[rgba(0,0,0,0.2)]">
                                    <fa :icon="['fa', 'xmark']" />
                                </span>
                            </div>
                            <input type="hidden" name="remember" value="true" />
                    
                            <div>
                                <label for="email-address" class="block text-sm">
                                    E-mail
                                </label>
                                <input id="email-address" name="email" type="email" autocomplete="email" required=""
                                    v-model="email"
                                    class="w-full px-4 py-2 text-sm border rounded-md focus:border-teal-400 focus:outline-none focus:ring-1 focus:ring-teal-600"
                                    placeholder="Votre adresse email" />
                            </div>
                            
                            <button
                                class="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-teal-600 border border-transparent rounded-lg active:bg-teal-600 hover:bg-teal-700 focus:outline-none focus:shadow-outline-teal"
                                href="#" type=submit>
                                Envoyer le mail de réinitialisation
                            </button>

                            <hr class="my-8 " />

                            <div class="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center">
                                <router-link :to="{ name: 'Login' }"
                                    class="font-medium text-blue-600 hover:text-blue-500 dark:text-violet-400 dark:hover:text-violet-500">
                                    Vous avez déjà un compte ? </router-link>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="h-32 md:h-auto md:w-1/2">
                    <img class="object-cover w-full h-full  rounded-r-lg" src="https://source.unsplash.com/user/erondu/1600x900"
                        alt="img" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { LockClosedIcon } from '@heroicons/vue/solid'
import store from '../store';
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const router = useRouter();

const email = '';

let errorMsg = ref('');

function reset(ev) {
    
}
</script>