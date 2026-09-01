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

  <div class="min-h-screen bg-[#050505] text-white">

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
        class="relative flex min-h-screen items-center overflow-hidden px-6 pt-24 md:px-10"
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
          class="pointer-events-none absolute right-[10%] top-[20%] h-96 w-96 rounded-full bg-[#00ff66] opacity-[0.025] blur-3xl"
        ></div>


        <!-- ================================================== -->
        <!-- MAIN CONTENT -->
        <!-- ================================================== -->

        <div
          class="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-2"
        >

          <!-- ================================================== -->
          <!-- LEFT CONTENT -->
          <!-- ================================================== -->

          <div>

            <!-- Status -->

            <div
              class="mb-7 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.02] px-3.5 py-2"
            >

              <span
                class="relative flex h-2 w-2"
              >

                <span
                  class="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00ff66] opacity-40"
                ></span>

                <span
                  class="relative inline-flex h-2 w-2 rounded-full bg-[#00ff66]"
                ></span>

              </span>


              <span
                class="text-[10px] font-medium uppercase tracking-[0.2em] text-gray-500"
              >
                Available for work
              </span>

            </div>


            <!-- Heading -->

            <h1
              class="max-w-3xl text-5xl font-semibold leading-[0.95] tracking-[-0.045em] text-white sm:text-6xl md:text-7xl lg:text-[76px]"
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
              class="mt-8 max-w-xl text-base leading-7 text-gray-500 md:text-lg"
            >
              I design and develop modern web applications with
              a focus on clean interfaces, responsive layouts,
              and practical user experiences.
            </p>


            <!-- Buttons -->

            <div
              class="mt-9 flex flex-wrap gap-3"
            >

              <!-- Projects -->

              <a
                href="#projects"
                class="group inline-flex items-center gap-3 rounded-lg bg-[#00ff66] px-5 py-3 text-sm font-medium text-black transition duration-300 hover:bg-[#7affad]"
              >

                View projects

                <span
                  class="transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>

              </a>


              <!-- CV -->

              <a
                href="/resume.pdf"
                download
                class="inline-flex items-center gap-3 rounded-lg border border-white/[0.12] bg-white/[0.02] px-5 py-3 text-sm font-medium text-gray-400 transition duration-300 hover:border-white/30 hover:text-white"
              >

                Download CV

                <span class="text-gray-600">
                  ↓
                </span>

              </a>

            </div>


            <!-- Tech Stack -->

            <div
              class="mt-10 flex flex-wrap gap-2"
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
                class="rounded-md border border-white/[0.08] bg-white/[0.015] px-3 py-1.5 text-[11px] font-medium text-gray-500 transition duration-300 hover:border-[#00ff66]/40 hover:text-[#00ff66]"
              >
                {{ tech }}
              </span>

            </div>

          </div>


          <!-- ================================================== -->
          <!-- RIGHT CODE WINDOW -->
          <!-- ================================================== -->

          <div class="hidden lg:block">

            <div
              class="relative mx-auto max-w-lg"
            >

              <!-- Glow -->

              <div
                class="pointer-events-none absolute -inset-12 rounded-full bg-[#00ff66] opacity-[0.025] blur-3xl"
              ></div>


              <!-- Window -->

              <div
                class="relative overflow-hidden rounded-2xl border border-white/[0.10] bg-[#0a0a0a] shadow-2xl"
              >

                <!-- ================================================= -->
                <!-- WINDOW HEADER -->
                <!-- ================================================= -->

                <div
                  class="flex items-center justify-between border-b border-white/[0.08] bg-[#0d0d0d] px-5 py-4"
                >

                  <div class="flex items-center gap-2">

                    <!-- Red -->

                    <span
                      class="h-2.5 w-2.5 rounded-full bg-[#ff5f57]"
                    ></span>

                    <!-- Yellow -->

                    <span
                      class="h-2.5 w-2.5 rounded-full bg-[#febc2e]"
                    ></span>

                    <!-- Green -->

                    <span
                      class="h-2.5 w-2.5 rounded-full bg-[#28c840]"
                    ></span>

                  </div>


                  <div
                    class="flex items-center gap-2"
                  >

                    <span
                      class="h-1.5 w-1.5 rounded-full bg-[#00ff66]"
                    ></span>

                    <span
                      class="text-[10px] uppercase tracking-[0.2em] text-gray-600"
                    >
                      portfolio.js
                    </span>

                  </div>

                </div>


                <!-- ================================================= -->
                <!-- CODE AREA -->
                <!-- ================================================= -->

                <div
                  class="overflow-x-auto p-7 font-mono text-[12px] leading-7"
                >

                  <!-- Line 01 -->

                  <div class="flex">

                    <span
                      class="mr-6 select-none text-gray-700"
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

                  <div class="flex">

                    <span
                      class="mr-6 select-none text-gray-700"
                    >
                      02
                    </span>

                    <span class="ml-0 text-gray-500">
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

                  <div class="flex">

                    <span
                      class="mr-6 select-none text-gray-700"
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

                  <div class="flex">

                    <span
                      class="mr-6 select-none text-gray-700"
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

                  <div class="flex">

                    <span
                      class="mr-6 select-none text-gray-700"
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

                  <div class="flex">

                    <span
                      class="mr-6 select-none text-gray-700"
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

                  <div class="flex">

                    <span
                      class="mr-6 select-none text-gray-700"
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

                  <div class="flex">

                    <span
                      class="mr-6 select-none text-gray-700"
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

                  <div class="flex">

                    <span
                      class="mr-6 select-none text-gray-700"
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

                  <div class="flex">

                    <span
                      class="mr-6 select-none text-gray-700"
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

                  <div class="flex">

                    <span
                      class="mr-6 select-none text-gray-700"
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

                  <div class="flex">

                    <span
                      class="mr-6 select-none text-gray-700"
                    >
                      12
                    </span>

                    <span class="text-gray-300">
                      }
                    </span>

                  </div>


                  <!-- Cursor -->

                  <div class="mt-2 flex">

                    <span
                      class="mr-6 select-none text-gray-700"
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
                  class="flex items-center justify-between border-t border-white/[0.08] bg-[#0d0d0d] px-5 py-3.5"
                >

                  <span
                    class="font-mono text-[10px] text-gray-600"
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
                      class="font-mono text-[10px] text-gray-500"
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