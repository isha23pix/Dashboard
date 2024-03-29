<template>
  <div :class="$style.property1variant6">
    <div :class="$style.logout" :style="logoutStyle">{{buttonText}}</div>
    <img
      :class="$style.logoutIcon"
      alt=""
      :src="iconId"
      :style="logoutIconStyle"
    />
  </div>
</template>
<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "Property1Variant",
    props: {
      buttonText: { type: String },
      iconId: { type: String },
      propHeight: { type: [Object, Array, String, Number, Boolean] },
      propWidth: { type: [Object, Array, String, Number, Boolean] },
      propTop: { type: [Object, Array, String, Number, Boolean] },
      propLeft: { type: [Object, Array, String, Number, Boolean] },
      propTextAlign: { type: String },
      propDisplay: { type: String },
      propHeight1: { type: [Object, Array, String, Number, Boolean] },
      propWidth1: { type: [Object, Array, String, Number, Boolean] },
      propTop1: { type: [Object, Array, String, Number, Boolean] },
      propRight: { type: [Object, Array, String, Number, Boolean] },
      propBottom: { type: [Object, Array, String, Number, Boolean] },
      propLeft1: { type: [Object, Array, String, Number, Boolean] },
      propOverflow: { type: String },
      propMaxHeight: { type: [Object, Array, String, Number, Boolean] },
    },
    computed: {
      logoutStyle() {
        return {
          height: this.propHeight,
          width: this.propWidth,
          top: this.propTop,
          left: this.propLeft,
          textAlign: this.propTextAlign,
          display: this.propDisplay,
        };
      },
      logoutIconStyle() {
        return {
          height: this.propHeight1,
          width: this.propWidth1,
          top: this.propTop1,
          right: this.propRight,
          bottom: this.propBottom,
          left: this.propLeft1,
          overflow: this.propOverflow,
          maxHeight: this.propMaxHeight,
        };
      },
    },
  });
</script>
<style module>
  .logout {
    position: absolute;
    height: 52%;
    width: 67.18%;
    top: 24%;
    left: 34.36%;
    display: flex;
    align-items: center;
  }
  .logoutIcon {
    position: absolute;
    height: 100%;
    width: 20.51%;
    top: 0%;
    right: 77.44%;
    bottom: 0%;
    left: 2.05%;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
    object-fit: cover;
  }
  .property1variant6 {
    width: 195px;
    position: relative;
    height: 50px;
    text-align: left;
    font-size: var(--font-size-6xl);
    color: var(--color-darkslategray);
    font-family: var(--font-radley);
  }
</style>
