<script setup>
import { useStore } from '../store'

const store = useStore()
</script>

<template>
  <div v-for="task in store.tasks" :key="task.id">
    <TaskItem :task="task" />
  </div>
</template>
