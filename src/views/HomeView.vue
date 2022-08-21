<template>
  <TaskForm v-show="store.showTaskForm" />
  <TasksList />
</template>

<script setup>
import { onMounted } from 'vue'
import { useStore } from '../store'

const store = useStore()

onMounted(() => store.fetchTasks())
</script>
