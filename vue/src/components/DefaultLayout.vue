<template>
  <div class="min-h-full" :class="isDark ? 'dark' : ''">
    <Disclosure as="nav" class="bg-slate-300 dark:bg-zinc-800" v-slot="{ open }">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-center h-16">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <img class="h-8 w-8" src='~@/assets/images/others/logoTDS.webp' alt="Workflow" />
            </div>
            <div class="flex-shrink-0 ml-5">
              <Button @click="isDark = !isDark" class="bg-zinc-800 dark:bg-slate-300 hover:bg-opacity-40 rounded-full">
                <fa v-if="isDark" :icon="['fas', 'sun']" />
                <fa v-else :icon="['fas', 'moon']" />
              </Button>
            </div>
            <div class="hidden md:block">
              <div class="ml-10 flex items-baseline space-x-4">
                <router-link v-for="item in navigation" :key="item.name" :to="item.to"
                  active-class="bg-slate-900 dark:bg-zinc-500 text-white"
                  :class="[this.$route.name === item.to.name ? '' : 'text-white hover:bg-slate-700 dark:hover:bg-zinc-400 hover:text-white', 'px-3 py-2 rounded-md text-md font-medium']">
                  {{ item.name }}</router-link>
              </div>
            </div>
          </div>
          <div class="hidden md:block">
            <div class="ml-4 flex items-center md:ml-6">


              <!-- Profile dropdown -->
              <Menu as="div" class="ml-3 relative">
                <div>
                  <MenuButton
                    class="max-w-xs bg-neutral-500 p-2 rounded flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                    <span class="sr-only">Menu utilisateur</span>
                    <!-- <img class="h-8 w-8 rounded-full" :src="user.imageUrl" alt="" /> -->
                    <fa :icon="['fa', 'bars']" class="text-xl text-white" />
                  </MenuButton>
                </div>
                <transition enter-active-class="transition ease-out duration-100"
                  enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100"
                  leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100"
                  leave-to-class="transform opacity-0 scale-95">
                  <MenuItems
                    class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <MenuItem v-slot="{ active }">
                    <a @click="logout" :class="[
                      'block px-4 py-2 text-sm text-gray-700 cursor-pointer'
                    ]">Se déconnecter <p class="text-violet-500 font-semibold">{{user.name}}</p></a>
                    </MenuItem>
                  </MenuItems>
                </transition>
              </Menu>
            </div>
          </div>
          <div class="-mr-2 flex md:hidden">
            <!-- Mobile menu button -->
            <DisclosureButton
              class="bg-violet-800 inline-flex items-center justify-center p-2 ml-5 rounded-md text-gray-400 hover:text-white hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
              <span class="sr-only">Menu principal</span>
              <MenuIcon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
              <XIcon v-else class="block h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
          </div>
        </div>
      </div>

      <DisclosurePanel class="md:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <router-link v-for="item in navigation" :key="item.name" :to="item.to" active-class="bg-violet-900 text-white"
            :class="[this.$route.name === item.to.name ? '' : 'text-gray-300 hover:bg-violet-700 hover:text-white', 'block px-3 py-2 rounded-md text-base font-medium']">
            {{ item.name }}</router-link>
        </div>
        <div class="pt-4 pb-3 border-t border-violet-700">
          <div class="flex items-center px-5">
            <div class="flex-shrink-0">
              <!--<img class="h-10 w-10 rounded-full" :src="user.imageUrl" alt="" /> -->
            </div>
            <div class="ml-3">
              <div class="text-base font-medium leading-none text-white">{{ user.name }}</div>
              <div class="text-sm font-medium leading-none text-gray-400">{{ user.email }}</div>
            </div>

          </div>
          <div class="mt-3 px-2 space-y-1">
            <DisclosureButton as="a" @click="logout"
              class="block px-3 py-2 rounded-md text-base font-medium text-gray-200 hover:text-white hover:bg-violet-700 cursor-pointer">
              Se déconnecter</DisclosureButton>
          </div>
        </div>
      </DisclosurePanel>
    </Disclosure>

    <!-- Content -->
    <router-view></router-view>
    <Notification/>
  </div>
</template>

<script>
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/vue/outline'
import Button from '../components/reusable/Button.vue'
import { useStore } from 'vuex'
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import Notification from './Notification.vue'

const navigation = [
  { name: 'Accueil', to: { name: 'Home' } },
  { name: 'Portfolios', to: { name: 'Portfolios' } },
  { name: 'Comments', to: { name: 'Comments' } },
  { name: 'Contact', to: { name: 'Contact' } },
  //{ name: 'Se connecter', to: {name:'Login'}},
]

export default {
  data() {
    return {
      isDark: true,
    }
  },

  components: {
    Button,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    BellIcon,
    MenuIcon,
    XIcon,
    Notification,
  },
  setup() {

    const store = useStore();
    const router = useRouter();

    function logout() {
      store.dispatch('logout')
        .then(() => {
          router.push({
            name: 'Login'
          });
        });

    }

    return {
      user: computed(() => store.state.user.data),
      navigation,
      logout,
    }
  },
}
</script>