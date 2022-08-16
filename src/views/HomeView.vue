<template>
  <TaskForm v-show="store.showTaskForm" />
  <TasksList />
</template>

<script setup>
import { onMounted } from 'vue'
import { useStore } from '../store'
import TasksList from '../components/TasksList'
import TaskForm from '../components/TaskForm'

const store = useStore()

onMounted(() => store.fetchTasks())
</script>
