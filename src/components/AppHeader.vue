<template>
  <header>
    <h1>{{ title }}</h1>
    <ColorButton v-show="homePage" @click="store.toggleAddTask" :text="buttonText" :color="buttonColor" />
  </header>
</template>

<script setup>
import { defineProps, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from '../store'
import ColorButton from './ColorButton'

defineProps({
  title: {
    type: String,
    default: 'Hello World',
  },
})

const route = useRoute()
const homePage = computed(() => route.path == '/')

const store = useStore()
const buttonText = computed(() => store.showTaskForm ? 'Close' : 'Add Task')
const buttonColor = computed(() => store.showTaskForm ? 'red' : 'green')
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
</style>
