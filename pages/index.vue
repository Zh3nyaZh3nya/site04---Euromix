<template>
  <div>
    <MainHeader/>
    <MainCatalog/>
    <MainBlockGrid/>
  </div>
</template>

<script>
import MainHeader from "@/components/MainHeader";
import MainCatalog from "@/components/MainCatalog";
import MainBlockGrid from "@/components/MainBlockGrid";
export default {
  name: "index",
  components: {
    MainHeader, MainCatalog, MainBlockGrid
  }
}
</script>

<style scoped>

</style>
