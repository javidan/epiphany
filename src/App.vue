<template>
  <div class="app">
    <div class="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
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

.app{
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  background: blue;
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
  background: green;
}

</style>
