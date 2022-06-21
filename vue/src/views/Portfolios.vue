<template>
   <PageComponent title="Portfolio de l'équipe">
       <main>
        <!-- ====== Cards Section Start -->
        <section class="pt-20 lg:pt-[60px] rounded-lg pb-10 lg:pb-20 bg-slate-300 dark:bg-zinc-800 min-h-screen">
            <div class="grid gap-3 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 ">
            
                    <!-- ====== Cards Section Axel -->
                    <div class="w-full md:w-full xl:w-full px-4">
                        <div class="bg-white dark:bg-black rounded-lg overflow-hidden mb-10">
                            <img
                                src="https://cdn.tailgrids.com/1.0/assets/images/cards/card-01/image-01.jpg"
                                alt="image"
                                class="w-full max-w-[443.75px] max-h-[443.75px]"
                            />
                            <div class="p-8 sm:p-9 md:p-7 xl:p-9 text-center lg:min-h-[350px] lg:max-h-[450px] md:min-h-[500px] md:max-h-[650px] sm:min-h-[650px] sm:max-h-[650px] h-full">
                                <h3>
                                    <a
                                        class="font-semibold text-dark text-xl sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px] mb-4 block hover:text-primary"
                                    >
                                        Portfolio d'Axel
                                    </a>
                                </h3>
                                <p
                                    class="text-base text-body-color leading-relaxed mb-7"
                                >
                                    Lorem ipsum dolor sit amet pretium
                                    consectetur adipiscing elit. Lorem
                                    consectetur adipiscing elit.
                                </p>
                                <router-link to="/portfolios/axel">
                                    <a
                                        class="inline-block py-2 px-7 border border-[#E5E7EB] rounded-full text-base text-body-color font-medium hover:border-primary hover:bg-primary hover:text-red-500 transition"
                                    >
                                        Voir en détail
                                    </a>
                                </router-link>
                            </div>
                        </div>
                    </div>

                    <!-- ====== Cards Section Eric -->
                    <div class="w-full md:w-full xl:w-full px-4">
                        <div class="bg-white rounded-lg overflow-hidden mb-10">
                            <img
                                src="@/images/portfolioE/Minimalist_Eric.png"
                                alt="image"
                                class="w-full max-w-[443.75px] max-h-[443.75px]"
                            />
                            <div class="p-8 sm:p-9 md:p-7 xl:p-9 text-center bg-[url('https://wallpaperaccess.com/full/4346244.jpg')] dark:bg-[url('https://wallpaperaccess.com/full/4346194.jpg')] bg-cover lg:min-h-[350px] lg:max-h-[450px] md:min-h-[500px] md:max-h-[650px] sm:min-h-[650px] sm:max-h-[650px] h-full">
                                <h3>
                                    <a
                                        class="font-semibold text-white text-xl sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px] mb-4 block"
                                    >
                                        Portfolio d'Eric
                                    </a>
                                </h3>
                                <p
                                    class="text-base text-body-color leading-relaxed mb-7"
                                >
                                    Développeur full-stack junior<br>

                                </p>
                                <router-link to="/portfolios/eric">
                                    <a
                                        class="inline-block py-2 px-7 border border-white rounded-full text-base text-white font-medium hover:border-white hover:bg-black hover:bg-opacity-50 transition hover:text-white-500 transition"
                                    >
                                        Voir en détail
                                    </a>
                                </router-link>
                            </div>
                        </div>
                    </div>

                    <!-- ====== Cards Section Yael -->
                    <div class="w-full md:w-full xl:w-full px-4 ">
                        <div class="bg-black rounded-lg overflow-hidden mb-10">
                            <img
                                src="@/images/portfolioY/Aangular.webp"
                                alt="yael/webp"
                                class="w-full max-w-[386px] max-h-[386px]"
                            />
                            <div class="p-8 sm:p-9 md:p-7 xl:p-9 text-center bg-[url('https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/102666040/original/28c7201753b249fcb0fb78b2634646ea805a1006/design-you-a-minimalist-wallpaper.png')] dark:bg-[url('https://wallpaperaccess.com/full/568191.png')] bg-cover lg:min-h-[350px] lg:max-h-[450px] md:min-h-[500px] md:max-h-[650px] sm:min-h-[650px] sm:max-h-[650px] h-full">
                                <h3>
                                    <a
                                        class="font-semibold text-white text-xl sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px] mb-4 block"
                                    >
                                        Portfolio de Yaël
                                    </a>
                                </h3>
                                <p
                                    class="text-base text-body-color bg-white rounded-lg  bg-opacity-20 hover:bg-[#a90cde6a] leading-relaxed mb-7"
                                >
                                    Développeur full-stack junior.<br>
                                    Back : Laravel / Symfony/ NodeJs / ExpressJs<br>
                                    Front : Vue3, Tailwindcss, Angular<br>
                                    Php, Javascript, C#, Java<br>
                                    MySQL, MongoDB
                                </p>
                                <router-link to="/portfolios/yael">
                                    <a
                                        class="inline-block py-2 px-7 border border-[#E5E7EB] rounded-full text-white text-body-color font-medium hover:border-violet-500 hover:bg-[#a90cde6a] hover:text-white hover:bg-opacity-60 transition"
                                    >
                                        Voir en détail
                                    </a>
                                </router-link>
                            </div>
                        </div>
                    </div>

                    <!-- ====== Cards Section Anojan -->
                    <div class="w-full md:w-full xl:w-full px-4">
                        <div class="bg-white dark:bg-black rounded-lg overflow-hidden mb-10">
                            <img
                                src="https://i.ibb.co/BKt77Q0/Minimalist-Wallpaper.png"
                                alt="image"
                                class="w-full max-w-[443.75px] max-h-[443.75px]"
                            />
                            <div class="p-8 sm:p-9 md:p-7 md:min-h-500 md:xl:p-9 text-center  lg:min-h-[350px] lg:max-h-[450px] md:min-h-[500px] md:max-h-[650px] sm:min-h-[650px] sm:max-h-[650px] h-full h-full">
                                <h3>
                                    <a
                                        class="font-semibold text-dark text-xl sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px] mb-4 block hover:text-primary"
                                    >
                                        Portfolio d'Anojan
                                    </a>
                                </h3>
                                <p
                                    class="text-base text-body-color leading-relaxed mb-7"
                                >
                                    Lorem ipsum dolor sit amet pretium
                                    consectetur adipiscing elit. Lorem
                                    consectetur adipiscing elit.
                                </p>
                                <router-link to="/portfolios/anojan">
                                    <a
                                        class="inline-block py-2 px-7 border border-[#E5E7EB] rounded-full text-base text-body-color font-medium hover:border-primary hover:bg-primary hover:text-yellow-500 transition"
                                    >
                                        Voir en détail
                                    </a>
                                </router-link>
                            </div>
                        </div>
                    </div>
                
            </div>
        </section>
        <!-- ====== Cards Section End -->
    </main>
   </PageComponent>
</template>

<script setup>
import Button from "../components/reusable/Button.vue";
import PageComponent from "../components/PageComponent.vue";

</script>

<style scoped></style>
