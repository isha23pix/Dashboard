<!-- MenuBar.vue -->
<template>
  <div class="menu-bar">
    <PropertyButton
      v-for="item in menuItems"
      :key="item.label"
      :iconSrc="`/${item.icon}@2x.svg`"
      :label="item.label"  
      :mdiIcon="item.mdiIcon" 
    />
  </div>
  
</template>

<script>
import { defineComponent } from "vue";
import PropertyButton from "./PropertyButton.vue";


export default defineComponent({
  name: "MenuBar",
  components: { PropertyButton },
  data() {
    return {
      menuItems: [
        { label: "Dashboard", icon: "dashboard",mdiIcon: "mdi-view-dashboard" },
        { label: "Friends", icon: "friends",mdiIcon: "mdi-account-multiple" },
        { label: "Groups", icon: "group", mdiIcon: "mdi-account-group"  },
        { label: "Activity", icon: "activity", mdiIcon: "mdi-chart-bar"  },
        { label: "Settings", icon: "settings",  mdiIcon: "mdi-cog-outline"  },
        { label: "Logout", icon: "logout", mdiIcon: "mdi-logout"  },
      ],
    };
  },
});
</script>

<style scoped>
.menu-bar {
  position: absolute;
  top: 182px;
  left: 0px;
  width: 235px;
  height:526px;
  padding: 12px!important;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-xl);
  text-align: left;
  /* gap: var(--gap-16xl); */
  gap: 45px;
}
.menu-bar .property-button:active .icon {
  fill: rgb(3, 169, 244); /* Change fill color of SVG */
}
</style>
