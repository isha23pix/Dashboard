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
  width: 480px;
  position: absolute;
  left: 259px; 
  top:22px;
  /* right: 230px!important; */
}
</style>
