<template>
  <div>
    <Cart
      :cart-data="getCartData"
      :payer-data="getPayerData"
      :address-data="getAddressData"
      :delivery-data="getDeliveryData"
      :current-step="currentStep"
      @actualStep="actualStep"
    />
  </div>
</template>

<script>
import {mapGetters} from "vuex";
export default {
  name: "index",
  data() {
    return {
      currentStep: "first"
    }
  },
  methods: {
    actualStep(step) {
      if(this.currentStep === 'first') {
        if(this.getCartData.length) {
          this.currentStep = step
        }
      }
      if(this.currentStep === 'second') {
        if(this.getPayerData.length) {
          this.currentStep = step
        }
      }
      if(this.currentStep === 'third') {
        if(this.getAddressData.length) {
          this.currentStep = step
        }
      }
      if(this.currentStep === 'fourth' || this.currentStep === 'fifth') {
        this.currentStep = step
      }
    }
  },
  computed: {
    ...mapGetters('cart/cart', ['getCartData']),
    ...mapGetters('cart/payer', ['getPayerData']),
    ...mapGetters('cart/address', ['getAddressData']),
    ...mapGetters('cart/address', ['getDeliveryData'])
  },
}
</script>

<style scoped>

</style>
