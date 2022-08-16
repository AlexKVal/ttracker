<template>
  <div v-for="task in tasks" :key="task.id">
    <TaskItem :task="task" />
  </div>
</template>

<script setup>
import TaskItem from './TaskItem'
import { defineProps } from 'vue'

defineProps({
  tasks: Array
})
</script>
