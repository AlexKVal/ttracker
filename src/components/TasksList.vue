<script setup>
const store = useStore()
</script>

<template>
  <div v-for="task in store.tasks" :key="task.id">
    <TaskItem :task="task" />
  </div>
</template>
