<template>
  <button class="btn" :style="{ background: color }">{{ text }}</button>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  text: String,
  color: String,
})
</script>

<script>
export default {
  name: 'TaskButton',
}
</script>
