<script setup>
const skillCategories = [
  {
    number: '01',
    title: 'Frontend',
    description: 'Building responsive and interactive user interfaces.',
    skills: [
      {
        name: 'HTML',
        short: 'HTML5',
        level: 'Advanced',
        icon: 'html',
      },
      {
        name: 'CSS',
        short: 'CSS3',
        level: 'Advanced',
        icon: 'css',
      },
      {
        name: 'JavaScript',
        short: 'JS',
        level: 'Intermediate',
        icon: 'js',
      },
      {
        name: 'Vue.js',
        short: 'VUE',
        level: 'Intermediate',
        icon: 'vue',
      },
    ],
  },

  {
    number: '02',
    title: 'Backend',
    description: 'Developing application logic, APIs, and server-side systems.',
    skills: [
      {
        name: 'PHP',
        short: 'PHP',
        level: 'Intermediate',
        icon: 'php',
      },
      {
        name: 'Laravel',
        short: 'LARAVEL',
        level: 'Intermediate',
        icon: 'laravel',
      },
    ],
  },

  {
    number: '03',
    title: 'Database',
    description: 'Designing and managing structured application data.',
    skills: [
      {
        name: 'MySQL',
        short: 'MYSQL',
        level: 'Intermediate',
        icon: 'mysql',
      },
    ],
  },

  {
    number: '04',
    title: 'Tools & Environment',
    description: 'Tools used for development, design, and local environments.',
    skills: [
      {
        name: 'Git',
        short: 'GIT',
        level: 'Intermediate',
        icon: 'git',
      },
      {
        name: 'Figma',
        short: 'FIGMA',
        level: 'Intermediate',
        icon: 'figma',
      },
      {
        name: 'XAMPP',
        short: 'XAMPP',
        level: 'Intermediate',
        icon: 'xampp',
      },
      {
        name: 'Laragon',
        short: 'LARAGON',
        level: 'Intermediate',
        icon: 'laragon',
      },
    ],
  },
]
</script>


<template>

  <section
    id="skills"
    class="relative overflow-hidden bg-[#050505] px-6 py-32 text-white md:px-10 md:py-40"
  >

    <!-- ========================= -->
    <!-- BACKGROUND GRID -->
    <!-- ========================= -->

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

      <!-- ========================= -->
      <!-- HEADER -->
      <!-- ========================= -->

      <div class="mb-20 max-w-3xl">

        <div class="mb-6 flex items-center gap-3">

          <span
            class="h-1.5 w-1.5 rounded-full bg-emerald-400"
          ></span>

          <p
            class="text-xs font-medium uppercase tracking-[0.3em] text-emerald-400"
          >
            Skills & Technologies
          </p>

        </div>


        <h2
          class="text-4xl font-semibold tracking-[-0.03em] text-white md:text-6xl"
        >
          Tools I use to
          <span class="text-white/30">
            build things.
          </span>
        </h2>


        <p
          class="mt-6 max-w-2xl text-base leading-8 text-white/40 md:text-lg"
        >
          A collection of technologies and tools I use to design,
          develop, and manage modern web applications.
        </p>

      </div>


      <!-- ========================= -->
      <!-- SKILL CATEGORIES -->
      <!-- ========================= -->

      <div class="space-y-5">

        <div
          v-for="category in skillCategories"
          :key="category.number"
          class="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition duration-500 hover:border-white/20 hover:bg-white/[0.035]"
        >

          <div
            class="grid lg:grid-cols-[220px_1fr]"
          >

            <!-- ========================= -->
            <!-- CATEGORY -->
            <!-- ========================= -->

            <div
              class="border-b border-white/10 p-6 lg:border-b-0 lg:border-r lg:p-8"
            >

              <div class="flex items-center justify-between lg:block">

                <span
                  class="font-mono text-xs text-emerald-400"
                >
                  {{ category.number }}
                </span>

                <span
                  class="text-[10px] uppercase tracking-[0.2em] text-white/20 lg:hidden"
                >
                  Skills
                </span>

              </div>


              <h3
                class="mt-4 text-xl font-medium tracking-tight text-white"
              >
                {{ category.title }}
              </h3>


              <p
                class="mt-3 text-sm leading-6 text-white/35"
              >
                {{ category.description }}
              </p>

            </div>


            <!-- ========================= -->
            <!-- SKILLS GRID -->
            <!-- ========================= -->

            <div
              class="grid sm:grid-cols-2 xl:grid-cols-4"
            >

              <div
                v-for="skill in category.skills"
                :key="skill.name"
                class="group/skill relative flex min-h-[155px] flex-col justify-between border-b border-white/10 p-6 transition duration-500 hover:bg-white/[0.04] sm:border-r sm:p-7"
              >

                <!-- ========================= -->
                <!-- TOP -->
                <!-- ========================= -->

                <div class="flex items-start justify-between">

                  <!-- ICON -->

                  <div
                    class="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] transition duration-500 group-hover/skill:border-emerald-400/30 group-hover/skill:bg-emerald-400/[0.05]"
                  >

                    <!-- HTML -->

                    <svg
                      v-if="skill.icon === 'html'"
                      viewBox="0 0 24 24"
                      class="h-7 w-7 fill-[#E44D26] transition duration-300 group-hover/skill:scale-110"
                    >
                      <path
                        d="M4.1 2h15.8l-1.43 16.1L12 22l-6.47-3.9L4.1 2zm3.12 3.2.19 2.05h9.17l-.3 3.35H7.72l.2 2.05h6.52l-.22 2.5-2.22 1.2-2.22-1.2-.14-1.45H7.58l.28 3.25L12 19.45l4.14-2.45L17.4 5.2H7.22z"
                      />
                    </svg>


                    <!-- CSS -->

                    <svg
                      v-else-if="skill.icon === 'css'"
                      viewBox="0 0 24 24"
                      class="h-7 w-7 fill-[#1572B6] transition duration-300 group-hover/skill:scale-110"
                    >
                      <path
                        d="M4.1 2h15.8l-1.43 16.1L12 22l-6.47-3.9L4.1 2zm3.12 3.2.19 2.05h9.17l-.3 3.35H7.72l.2 2.05h6.52l-.22 2.5-2.22 1.2-2.22-1.2-.14-1.45H7.58l.28 3.25L12 19.45l4.14-2.45L17.4 5.2H7.22z"
                      />
                    </svg>


                    <!-- JAVASCRIPT -->

                    <div
                      v-else-if="skill.icon === 'js'"
                      class="flex h-7 w-7 items-end justify-end bg-[#F7DF1E] p-1"
                    >
                      <span
                        class="text-[11px] font-bold leading-none text-black"
                      >
                        JS
                      </span>
                    </div>


                    <!-- VUE -->

                    <svg
                      v-else-if="skill.icon === 'vue'"
                      viewBox="0 0 24 24"
                      class="h-7 w-7 transition duration-300 group-hover/skill:scale-110"
                    >
                      <path
                        fill="#41B883"
                        d="M2 3h4.8L12 12.1 17.2 3H22L12 21 2 3z"
                      />

                      <path
                        fill="#35495E"
                        d="M6.8 3H10l2 3.5L14 3h3.2L12 13.4 6.8 3z"
                      />
                    </svg>


                    <!-- PHP -->

                    <svg
                      v-else-if="skill.icon === 'php'"
                      viewBox="0 0 24 24"
                      class="h-8 w-8 transition duration-300 group-hover/skill:scale-110"
                    >
                      <ellipse
                        cx="12"
                        cy="12"
                        rx="10"
                        ry="6"
                        fill="#777BB4"
                      />

                      <text
                        x="12"
                        y="14"
                        text-anchor="middle"
                        font-size="6"
                        font-weight="bold"
                        fill="white"
                      >
                        PHP
                      </text>
                    </svg>


                    <!-- LARAVEL -->

                    <svg
                      v-else-if="skill.icon === 'laravel'"
                      viewBox="0 0 24 24"
                      class="h-7 w-7 transition duration-300 group-hover/skill:scale-110"
                    >
                      <path
                        fill="#FF2D20"
                        d="M20.6 7.2 17.3 5.3l-3.1 1.8-3.1-1.8L7.9 7.2v3.6l3.2 1.8v3.7l3.1 1.8 3.1-1.8v-3.7l3.3-1.8V7.2zM12 8.7l2.2-1.3 2.2 1.3-2.2 1.3L12 8.7zm-.9 3.4-2.2-1.3V8.2l2.2 1.3v2.6zm1.8 4.1v-2.6l2.2-1.3v2.6l-2.2 1.3z"
                      />
                    </svg>


                    <!-- MYSQL -->

                    <svg
                      v-else-if="skill.icon === 'mysql'"
                      viewBox="0 0 24 24"
                      class="h-8 w-8 transition duration-300 group-hover/skill:scale-110"
                    >
                      <path
                        fill="#4479A1"
                        d="M3 5h18v10H3z"
                      />

                      <path
                        fill="#fff"
                        d="M5 7h14v6H5z"
                      />

                      <text
                        x="12"
                        y="11.8"
                        text-anchor="middle"
                        font-size="4"
                        font-weight="bold"
                        fill="#4479A1"
                      >
                        MySQL
                      </text>
                    </svg>


                    <!-- GIT -->

                    <svg
                      v-else-if="skill.icon === 'git'"
                      viewBox="0 0 24 24"
                      class="h-7 w-7 fill-[#F05032] transition duration-300 group-hover/skill:scale-110"
                    >
                      <path
                        d="M21.6 11.1 12.9 2.4a1.9 1.9 0 0 0-2.7 0L8.4 4.2l3.2 3.2a2.5 2.5 0 0 1 3.1 3.1l3 3a2.5 2.5 0 1 1-1.6 1.6l-3-3v6.2a2.5 2.5 0 1 1-1.8 0v-6.3a2.5 2.5 0 0 1-1.4-2.2L7 6.5l-4.6 4.6a1.9 1.9 0 0 0 0 2.7l8.7 8.7a1.9 1.9 0 0 0 2.7 0l7.8-7.8a1.9 1.9 0 0 0 0-2.6z"
                      />
                    </svg>


                    <!-- FIGMA -->

                    <svg
                      v-else-if="skill.icon === 'figma'"
                      viewBox="0 0 24 24"
                      class="h-7 w-7 transition duration-300 group-hover/skill:scale-110"
                    >
                      <path
                        fill="#F24E1E"
                        d="M8 2h4v6H8a3 3 0 1 1 0-6z"
                      />

                      <path
                        fill="#FF7262"
                        d="M12 2h4a3 3 0 1 1 0 6h-4V2z"
                      />

                      <path
                        fill="#A259FF"
                        d="M8 8h4v6H8a3 3 0 1 1 0-6z"
                      />

                      <path
                        fill="#1ABCFE"
                        d="M12 8h4v6h-4z"
                      />

                      <path
                        fill="#0ACF83"
                        d="M8 14h4v5a3 3 0 1 1-3-5z"
                      />

                    </svg>


                    <!-- XAMPP -->

                    <svg
                      v-else-if="skill.icon === 'xampp'"
                      viewBox="0 0 24 24"
                      class="h-8 w-8 transition duration-300 group-hover/skill:scale-110"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        fill="#FB7A24"
                      />

                      <path
                        d="M7 8h3l2 3 2-3h3l-3.5 5L17 17h-3l-2-3-2 3H7l3.5-5L7 8z"
                        fill="white"
                      />
                    </svg>


                    <!-- LARAGON -->

                    <svg
                      v-else-if="skill.icon === 'laragon'"
                      viewBox="0 0 24 24"
                      class="h-8 w-8 transition duration-300 group-hover/skill:scale-110"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        fill="#1FA67A"
                      />

                      <path
                        d="M7 8h2v7h4v2H7V8zm7 0h3v2h-3v1.5h2.5v2H14V17h-2V8h2z"
                        fill="white"
                      />
                    </svg>

                  </div>


                  <!-- LEVEL -->

                  <span
                    class="font-mono text-[9px] uppercase tracking-wider text-white/20 transition duration-300 group-hover/skill:text-white/40"
                  >
                    {{ skill.level }}
                  </span>

                </div>


                <!-- ========================= -->
                <!-- BOTTOM -->
                <!-- ========================= -->

                <div class="mt-8">

                  <p
                    class="text-sm font-medium text-white/80"
                  >
                    {{ skill.name }}
                  </p>


                  <div
                    class="mt-2 flex items-center justify-between"
                  >

                    <span
                      class="font-mono text-[9px] uppercase tracking-wider text-white/20"
                    >
                      {{ skill.short }}
                    </span>


                    <span
                      class="text-xs text-white/20 transition duration-300 group-hover/skill:translate-x-1 group-hover/skill:text-emerald-400"
                    >
                      ↗
                    </span>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>


      <!-- ========================= -->
      <!-- BOTTOM STATS -->
      <!-- ========================= -->

      <div
        class="mt-16 grid border-y border-white/10 sm:grid-cols-3"
      >

        <div
          class="border-b border-white/10 px-6 py-7 sm:border-b-0 sm:border-r"
        >

          <p
            class="font-mono text-xs text-white/25"
          >
            01
          </p>

          <p
            class="mt-2 text-sm text-white/50"
          >
            Frontend Technologies
          </p>

        </div>


        <div
          class="border-b border-white/10 px-6 py-7 sm:border-b-0 sm:border-r"
        >

          <p
            class="font-mono text-xs text-white/25"
          >
            02
          </p>

          <p
            class="mt-2 text-sm text-white/50"
          >
            Backend & Database
          </p>

        </div>


        <div
          class="px-6 py-7"
        >

          <p
            class="font-mono text-xs text-white/25"
          >
            03
          </p>

          <p
            class="mt-2 text-sm text-white/50"
          >
            Development Tools
          </p>

        </div>

      </div>

    </div>


    <!-- ========================= -->
    <!-- BOTTOM LINE -->
    <!-- ========================= -->

    <div
      class="absolute bottom-0 left-6 right-6 h-px bg-white/10 md:left-10 md:right-10"
    ></div>

  </section>
</template>