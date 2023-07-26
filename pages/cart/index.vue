<template>
  <div>
    <Cart
      :cart-data="getCartData"
      :payer-data="getPayerData"
      :address-data="getAddressData"
      :delivery-data="getDeliveryData"
    />
  </div>
</template>

<script>
import {mapGetters} from "vuex";
export default {
  name: "index",
  computed: {
    ...mapGetters('cart/cart', ['getCartData']),
    ...mapGetters('cart/payer', ['getPayerData']),
    ...mapGetters('cart/address', ['getAddressData']),
    ...mapGetters('cart/address', ['getDeliveryData'])
  }
}
</script>

<style scoped>

</style>
