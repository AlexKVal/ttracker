<script setup>
const store = useStore()
</script>

<template>
  <footer>
    <p>Copyright &copy; 2021</p>
    <RouterLink v-if="store.homePage" to="about">
      About
    </RouterLink>
    <RouterLink v-else to="/">
      Home
    </RouterLink>
  </footer>
</template>

<style scoped>
a {
  color: #333;
}

footer {
  margin-top: 30px;
  text-align: center;
}
</style>
