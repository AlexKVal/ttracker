<template>
  <AddTask v-show="store.showAddTask" />
  <Tasks :tasks="store.tasks" />
</template>

<script setup>
import { onMounted } from 'vue'
import { useStore } from '../store'
import Tasks from '../components/Tasks'
import AddTask from '../components/AddTask'

const store = useStore()

onMounted(() => store.fetchTasks())
</script>

<script>
export default {
  name: 'AppHome',
}
</script>
