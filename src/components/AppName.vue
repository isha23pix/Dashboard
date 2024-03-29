<template>
  <div :class="$style.appname">
    <img :class="$style.appnameChild" alt="" src="../../public/ellipse-1@2x.png" />
    <div :class="$style.tabtacticx">TabTacticx</div>
  </div>
</template>
<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "AppName",
  });
</script>
<style module>
  .appnameChild {
    width: 60px;
    position: relative;
    border-radius: 50%;
    height: 60px;
    object-fit: cover;
  }
  .tabtacticx {
    position: relative;
  }
  .appname {
    position: absolute;
    top: 31px;
    left: 48px;
    width: 165px;
    height: 35px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: var(--font-size-11xl);
    color: var(--color-black);
    font-family: var(--font-artifika);
  }
</style>
