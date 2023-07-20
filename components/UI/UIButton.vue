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
</style>
