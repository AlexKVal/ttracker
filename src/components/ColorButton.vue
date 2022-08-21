<script setup>
import { defineProps } from 'vue'

defineProps({
  text: String,
  color: String,
})
</script>

<template>
  <button class="btn" :style="{ background: color }">
    {{ text }}
  </button>
</template>
