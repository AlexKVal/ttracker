<template>
  <AddTask v-show="showAddTask" @add-task="addTask" />
  <Tasks :tasks="tasks" @toggle-reminder="toggleReminder" @delete-task="deleteTask" />
</template>

<script>
import Tasks from '../components/Tasks'
import AddTask from '../components/AddTask'

export default {
  name: 'AppHome',
  components: {
    Tasks,
    AddTask
  },
  props: {
    showAddTask: Boolean,
  },
  data() {
    return {
      tasks: [],
      apiUrl: '/api/tasks',
    }
  },
  methods: {
    async deleteTask(id) {
      const res = await fetch(`${this.apiUrl}/${id}`, { method: 'DELETE' })
      res.ok ? await this.fetchTasks() : alert("API error")
    },
    async toggleReminder(task) {
      const res = await fetch(`${this.apiUrl}/${task.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ reminder: !task.reminder })
      })
      res.ok ? await this.fetchTasks() : alert("API error")
    },
    async addTask(newTask) {
      const res = await fetch(this.apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTask)
      })
      res.ok ? await this.fetchTasks() : alert("API error")
    },
    async fetchTasks() {
      this.tasks = await this.fetchJson(this.apiUrl)
    },
    async fetchJson(url) {
      return await fetch(url).then(r => r.json())
    },
  },
  async created() {
    this.fetchTasks()
  },
}
</script>
