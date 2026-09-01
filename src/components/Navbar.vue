<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>


<template>
  <header
    class="fixed left-0 top-0 z-50 w-full transition-all duration-300"
    :class="
      isScrolled
        ? 'border-b border-[#1c1c1c] bg-[#050505]/90 backdrop-blur-xl'
        : 'bg-transparent'
    "
  >

    <nav
      class="mx-auto flex h-20 max-w-7xl items-center justify-between px-6"
    >

      <!-- ================================================= -->
      <!-- LOGO -->
      <!-- ================================================= -->

      <a
        href="#home"
        @click="closeMobileMenu"
        class="group flex items-center gap-3"
      >

        <!-- Logo Mark -->

        <div
          class="flex h-9 w-9 items-center justify-center rounded-lg border border-[#292929] bg-[#0b0b0b] transition duration-300 group-hover:border-[#00ff66]"
        >

          <span
            class="font-mono text-sm font-semibold text-[#00ff66]"
          >
            R
          </span>

        </div>


        <!-- Name -->

        <div class="hidden sm:block">

          <p
            class="text-sm font-semibold tracking-tight text-white"
          >
            Rhesa Panjaitan
          </p>

          <p
            class="text-[9px] uppercase tracking-[0.2em] text-gray-600"
          >
            Web Developer
          </p>

        </div>

      </a>


      <!-- ================================================= -->
      <!-- DESKTOP MENU -->
      <!-- ================================================= -->

      <div
        class="hidden items-center gap-8 md:flex"
      >

        <a
          href="#home"
          class="text-xs font-medium text-gray-500 transition hover:text-white"
        >
          Home
        </a>

        <a
          href="#about"
          class="text-xs font-medium text-gray-500 transition hover:text-white"
        >
          About
        </a>

        <a
          href="#skills"
          class="text-xs font-medium text-gray-500 transition hover:text-white"
        >
          Skills
        </a>

        <a
          href="#projects"
          class="text-xs font-medium text-gray-500 transition hover:text-white"
        >
          Projects
        </a>

        <a
          href="#experience"
          class="text-xs font-medium text-gray-500 transition hover:text-white"
        >
          Experience
        </a>

      </div>


      <!-- ================================================= -->
      <!-- CONTACT BUTTON -->
      <!-- ================================================= -->

      <div class="hidden md:block">

        <a
          href="#contact"
          class="inline-flex items-center gap-2 rounded-md border border-[#252525] bg-[#0b0b0b] px-4 py-2 text-xs font-medium text-gray-300 transition duration-300 hover:border-[#00ff66] hover:text-[#00ff66]"
        >

          Let's talk

          <span>
            →
          </span>

        </a>

      </div>


      <!-- ================================================= -->
      <!-- MOBILE BUTTON -->
      <!-- ================================================= -->

      <button
        type="button"
        @click="isMobileMenuOpen = !isMobileMenuOpen"
        class="flex h-9 w-9 items-center justify-center rounded-lg border border-[#252525] bg-[#0b0b0b] text-gray-400 transition hover:border-[#00ff66] hover:text-[#00ff66] md:hidden"
        aria-label="Toggle menu"
      >

        <svg
          v-if="!isMobileMenuOpen"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="h-5 w-5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>


        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="h-5 w-5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>

      </button>

    </nav>


    <!-- ================================================= -->
    <!-- MOBILE MENU -->
    <!-- ================================================= -->

    <div
      v-if="isMobileMenuOpen"
      class="border-t border-[#1c1c1c] bg-[#050505] md:hidden"
    >

      <div
        class="mx-auto max-w-7xl px-6 py-5"
      >

        <div class="flex flex-col">

          <a
            href="#home"
            @click="closeMobileMenu"
            class="border-b border-[#161616] py-4 text-sm text-gray-400 transition hover:text-[#00ff66]"
          >
            Home
          </a>

          <a
            href="#about"
            @click="closeMobileMenu"
            class="border-b border-[#161616] py-4 text-sm text-gray-400 transition hover:text-[#00ff66]"
          >
            About
          </a>

          <a
            href="#skills"
            @click="closeMobileMenu"
            class="border-b border-[#161616] py-4 text-sm text-gray-400 transition hover:text-[#00ff66]"
          >
            Skills
          </a>

          <a
            href="#projects"
            @click="closeMobileMenu"
            class="border-b border-[#161616] py-4 text-sm text-gray-400 transition hover:text-[#00ff66]"
          >
            Projects
          </a>

          <a
            href="#experience"
            @click="closeMobileMenu"
            class="border-b border-[#161616] py-4 text-sm text-gray-400 transition hover:text-[#00ff66]"
          >
            Experience
          </a>

          <a
            href="#contact"
            @click="closeMobileMenu"
            class="mt-4 flex items-center justify-between rounded-lg border border-[#252525] bg-[#0b0b0b] px-4 py-3 text-sm text-gray-300 transition hover:border-[#00ff66] hover:text-[#00ff66]"
          >

            <span>
              Let's talk
            </span>

            <span>
              →
            </span>

          </a>

        </div>

      </div>

    </div>

  </header>
</template>