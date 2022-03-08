<template>
  <div class=" bg-[url('https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/102666040/original/28c7201753b249fcb0fb78b2634646ea805a1006/design-you-a-minimalist-wallpaper.png')]  dark:bg-[url('https://wallpaperaccess.com/full/568191.png')] bg-cover ">
    <div class="p-20 min-h-screen max-w-7xl mx-auto">
        <div class="bg-white shadow-xl rounded grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-3">
          <!-- Left section -->
          <div class="row-span-1 col-span-1 space-y-4 pt-20 bg-gradient-to-b from-emerald-200 to-violet-200 dark:from-emerald-200 dark:to-violet-400">

            <!-- Image and name -->
            <div class="flex flex-col justify-start items-center pb-8">
              <div>
                <img class="inline-block w-52 h-52 xl:h-72 xl:w-72 rounded-full ring-2 ring-white object-cover mb-4"  src='../assets/images/portfolioY/ppcv_yael.jpg' alt="me">
              </div>
              <div>
                <h1 class="text-gray-800 text-3xl font-semibold mb-2">DONAT Yaël</h1>
              </div>
              <div>
                <h2 class="text-black">Développeur full-stack junior</h2>
              </div>
            </div>
            
            
            <!-- Contact -->
            <div class="flex flex-col justify-start items-start pl-8 md:pl-2 xl:pl-12 space-y-4">
              <div><h1 class="text-2xl font-semibold">Contact</h1></div>
              <div class="flex justify-around items-center space-x-4">
                <div><fa icon="envelope"/></div>
                <div><h4 class="sm:text-base 2xl:text-xl text-black lg:leading-loose sm:leading-relaxed sm:tracking-relaxed">donatyael@gmail.com</h4></div>
              </div>
              <div class="flex justify-around items-center space-x-4">
                <div><fa icon="phone"/></div>
                <div><h4 class="sm:text-base 2xl:text-xl text-black lg:leading-loose sm:leading-relaxed sm:tracking-relaxed">+33 24 41 65 15</h4></div>
              </div>
              <div class="flex justify-around items-center space-x-4">
                <div><fa icon="male"/></div>
                <div><h4 class="sm:text-base 2xl:text-xl text-black lg:leading-loose sm:leading-relaxed sm:tracking-relaxed">14 rue Guichard</h4></div>
              </div>
            </div>


            <!-- Personal -->
            <div class="flex flex-col justify-start items-start pl-8 md:pl-2 xl:pl-12 pt-8 space-y-4">
              <div><h1 class="text-2xl font-semibold">A Propos de moi</h1></div>
              <div class="flex justify-around items-center space-x-4">
                <div><fa icon="cake"/></div>
                <div><h4 class="sm:text-base 2xl:text-xl text-black lg:leading-loose sm:leading-relaxed sm:tracking-relaxed">Né le 28 mars 2001</h4></div>
              </div>
              <div class="flex justify-around items-center space-x-4">
                <div><fa :icon="['fa','cookie']"/></div>
                <div><h4 class="sm:text-base 2xl:text-xl text-black lg:leading-loose sm:leading-relaxed sm:tracking-relaxed">Aime la cuisine</h4></div>
              </div>
              <div class="flex justify-around items-center space-x-4">
                <div><fa :icon="['fa','dumbbell']"/></div>
                <div><h4 class="sm:text-base 2xl:text-xl text-black lg:leading-loose sm:leading-relaxed sm:tracking-relaxed">Aime le sport</h4></div>
              </div>
              <div class="flex justify-around items-center space-x-4">
                <div><fa :icon="['fa','gamepad']"/></div>
                <div><h4 class="sm:text-base 2xl:text-xl text-black lg:leading-loose sm:leading-relaxed sm:tracking-relaxed">Aime les jeux vidéos</h4></div>
              </div>
            </div>

            <!-- Réseaux -->
            <div class="flex flex-col justify-start items-start pl-8 md:pl-2 xl:pl-12 pt-8 space-y-4">
              <div><h1 class="text-2xl font-semibold">Réseaux</h1></div>
              <div class="flex justify-around items-center space-x-4">
                <div><fa :icon="['fab','linkedin']"/></div>
                <div><a href="https://www.linkedin.com/in/yael-donat/" target="_blank" class="sm:text-base 2xl:text-xl hover:text-turquoise text-black lg:leading-loose sm:leading-relaxed sm:tracking-relaxed">LinkedIn</a></div>
              </div>
              <div class="flex justify-around items-center space-x-4">
                <div><fa :icon="['fab','github']"/></div>
                <div><a href="https://github.com/YaelDonat" target="_blank" class="sm:text-base 2xl:text-xl hover:text-turquoise text-black lg:leading-loose sm:leading-relaxed sm:tracking-relaxed">Github</a></div>
              </div>
            </div>

            <!-- Langues -->
            <div class="flex flex-col justify-start items-start pl-8 md:pl-2 xl:pl-12 py-4">
              <div><h1 class="text-2xl font-semibold mb-4">Langues</h1></div>
              <div class="flex mb-3">
                <div><h2 class="sm:text-base 2xl:text-xl font-semibold lg:leading-loose sm:leading-relaxed sm:tracking-relaxed">Français :</h2></div>
                <div class="text-black lg:text-lg ml-2">Maternelle</div>
              </div>
              <div class="flex mb-3">
                <div><h2 class="sm:text-base 2xl:text-xl font-semibold lg:leading-loose sm:leading-relaxed sm:tracking-relaxed">Anglais :</h2></div>
                <div class="text-black lg:text-lg ml-2">B2+</div>
              </div>
              <div class="flex mb-3">
                <div><h2 class="sm:text-base 2xl:text-xl font-semibold lg:leading-loose sm:leading-relaxed sm:tracking-relaxed">Portugais :</h2></div>
                <div class="text-black lg:text-lg ml-2">B1</div>
              </div>
            </div>

          </div>
          
          <!-- Right section -->
          <div class="row-span-1 lg:col-span-2 bg-violet-50 dark:bg-gray-700 dark:text-white flex flex-col p-4 sm:p-12 border-r">

            <!-- Profile -->
            <div class="space-y-4">
              <h1 class="text-3xl border-l-4 mb-8 border-violet-400">Profil</h1>
              <p class="sm:text-base 2xl:text-xl text-text-gray-700 dark:text-white leading-loose sm:tracking-relaxed">J'ai 21 ans et je suis passionné par le développement, web comme mobile. Je projette de devenir développeur full-stack en freelance ou peut-être fonder ma propre entreprise de freelance.</p>
              <hr class="border-gray-200">
            </div>

            <!-- Experiences -->
            <div class="space-y-4 mt-8">
              <h1 class="text-3xl border-l-4 border-violet-400">Expériences</h1>
              

              <div class="flex space-x-8 md:space-x-14 pt-8 sm:pl-4 lg:pl-8 text-text-gray-700 dark:text-white text-base lg:text-xl">
                <div>
                  <h2 style="max-width:50px;" class="text-sm sm:text-base md:text-xl">2022</h2>
                </div>
                <div class="border border-gray-400"></div>
                <div>
                  <h2 class="text-gray-800 dark:text-white">Stage - Développeur Backend (Symfony)</h2>
                  <h2 class="text-gray-600 dark:text-gray-400">BedBoat, galerie du port, Rue Lacan, 06600 Antibes
                  <br> 19 Janv - 21 Mars (2 mois)</h2>
                  <h2 class="text-gray-800 dark:text-white">Ajouts de nouvelles fonctionnalitées, maintenance, SEO, minimasation du code, gestion de la base de données</h2>
                </div>
              </div>
              <!-- -->
              <div class="flex space-x-8 md:space-x-14 pt-8 sm:pl-4 lg:pl-8 text-text-gray-700 dark:text-white text-base lg:text-xl">
                <div>
                  <h2 style="max-width:50px;" class="text-sm sm:text-base md:text-xl">2021</h2>
                </div>
                <div class="border border-gray-400"></div>
                <div>
                  <h2 class="text-gray-800 dark:text-white">Stage de BTS – Développeur full-stack (Laravel)</h2>
                  <h2 class="text-gray-600 dark:text-gray-400">Club d’arts martiaux BUDOKAN, Thiais 94320
                  <br>4 Janv. – 19 Fev. (2 mois)</h2>
                  <h2 class="text-gray-800 dark:text-white">Refonte intégrale du site web, Frontend et Backend, en équipe de 6. </h2>
                </div>
              </div>
              <hr class="border-gray-200">
            </div>

            <!-- Formation -->
            <div class="space-y-4 mt-8">
              <h1 class="text-3xl border-l-4 border-violet-400">Formations</h1>
              
              <div class="flex space-x-8 md:space-x-14 pt-8 sm:pl-4 lg:pl-8 text-text-gray-700 dark:text-white text-base lg:text-xl">
                <div class="flex space-x-4">
                  <h2 style="max-width:50px;" class="text-sm sm:text-base md:text-xl dark:text-white">2021-2022</h2>
                </div>
                <div class="border border-gray-400"></div>
                <div>
                  <h2 class="text-gray-800 dark:text-white">BAC+3 CONCEPTEUR DEVELOPPEUR D’APPLICATIONS</h2>
                  <h2 class="text-gray-600 dark:text-gray-400">École CFA INSTA, PARIS</h2>
                </div>
              </div>
              <!-- -->
              <div class="flex space-x-8 md:space-x-14 pt-8 sm:pl-4 lg:pl-8 text-text-gray-700 dark:text-white text-base lg:text-xl">
                <div class="flex space-x-4">
                  <h2 style="max-width:50px;" class="text-sm sm:text-base md:text-xl dark:text-white">2019-2021</h2>
                </div>
                <div class="border border-gray-400"></div>
                <div>
                  <h2 class="text-gray-800 dark:text-white">BTS SIO (Services Informatiques aux Organisations)</h2>
                  <h2 class="text-gray-600 dark:text-gray-400">Lycée Polyvalent de Cachan, Ile-de-France</h2>
                  <h2 class="text-gray-600 text-sm dark:text-white">Option SLAM (Solutions Logicielles et Applications Métiers)</h2>
                </div>
              </div>
              <!-- -->
              <div class="flex space-x-8 md:space-x-14 pt-8 sm:pl-4 lg:pl-8 text-text-gray-700 dark:text-white text-base lg:text-xl">
                <div class="flex space-x-4">
                  <h2 style="max-width:50px;" class="text-sm sm:text-base md:text-xl dark:text-white">2018-2019</h2>
                </div>
                <div class="border border-gray-400"></div>
                <div>
                  <h2 class="text-gray-800 dark:text-white">BAC S SI (Science de l'ingénieur)</h2>
                  <h2 class="text-gray-600 dark:text-gray-400">Lycée Joseph PERNOCK, Martinique</h2>
                  <h2 class="text-gray-800 text-sm dark:text-white">Option Portugais</h2>
                </div>
              </div>
              <!-- -->
              <hr class="border-gray-200">
            </div>

            <!-- Compétences -->
            <div class="space-y-4 mt-8">
              <h1 class="text-3xl border-l-4 border-violet-400">Compétences</h1>

              <div class="relative pt-8">
                <div class="flex justify-start space-x-12 mb-4 items-center">
                  <div class="flex-1">
                    <h2 class="text-gray-800 text-sm sm:text-base md:text-xl mb-2 dark:text-white">Javascript</h2>
                    <div class="overflow-hidden h-2 mb-4 text-xs  flex space-x-44 rounded bg-gray-200">
                      <div style="width:40%" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-violet-400"></div>
                    </div>
                  </div>
                  <div class="flex-1">
                    <h2 class="text-gray-800 text-sm sm:text-base md:text-xl mb-2 dark:text-white">Vue JS</h2>
                    <div class="overflow-hidden h-2 mb-4 text-xs  flex space-x-44 rounded bg-gray-200">
                      <div style="width:30%" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-violet-400"></div>
                    </div>
                  </div>
                </div>

                <div class="flex justify-start space-x-12 mb-4 items-center">
                  <div class="flex-1">
                    <h2 class="text-gray-800 text-sm sm:text-base md:text-xl mb-2 dark:text-white">Tailwind CSS</h2>
                    <div class="overflow-hidden h-2 mb-4 text-xs  flex space-x-44 rounded bg-gray-200">
                      <div style="width:50%" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-violet-400"></div>
                    </div>
                  </div>
                  <div class="flex-1">
                    <h2 class="text-gray-800 text-sm sm:text-base md:text-xl mb-2 dark:text-white">Bootstrap</h2>
                    <div class="overflow-hidden h-2 mb-4 text-xs  flex space-x-44 rounded bg-gray-200">
                      <div style="width:40%" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-violet-400"></div>
                    </div>
                  </div>
                </div>

                <div class="flex justify-start space-x-12 mb-4 items-center">
                  <div class="flex-1">
                    <h2 class="text-gray-800 text-sm sm:text-base md:text-xl mb-2 dark:text-white">Laravel</h2>
                    <div class="overflow-hidden h-2 mb-4 text-xs  flex space-x-44 rounded bg-gray-200">
                      <div style="width:50%" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-violet-400"></div>
                    </div>
                  </div>
                  <div class="flex-1">
                    <h2 class="text-gray-800 text-sm sm:text-base md:text-xl mb-2 dark:text-white">Symfony</h2>
                    <div class="overflow-hidden h-2 mb-4 text-xs  flex space-x-44 rounded bg-gray-200">
                      <div style="width:65%" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-violet-400"></div>
                    </div>
                  </div>
                </div>

                <div class="flex justify-start space-x-12 mb-4 items-center">
                  <div class="flex-1">
                    <h2 class="text-gray-800 text-sm sm:text-base md:text-xl mb-2 dark:text-white">Android Developement</h2>
                    <div class="overflow-hidden h-2 mb-4 text-xs  flex space-x-44 rounded bg-gray-200">
                      <div style="width:30%" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-violet-400"></div>
                    </div>
                  </div>
                  <div class="flex-1">
                    <h2 class="text-gray-800 text-sm sm:text-base md:text-xl mb-2 dark:text-white">Flutter</h2>
                    <div class="overflow-hidden h-2 mb-4 text-xs  flex space-x-44 rounded bg-gray-200">
                      <div style="width:20%" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-violet-400"></div>
                    </div>
                  </div>
                </div>
                <div class="flex justify-start space-x-12 mb-4 items-center">
                  <div class="flex-1">
                    <h2 class="text-gray-800 text-sm sm:text-base md:text-xl mb-2 dark:text-white">C#</h2>
                    <div class="overflow-hidden h-2 mb-4 text-xs  flex space-x-44 rounded bg-gray-200">
                      <div style="width:35%" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-violet-400"></div>
                    </div>
                  </div>
                  <div class="flex-1">
                    <h2 class="text-gray-800 text-sm sm:text-base md:text-xl mb-2 dark:text-white">Java</h2>
                    <div class="overflow-hidden h-2 mb-4 text-xs  flex space-x-44 rounded bg-gray-200">
                      <div style="width:35%" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-violet-400"></div>
                    </div>
                  </div>
                </div>

                <div class="flex justify-start space-x-12 mb-4 items-center">
                  <div class="flex-1">
                    <h2 class="text-gray-800 text-sm sm:text-base md:text-xl mb-2 dark:text-white">MySQL</h2>
                    <div class="overflow-hidden h-2 mb-4 text-xs  flex space-x-44 rounded bg-gray-200">
                      <div style="width:70%" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-violet-400"></div>
                    </div>
                  </div>
                  <div class="flex-1">
                    <h2 class="text-gray-800 text-sm sm:text-base md:text-xl mb-2 dark:text-white">MongoDB</h2>
                    <div class="overflow-hidden h-2 mb-4 text-xs  flex space-x-44 rounded bg-gray-200">
                      <div style="width:30%" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-violet-400"></div>
                    </div>
                  </div>
                </div>

                <div class="flex justify-start space-x-12 mb-4 items-center">
                  <div class="flex-1">
                    <h2 class="text-gray-800 text-sm sm:text-base md:text-xl mb-2 dark:text-white">Php</h2>
                    <div class="overflow-hidden h-2 mb-4 text-xs  flex space-x-44 rounded bg-gray-200">
                      <div style="width:70%" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-violet-400"></div>
                    </div>
                  </div>
                  <div class="flex-1">
                    <h2 class="text-gray-800 text-sm sm:text-base md:text-xl mb-2 dark:text-white">NodeJS</h2>
                    <div class="overflow-hidden h-2 mb-4 text-xs  flex space-x-44 rounded bg-gray-200">
                      <div style="width:30%" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-violet-400"></div>
                    </div>
                  </div>
                  <div class="flex-1">
                    <h2 class="text-gray-800 text-sm sm:text-base md:text-xl mb-2 dark:text-white">ExpressJs</h2>
                    <div class="overflow-hidden h-2 mb-4 text-xs  flex space-x-44 rounded bg-gray-200">
                      <div style="width:30%" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-violet-400"></div>
                    </div>
                  </div>
                  <div class="flex-1">
                    <h2 class="text-gray-800 text-sm sm:text-base md:text-xl mb-2 dark:text-white">Mongoose</h2>
                    <div class="overflow-hidden h-2 mb-4 text-xs  flex space-x-44 rounded bg-gray-200">
                      <div style="width:30%" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-violet-400"></div>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>

export default{
    name:"Yael",   
}
</script>

<style scoped>

</style>