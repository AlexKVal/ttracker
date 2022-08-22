<script setup>
const text = ref('')
const day = ref('')
const reminder = ref(false)

const store = useStore()

function onSubmit() {
  // validation
  if (!text.value) {
    alert('Please enter a Task')
    return
  }

  // new object
  const newTask = {
    // id: Math.floor(Math.random() * 100000), // not needed anymore, b/c of the backend
    text: text.value,
    day: day.value,
    reminder: reminder.value,
  }

  // store it
  store.addTask(newTask)

  // clear the form
  text.value = ''
  day.value = ''
  reminder.value = false
}
</script>

<template>
  <form class="add-form" @submit.prevent="onSubmit">
    <div class="form-control">
      <label>Task</label>
      <input v-model="text" type="text" name="text" placeholder="Add Task">
    </div>
    <div class="form-control">
      <label>Day & Time</label>
      <input v-model="day" type="text" name="day" placeholder="Add Day & Time">
    </div>
    <div class="form-control form-control-check">
      <label>Set Reminder</label>
      <input v-model="reminder" type="checkbox" name="reminder">
    </div>

    <input type="submit" value="Save Task" class="btn btn-block">
  </form>
</template>

<style scoped>
.add-form {
  margin-bottom: 40px;
}

.form-control {
  margin: 20px 0;
}

.form-control label {
  display: block;
}

.form-control input {
  width: 100%;
  height: 40px;
  margin: 5px;
  padding: 3px 7px;
  font-size: 17px;
}

.form-control-check {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.form-control-check label {
  flex: 1;
}

.form-control-check input {
  flex: 2;
  height: 20px;
}
</style>
