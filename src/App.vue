<template>
  <div class="app">
    <div class="nav">
      <router-link to="/0">Questionarie Choice</router-link> |
      <router-link to="/1">Questionarie Multiple Choice</router-link> |
      <router-link to="/2">Questionarie Star</router-link>
    </div>
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
};
</script>

<style lang="scss">

html, body{
  height: 100%;
  padding:0;
  margin: 0;
  font-family: "Open Sans", "sans-serif";
}

body{
  min-width: 300px;
}

.app{
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  min-height: 100%;

}

.nav{
  padding: 10px;
  background: black;
  text-align: center;
  color: white;
  a{
    color: white;
  }
}

.content{
  flex: 1;
  display: flex;
  background: #1E1E1E;
}

</style>
