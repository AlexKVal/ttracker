<script setup>
const store = useStore()
onMounted(() => store.fetchTasks())
</script>

<template>
  <TaskForm v-show="store.showTaskForm" />
  <TasksList />
</template>
