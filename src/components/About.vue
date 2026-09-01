<template>
  <section
    id="about"
    class="relative overflow-hidden border-t border-[#151515] bg-[#050505] px-6 py-28 md:py-36"
  >

    <!-- Subtle Grid -->
    <div
      class="pointer-events-none absolute inset-0 opacity-[0.035]"
      style="
        background-image:
          linear-gradient(#ffffff 1px, transparent 1px),
          linear-gradient(90deg, #ffffff 1px, transparent 1px);
        background-size: 80px 80px;
      "
    ></div>


    <div
      class="relative mx-auto max-w-7xl"
    >

      <!-- ================================================= -->
      <!-- HEADER -->
      <!-- ================================================= -->

      <div
        class="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end"
      >

        <div>

          <p
            class="mb-4 text-[10px] font-medium uppercase tracking-[0.3em] text-[#00ff66]"
          >
            01 — About
          </p>

          <h2
            class="text-4xl font-semibold tracking-[-0.03em] text-white md:text-5xl"
          >
            A little bit
            <span class="text-gray-600">
              about me.
            </span>
          </h2>

        </div>


        <p
          class="max-w-md text-sm leading-7 text-gray-600"
        >
          Information Systems graduate focused on building
          practical, modern, and user-friendly web applications.
        </p>

      </div>


      <!-- ================================================= -->
      <!-- MAIN GRID -->
      <!-- ================================================= -->

      <div
        class="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20"
      >

        <!-- ================================================= -->
        <!-- PROFILE -->
        <!-- ================================================= -->

        <div>

          <div
            class="group relative max-w-md"
          >

            <!-- Image Border -->

            <div
              class="absolute -inset-2 rounded-2xl border border-[#1d1d1d] transition duration-500 group-hover:border-[#00ff66]/30"
            ></div>


            <!-- Image -->

            <div
              class="relative overflow-hidden rounded-xl border border-[#242424] bg-[#0b0b0b]"
            >

              <img
                src="/images/profile.jpeg"
                alt="Rhesa Panjaitan"
                class="aspect-[4/5] w-full object-cover grayscale transition duration-700 group-hover:scale-[1.03] group-hover:grayscale-0"
              />


              <!-- Overlay -->

              <div
                class="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
              ></div>


              <!-- Image Label -->

              <div
                class="absolute bottom-5 left-5 right-5 flex items-center justify-between"
              >

                <div>

                  <p
                    class="text-xs font-medium text-white"
                  >
                    Rhesa Panjaitan
                  </p>

                  <p
                    class="mt-1 text-[9px] uppercase tracking-[0.2em] text-gray-500"
                  >
                    Web Developer
                  </p>

                </div>


                <span
                  class="flex h-8 w-8 items-center justify-center rounded-full border border-[#ffffff20] bg-black/40 text-[#00ff66]"
                >
                  ↗
                </span>

              </div>

            </div>

          </div>


          <!-- Small Info -->

          <div
            class="mt-8 grid grid-cols-2 gap-3"
          >

            <div
              class="rounded-xl border border-[#1c1c1c] bg-[#0a0a0a] p-4"
            >

              <p
                class="text-[9px] uppercase tracking-[0.2em] text-gray-600"
              >
                Location
              </p>

              <p
                class="mt-2 text-sm text-gray-300"
              >
                Indonesia
              </p>

            </div>


            <div
              class="rounded-xl border border-[#1c1c1c] bg-[#0a0a0a] p-4"
            >

              <p
                class="text-[9px] uppercase tracking-[0.2em] text-gray-600"
              >
                Focus
              </p>

              <p
                class="mt-2 text-sm text-gray-300"
              >
                Web Development
              </p>

            </div>

          </div>

        </div>


        <!-- ================================================= -->
        <!-- CONTENT -->
        <!-- ================================================= -->

        <div
          class="flex flex-col justify-center"
        >

          <p
            class="max-w-2xl text-lg leading-8 text-gray-400 md:text-xl"
          >
            I'm a fresh graduate in
            <span class="text-white">
              Information Systems
            </span>
            with a strong interest in web development.
          </p>


          <p
            class="mt-6 max-w-2xl text-sm leading-8 text-gray-600"
          >
            I enjoy turning ideas into functional web applications.
            My approach combines clean interfaces, structured
            development, and practical problem solving to create
            digital products that are easy to use and maintain.
          </p>


          <!-- Divider -->

          <div
            class="my-10 h-px w-full bg-[#1c1c1c]"
          ></div>


          <!-- Education -->

          <div
            class="grid gap-8 sm:grid-cols-2"
          >

            <div>

              <p
                class="text-[9px] font-medium uppercase tracking-[0.2em] text-[#00ff66]"
              >
                Education
              </p>

              <h3
                class="mt-3 text-lg font-medium text-white"
              >
                Information Systems
              </h3>

              <p
                class="mt-2 text-sm text-gray-600"
              >
                Universitas Advent Indonesia
              </p>

              <p
                class="mt-1 text-xs text-gray-700"
              >
                2022 — 2026
              </p>

            </div>


            <!-- Stack -->

            <div>

              <p
                class="text-[9px] font-medium uppercase tracking-[0.2em] text-[#00ff66]"
              >
                Core Stack
              </p>

              <div
                class="mt-4 flex flex-wrap gap-2"
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
                  class="rounded-md border border-[#222222] bg-[#0a0a0a] px-3 py-1.5 text-[10px] text-gray-500 transition hover:border-[#00ff66] hover:text-[#00ff66]"
                >
                  {{ tech }}
                </span>

              </div>

            </div>

          </div>


          <!-- CTA -->

          <div
            class="mt-10"
          >

            <a
              href="/resume.pdf"
              download
              class="group inline-flex items-center gap-3 text-sm font-medium text-white"
            >

              <span
                class="border-b border-[#00ff66] pb-1 transition group-hover:text-[#00ff66]"
              >
                Download my CV
              </span>

              <span
                class="text-[#00ff66] transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>

            </a>

          </div>

        </div>

      </div>

    </div>

  </section>
</template>