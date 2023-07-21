<template>
  <div class="alert">
    <transition name="slide-fade" mode="out-in">
      <div v-if="show" key="alert">
        <div class="alert-content">
          <p>{{ message }}</p>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      default: 3000,
    },
  },
  data() {
    return {
      show: true,
    };
  },
  mounted() {
    this.hideAlertAfterDuration();
  },
  methods: {
    hideAlertAfterDuration() {
      setTimeout(() => {
        this.show = false;
        this.$emit('closeAlert')
      }, this.duration);
    },
  },
};
</script>

<style lang="scss">
.alert {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 10;
  background: black;
  transform: skew(20deg);
  padding: 10px;
  p {
    color: #fff;
    font-size: 20px;
    font-weight: 400;
    transform: skew(-20deg);
  }
  .alert-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
