<script setup>
defineProps({
  task: Object
})

const store = useStore()
</script>

<template>
  <div class="task prevent-select" :class="{ reminder: task.reminder }" @dblclick="store.toggleReminder(task)">
    <h3>
      {{ task.text }}
      <i class="fas fa-times" @click="store.deleteTask(task.id)" />
    </h3>
    <p>{{ task.day }}</p>
  </div>
</template>

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
