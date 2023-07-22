<template>
  <CardProducts :card-data="getSelectData" />
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  validate({params}) {
    return true
  },
  computed: mapGetters('main/mainCatalog', ['getSelectData']),
};
</script>

<style>
</style>
