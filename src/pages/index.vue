<template>
  <main class="min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <h1 class="text-4xl font-bold text-gray-100 mb-8">Counter App</h1>

      <div class="flex flex-col items-center space-y-6">
        <div class="text-6xl font-bold text-gray-200">
          {{ count }}
        </div>

        <div class="flex space-x-4">
          <Button
            variant="outline"
            size="lg"
            @click="decrement"
            class="text-gray-800 border-gray-700 hover:bg-gray-300"
          >
            Decrease
          </Button>

          <Button
            variant="default"
            size="lg"
            @click="reset"
            class="bg-gray-800 text-gray-200 hover:bg-gray-700"
          >
            Reset
          </Button>

          <Button
            variant="outline"
            size="lg"
            @click="increment"
            class="text-gray-800 border-gray-700 hover:bg-gray-300"
          >
            Increase
          </Button>
        </div>
      </div>
    </div>
  </main>
</template>
<script setup>
import { ref } from "vue";
import Button from "@/components/ui/button/Button.vue";

const count = ref(0);

const increment = () => count.value++;
const decrement = () => count.value--;
const reset = () => (count.value = 0);
</script>
