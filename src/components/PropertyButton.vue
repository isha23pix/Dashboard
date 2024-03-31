<!-- PropertyButton.vue -->
<template>
  <button :class="buttonClass" type="button">
    <img :src="iconSrc" alt="" class="icon" />
    <span class="label">{{ label }}</span>
  </button>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "PropertyButton",
  props: {
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
  width: 200px;
  height: 50px;
  border: none;
  border-radius: 10px;
  text-align: left;
  display: flex;
  align-items: center;
  padding: 0 10px;
  font-size: var(--font-size-6xl);
  color: var(--color-darkslategray);
  font-family: var(--font-radley);
}

.property-button .icon {
  width: 20%;
  margin-right: 10px;
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
</style>
