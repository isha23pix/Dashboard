<template>
  <div :class="$style.user">
    <img :class="$style.userChild" alt="" src="/ellipse-3@2x.png" />
    <div :class="$style.johnDoe">John Doe</div>
  </div>
</template>
<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "UserComponent1",
  });
</script>
<style module>
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
    left: 1210px;
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
</style>
