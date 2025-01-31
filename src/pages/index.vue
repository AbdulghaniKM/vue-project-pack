<template>
  <main class="min-h-screen px-4 py-12 bg-gray-900 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-7xl">
      <h1 class="mb-8 text-4xl font-bold text-gray-100">Counter App</h1>
      <div class="flex flex-col items-center space-y-6">
        <div class="text-6xl font-bold text-gray-200">
          {{ store.count }}
        </div>
        <div class="flex space-x-4">
          <Button
            variant="outline"
            size="lg"
            @click="decrement"
            class="text-gray-800 border-gray-700 hover:bg-gray-300"
            icon="line-md:minus"
            icon-class="w-12 h-12 text-black"
          >
            Decrease
          </Button>

          <Button
            variant="default"
            size="lg"
            @click="reset"
            class="text-gray-200 bg-gray-800 hover:bg-gray-700"
            icon="weui:refresh-filled"
            icon-class="w-12 h-12 text-white"
          >
            Reset
          </Button>

          <Button
            variant="outline"
            size="lg"
            @click="increment"
            class="text-gray-800 border-gray-700 hover:bg-gray-300"
            icon="line-md:plus"
            icon-class="w-5 h-5 text-black"
          >
            Increase
          </Button>
        </div>
      </div>
    </div>
  </main>
</template>
<script setup>
  import { ref, onMounted } from 'vue';
  import Button from '@/components/ui/button/Button.vue';
  import { useCounterStore } from '@/stores/useCounterStore';
  import { Axios } from '@/plugins/axios';
  const store = useCounterStore();
  const posts = ref([]);

  onMounted(async () => {
    try {
      const response = await Axios.get('/posts');
      posts.value = response.data;
      console.log('Posts fetched:', posts.value);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  });

  const increment = () => store.increment();
  const decrement = () => store.decrement();
  const reset = () => store.reset();
</script>
