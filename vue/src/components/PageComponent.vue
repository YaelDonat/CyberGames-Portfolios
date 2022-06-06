<template>

    <header class="bg-[rgb(202,200,200)]  shadow">
      <div class="max-w-7xl mx-auto py-2 px-4 sm:px-2 lg:px-4">

        <h1 class="text-3xl font-bold text-gray-900   ">
          {{ title }}
        </h1>
        <slot name="header"></slot>

      </div>
    </header>
    <main>
      <div class="max-w-full mx-auto py-0 sm:px-2 lg:px-4 bg-[rgb(202,200,200)] min-h-screen">
        <!-- Replace with your content -->
        <div class="px-4 py-2 sm:px-0 text-white">
          <slot></slot>
        </div>
        <!-- /End replace -->
      </div>
    </main>

</template>

<script setup>

const props = defineProps({
    title: String,
})

</script>

<style>

</style>