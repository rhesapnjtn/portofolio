<script setup>
import { ref } from 'vue'
import projects from '../data/projects'

/*
|--------------------------------------------------------------------------
| Project Detail Modal
|--------------------------------------------------------------------------
*/

const selectedProject = ref(null)
const selectedImage = ref(null)

const openProject = (project) => {
  selectedProject.value = project
  selectedImage.value = project.images?.[0] || project.image
}

const closeProject = () => {
  selectedProject.value = null
  selectedImage.value = null
}

const selectImage = (image) => {
  selectedImage.value = image
}

/*
|--------------------------------------------------------------------------
| Close Modal With ESC
|--------------------------------------------------------------------------
*/

const handleKeydown = (event) => {
  if (event.key === 'Escape') {
    closeProject()
  }
}
</script>


<template>

  <!-- ========================================================= -->
  <!-- PROJECTS SECTION -->
  <!-- ========================================================= -->

  <section
    id="projects"
    class="relative overflow-hidden bg-[#050505] px-6 py-32 text-white md:px-10 md:py-40"
  >

    <!-- Background Grid -->
    <div
      class="pointer-events-none absolute inset-0 opacity-[0.025]"
      style="
        background-image:
          linear-gradient(#ffffff 1px, transparent 1px),
          linear-gradient(90deg, #ffffff 1px, transparent 1px);
        background-size: 50px 50px;
      "
    ></div>


    <!-- Main Container -->
    <div class="relative mx-auto max-w-7xl">


      <!-- ===================================================== -->
      <!-- HEADER -->
      <!-- ===================================================== -->

      <div class="mb-20 max-w-3xl">

        <div class="mb-6 flex items-center gap-3">

          <span
            class="h-1.5 w-1.5 rounded-full bg-emerald-400"
          ></span>

          <p
            class="text-xs font-medium uppercase tracking-[0.3em] text-emerald-400"
          >
            Selected Projects
          </p>

        </div>


        <h2
          class="text-4xl font-semibold tracking-[-0.03em] md:text-6xl"
        >
          Things I've
          <span class="text-white/30">
            built.
          </span>
        </h2>


        <p
          class="mt-6 max-w-2xl text-base leading-8 text-white/40 md:text-lg"
        >
          A selection of web applications and digital projects
          I've developed using modern web technologies.
        </p>

      </div>


      <!-- ===================================================== -->
      <!-- PROJECT GRID -->
      <!-- ===================================================== -->

      <div
        class="grid gap-6 lg:grid-cols-2"
      >

        <article
          v-for="(project, index) in projects"
          :key="project.id"
          class="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] transition duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.04]"
        >

          <!-- ================================================= -->
          <!-- PROJECT IMAGE -->
          <!-- ================================================= -->

          <div
            class="relative aspect-video overflow-hidden bg-[#111]"
          >

            <img
              :src="project.image"
              :alt="project.title"
              class="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />


            <!-- Image Overlay -->

            <div
              class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60"
            ></div>


            <!-- Project Number -->

            <div
              class="absolute left-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/40 backdrop-blur-sm"
            >

              <span
                class="font-mono text-[10px] text-white/60"
              >
                {{ String(index + 1).padStart(2, '0') }}
              </span>

            </div>


            <!-- Gallery Count -->

            <div
              v-if="project.images && project.images.length > 1"
              class="absolute right-5 top-5 rounded-full border border-white/20 bg-black/40 px-3 py-1.5 backdrop-blur-sm"
            >

              <span
                class="font-mono text-[10px] text-white/60"
              >
                {{ project.images.length }} screenshots
              </span>

            </div>

          </div>


          <!-- ================================================= -->
          <!-- PROJECT CONTENT -->
          <!-- ================================================= -->

          <div class="p-7 md:p-8">


            <!-- Category -->

            <p
              class="text-[10px] font-medium uppercase tracking-[0.25em] text-emerald-400"
            >
              {{ project.category }}
            </p>


            <!-- Title -->

            <h3
              class="mt-3 text-2xl font-semibold tracking-tight text-white md:text-3xl"
            >
              {{ project.title }}
            </h3>


            <!-- Description -->

            <p
              class="mt-4 text-sm leading-7 text-white/40"
            >
              {{ project.description }}
            </p>


            <!-- ================================================= -->
            <!-- TECHNOLOGIES -->
            <!-- ================================================= -->

            <div
              class="mt-6 flex flex-wrap gap-2"
            >

              <span
                v-for="technology in project.technologies"
                :key="technology"
                class="rounded-full border border-white/10 bg-white/[0.025] px-3 py-1.5 text-[10px] font-medium uppercase tracking-wider text-white/40 transition group-hover:border-white/15 group-hover:text-white/60"
              >
                {{ technology }}
              </span>

            </div>


            <!-- ================================================= -->
            <!-- ACTIONS -->
            <!-- ================================================= -->

            <div
              class="mt-8 flex items-center justify-between border-t border-white/10 pt-6"
            >

              <!-- View Details -->

              <button
                type="button"
                @click="openProject(project)"
                class="group/button flex items-center gap-2 text-sm font-medium text-white/70 transition hover:text-emerald-400"
              >

                <span>
                  View Details
                </span>

                <span
                  class="transition duration-300 group-hover/button:translate-x-1"
                >
                  →
                </span>

              </button>


              <!-- GitHub -->

              <a
                v-if="project.github && project.github !== '#'"
                :href="project.github"
                target="_blank"
                rel="noopener noreferrer"
                class="text-xs font-medium text-white/30 transition hover:text-white"
              >
                GitHub ↗
              </a>

            </div>

          </div>

        </article>

      </div>


      <!-- ===================================================== -->
      <!-- BOTTOM INFO -->
      <!-- ===================================================== -->

      <div
        class="mt-16 border-y border-white/10"
      >

        <div
          class="grid md:grid-cols-3"
        >

          <div
            class="border-b border-white/10 px-6 py-7 md:border-b-0 md:border-r"
          >

            <p class="font-mono text-xs text-white/20">
              01
            </p>

            <p class="mt-2 text-sm text-white/40">
              Web Applications
            </p>

          </div>


          <div
            class="border-b border-white/10 px-6 py-7 md:border-b-0 md:border-r"
          >

            <p class="font-mono text-xs text-white/20">
              02
            </p>

            <p class="mt-2 text-sm text-white/40">
              Full-Stack Development
            </p>

          </div>


          <div
            class="px-6 py-7"
          >

            <p class="font-mono text-xs text-white/20">
              03
            </p>

            <p class="mt-2 text-sm text-white/40">
              Real-World Projects
            </p>

          </div>

        </div>

      </div>

    </div>


    <!-- Bottom Line -->

    <div
      class="absolute bottom-0 left-6 right-6 h-px bg-white/10 md:left-10 md:right-10"
    ></div>

  </section>


  <!-- ========================================================= -->
  <!-- PROJECT DETAIL MODAL -->
  <!-- ========================================================= -->

  <Teleport to="body">

    <div
      v-if="selectedProject"
      class="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 px-4 py-8 backdrop-blur-md"
      @click.self="closeProject"
      @keydown="handleKeydown"
      tabindex="0"
    >

      <div
        class="relative flex max-h-[90vh] w-full max-w-6xl flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#0d0d0d] shadow-2xl"
      >


        <!-- ===================================================== -->
        <!-- MODAL HEADER -->
        <!-- ===================================================== -->

        <div
          class="flex shrink-0 items-center justify-between border-b border-white/10 px-6 py-5 md:px-8"
        >

          <div>

            <p
              class="text-[10px] font-medium uppercase tracking-[0.25em] text-emerald-400"
            >
              {{ selectedProject.category }}
            </p>

            <h3
              class="mt-1 text-xl font-semibold text-white md:text-2xl"
            >
              {{ selectedProject.title }}
            </h3>

          </div>


          <!-- Close -->

          <button
            type="button"
            @click="closeProject"
            class="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/40 transition hover:border-white/20 hover:bg-white/5 hover:text-white"
            aria-label="Close"
          >
            ×
          </button>

        </div>


        <!-- ===================================================== -->
        <!-- MODAL CONTENT -->
        <!-- ===================================================== -->

        <div
          class="overflow-y-auto p-6 md:p-8"
        >

          <div
            class="grid gap-8 lg:grid-cols-[1fr_280px]"
          >


            <!-- ================================================= -->
            <!-- MAIN IMAGE -->
            <!-- ================================================= -->

            <div>

              <div
                class="overflow-hidden rounded-2xl border border-white/10 bg-black"
              >

                <img
                  :src="selectedImage"
                  :alt="selectedProject.title"
                  class="max-h-[55vh] w-full object-contain"
                />

              </div>


              <!-- Description -->

              <p
                class="mt-6 text-sm leading-7 text-white/40"
              >
                {{ selectedProject.description }}
              </p>

            </div>


            <!-- ================================================= -->
            <!-- SCREENSHOT GALLERY -->
            <!-- ================================================= -->

            <div>

              <div
                class="mb-4 flex items-center justify-between"
              >

                <p
                  class="text-xs font-medium uppercase tracking-[0.2em] text-white/40"
                >
                  Screenshots
                </p>

                <span
                  class="font-mono text-[10px] text-white/20"
                >
                  {{ selectedProject.images?.length || 1 }}
                </span>

              </div>


              <div
                class="grid grid-cols-2 gap-3 lg:grid-cols-1"
              >

                <button
                  v-for="(image, index) in selectedProject.images"
                  :key="image"
                  type="button"
                  @click="selectImage(image)"
                  class="group relative overflow-hidden rounded-xl border transition"
                  :class="
                    selectedImage === image
                      ? 'border-emerald-400/60'
                      : 'border-white/10 hover:border-white/30'
                  "
                >

                  <img
                    :src="image"
                    :alt="`${selectedProject.title} screenshot ${index + 1}`"
                    class="aspect-video w-full object-cover transition duration-300 group-hover:scale-105"
                  />


                  <!-- Number -->

                  <span
                    class="absolute bottom-2 left-2 rounded-md bg-black/70 px-2 py-1 font-mono text-[9px] text-white/60 backdrop-blur-sm"
                  >
                    {{ String(index + 1).padStart(2, '0') }}
                  </span>

                </button>

              </div>

            </div>

          </div>


          <!-- ================================================= -->
          <!-- MODAL TECHNOLOGIES -->
          <!-- ================================================= -->

          <div
            class="mt-8 border-t border-white/10 pt-6"
          >

            <p
              class="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-white/30"
            >
              Technologies
            </p>


            <div
              class="flex flex-wrap gap-2"
            >

              <span
                v-for="technology in selectedProject.technologies"
                :key="technology"
                class="rounded-full border border-white/10 px-3 py-1.5 text-[10px] uppercase tracking-wider text-white/50"
              >
                {{ technology }}
              </span>

            </div>

          </div>


          <!-- ================================================= -->
          <!-- MODAL LINKS -->
          <!-- ================================================= -->

          <div
            class="mt-6 flex flex-wrap gap-4"
          >

            <a
              v-if="selectedProject.github && selectedProject.github !== '#'"
              :href="selectedProject.github"
              target="_blank"
              rel="noopener noreferrer"
              class="rounded-full bg-white px-6 py-3 text-xs font-medium text-black transition hover:bg-white/80"
            >
              View GitHub ↗
            </a>


            <a
              v-if="selectedProject.demo && selectedProject.demo !== '#'"
              :href="selectedProject.demo"
              target="_blank"
              rel="noopener noreferrer"
              class="rounded-full border border-white/10 px-6 py-3 text-xs font-medium text-white/60 transition hover:border-white/30 hover:text-white"
            >
              Live Demo ↗
            </a>

          </div>

        </div>

      </div>

    </div>

  </Teleport>

</template>