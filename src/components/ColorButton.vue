<script setup>
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
