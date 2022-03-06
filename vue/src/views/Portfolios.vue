<template>
    <header class="bg-white shadow">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 class="text-3xl font-bold text-gray-900">
                Portfolios de l'équipe
            </h1>
        </div>
    </header>
    <main>
        <!-- ====== Cards Section Start -->
        <section class="pt-20 lg:pt-[60px] pb-10 lg:pb-20 bg-[#F3F4F6]">
            <div class="grid-cols-4">
                <div class="flex">
                    <div class="w-full md:w-1/2 xl:w-1/3 px-4">
                        <div class="bg-white rounded-lg overflow-hidden mb-10">
                            <img
                                src="https://cdn.tailgrids.com/1.0/assets/images/cards/card-01/image-01.jpg"
                                alt="image"
                                class="w-full"
                            />
                            <div class="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
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
                    <div class="w-full md:w-1/2 xl:w-1/3 px-4">
                        <div class="bg-white rounded-lg overflow-hidden mb-10">
                            <img
                                src="https://cdn.tailgrids.com/1.0/assets/images/cards/card-01/image-02.jpg"
                                alt="image"
                                class="w-full"
                            />
                            <div class="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                                <h3>
                                    <a
                                        class="font-semibold text-dark text-xl sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px] mb-4 block hover:text-primary"
                                    >
                                        Portfolio d'Eric
                                    </a>
                                </h3>
                                <p
                                    class="text-base text-body-color leading-relaxed mb-7"
                                >
                                    Lorem ipsum dolor sit amet pretium
                                    consectetur adipiscing elit. Lorem
                                    consectetur adipiscing elit.
                                </p>
                                <router-link to="/portfolios/eric">
                                    <a
                                        class="inline-block py-2 px-7 border border-[#E5E7EB] rounded-full text-base text-body-color font-medium hover:border-primary hover:bg-primary hover:text-blue-500 transition"
                                    >
                                        Voir en détail
                                    </a>
                                </router-link>
                            </div>
                        </div>
                    </div>
                    <div class="w-full md:w-1/2 xl:w-1/3 px-4">
                        <div class="bg-white rounded-lg overflow-hidden mb-10">
                            <img
                                src="https://cdn.tailgrids.com/1.0/assets/images/cards/card-01/image-03.jpg"
                                alt="image"
                                class="w-full"
                            />
                            <div class="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                                <h3>
                                    <a
                                        class="font-semibold text-dark text-xl sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px] mb-4 block hover:text-primary"
                                    >
                                        Portfolio de Yaël
                                    </a>
                                </h3>
                                <p
                                    class="text-base text-body-color leading-relaxed mb-7"
                                >
                                    Lorem ipsum dolor sit amet pretium
                                    consectetur adipiscing elit. Lorem
                                    consectetur adipiscing elit.
                                </p>
                                <router-link to="/portfolios/yael">
                                    <a
                                        class="inline-block py-2 px-7 border border-[#E5E7EB] rounded-full text-base text-body-color font-medium hover:border-primary hover:bg-primary hover:text-green-500 transition"
                                    >
                                        Voir en détail
                                    </a>
                                </router-link>
                            </div>
                        </div>
                    </div>
                    <div class="w-full md:w-1/2 xl:w-1/3 px-4">
                        <div class="bg-white rounded-lg overflow-hidden mb-10">
                            <img
                                src="https://i.ibb.co/BKt77Q0/Minimalist-Wallpaper.png"
                                alt="image"
                                class="w-full"
                            />
                            <div class="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
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
            </div>
        </section>
        <!-- ====== Cards Section End -->
    </main>
</template>

<script>
import Button from "../components/reusable/Button.vue";
export default {
    name: "Portfolios",
    components: {
        Button,
    },
};
</script>

<style scoped></style>
