<template>
  <div :class="$style.button">
    <div :class="$style.btn" />
    <div :class="$style.addExpense">+ Add Expense</div>
  </div>
</template>
<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "ButtonComponent",
  });
</script>
<style module>
  .btn {
    position: absolute;
    height: 112.77%;
    width: 103.23%;
    top: -6.38%;
    right: -1.61%;
    bottom: -6.38%;
    left: -1.61%;
    border-radius: var(--br-3xs);
    background-color: var(--color-slateblue-200);
    border: 3px solid var(--color-slateblue-100);
    box-sizing: border-box;
  }
  .addExpense {
    position: absolute;
    height: 38.3%;
    width: 77.96%;
    top: 29.79%;
    left: 10.75%;
    display: flex;
    align-items: center;
    justify-content: center;
    -webkit-text-stroke: 1px #673ab7;
  }
  .button {
    position: absolute;
    top: 27px;
    left: 862px;
    width: 186px;
    height: 47px;
    text-align: center;
    font-size: var(--font-size-3xl);
    color: var(--color-slateblue-100);
    font-family: var(--font-radley);
  }
</style>
