<script setup>
    import { RouterLink, useRoute } from 'vue-router';
    import logo from '@/assets/images/logo.png';

    const isActiveLink = (routepath) => {
      const route = useRoute();
      return route.path === routepath;
    }
</script>

<template>
    <nav class="bg-primary border-b border-secondary">
      <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="flex h-20 items-center justify-between">
          
          <div class="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
              <RouterLink to="/" class="flex flex-shrink-0 items-center mr-4">
                <img class="h-10 w-auto" :src="logo" alt="Vue Jobs" />
                <span class="hidden select-none md:block text-white text-2xl font-bold ml-2">Jobs Portal</span>
              </RouterLink>
          </div>

          <div class="md:ml-auto">
              <div class="flex space-x-4">
                  <RouterLink to="/" :class="[isActiveLink('/') ? 'bg-highlight' : 'hover:bg-secondary', 'text-white', 'px-3', 'py-1', 'rounded-md']">Home</RouterLink>
                  <RouterLink to="/jobs" :class="[isActiveLink('/jobs') ? 'bg-highlight' : 'hover:bg-secondary', 'text-white', 'px-3', 'py-1', 'rounded-md']">Jobs</RouterLink>
                  <RouterLink to="/jobs/add" :class="[isActiveLink('/jobs/add') ? 'bg-highlight' : 'hover:bg-secondary', 'text-white', 'px-3', 'py-1', 'rounded-md']">Add Job</RouterLink>
              </div>
          </div>
       </div>
    </div>
  </nav>
</template>
