<template>
  <div>
    <MainHeader/>
    <MainCatalog/>
  </div>
</template>

<script>
import MainHeader from "@/components/MainHeader";
import MainCatalog from "@/components/MainCatalog";
export default {
  name: "index",
  components: {
    MainHeader, MainCatalog
  }
}
</script>

<style scoped>

</style>
