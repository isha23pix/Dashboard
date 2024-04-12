<template>
  <v-text-field
      class="s"
        prepend-icon="mdi-magnify"
        hide-details
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
  width: 40%;
  height: 60%;
  position: absolute;
  left: 200px; 
  align-items: center;
  align-content: center;
    z-index: 1; 
   /* color: var(--color-whitesmoke); */
  box-shadow: 0px 2px 4px rgba(12, 9, 9, 0.16);
  /* border-radius: 12px; */
  /* border: 3px solid; */
  /* right: 230px!important; */
  /* color: var(--wh); */
}
</style>
