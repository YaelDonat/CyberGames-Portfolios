<template>

            <div>
                <img class="mx-auto h-12 w-auto dark:bg-white dark:rounded-full" src="../assets/images/cybericon.svg" alt="Workflow" />
                <h2 class="mt-6 text-center text-3xl font-extrabold text-black dark:text-white">Connectez-vous à votre compte</h2>
                <p class="mt-2 text-center text-sm text-gray-600 dark:text-gray-200">
                Ou
                {{ ' ' }}
                <router-link :to="{name : 'Register'}" class="font-medium text-amber-600 hover:text-amber-500 dark:text-violet-400 dark:hover:text-violet-500"> vous n'avez pas de compte ? </router-link>
                </p>
            </div>
            <form class="mt-8 space-y-6" @submit="login">
            <div v-if="errorMsg" class="flex item-center justify-between py-3 px-5 bg-red-500 text-white rounded">
                {{errorMsg}}
                <span @click="errorMsg = '' "  class="w-8 h-8 flex items-center justify-center text-2xl rounded-full transition-colors cursor-pointer hover:bg-[rgba(0,0,0,0.2)]">
                    <fa :icon="['fa','xmark']"/>
                </span>
            </div>
                <input type="hidden" name="remember" value="true" />
                <div class="rounded-md shadow-sm -space-y-px">
                <div>
                    <label for="email-address" class="sr-only">E-mail</label>
                    <input id="email-address" name="email" type="email" autocomplete="email" required="" v-model="user.email" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-amber-500 focus:border-amber-500 dark:focus:ring-violet-500 dark:focus:border-violet-500 focus:z-10 sm:text-sm" placeholder="Adresse mail" />
                </div>
                <div>
                    <label for="password" class="sr-only">Mot de passe</label>
                    <input id="password" name="password" type="password" autocomplete="current-password" required="" v-model="user.password"  class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-amber-500 dark:focus:ring-violet-500 dark:focus:border-violet-500 focus:border-amber-500 focus:z-10 sm:text-sm" placeholder="Mot de passe" />
                </div>
                </div>

                <div class="flex items-center justify-between">
                <div class="flex items-center">
                    <input id="remember-me" name="remember-me" type="checkbox" v-model="user.remember"  class="h-4 w-4 text-amber-600 dark:text-violet-600 focus:ring-amber-500 dark:focus:ring-violet-500 border-gray-300 rounded" />
                    <label for="remember-me" class="ml-2 block text-sm text-gray-900 dark:text-white"> Se rappeler de moi </label>
                </div>

                <div class="text-sm">
                    <a href="#" class="font-medium text-amber-600 hover:text-amber-500 dark:text-violet-400"> Mot de passe oublié? </a>
                </div>
                </div>

                <div>
                <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-amber-600 hover:bg-amber-700 dark:bg-violet-600 dark:hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 dark:focus:ring-violet-500">
                    <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                    <LockClosedIcon class="h-5 w-5 text-amber-500 dark:text-violet-500 group-hover:text-amber-400 dark:group-hover:text-violet-400" aria-hidden="true" />
                    </span>
                    Se connecter
                </button>
                </div>
            </form>

</template>


<script setup>

import { LockClosedIcon } from '@heroicons/vue/solid'
import store from '../store'
import {useRouter} from 'vue-router'
import {ref} from 'vue'

const user = {
    email : '',
    password: '',
    remember: false
}
const router = useRouter();
let errorMsg = ref('');

function login(event){
    event.preventDefault();

    store.dispatch('login', user)
        .then(()=>{
            router.push({
                name:'Home'
            })
        }).catch(err => {
            errorMsg.value = err.response.data.error
        })
}

</script>

<style scoped>

</style>
