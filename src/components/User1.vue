<template>
   <v-btn :class="notificationIcon" icon size="47" style="border: 3px solid #673ab7; position: absolute; top: 23px;left: 1400px;">
      <v-icon class="icon">mdi-bell-outline</v-icon>
   </v-btn>
  <div :class="user">
    
    <img :class="userChild" alt="" src="/ellipse-3@2x.png" />
      
    <div :class="johnDoe">John Doe</div>
   
  </div>
</template>
<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "UserComponent1",
    data() {
      return {
        notificationIcon: "notificationIcon",
        user: "user",
        userChild: "userChild",
        johnDoe: "johnDoe"
      };
    }
  });
</script>
<style scoped>
.notificationIcon {
  position: absolute;
  top: 23px;
  left: 1103px;
  width: 50px;
  height: 50px;
}

.notificationIcon:active {
  color: #673ab7;
}


.userChild {
  width: 50px;
  position: relative;
  border-radius: 50%;
  height: 50px;
  object-fit: cover;
}

.johnDoe {
  position: relative;
}

.user {
  position: absolute;
  top: 23px;
  left: 1500px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: var(--gap-9xl);
  text-align: left;
  font-size: var(--font-size-6xl);
  color: var(--color-black);
  font-family: var(--font-radley);
}

.icon {
  color:#673ab7;
}
</style>
