<template>
  <v-btn class="btn">
  + Add Expense
</v-btn>

</template>
<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "ButtonComponent",
  });
</script>
<style scoped>

  .btn {
    position: absolute;
    top: 30px;
    left: 950px;
    width: 186px;
    height: 50px;
    text-align: center;
    font-size: 16px;
    color: var(--color-slateblue-100);
    font-family: var(--font-radley);
    border-radius: var(--br-3xs);
    background-color: var(--color-slateblue-200);
    border: 3px solid var(--color-slateblue-100);
    -webkit-text-stroke: 1px #673ab7;
  }
</style>
