<template>
        <div class="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800" >
            <div class="max-w-md w-full space-y-8">
            <router-view></router-view>
            </div>    
        </div>
        
</template>


<script>
export default{

    name:"AuthLayout",
    components: {
    LockClosedIcon,
    },
}
import { LockClosedIcon } from '@heroicons/vue/solid'
</script>

<style scoped>

</style>
