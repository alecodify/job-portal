<script setup>
    import { RouterLink } from 'vue-router';
</script>

<template>
    <section class="container m-auto py-6 px-6">
        <RouterLink to="/jobs" class="text-primary hover:text-highlight flex items-center">
            <i class="pi pi-arrow-circle-left mr-3"></i> Back to Job Listings
        </RouterLink>
    </section>
</template>