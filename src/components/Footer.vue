<template>
  <footer>
    <p>Copyright &copy; 2021</p>
    <RouterLink to="about">About</RouterLink>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>

<style scoped>
a {
  color: #333;
}

footer {
  margin-top: 30px;
  text-align: center;
}
</style>
