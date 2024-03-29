<template>
  <div :class="$style.searchBar">
    <div :class="$style.searchBar1" />
    <div :class="$style.search">Search...</div>
    <img
      :class="$style.iconMagnifyingGlass"
      alt=""
      src="/-icon-magnifying-glass.svg"
    />
  </div>
</template>
<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "SearchBar",
  });
</script>
<style module>
  .searchBar1 {
    position: absolute;
    height: 100%;
    width: 88%;
    top: 0%;
    right: 0%;
    bottom: 0%;
    left: 12%;
    border-radius: var(--br-3xs);
    background-color: var(--color-whitesmoke);
    filter: blur(4px);
  }
  .search {
    position: absolute;
    height: 80.4%;
    width: 60%;
    top: 7.8%;
    left: 0%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .iconMagnifyingGlass {
    position: absolute;
    height: 48%;
    width: 3.83%;
    top: 24%;
    right: 80.17%;
    bottom: 28%;
    left: 16%;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
  }
  .searchBar {
    position: absolute;
    top: 23px;
    left: 208px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    width: 600px;
    height: 50px;
    text-align: center;
    font-size: var(--font-size-6xl);
    color: var(--color-black);
    font-family: var(--font-radley);
  }
</style>
