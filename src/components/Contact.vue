<template>
  <section
    id="contact"
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
            Contact
          </p>

        </div>


        <h2
          class="text-4xl font-semibold tracking-[-0.03em] md:text-6xl"
        >
          Let's work
          <span class="text-white/30">
            together.
          </span>
        </h2>


        <p
          class="mt-6 max-w-2xl text-base leading-8 text-white/40 md:text-lg"
        >
          Have a project, opportunity, or just want to say hello?
          Feel free to reach out. I'm always open to discussing
          new ideas and opportunities.
        </p>

      </div>


      <!-- ====================================== -->
      <!-- CONTACT CONTENT -->
      <!-- ====================================== -->

      <div
        class="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]"
      >

        <!-- ====================================== -->
        <!-- MAIN CONTACT -->
        <!-- ====================================== -->

        <div
          class="rounded-2xl border border-white/10 bg-white/[0.02] p-7 md:p-10"
        >

          <!-- Label -->

          <p
            class="font-mono text-[10px] uppercase tracking-[0.2em] text-white/25"
          >
            Get in touch
          </p>


          <!-- Email -->

          <a
            href="mailto:rhesaivander11.com"
            class="group mt-6 block"
          >

            <div
              class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
            >

              <div>

                <p
                  class="text-sm text-white/30"
                >
                  Email
                </p>

                <p
                  class="mt-2 text-xl font-medium tracking-tight text-white transition duration-300 group-hover:text-emerald-400 md:text-2xl"
                >
                  rhesaivander11@gmail.com
                </p>

              </div>


              <span
                class="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/40 transition duration-300 group-hover:border-emerald-400/30 group-hover:text-emerald-400"
              >
                ↗
              </span>

            </div>

          </a>


          <!-- Divider -->

          <div
            class="my-8 h-px bg-white/10"
          ></div>


          <!-- Social Links -->

          <div
            class="grid gap-3 sm:grid-cols-2"
          >

            <!-- GitHub -->

            <a
              href="https://github.com/rhesapnjtn"
              target="_blank"
              rel="noopener noreferrer"
              class="group rounded-xl border border-white/10 p-5 transition duration-300 hover:border-white/20 hover:bg-white/[0.03]"
            >

              <div
                class="flex items-center justify-between"
              >

                <span
                  class="font-mono text-[10px] uppercase tracking-wider text-white/25"
                >
                  GitHub
                </span>

                <span
                  class="text-white/30 transition duration-300 group-hover:translate-x-1 group-hover:text-emerald-400"
                >
                  →
                </span>

              </div>


              <p
                class="mt-4 text-sm font-medium text-white/70"
              >
                View my repositories
              </p>

            </a>


            <!-- LinkedIn -->

            <a
              href="https://www.linkedin.com/in/rhesapanjaitan"
              target="_blank"
              rel="noopener noreferrer"
              class="group rounded-xl border border-white/10 p-5 transition duration-300 hover:border-white/20 hover:bg-white/[0.03]"
            >

              <div
                class="flex items-center justify-between"
              >

                <span
                  class="font-mono text-[10px] uppercase tracking-wider text-white/25"
                >
                  LinkedIn
                </span>

                <span
                  class="text-white/30 transition duration-300 group-hover:translate-x-1 group-hover:text-emerald-400"
                >
                  →
                </span>

              </div>


              <p
                class="mt-4 text-sm font-medium text-white/70"
              >
                Connect with me
              </p>

            </a>

          </div>

        </div>


        <!-- ====================================== -->
        <!-- SIDE INFORMATION -->
        <!-- ====================================== -->

        <div
          class="flex flex-col"
        >

          <!-- Location -->

          <div
            class="border-b border-white/10 pb-8"
          >

            <p
              class="font-mono text-[10px] uppercase tracking-[0.2em] text-white/25"
            >
              Location
            </p>

            <p
              class="mt-4 text-lg font-medium text-white/70"
            >
              Indonesia
            </p>

            <p
              class="mt-2 text-sm leading-7 text-white/30"
            >
              Open to remote opportunities
              and collaborations.
            </p>

          </div>


          <!-- Availability -->

          <div
            class="border-b border-white/10 py-8"
          >

            <p
              class="font-mono text-[10px] uppercase tracking-[0.2em] text-white/25"
            >
              Availability
            </p>


            <div
              class="mt-4 flex items-center gap-3"
            >

              <span
                class="relative flex h-2 w-2"
              >

                <span
                  class="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50"
                ></span>

                <span
                  class="relative inline-flex h-2 w-2 rounded-full bg-emerald-400"
                ></span>

              </span>


              <span
                class="text-sm text-white/60"
              >
                Open to opportunities
              </span>

            </div>

          </div>


          <!-- Response -->

          <div
            class="py-8"
          >

            <p
              class="font-mono text-[10px] uppercase tracking-[0.2em] text-white/25"
            >
              Let's connect
            </p>


            <p
              class="mt-4 text-sm leading-7 text-white/30"
            >
              Whether it's a web project, collaboration,
              or a potential opportunity, I'd be happy
              to hear from you.
            </p>


            <!-- CTA -->

            <a
              href="mailto:your.email@example.com"
              class="group mt-6 inline-flex items-center gap-3 rounded-lg bg-white px-5 py-3 text-sm font-medium text-black transition duration-300 hover:bg-emerald-400"
            >

              Send an email

              <span
                class="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>

            </a>

          </div>

        </div>

      </div>


      <!-- ====================================== -->
      <!-- FOOTER -->
      <!-- ====================================== -->

      <div
        class="mt-24 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between"
      >

        <p
          class="font-mono text-[10px] uppercase tracking-wider text-white/20"
        >
          © 2026 Rhesa Panjaitan
        </p>


        <p
          class="font-mono text-[10px] uppercase tracking-wider text-white/20"
        >
          Built with Vue.js & Tailwind CSS
        </p>

      </div>

    </div>


    <!-- Bottom Divider -->

    <div
      class="absolute bottom-0 left-6 right-6 h-px bg-white/10 md:left-10 md:right-10"
    ></div>

  </section>
</template>