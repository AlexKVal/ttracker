<template>
  <div v-for="task in store.tasks" :key="task.id">
    <TaskItem :task="task" />
  </div>
</template>

<script setup>
import TaskItem from './TaskItem'
import { useStore } from '../store'

const store = useStore()
</script>
