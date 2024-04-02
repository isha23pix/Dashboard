<!-- PropertyButton.vue -->
<template>
 <!-- <div class="text-center"> -->
  <v-btn variant="text" :class="[buttonClass, 'uppercase']" type="button" prepend-icon=mdiIcon style="padding: 0; min-width: unset;">
     <v-icon class="icon">{{ mdiIcon }}</v-icon>
    <!-- <img :src="iconSrc" alt="" class="icon" /> -->
    <span class="label">{{ label }}</span>
  </v-btn>
   <!-- </div> -->

</template>

<script>
import { defineComponent } from "vue";


export default defineComponent({
  name: "PropertyButton",
  props: {
    mdiIcon: String,
    iconSrc: String,
    label: String,
  },
  computed: {
    buttonClass() {
      return [
        "property-button",
        `property-${this.label.toLowerCase().replace(" ", "-")}`,
      ];
    },
  },
});
</script>

<style scoped>
.property-button {
  position: relative;
  width: 195px;
  left: 12px;
  /* width: auto; */
  height: 50px!important ;
  border: none;
  border-radius: 10px;
  text-align: left;
  display: flex;
   /* align-items: left; */
  justify-content: left;
  /* align-items: center; */
  padding: 2px;
  font-size: var(--font-size-6xl);
  color: var(--color-darkslategray);
  font-family: var(--font-radley);
   background-color: var(--color-whitesmoke);
   cursor: pointer; 
}





.property-dashboard {
  background-color: var(--color-whitesmoke);
}

.property-activity {
  background-color: var(--color-whitesmoke);
}

.property-logout {
  background-color: var(--color-whitesmoke);
}

.property-button:active {
  color: rgb(3, 169, 244);
 
}
.property-button:active .icon {
  fill: rgb(3, 169, 244); /* Change fill color of SVG */
}
.property-button .label {
  margin-left: 18px; /* Adjust the spacing between icon and text */
}

.property-button .icon {
  margin-left: -28px; /* Adjust the spacing between icon and text */
}
.uppercase {
  text-transform: none; /* Override Vuetify's default behavior */
  font-family: radley-regular ;
  /* align-content: left!important;; */
}
</style>