<script setup>
defineProps({
  title: {
    type: String,
    default: 'Hello World',
  },
})

const route = useRoute()
const homePage = computed(() => route.path == '/')

const store = useStore()
const buttonText = computed(() => store.showTaskForm ? 'Close' : 'Add Task')
const buttonColor = computed(() => store.showTaskForm ? 'red' : 'green')
</script>

<template>
  <header>
    <h1>{{ title }}</h1>
    <ColorButton v-show="homePage" :text="buttonText" :color="buttonColor" @click="store.toggleAddTask" />
  </header>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
</style>
