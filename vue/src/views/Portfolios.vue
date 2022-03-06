<template>
    <header class="bg-white shadow">
      <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold text-gray-900">Portfolios</h1>
      </div>
    </header>
    <main>
      <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <!-- Replace with your content -->
        <div class="px-4 py-6 sm:px-0">
<<<<<<< HEAD
          <router-link to="/portfolios/axel"><Button class="bg-red-400 text-white hover:bg-red-600">Axel</Button></router-link>
          <router-link to="/portfolios/eric"><Button class="bg-blue-400 text-white hover:bg-blue-600">eric</Button></router-link>
          <router-link to="/portfolios/yael"><Button class="bg-emerald-400 text-white hover:bg-emerald-600">yael</Button></router-link>
          <router-link to="/portfolios/anojan"><Button class="bg-amber-400 text-white hover:bg-amber-600">anojan</Button></router-link>
=======
          <router-link to="/portfolios/axel"><Button class="bg-blue-500 text-white">Axel</Button></router-link>
          <router-link to="/portfolios/eric"><Button class="bg-black text-white">eric</Button></router-link>
          <router-link to="/portfolios/yael"><Button class="bg-black text-white">yael</Button></router-link>
          <router-link to="/portfolios/anojan"><Button class="bg-black text-white">anojan</Button></router-link>
>>>>>>> 13ba6c44622b655a336a11c6da428600ade77248
        </div>
        <!-- /End replace -->
      </div>
    </main>
</template>

<script>
import Button from '../components/reusable/Button.vue';
export default{
    name:"Portfolios",
    components: {
    Button,
  },
}
</script>

<style scoped>

</style>
