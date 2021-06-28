<template>
  <div class="example">
    <h2>VUE Project</h2>
    <h3>vuex, router, scss</h3>
    <ul>
      <li>eslint + prettier</li>
      <li>sass-loader (global style variables)</li>
      <li>axios</li>
      <li>normalize.css</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ExampleComponent",
};
</script>


<style scoped lang="scss">
.example {
  color: $my-color;
  text-align: center;

  & ul {
    text-align: left;
    color: $my-color2;
  }
}

</style>
