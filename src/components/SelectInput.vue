<script setup>
    import { defineProps, defineEmits } from 'vue';

    defineProps({
        modelValue: String,
        label: String,
        id: String,
        name: String,
        options: Array,
    });

    const emit = defineEmits(['update:modelValue']);
</script>

<template>
    <div class="mb-4">
        <label :for="id" class="block text-gray-700 font-bold mb-2">{{ label }}</label>
        <select
          :value="modelValue"
          :id="id"
          :name="name"
          class="border rounded w-full py-2 px-3"
          @change="$emit('update:modelValue', $event.target.value)"
        >
          <option v-for="option in options" :key="option" :value="option">{{ option }}</option>
        </select>
    </div>
</template>