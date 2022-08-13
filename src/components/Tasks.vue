<template>
  <div v-for="task in tasks" :key="task.id">
    <Task :task="task" @delete-task="$emit('delete-task', task.id)" />
  </div>
</template>

<script>
import Task from './Task'

export default {
  name: 'AppTasks',
  props: {
    tasks: Array
  },
  components: {
    Task
  },
  emits: ['delete-task'],
}
</script>
