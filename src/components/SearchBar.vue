<template>
  <v-text-field
      class="s"
        prepend-inner-icon="mdi-magnify"
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
  width: 620px;
  position: absolute;
  left: 259px; 
  top:23px;
  height: 47px;
  /* right: 230px!important; */
}
</style>
