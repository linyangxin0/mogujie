<template>
  <nav-bar class="nav-bar">
    <div slot="center">
      骚猪春商城
    </div>
  </nav-bar>
</template>

<script>


  import NavBar from "components/common/navbar/NavBar";
  export default {
    name: "ProfileNavBar",
    components: {NavBar}
  }
</script>

<style scoped>

  .nav-bar{
    background-color: var(--color-tint);
    color: #fff;
    font-weight: 700;
  }
</style>
