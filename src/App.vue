

<template>
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <!-- <AppName />
  <Button/>
  <MenuBar1/>
  <SearchBar/> -->
  <!-- <User1/> -->
  <!-- <h1>hi</h1> -->
  <MaskGroup/>

</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import AppName from './components/AppName.vue'
// import Button from './components/Button.vue'
// import MenuBar1 from './components/MenuBar1.vue'
// import SearchBar from './components/SearchBar.vue'
// import User1 from './components/User1.vue'
import MaskGroup from './pages/MaskGroup.vue'
export default {
  name: 'App',
  components: {
    // HelloWorld,
    // AppName,
    // Button,
    // MenuBar1,
    // SearchBar,
    // User1,
    MaskGroup
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
