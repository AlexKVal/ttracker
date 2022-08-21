import { defineStore } from 'pinia'
import { useRoute } from 'vue-router'

const apiUrl = '/api/tasks'

export const useStore = defineStore('tasks', {
  store: () => ({
    tasks: [],
    showTaskForm: true,
  }),
  getters: {
    homePage() {
      const route = useRoute()
      return route.path == '/'
    },
  },
  actions: {
    async deleteTask(id) {
      const res = await fetch(`${apiUrl}/${id}`, { method: 'DELETE' })
      res.ok ? await this.fetchTasks() : alert("API error")
    },
    async toggleReminder(task) {
      const res = await fetch(`${apiUrl}/${task.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ reminder: !task.reminder })
      })
      res.ok ? await this.fetchTasks() : alert("API error")
    },
    async addTask(newTask) {
      const res = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTask)
      })
      res.ok ? await this.fetchTasks() : alert("API error")
    },
    async fetchTasks() {
      this.tasks = await this.fetchJson(apiUrl)
    },
    async fetchJson(url) {
      return await fetch(url).then(r => r.json())
    },
    //
    toggleAddTask() {
      this.showTaskForm = !this.showTaskForm
    },
  }
})
