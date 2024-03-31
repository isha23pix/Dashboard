<!-- MenuBar.vue -->
<template>
  <div class="menu-bar">
    <PropertyButton
      v-for="item in menuItems"
      :key="item.label"
      :iconSrc="`/${item.icon}@2x.svg`"
      :label="item.label"
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
        { label: "Dashboard", icon: "dashboard" },
        { label: "Friends", icon: "friends" },
        { label: "Groups", icon: "group" },
        { label: "Activity", icon: "activity" },
        { label: "Settings", icon: "settings" },
        { label: "Logout", icon: "logout" },
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
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-xl);
  gap: var(--gap-16xl);
}
</style>
