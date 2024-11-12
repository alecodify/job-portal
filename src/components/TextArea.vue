<script setup>
    import { defineProps, defineEmits } from 'vue';

    defineProps({
        modelValue: String,
        label: String,
        id: String,
        name: String,
        placeholder: String,
        rows: {
            type: Number,
            default: 4,
        },
    });

    const emit = defineEmits(['update:modelValue']);
</script>

<template>
    <div class="mb-4">
        <label :for="id" class="block text-gray-700 font-bold mb-2">{{ label }}</label>
        <textarea
          :id="id"
          :value="modelValue"
          :name="name"
          :placeholder="placeholder"
          class="border rounded w-full py-2 px-3"
          :rows="rows"
          @input="$emit('update:modelValue', $event.target.value)"
        ></textarea>
      </div>
</template>