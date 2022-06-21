<template>
    <body class="bg-gray-200 dark:bg-zinc-800">
  <div class="bg-gray-200 dark:bg-slate-600 dark:text-zinc-200 h-16 sticky top-0 z-50 md:flex items-center justify-between px-16 shadow hidden">
    <h2>My Portfolio</h2>
  </div>
  <div class="bg-slate-400 shadow dark:bg-slate-700 p-8 hover:shadow-xl transition text-center">
    <h2 class="text-slate-600"><i class="mr-2"></i><bold class="bg-slate-100 dark:bg-slate-800 dark:text-slate-100 rounded-md px-4 py-1 text-3xl">Anojan Yogeswaran</bold></h2>
    <div class="flex items-center justify-center">
      <img class="p-4 rounded-full h-72" src="@/images/PortfolioA/photoAnojan.jpg" alt="">
    </div>
    <p class="p-4 text-center italic text-slate-600 dark:text-slate-400">Développeur full-stack junior</p>
  <div class="border border-slate-600 bg-slate-300 dark:bg-slate-800 dark:text-gray-300 shadow m-2 p-4 rounded-xl hover:shadow-xl transition md:mx-24">
      
    <div class="flex flex-col items-center space-y-2">
              
              <div class="flex justify-around items-center space-x-4">
                <div><fa icon="envelope"/></div>
                <div><h4 class="dark:text-zinc-200 lg:leading-loose sm:leading-relaxed sm:tracking-relaxed hover:text-black">anojan11@outlook.fr</h4></div>
              </div>
              <div class="flex justify-around items-center space-x-4">
                <div><fa icon="phone"/></div>
                <div><h4 class="dark:text-zinc-200 lg:leading-loose sm:leading-relaxed sm:tracking-relaxed hover:text-black">06 10 71 25 12</h4></div>
              </div>
              
            </div>
    
  </div>
  </div>
  

  <div class="border border-indigo-600 bg-slate-300 dark:bg-slate-800 dark:text-zinc-200 shadow m-4 mx-auto p-8 rounded-xl hover:shadow-xl transition md:mx-24">
    <h2 class="text-indigo-500 dark:text-indigo-500"><i class="fas fa-bullseye ml-2"></i>Mes objectifs</h2>
    <div class="mt-2"> Le développement est ma passion et je veux continuer à monter en compétences dans le domaine. 
        J'avais commencé tout jeune en autodidacte et je continue à apprendre.
        J'aimerais fonder ma propre entreprise d'ici quelques années, quand j'aurais acquis assez de compétences </div>
  </div>
  <div class="border border-green-700 shadow dark:bg-slate-800 dark:text-gray-300 bg-slate-300 m-4 p-8 rounded-xl hover:shadow-xl transition md:mx-24">
    <h2 class="text-green-700 dark:text-green-500"><i class="fas fa-book-open mr-2"></i>Expériences</h2>
    
    <div class="border border-gray-400 dark:border-stone-700 p-4 my-2.5 rounded-xl relative hover:bg-green-200 dark:hover:bg-green-900">
      <h3 class="font-bold">Stage développeur web - Inetum</h3>
      <p>Fournit des solutions numériques, maquettage de sites et design</p>
      <p class="absolute top-2 right-3">2020</p>
    </div>
  </div>
  <div class="border border-yellow-600 shadow bg-slate-300 dark:bg-slate-800 dark:text-gray-300 m-4 p-8 rounded-xl hover:shadow-xl transition md:mx-24">
    <h2 class="text-yellow-600"><i class="fas fa-book-open mr-2"></i>Formations</h2>
    <div class="border border-gray-400 dark:border-stone-700 p-4 my-2.5 rounded-xl relative hover:bg-yellow-200 dark:hover:bg-yellow-600">
      <h3 class="font-bold">BAC +3 Concepteur Développeur d'applications</h3>
      <p>CFA INSTA Paris</p>
      <p class="absolute top-2 right-3">SEP 2021 - Present</p>
    </div>
    <div class="border border-gray-400 dark:border-stone-700 p-4 my-2.5 rounded-xl relative hover:bg-yellow-200 dark:hover:bg-yellow-600">
      <h3 class="font-bold">L2 Mono Informatique</h3>
      <p>Sorbonne Université, Paris 5e</p>
      <p class="absolute top-2 right-3">SEP 2019 - JUIN 2021</p>
    </div>
  </div>
  <div class="border border-red-600 shadow dark:bg-slate-800 dark:text-gray-300 bg-slate-300 m-4 p-8 rounded-xl hover:shadow-xl transition md:mx-24">
    <h2 class="text-red-600"><i class="fas fa-bullseye mr-2"></i>Mes projets</h2>
    <div class="grid md:grid-cols-3 p-4 m-4 gap-4">
      <div class="h-40 flex items-center justify-center bg-yellow-600 p-4  rounded-lg">
        <h2 class="text-zinc-200 text-center ">Jeu de survie abeille</h2>
      </div>
      <div class="h-40 flex items-center justify-center bg-red-600 p-4  rounded-lg">
        <h2 class="text-zinc-200 text-center ">Pacman</h2>
      </div>
      <div class="h-40 flex items-center justify-center bg-blue-600 p-4  rounded-lg">
        <h2 class="text-zinc-200 text-center ">Projet 3</h2>
      </div>
      <div class="h-40 flex items-center justify-center bg-green-600 p-4  rounded-lg">
        <h2 class="text-zinc-200 text-center ">Projet 3</h2>
      </div> 
    </div>

  </div>
  <div class="border border-blue-600 bg-slate-300 dark:bg-slate-800 dark:text-gray-300 shadow m-4 mb-0 p-8 rounded-xl hover:shadow-xl transition md:mx-24">
    <h2 class="text-blue-600 dark:text-blue-500"><i class="fas fa-user-ninja mr-2"></i>À propos de moi</h2>  
    <a class="inline-block rounded-full bg-blue-200 border border-blue-500 text-blue-600 dark:border-blue-600 dark:text-blue-500 dark:bg-slate-900 px-4 py-1 m-4 mb-2">Dynamique</a>
    <a class="inline-block rounded-full bg-blue-200 border border-blue-500 text-blue-600 dark:border-blue-600 dark:text-blue-500 dark:bg-slate-900 px-4 py-1 m-4 mb-2">Rigoureux</a>
    <a class="inline-block rounded-full bg-blue-200 border border-blue-500 text-blue-600 dark:border-blue-600 dark:text-blue-500 dark:bg-slate-900 px-4 py-1 m-4 mb-2">Patient</a>
    <a class="inline-block rounded-full bg-blue-200 border border-blue-500 text-blue-600 dark:border-blue-600 dark:text-blue-500 dark:bg-slate-900 px-4 py-1 m-4 mb-2">Curieux</a>
    <a class="inline-block rounded-full bg-blue-200 border border-blue-500 text-blue-600 dark:border-blue-600 dark:text-blue-500 dark:bg-slate-900 px-4 py-1 m-4 mb-2">Motivé</a>
    
  </div>
  
</body>
</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;1,400&display=swap');
body{
  color: #373737;
}
h1, h2, h3 {
  font-family: "Poppins";
  font-weight: 500;
  margin-bottom: 10px;
  font-size: 24px;
}
i {
  opacity: 0.7;
}
input {
  border-radius: 4px;
  color: grey;
  padding: 4px 8px;
}
</style>