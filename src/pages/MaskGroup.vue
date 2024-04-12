<template>
  <v-app>
    
    <v-app-bar :elevation="0">
      <AppName />
      <SearchBar />
      <Button />
      <User1 />
    </v-app-bar>
      
     <!-- <MenuBar1 /> -->
     <Sidebar />
     <v-main style="background-color: rgba(208, 195, 210, 0.848);"></v-main>

  </v-app>

</template>
<script>
  import { defineComponent } from "vue";
  import User1 from "../components/User1.vue";
  import Button from "../components/Button.vue";
  import SearchBar from "../components/SearchBar.vue";
  import AppName from "../components/AppName.vue";
  import Sidebar from "../components/Sidebar.vue";
  // import MenuBar1 from "../components/MenuBar1.vue";

  export default defineComponent({
    name: "MaskGroup",
    components: { User1, Button, SearchBar, AppName, Sidebar},
  });
</script>
<style module>
  .mainSection {
    position: absolute;
    top: 126px;
    left: 241px;
    border-radius: var(--br-8xs);
    background-color: rgba(208, 195, 210, 0.848);
    /* width: 1530px;
    height: 830px; */
  }
  /* .notificationIcon {
    position: absolute;
    top: 23px;
    left: 1103px;
    width: 50px;
    height: 50px;
  } */
   .notificationIcon:active  {
    color: aqua!important;;
  }
  
  .dashboard {
    position: absolute;
    top: -59px;
    left: 0px;
    border-radius: 30px;
    background-color: var(--color-whitesmoke);
    width: 1777px;
    height: 920px;
    overflow: hidden;
  }
  .maskGroup {
    width: 100%;
    position: relative;
    height: 830px;
  }
  .icon{
    color: #673ab7;
  }
</style>