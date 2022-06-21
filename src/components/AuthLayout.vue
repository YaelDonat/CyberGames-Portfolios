<template>
        <div class="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[rgb(202,200,200)] via-[#759296] to-[#668083]" >
            <div class="grid-cols-2 w-full space-y-80">
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
