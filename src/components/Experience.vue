<template>
  <section
    id="experience"
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


    <div class="relative mx-auto max-w-7xl">

      <!-- ====================================== -->
      <!-- HEADER -->
      <!-- ====================================== -->

      <div class="mb-20 max-w-3xl">

        <div class="mb-6 flex items-center gap-3">

          <span
            class="h-1.5 w-1.5 rounded-full bg-emerald-400"
          ></span>

          <p
            class="font-mono text-xs uppercase tracking-[0.3em] text-emerald-400"
          >
            Experience
          </p>

        </div>


        <h2
          class="text-4xl font-semibold tracking-[-0.03em] md:text-6xl"
        >
          My journey
          <span class="text-white/30">
            so far.
          </span>
        </h2>


        <p
          class="mt-6 max-w-2xl text-base leading-8 text-white/40 md:text-lg"
        >
          A combination of education, professional experience,
          and hands-on development that shaped my skills in
          information systems and web development.
        </p>

      </div>


      <!-- ====================================== -->
      <!-- EXPERIENCE LIST -->
      <!-- ====================================== -->

      <div class="relative max-w-5xl">

        <!-- Timeline Line -->
        <div
          class="absolute bottom-0 left-[15px] top-0 hidden w-px bg-white/10 md:block"
        ></div>


        <!-- ====================================== -->
        <!-- ITEM 01 -->
        <!-- ====================================== -->

        <article
          class="group relative pb-14 md:pl-16"
        >

          <!-- Timeline Number -->

          <div
            class="absolute left-0 top-0 hidden h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-[#080808] font-mono text-[9px] text-white/40 md:flex"
          >
            01
          </div>


          <!-- Card -->

          <div
            class="rounded-2xl border border-white/10 bg-white/[0.02] p-7 transition duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.035] md:p-9"
          >

            <!-- Top -->

            <div
              class="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between"
            >

              <div>

                <p
                  class="font-mono text-[10px] uppercase tracking-[0.2em] text-emerald-400"
                >
                  2025 — 2026
                </p>


                <h3
                  class="mt-3 text-2xl font-semibold tracking-tight text-white md:text-3xl"
                >
                  Web Development
                </h3>


                <p
                  class="mt-2 text-sm text-white/35"
                >
                  Personal & Academic Projects
                </p>

              </div>


              <span
                class="w-fit rounded-full border border-white/10 px-3 py-1.5 font-mono text-[9px] uppercase tracking-wider text-white/30"
              >
                Development
              </span>

            </div>


            <!-- Description -->

            <p
              class="mt-7 max-w-3xl text-sm leading-8 text-white/40"
            >
              Developed web-based applications using Vue.js,
              Laravel, PHP, MySQL, and Tailwind CSS. Worked on
              responsive interfaces, REST APIs, database integration,
              authentication, and application functionality.
            </p>


            <!-- Technologies -->

            <div class="mt-7 flex flex-wrap gap-2">

              <span
                v-for="technology in [
                  'Vue.js',
                  'Laravel',
                  'PHP',
                  'MySQL',
                  'Tailwind CSS'
                ]"
                :key="technology"
                class="rounded-md border border-white/10 px-3 py-1.5 font-mono text-[10px] text-white/35 transition hover:border-emerald-400/30 hover:text-emerald-400"
              >
                {{ technology }}
              </span>

            </div>

          </div>

        </article>


        <!-- ====================================== -->
        <!-- ITEM 02 -->
        <!-- ====================================== -->

        <article
          class="group relative pb-14 md:pl-16"
        >

          <!-- Timeline Number -->

          <div
            class="absolute left-0 top-0 hidden h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-[#080808] font-mono text-[9px] text-white/40 md:flex"
          >
            02
          </div>


          <!-- Card -->

          <div
            class="rounded-2xl border border-white/10 bg-white/[0.02] p-7 transition duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.035] md:p-9"
          >

            <!-- Top -->

            <div
              class="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between"
            >

              <div>

                <p
                  class="font-mono text-[10px] uppercase tracking-[0.2em] text-emerald-400"
                >
                  2025
                </p>


                <h3
                  class="mt-3 text-2xl font-semibold tracking-tight text-white md:text-3xl"
                >
                  Administrative & Data Management
                </h3>


                <p
                  class="mt-2 text-sm text-white/35"
                >
                  Internship Experience
                </p>

              </div>


              <span
                class="w-fit rounded-full border border-white/10 px-3 py-1.5 font-mono text-[9px] uppercase tracking-wider text-white/30"
              >
                Internship
              </span>

            </div>


            <!-- Description -->

            <p
              class="mt-7 max-w-3xl text-sm leading-8 text-white/40"
            >
              Handled data entry, document management, administrative
              reporting, invoice processing, and data validation.
              Developed strong attention to detail and maintained
              structured and accurate documentation.
            </p>


            <!-- Skills -->

            <div class="mt-7 flex flex-wrap gap-2">

              <span
                v-for="skill in [
                  'Data Entry',
                  'Microsoft Excel',
                  'Documentation',
                  'Data Validation'
                ]"
                :key="skill"
                class="rounded-md border border-white/10 px-3 py-1.5 font-mono text-[10px] text-white/35 transition hover:border-emerald-400/30 hover:text-emerald-400"
              >
                {{ skill }}
              </span>

            </div>

          </div>

        </article>


        <!-- ====================================== -->
        <!-- ITEM 03 -->
        <!-- ====================================== -->

        <article
          class="group relative md:pl-16"
        >

          <!-- Timeline Number -->

          <div
            class="absolute left-0 top-0 hidden h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-[#080808] font-mono text-[9px] text-white/40 md:flex"
          >
            03
          </div>


          <!-- Card -->

          <div
            class="rounded-2xl border border-white/10 bg-white/[0.02] p-7 transition duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.035] md:p-9"
          >

            <!-- Top -->

            <div
              class="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between"
            >

              <div>

                <p
                  class="font-mono text-[10px] uppercase tracking-[0.2em] text-emerald-400"
                >
                  2022 — 2026
                </p>


                <h3
                  class="mt-3 text-2xl font-semibold tracking-tight text-white md:text-3xl"
                >
                  Information Systems
                </h3>


                <p
                  class="mt-2 text-sm text-white/35"
                >
                  Universitas Advent Indonesia
                </p>

              </div>


              <span
                class="w-fit rounded-full border border-white/10 px-3 py-1.5 font-mono text-[9px] uppercase tracking-wider text-white/30"
              >
                Education
              </span>

            </div>


            <!-- Description -->

            <p
              class="mt-7 max-w-3xl text-sm leading-8 text-white/40"
            >
              Studied Information Systems with a focus on web
              development, databases, system analysis, information
              technology, and software development. Built several
              academic and personal projects throughout the program.
            </p>


            <!-- Skills -->

            <div class="mt-7 flex flex-wrap gap-2">

              <span
                v-for="skill in [
                  'Information Systems',
                  'Web Development',
                  'Database',
                  'System Analysis'
                ]"
                :key="skill"
                class="rounded-md border border-white/10 px-3 py-1.5 font-mono text-[10px] text-white/35 transition hover:border-emerald-400/30 hover:text-emerald-400"
              >
                {{ skill }}
              </span>

            </div>

          </div>

        </article>

      </div>


      <!-- ====================================== -->
      <!-- BOTTOM SUMMARY -->
      <!-- ====================================== -->

      <div
        class="mt-20 border-t border-white/10 pt-10"
      >

        <div
          class="grid gap-8 sm:grid-cols-3"
        >

          <!-- Stat -->

          <div>

            <p
              class="font-mono text-2xl font-medium text-white"
            >
              01
            </p>

            <p
              class="mt-2 text-xs uppercase tracking-wider text-white/25"
            >
              Academic Degree
            </p>

          </div>


          <!-- Stat -->

          <div>

            <p
              class="font-mono text-2xl font-medium text-white"
            >
              04+
            </p>

            <p
              class="mt-2 text-xs uppercase tracking-wider text-white/25"
            >
              Web Projects
            </p>

          </div>


          <!-- Stat -->

          <div>

            <p
              class="font-mono text-2xl font-medium text-white"
            >
              ∞
            </p>

            <p
              class="mt-2 text-xs uppercase tracking-wider text-white/25"
            >
              Continuous Learning
            </p>

          </div>

        </div>

      </div>

    </div>


    <!-- Bottom Divider -->

    <div
      class="absolute bottom-0 left-6 right-6 h-px bg-white/10 md:left-10 md:right-10"
    ></div>

  </section>
</template>