<template>
    <div>
        <v-navigation-drawer  :width="200"
        v-model="drawer"
        :rail="rail"
        permanent
        @click="rail = false"
        app fixed
        floating
        theme="light"
      >
        <v-list-item>
            <v-btn
            class="d-sm-none"
              icon="mdi-menu"
              size="28px"
              variant="text"
              @click.stop="rail = !rail"
            ></v-btn>
        </v-list-item>

        <v-list density="compact" color="transparent" nav>
          <v-list-item 
          v-for="item in menuItems"
            :key="item.value"
            :value="item.label"
            @click="setActive(item.label)"
            :class="{ active: item.label === activeItem }"
            :ripple="false"
          >
          <template #prepend>
        <v-icon size="28px" class="icon">{{ item.mdiIcon }}</v-icon>
      </template>
          <v-list-item-content>
            <span class="list-item-label">{{ item.label }}</span>
          </v-list-item-content>
         </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </div>
   
</template>

<script>
    export default {
        name: "SideBar",
    data() {
    return {
      menuItems: [
        { label: "Dashboard", value:"dashboard", icon: "dashboard",mdiIcon: "mdi-view-dashboard" },
        { label: "Friends", value:"friends", icon: "friends",mdiIcon: "mdi-account-multiple" },
        { label: "Groups",value:"group", icon: "group", mdiIcon: "mdi-account-group"  },
        { label: "Activity",value:"activity", icon: "activity", mdiIcon: "mdi-chart-bar"  },
        { label: "Settings",value:"settings", icon: "settings",  mdiIcon: "mdi-cog-outline"  },
        { label: "Logout",value:"logout", icon: "logout", mdiIcon: "mdi-logout"  },
      ],
      drawer: true,
        rail: false,
        activeItem: "Dashboard",/*default item*/
    };
    },
    mounted() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    handleResize() {
      // Defining the breakpoint for "sm" and smaller screens, for example, 600px
      const smBreakpoint = 600;
      this.rail = window.innerWidth <= smBreakpoint;
    },
    setActive(item) {
      this.activeItem = item;
    },
    },
    
    }
</script>

<style scoped>
.list-item-label{
color: var(--color-darkslategray);
font-family: var(--font-radley);
font-size: var(--font-size-1xl);
display:flex;
}
::v-deep .v-list-item + .v-list-item{
margin-top: 25px;
}
::v-deep .icon {
    color:var(--color-darkslategray) ;
    opacity: 1 !important; /*using important because otherwise we are getting the icons with a certain pre-defined opacity*/
}
.active .v-icon {
  color: var(--color-deepskyblue);/* Setting the icon color to #03a9f4 when active */
}

.active .list-item-label {
  color: var(--color-deepskyblue) /* Setting the text color to #03a9f4 when active */
}

</style>