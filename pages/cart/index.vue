<template>
  <div>
    <Cart :cart-data="getCartData" :payer-data="getPayerData"/>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
export default {
  name: "index",
  computed: {
    ...mapGetters('cart/cart', ['getCartData']),
    ...mapGetters('cart/payer', ['getPayerData'])
  }
}
</script>

<style scoped>

</style>
