<template>
  <div class="container">
    <Header />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>

  import Header from "./components/header";
  import Footer from "./components/footer";

  export default {
    name: 'App',
    components: {
      Footer,
      Header,
    }
  };
</script>

<style>

</style>
