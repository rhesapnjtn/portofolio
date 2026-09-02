```vue
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

import Navbar from '../components/Navbar.vue'
import About from '../components/About.vue'
import Skills from '../components/Skills.vue'
import Projects from '../components/Projects.vue'
import Experience from '../components/Experience.vue'
import Contact from '../components/Contact.vue'


/*
|--------------------------------------------------------------------------
| Typewriter
|--------------------------------------------------------------------------
*/

const roles = [
  'Web Developer.',
  'Frontend Developer.',
  'Information Systems Graduate.'
]

const currentRole = ref('')
const roleIndex = ref(0)

let typingTimer = null
let deletingTimer = null
let pauseTimer = null

const typeRole = () => {
  const text = roles[roleIndex.value]
  let index = 0

  clearInterval(typingTimer)

  typingTimer = setInterval(() => {
    if (index < text.length) {
      currentRole.value += text[index]
      index++
    } else {
      clearInterval(typingTimer)

      pauseTimer = setTimeout(() => {
        deleteRole()
      }, 1800)
    }
  }, 80)
}


const deleteRole = () => {
  clearInterval(deletingTimer)

  deletingTimer = setInterval(() => {
    if (currentRole.value.length > 0) {
      currentRole.value = currentRole.value.slice(0, -1)
    } else {
      clearInterval(deletingTimer)

      roleIndex.value =
        (roleIndex.value + 1) % roles.length

      pauseTimer = setTimeout(() => {
        typeRole()
      }, 400)
    }
  }, 45)
}


onMounted(() => {
  typeRole()
})


onUnmounted(() => {
  clearInterval(typingTimer)
  clearInterval(deletingTimer)
  clearTimeout(pauseTimer)
})
</script>


<template>

  <div class="min-h-screen overflow-x-hidden bg-[#050505] text-white">

    <!-- ====================================================== -->
    <!-- NAVBAR -->
    <!-- ====================================================== -->

    <Navbar />


    <main>

      <!-- ====================================================== -->
      <!-- HERO -->
      <!-- ====================================================== -->

      <section
        id="home"
        class="relative flex min-h-screen items-center overflow-hidden px-5 pb-16 pt-28 sm:px-6 md:px-10 md:pt-24"
      >

        <!-- Background Grid -->

        <div
          class="pointer-events-none absolute inset-0 opacity-[0.045]"
          style="
            background-image:
              linear-gradient(#ffffff 1px, transparent 1px),
              linear-gradient(90deg, #ffffff 1px, transparent 1px);
            background-size: 80px 80px;
          "
        ></div>


        <!-- Subtle Green Glow -->

        <div
          class="pointer-events-none absolute right-[10%] top-[20%] h-72 w-72 rounded-full bg-[#00ff66] opacity-[0.025] blur-3xl sm:h-96 sm:w-96"
        ></div>


        <!-- ================================================== -->
        <!-- MAIN CONTENT -->
        <!-- ================================================== -->

        <div
          class="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16"
        >

          <!-- ================================================== -->
          <!-- LEFT CONTENT -->
          <!-- ================================================== -->

          <div class="min-w-0">

            <!-- Status -->

            <div
              class="mb-6 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.02] px-3.5 py-2 sm:mb-7"
            >

              <span class="relative flex h-2 w-2">

                <span
                  class="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00ff66] opacity-40"
                ></span>

                <span
                  class="relative inline-flex h-2 w-2 rounded-full bg-[#00ff66]"
                ></span>

              </span>


              <span
                class="text-[9px] font-medium uppercase tracking-[0.18em] text-gray-500 sm:text-[10px] sm:tracking-[0.2em]"
              >
                Available for work
              </span>

            </div>


            <!-- Heading -->

            <h1
              class="max-w-3xl text-[42px] font-semibold leading-[0.98] tracking-[-0.045em] text-white sm:text-6xl md:text-7xl lg:text-[76px]"
            >

              Building modern

              <br />

              <span class="text-white/35">
                web experiences
              </span>

              <br />

              <span class="text-[#00ff66]">
                {{ currentRole }}
              </span>

              <span
                class="ml-1 inline-block font-light text-[#00ff66]"
              >
                |
              </span>

            </h1>


            <!-- Description -->

            <p
              class="mt-6 max-w-xl text-sm leading-6 text-gray-500 sm:mt-8 sm:text-base sm:leading-7 md:text-lg"
            >
              I design and develop modern web applications with
              a focus on clean interfaces, responsive layouts,
              and practical user experiences.
            </p>


            <!-- Buttons -->

            <div
              class="mt-7 flex flex-wrap gap-3 sm:mt-9"
            >

              <!-- Projects -->

              <a
                href="#projects"
                class="group inline-flex items-center gap-3 rounded-lg bg-[#00ff66] px-4 py-3 text-sm font-medium text-black transition duration-300 hover:bg-[#7affad] sm:px-5"
              >

                View projects

                <span
                  class="transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>

              </a>


              <!-- CV -->

              

            </div>


            <!-- Tech Stack -->

            <div
              class="mt-8 flex flex-wrap gap-2 sm:mt-10"
            >

              <span
                v-for="tech in [
                  'Vue.js',
                  'Laravel',
                  'PHP',
                  'MySQL',
                  'Tailwind CSS'
                ]"
                :key="tech"
                class="rounded-md border border-white/[0.08] bg-white/[0.015] px-3 py-1.5 text-[10px] font-medium text-gray-500 transition duration-300 hover:border-[#00ff66]/40 hover:text-[#00ff66] sm:text-[11px]"
              >
                {{ tech }}
              </span>

            </div>

          </div>


          <!-- ================================================== -->
          <!-- RIGHT CODE WINDOW -->
          <!-- ================================================== -->

          <div
            class="order-2 block w-full lg:order-none"
          >

            <div
              class="relative mx-auto w-full max-w-lg"
            >

              <!-- Glow -->

              <div
                class="pointer-events-none absolute -inset-8 rounded-full bg-[#00ff66] opacity-[0.025] blur-3xl sm:-inset-12"
              ></div>


              <!-- Window -->

              <div
                class="relative w-full overflow-hidden rounded-xl border border-white/[0.10] bg-[#0a0a0a] shadow-2xl sm:rounded-2xl"
              >

                <!-- ================================================= -->
                <!-- WINDOW HEADER -->
                <!-- ================================================= -->

                <div
                  class="flex items-center justify-between border-b border-white/[0.08] bg-[#0d0d0d] px-4 py-3 sm:px-5 sm:py-4"
                >

                  <div class="flex items-center gap-1.5 sm:gap-2">

                    <!-- Red -->

                    <span
                      class="h-2 w-2 rounded-full bg-[#ff5f57] sm:h-2.5 sm:w-2.5"
                    ></span>

                    <!-- Yellow -->

                    <span
                      class="h-2 w-2 rounded-full bg-[#febc2e] sm:h-2.5 sm:w-2.5"
                    ></span>

                    <!-- Green -->

                    <span
                      class="h-2 w-2 rounded-full bg-[#28c840] sm:h-2.5 sm:w-2.5"
                    ></span>

                  </div>


                  <div
                    class="flex min-w-0 items-center gap-2"
                  >

                    <span
                      class="h-1.5 w-1.5 shrink-0 rounded-full bg-[#00ff66]"
                    ></span>

                    <span
                      class="truncate text-[8px] uppercase tracking-[0.16em] text-gray-600 sm:text-[10px] sm:tracking-[0.2em]"
                    >
                      portfolio.js
                    </span>

                  </div>

                </div>


                <!-- ================================================= -->
                <!-- CODE AREA -->
                <!-- ================================================= -->

                <div
                  class="overflow-x-auto p-4 font-mono text-[10px] leading-6 sm:p-7 sm:text-[12px] sm:leading-7"
                >

                  <!-- Line 01 -->

                  <div class="flex min-w-max">

                    <span
                      class="mr-4 select-none text-gray-700 sm:mr-6"
                    >
                      01
                    </span>

                    <span class="text-purple-400">
                      const
                    </span>

                    <span class="ml-2 text-blue-300">
                      developer
                    </span>

                    <span class="mx-2 text-gray-600">
                      =
                    </span>

                    <span class="text-gray-300">
                      {
                    </span>

                  </div>


                  <!-- Line 02 -->

                  <div class="flex min-w-max">

                    <span
                      class="mr-4 select-none text-gray-700 sm:mr-6"
                    >
                      02
                    </span>

                    <span class="text-gray-500">
                      name:
                    </span>

                    <span class="ml-2 text-emerald-400">
                      'Rhesa'
                    </span>

                    <span class="text-gray-500">
                      ,
                    </span>

                  </div>


                  <!-- Line 03 -->

                  <div class="flex min-w-max">

                    <span
                      class="mr-4 select-none text-gray-700 sm:mr-6"
                    >
                      03
                    </span>

                    <span class="text-gray-500">
                      role:
                    </span>

                    <span class="ml-2 text-emerald-400">
                      'Web Developer'
                    </span>

                    <span class="text-gray-500">
                      ,
                    </span>

                  </div>


                  <!-- Line 04 -->

                  <div class="flex min-w-max">

                    <span
                      class="mr-4 select-none text-gray-700 sm:mr-6"
                    >
                      04
                    </span>

                    <span class="text-gray-500">
                      stack:
                    </span>

                    <span class="ml-2 text-yellow-300">
                      [
                    </span>

                  </div>


                  <!-- Line 05 -->

                  <div class="flex min-w-max">

                    <span
                      class="mr-4 select-none text-gray-700 sm:mr-6"
                    >
                      05
                    </span>

                    <span class="ml-8 text-emerald-400">
                      'Vue.js'
                    </span>

                    <span class="text-gray-500">
                      ,
                    </span>

                  </div>


                  <!-- Line 06 -->

                  <div class="flex min-w-max">

                    <span
                      class="mr-4 select-none text-gray-700 sm:mr-6"
                    >
                      06
                    </span>

                    <span class="ml-8 text-emerald-400">
                      'Laravel'
                    </span>

                    <span class="text-gray-500">
                      ,
                    </span>

                  </div>


                  <!-- Line 07 -->

                  <div class="flex min-w-max">

                    <span
                      class="mr-4 select-none text-gray-700 sm:mr-6"
                    >
                      07
                    </span>

                    <span class="ml-8 text-emerald-400">
                      'MySQL'
                    </span>

                    <span class="text-gray-500">
                      ,
                    </span>

                  </div>


                  <!-- Line 08 -->

                  <div class="flex min-w-max">

                    <span
                      class="mr-4 select-none text-gray-700 sm:mr-6"
                    >
                      08
                    </span>

                    <span class="ml-8 text-emerald-400">
                      'Tailwind CSS'
                    </span>

                    <span class="ml-2 text-yellow-300">
                      ]
                    </span>

                  </div>


                  <!-- Line 09 -->

                  <div class="flex min-w-max">

                    <span
                      class="mr-4 select-none text-gray-700 sm:mr-6"
                    >
                      09
                    </span>

                    <span class="text-gray-500">
                      focus:
                    </span>

                    <span class="ml-2 text-emerald-400">
                      'Clean UI'
                    </span>

                    <span class="text-gray-500">
                      ,
                    </span>

                  </div>


                  <!-- Line 10 -->

                  <div class="flex min-w-max">

                    <span
                      class="mr-4 select-none text-gray-700 sm:mr-6"
                    >
                      10
                    </span>

                    <span class="text-gray-500">
                      location:
                    </span>

                    <span class="ml-2 text-emerald-400">
                      'Indonesia'
                    </span>

                    <span class="text-gray-500">
                      ,
                    </span>

                  </div>


                  <!-- Line 11 -->

                  <div class="flex min-w-max">

                    <span
                      class="mr-4 select-none text-gray-700 sm:mr-6"
                    >
                      11
                    </span>

                    <span class="text-gray-500">
                      status:
                    </span>

                    <span class="ml-2 text-[#00ff66]">
                      'available'
                    </span>

                  </div>


                  <!-- Line 12 -->

                  <div class="flex min-w-max">

                    <span
                      class="mr-4 select-none text-gray-700 sm:mr-6"
                    >
                      12
                    </span>

                    <span class="text-gray-300">
                      }
                    </span>

                  </div>


                  <!-- Cursor -->

                  <div class="mt-2 flex min-w-max">

                    <span
                      class="mr-4 select-none text-gray-700 sm:mr-6"
                    >
                      13
                    </span>

                    <span
                      class="inline-block h-4 w-1.5 animate-pulse bg-[#00ff66]"
                    ></span>

                  </div>

                </div>


                <!-- ================================================= -->
                <!-- TERMINAL FOOTER -->
                <!-- ================================================= -->

                <div
                  class="flex items-center justify-between border-t border-white/[0.08] bg-[#0d0d0d] px-4 py-3 sm:px-5 sm:py-3.5"
                >

                  <span
                    class="font-mono text-[9px] text-gray-600 sm:text-[10px]"
                  >
                    ~/portfolio
                  </span>


                  <div
                    class="flex items-center gap-2"
                  >

                    <span
                      class="h-1.5 w-1.5 rounded-full bg-[#00ff66]"
                    ></span>

                    <span
                      class="font-mono text-[9px] text-gray-500 sm:text-[10px]"
                    >
                      ready
                    </span>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>


        <!-- ================================================== -->
        <!-- SCROLL INDICATOR -->
        <!-- ================================================== -->

        <a
          href="#about"
          class="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-gray-600 transition duration-300 hover:text-gray-300 md:flex"
        >

          Scroll to explore

          <span
            class="animate-bounce text-[#00ff66]"
          >
            ↓
          </span>

        </a>

      </section>


      <!-- ====================================================== -->
      <!-- ABOUT -->
      <!-- ====================================================== -->

      <About />


      <!-- ====================================================== -->
      <!-- SKILLS -->
      <!-- ====================================================== -->

      <Skills />


      <!-- ====================================================== -->
      <!-- PROJECTS -->
      <!-- ====================================================== -->

      <Projects />


      <!-- ====================================================== -->
      <!-- EXPERIENCE -->
      <!-- ====================================================== -->

      <Experience />


      <!-- ====================================================== -->
      <!-- CONTACT -->
      <!-- ====================================================== -->

      <Contact />

    </main>

  </div>

</template>
```
