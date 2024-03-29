
<template>
  <div :class="$style.property1variant3">
    <img
      :class="$style.userGroupsIcon"
      alt=""
      :src="dimensionsText"
      :style="userGroupsIconStyle"
    />
    <div :class="$style.groups" :style="groupsStyle">{{groupIdentifier}}</div>
  </div>
</template>
<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "Property1Variant1",
    props: {
      dimensionsText: { type: String },
      groupIdentifier: { type: String },
      propWidth: { type: [Object, Array, String, Number, Boolean] },
      propHeight: { type: [Object, Array, String, Number, Boolean] },
      propLeft: { type: [Object, Array, String, Number, Boolean] },
      propLeft1: { type: [Object, Array, String, Number, Boolean] },
      propColor: { type: String },
      propTextAlign: { type: String },
      propHeight1: { type: [Object, Array, String, Number, Boolean] },
      propWidth1: { type: [Object, Array, String, Number, Boolean] },
      propTop: { type: [Object, Array, String, Number, Boolean] },
    },
    computed: {
      userGroupsIconStyle() {
        return {
          width: this.propWidth,
          height: this.propHeight,
          left: this.propLeft,
        };
      },
      groupsStyle() {
        return {
          left: this.propLeft1,
          color: this.propColor,
          textAlign: this.propTextAlign,
          height: this.propHeight1,
          width: this.propWidth1,
          top: this.propTop,
        };
      },
    },
  });
</script>
<style module>
  .userGroupsIcon {
    position: absolute;
    top: 0px;
    left: -4px;
    width: 50px;
    height: 44px;
    object-fit: cover;
  }
  .groups {
    position: absolute;
    height: 52%;
    width: 67.18%;
    top: 24%;
    left: 32.82%;
    display: flex;
    align-items: center;
  }
  .property1variant3 {
    width: 195px;
    position: relative;
    height: 50px;
    text-align: left;
    font-size: var(--font-size-6xl);
    color: var(--color-darkslategray);
    font-family: var(--font-radley);
  }
</style>
