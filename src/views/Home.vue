<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png"/>
    <ExampleComponent/>
  </div>
</template>

<script>
import ExampleComponent from "@/components/ExampleComponent";

export default {
  name: "Home",
  components: {ExampleComponent},
};
</script>

<style scoped lang="scss">
.home {
  display: flex;
  height: 100%;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
</style>


