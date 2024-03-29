<template>
  <div :class="$style.maskGroup">
    <div :class="$style.dashboard">
      <div :class="$style.mainSection" />
      <User1 />
      <img
        :class="$style.notificationIcon"
        alt=""
        src="/notification.svg"
      /><Button /><SearchBar /><AppName /><MenuBar1 />
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
    left: 241px;
    border-radius: var(--br-8xs);
    background-color: rgba(208, 195, 210, 0.47);
    width: 1183px;
    height: 891px;
  }
  .notificationIcon {
    position: absolute;
    top: 23px;
    left: 1103px;
    width: 50px;
    height: 50px;
  }
  .dashboard {
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: 30px;
    background-color: var(--color-whitesmoke);
    width: 1759px;
    height: 920px;
    overflow: hidden;
  }
  .maskGroup {
    width: 100%;
    position: relative;
    height: 920px;
  }
</style>
