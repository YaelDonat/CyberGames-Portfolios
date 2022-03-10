<script lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
export default{
    mounted () {
  document.body.classList.add('scrollbar-thin')
  document.body.classList.add('scrollbar-thumb-emerald-200')
  document.body.classList.add('scrollbar-track-white')
},
}
  
</script>


<template>
  <router-view></router-view>
</template>

<style scoped lang="scss">

</style>
