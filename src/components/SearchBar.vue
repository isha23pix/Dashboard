<template>
  <v-text-field
      class="s"
        prepend-icon="mdi-magnify"
        hide-details
        single-line
      ></v-text-field>
 

</template>
<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "SearchBar",
  });
</script>
<style scoped>

.s{
  width: 680px;
  position: absolute;
  left: 269px; 
  top:22px;
  /* border: 3px solid; */
  /* right: 230px!important; */
}
</style>
