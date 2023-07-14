<template>
  <div>
    <Header />
    <Navbar />
    <div>
      <nuxt></nuxt>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
export default {
  name: "default",
  components: {
    Header, Navbar
  }
}
</script>

<style scoped>

</style>
