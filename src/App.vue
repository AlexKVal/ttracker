<template>
  <div class="container">
    <Header title="Task Tracker" @add-task-click="toggleAddTask" :showAddTask="showAddTask" />
    <AddTask v-show="showAddTask" @add-task="addTask" />
    <Tasks :tasks="tasks" @toggle-reminder="toggleReminder" @delete-task="deleteTask" />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Tasks,
    AddTask
  },
  data() {
    return {
      tasks: [],
      showAddTask: false,
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
    toggleAddTask() {
      this.showAddTask = !this.showAddTask
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

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Poppins', sans-serif;
}

.container {
  max-width: 410px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}

.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}

.btn:focus {
  outline: none;
}

.btn:active {
  transform: scale(0.98);
}

.btn-block {
  display: block;
  width: 100%;
}

.prevent-select {
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}
</style>
