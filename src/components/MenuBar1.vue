<template>
  <div :class="$style.menubar">
    <Property1Variant1
      dimensionsText="/dashboard@2x.svg"
      groupIdentifier="Dashboard"
      propWidth="40px"
      propHeight="50px"
      propLeft="-2px"
      propLeft1="30.26%"
      propColor="#03a9f4"
      propTextAlign="center"
      propHeight1="52%"
      propWidth1="67.18%"
      propTop="24%"
    /><Property1Variant1
      dimensionsText="/friends@2x.svg"
      groupIdentifier="Friends"
      propWidth="45px"
      propHeight="50px"
      propLeft="0px"
      propLeft1="33.33%"
      
      propTextAlign="left"
      propHeight1="unset"
      propWidth1="43.08%"
      propTop="18%"
    /><Property1Variant1
      dimensionsText="/group@2x.svg"
      groupIdentifier="Groups"
    /><Property1Variant
      buttonText="Activity"
      iconId="/activity@2x.svg"
      propHeight="unset"
      propWidth="unset"
      propTop="18%"
      propLeft="33.33%"
      propTextAlign="center"
      propDisplay="inline-block"
      propHeight1="50px"
      propWidth1="50px"
      propTop1="0px"
      propRight="unset"
      propBottom="unset"
      propLeft1="-2px"
      propOverflow="unset"
      propMaxHeight="unset"
    /><Property1Variant
      buttonText="Settings"
      iconId="/settings@2x.svg"
      propHeight="52%"
      propWidth="67.18%"
      propTop="24%"
      propLeft="33.85%"
      propTextAlign="left"
      propDisplay="flex"
      propHeight1="100%"
      propWidth1="20.51%"
      propTop1="0%"
      propRight="79.49%"
      propBottom="0%"
      propLeft1="0%"
      propOverflow="hidden"
      propMaxHeight="100%"
    /><Property1Variant buttonText="Logout" iconId="/logout@2x.svg" 
    propWidth1="52%"
    propLeft1="-10%"
   />
  </div>
</template>
<script>
  import { defineComponent } from "vue";
  import Property1Variant1 from "./Property1Variant1.vue";
  import Property1Variant from "./Property1Variant.vue";

  export default defineComponent({
    name: "MenuBar1",
    components: { Property1Variant1, Property1Variant },
  });
</script>
<style module>
  .menubar {
    position: absolute;
    top: 182px;
    left: 0px;
    border-radius: var(--br-8xs);
    height: 526px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-xl);
    box-sizing: border-box;
    gap: var(--gap-16xl);
    text-align: left;
    font-size: var(--font-size-6xl);
    color: var(--color-darkslategray);
    font-family: var(--font-radley);
  }
</style>
