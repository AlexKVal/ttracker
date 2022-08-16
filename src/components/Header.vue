<template>
  <header>
    <h1>{{ title }}</h1>
    <Button v-show="homePage" @click="store.toggleAddTask" :text="buttonText" :color="buttonColor" />
  </header>
</template>

<script setup>
import { defineProps, computed } from 'vue'
import { useStore } from '../store'
import Button from './Button'

defineProps({
  title: {
    type: String,
    default: 'Hello World',
  },
})

const store = useStore()
const buttonText = computed(() => store.showAddTask ? 'Close' : 'Add Task')
const buttonColor = computed(() => store.showAddTask ? 'red' : 'green')
</script>

<script>
export default {
  name: 'AppHeader',
  computed: {
    homePage() {
      return this.$route.path == '/'
    }
  },
}
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
</style>
