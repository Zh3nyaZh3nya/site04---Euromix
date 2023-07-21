<template>
  <button class="custom-btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "UIButton"
}
</script>

<style lang="scss">
.custom-btn {
  border-radius: 100px;
  background: #FF6B00;
  padding: 16px 18px;
  color: #FFF;
  font-size: 16px;
  font-weight: 500;
  text-transform: uppercase;
}
.btn-wp {
  border-radius: 100px;
  border: 2px solid #42B000;
  background: #FFF;
  color: #358D00;
  font-size: 16px;
  font-weight: 400;
  display: flex;
  align-items: center;
  column-gap: 11px;
  text-transform: none;
}
.cart-btn {
  display: flex;
  align-items: center;
  column-gap: 35px;
  background: #4A4A4A;
  color: #FFF;
  font-size: 16px;
  font-weight: 500;
  width: 303px;
  img {
    width: 35px;
  }
}
</style>
