<script setup>
    import { defineProps, defineEmits } from 'vue';

    defineProps({
        modelValue: String,
        label: String,
        id: String,
        name: String,
        type: {
            type: String,
            default: 'text',
        },
        placeholder: String,
        required: {
            type: Boolean,
            default: false,
        }
    })

    const emit = defineEmits(['update:modelValue']);
</script>

<template>
    <div class="mb-4">
        <label :for="id" class="block text-gray-700 font-bold mb-2">{{ label }}</label>
        <input :type="type" :value="modelValue" :id="id" :name="name" :placeholder="placeholder" :required="required" class="border rounde w-full py-2 px-3" @input="$emit('update:modelValue', $event.target.value)">
    </div>
</template>