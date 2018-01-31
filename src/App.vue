<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
html,
body,
#app,
#app > * {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  a {
    text-decoration: none;
    cursor: pointer;
  }
  a:hover {
    text-decoration: underline;
  }
}
</style>
