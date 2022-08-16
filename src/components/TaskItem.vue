<template>
  <div @dblclick="store.toggleReminder(task)" class="task prevent-select"
    :class="{ reminder: task.reminder }">
    <h3>
      {{ task.text }}
      <i @click="store.deleteTask(task.id)" class="fas fa-times"></i>
    </h3>
    <p>{{ task.day }}</p>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import { useStore } from '../store'

defineProps({
  task: Object
})

const store = useStore()
</script>

<style scoped>
.fas {
  color: red;
}

.task {
  background: #f4f4f4;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
}

.task.reminder {
  border-left: 5px solid green;
}

.task h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
