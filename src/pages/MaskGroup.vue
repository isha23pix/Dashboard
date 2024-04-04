<template>
  <div :class="$style.maskGroup">
    <div :class="$style.dashboard">
      <div :class="$style.mainSection" />
      <User1 />
      <v-btn class="notificationIcon" icon size="47" style="border: 3px solid #673ab7; position: absolute; top: 23px;left: 1200px;">
      <v-icon style="color: #673ab7">mdi-bell-outline</v-icon></v-btn>
      <Button /><SearchBar /><AppName /><MenuBar1 />
    </div>
  </div>
  
</template>
<script>
  import { defineComponent } from "vue";
  import User1 from "../components/User1.vue";
  import Button from "../components/Button.vue";
  import SearchBar from "../components/SearchBar.vue";
  import AppName from "../components/AppName.vue";
  import MenuBar1 from "../components/MenuBar1.vue";

  export default defineComponent({
    name: "MaskGroup",
    components: { User1, Button, SearchBar, AppName, MenuBar1 },
  });
</script>
<style module>
  .mainSection {
    position: absolute;
    top: 126px;
    left: 259px;
    border-radius: var(--br-8xs);
    background-color: rgba(208, 195, 210, 0.47);
    width: 1530px;
    height: 830px;
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
</style>
