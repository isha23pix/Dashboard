<template>
  <!-- <div :class="$style.button">
    <div :class="$style.btn" />
    <div :class="$style.addExpense">+ Add Expense</div>
  </div> -->
  <v-btn variant="outlined" class="expense">
    <span class="label"> <b>+ Add Expense</b></span>
  </v-btn>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ButtonComponent",
  data() {
    return {
      buttonClass: 'button'
    };
  }
});
</script>

<style scoped>
.uppercase {
  text-transform: none;
  border: 2px;
}
.expense{
  align-items: center;
  left: 700px;
   height: 60%!important;
   color: blueviolet;
   text-transform: none;
   font-size: 15px;
   font-family: radley-regular;
   border:3px solid;
   border-radius: 13px;
}

</style>
