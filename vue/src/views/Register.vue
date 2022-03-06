<template>
        <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div class="max-w-md w-full space-y-8">
            <div>
                <img class="mx-auto h-12 w-auto" src="../assets/images/cybericon.svg" alt="Workflow" />
                <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Créer un compte</h2>
                <p class="mt-2 text-center text-sm text-gray-600">
                Ou
                {{ ' ' }}
                <a href="/login" class="font-medium text-amber-600 hover:text-amber-500"> vous avez déjà un compte ? </a>
                </p>
            </div>
            <div class="mt-8 space-y-6">
                <input type="hidden" name="remember" value="true" />
                <div class="rounded-md shadow-sm -space-y-px">
                <div>
                    <label for="email-address" class="sr-only">E-mail</label>
                    <input id="email-address" name="email" type="email" autocomplete="email" required="" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-amber-500 focus:border-amber-500 focus:z-10 sm:text-sm" placeholder="Adresse mail" v-model="state.email"  />
                    <span class="text-sm text-red-600 font-semibold pl-5" v-if="this.v$.email.$error">
                        {{ this.v$.email.$errors[0].$message }}
                    </span>
                    <span v-if="!this.v$.email.required">
                        un email est requis.
                    </span>
                </div>
                <div>
                    <label for="password" class="sr-only">Mot de passe</label>
                    <input v-model="state.password.password"    id="password" name="password" type="password" autocomplete="current-password" required="" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-amber-500 focus:border-amber-500 focus:z-10 sm:text-sm" placeholder="Mot de passe" />
                    <span v-if="this.v$.password.password.$error">
                        {{ this.v$.password.password.$errors[0].$message }}
                    </span>
                </div>
                <div>
                    <label for="passwordConfirm" class="sr-only">Confirmation mot de passe</label>
                    <input v-model="state.password.confirm" id="passwordConfirm" name="password" type="password" required="" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-amber-500 focus:border-amber-500 focus:z-10 sm:text-sm" placeholder="Confirmation mot de passe" />
                    <span v-if="this.v$.password.confirm.$error">
                        {{ this.v$.password.confirm.$errors[0].$message }}
                    </span>
                </div>

                
                </div>

                <div class="flex items-center justify-between">
                <div class="flex items-center">
                    <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300 rounded" />
                    <label for="remember-me" class="ml-2 block text-sm text-gray-900"> Se rappeler de moi </label>
                </div>

                <div class="text-sm">
                    <a href="#" class="font-medium text-amber-600 hover:text-amber-500"> Mot de passe oublié? </a>
                </div>
                </div>

                <div>
                <button @click="submitForm" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500">
                    <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                    <!--
                    <LockClosedIcon class="h-5 w-5 text-amber-500 group-hover:text-amber-400" aria-hidden="true" /> -->
                    </span>
                    Se connecter
                </button>
                </div>
            </div>
            </div>
        </div>
</template>

<script>
import useValidate from '@vuelidate/core'
import { required, email, minLength, sameAs, helpers} from '@vuelidate/validators'
import {reactive, computed} from 'vue'
export default{
    name:"Register",
    setup(){
        const state = reactive({
           email :'',
            password :{
                password : '',
                confirm : '',
            },
        })

        const mustBeFormMsg = (value) => value.includes('formmsg');

        const rules = computed(()=>{
            return{
                email : { 
                    required,
                    email,
                    mustBeFormMsg:helpers.withMessage("E-mail invalide", mustBeFormMsg),
                },
                password :{
                    password : { required, minLength:minLength(8) },
                    confirm : { required, sameAs:sameAs(state.password.password) },
                },
            }
        })
        const v$ = useValidate(rules,state)
        return{
            state,
            v$,
        }
    },
    data(){
        return{
            v$:useValidate(),
            email :'',
            password :{
                password : '',
                confirm : '',
            },
        }
    },
    validations(){
        return{
            email : { required },
            password :{
                password : { required },
                confirm : { required },
            },
        }
    },
    methods:{
        submitForm(){
            this.v$.$validate()
            if(!this.v$.$error){
                alert('ok')
            }
            else{
                alert('pas ok')
            }
        },
    },
}
</script>

<style scoped>

</style>