<template>
  <main class="min-h-screen bg-gradient-to-br from-[#030712] via-[#0F1117] to-[#1F2937]">
    <!-- Hero Section -->
    <div class="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="text-center">
        <h1 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">
          Vue Project Pack
          <span
            class="mt-2 block bg-gradient-to-r from-[#FACC15] to-[#EAB308] bg-clip-text text-transparent"
          >
            Starter Template
          </span>
        </h1>
        <p class="mx-auto mt-6 max-w-2xl text-lg text-[#E5E7EB]">
          A modern, production-ready starter template emphasizing developer experience, performance,
          and best practices.
        </p>
        <div class="flex flex-col justify-center gap-4 mt-8 sm:flex-row">
          <Button
            variant="default"
            size="lg"
            class="bg-[#24292E] text-white transition-colors duration-200 hover:bg-[#2F363D]"
            icon="mdi:github"
            icon-class="w-5 h-5 mr-2"
            @click="redirectTo('https://github.com/AbdulghaniKM/vue-project-pack')"
          >
            Star on GitHub
          </Button>
          <Button
            variant="primary"
            size="lg"
            class="border border-[#FACC15] text-white transition-colors duration-200 hover:bg-[#FACC15]/10"
            icon="mdi:linkedin"
            icon-class="w-5 h-5 mr-2 text-[#FACC15]"
            @click="redirectTo('https://www.linkedin.com/in/abdulghani-khalid-mohsin-647278243/')"
          >
            Connect on LinkedIn
          </Button>
        </div>
      </div>
    </div>

    <!-- Features Grid -->
    <div class="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <!-- Tech Stack -->
        <div
          class="rounded-lg border border-[#1F2937] bg-[#030712]/80 p-6 backdrop-blur-sm transition-colors duration-200 hover:bg-[#1F2937]/50"
        >
          <div class="flex items-center mb-4">
            <Icon
              icon="ph:stack-duotone"
              class="h-6 w-6 text-[#FACC15]"
            />
            <h3 class="ml-3 text-xl font-semibold text-white">Modern Stack</h3>
          </div>
          <ul class="space-y-2 text-[#E5E7EB]">
            <li class="flex items-center">
              <Icon
                icon="logos:vue"
                class="w-4 h-4 mr-2"
              />
              Vue 3 with Composition API
            </li>
            <li class="flex items-center">
              <Icon
                icon="logos:tailwindcss-icon"
                class="w-4 h-4 mr-2"
              />
              Tailwind CSS
            </li>
            <li class="flex items-center">
              <svg
                class="w-4 h-4 mr-2"
                viewBox="0 0 256 256"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_102_1338)">
                  <path
                    d="M208 128L128 208"
                    stroke="#41B883"
                    stroke-width="16"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M192 40L40 192"
                    stroke="#41B883"
                    stroke-width="16"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_102_1338">
                    <rect
                      width="256"
                      height="256"
                      fill="white"
                    ></rect>
                  </clipPath>
                </defs>
              </svg>
              ShadCN Components
            </li>
          </ul>
        </div>

        <!-- Tools -->
        <div
          class="rounded-lg border border-[#1F2937] bg-[#030712]/80 p-6 backdrop-blur-sm transition-colors duration-200 hover:bg-[#1F2937]/50"
        >
          <div class="flex items-center mb-4">
            <Icon
              icon="ph:wrench-duotone"
              class="h-6 w-6 text-[#FACC15]"
            />
            <h3 class="ml-3 text-xl font-semibold text-white">Pre-configured</h3>
          </div>
          <ul class="space-y-2 text-[#E5E7EB]">
            <li class="flex items-center">
              <Icon
                icon="material-symbols:route"
                class="mr-2 h-4 w-4 text-[#FACC15]"
              />
              Vue Router
            </li>
            <li class="flex items-center">
              <Icon
                icon="ph:database-duotone"
                class="mr-2 h-4 w-4 text-[#FACC15]"
              />
              Pinia State Management
            </li>
            <li class="flex items-center">
              <Icon
                icon="ph:wave-sine-duotone"
                class="mr-2 h-4 w-4 text-[#FACC15]"
              />
              Rombo Animation Plugin
            </li>
          </ul>
        </div>

        <!-- Architecture -->
        <div
          class="rounded-lg border border-[#1F2937] bg-[#030712]/80 p-6 backdrop-blur-sm transition-colors duration-200 hover:bg-[#1F2937]/50"
        >
          <div class="flex items-center mb-4">
            <Icon
              icon="ph:tree-structure-duotone"
              class="h-6 w-6 text-[#FACC15]"
            />
            <h3 class="ml-3 text-xl font-semibold text-white">Architecture</h3>
          </div>
          <ul class="space-y-2 text-[#E5E7EB]">
            <li class="flex items-center">
              <Icon
                icon="ph:folders-duotone"
                class="mr-2 h-4 w-4 text-[#FACC15]"
              />
              Scalable Structure
            </li>
            <li class="flex items-center">
              <Icon
                icon="material-symbols:view-module"
                class="mr-2 h-4 w-4 text-[#FACC15]"
              />
              Component-Driven
            </li>
            <li class="flex items-center">
              <Icon
                icon="ph:code-duotone"
                class="mr-2 h-4 w-4 text-[#FACC15]"
              />
              Type-Safe Development
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Quick Start -->
    <div class="px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="rounded-lg border border-[#1F2937] bg-[#030712]/80 p-8 backdrop-blur-sm">
        <h2 class="flex items-center text-2xl font-bold text-white">
          <Icon
            icon="ph:terminal-window-duotone"
            class="mr-2 h-6 w-6 text-[#FACC15]"
          />
          Quick Start
        </h2>
        <div class="mt-4 overflow-hidden font-mono text-sm rounded-lg">
          <div class="border border-[#1F2937] bg-[#030712] p-4">
            <p class="text-[#6B7280]"># Clone the repository</p>
            <p class="text-[#FACC15]">
              git clone https://github.com/AbdulghaniKM/vue-project-pack.git
            </p>
            <p class="mt-2 text-[#6B7280]"># Install dependencies</p>
            <p class="text-[#FACC15]">npm install</p>
            <p class="mt-2 text-[#6B7280]"># Start development server</p>
            <p class="text-[#FACC15]">npm run dev</p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
  import Button from '@/components/ui/button/Button.vue';
  import { Icon } from '@iconify/vue';

  const redirectTo = (url) => {
    window.open(url, '_blank');
  };
</script>
