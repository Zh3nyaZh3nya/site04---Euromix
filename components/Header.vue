<template>
  <header>
    <div class="header">
      <div class="container">
        <div class="row">
          <div class="col-lg-9">
            <div class="header__left">
              <div class="header__left__mail" @click="copyToClipboard('info@euromix.biz')">
                <img src="/svgHeader/mail.svg" alt="#" />
                <span>info@euromix.biz</span>
              </div>
              <div class="header__left__phone" @click="copyToClipboard('+7 (4872) 704-838')">
                <img src="/svgHeader/phone.svg" alt="" />
                <span>+7 (4872) 704-838</span>
              </div>
              <div class="header__left__call">
                <span>Заказать звонок</span>
              </div>
              <div class="header__left__search">
                <form class="d-flex" role="search">
                  <input class="form-control" type="search" placeholder="Поиск" aria-label="Поиск">
                  <img src="/svgHeader/search.svg" alt="" />
                </form>
              </div>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="header__right">
              <div class="header__right__login">
                <img src="/svgHeader/login.svg" alt="" />
                <span>Вход</span>
              </div>
              <img src="/line.svg" alt="">
              <nuxt-link to="/cart">
                <div class="header__right__cart">
                  <img src="/svgHeader/cart.svg" style="width: 28px" alt="" />
                  <span>Корзина</span>
                </div>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <transition name="alert">
      <Alert v-if="showAlert" :message="alertMessage" :duration="3000" @closeAlert="closeAlert" />
    </transition>
  </header>
</template>

<script>
import Alert from '@/components/Alert.vue'
export default {
  name: "header-component",
  components: {
    Alert
  },
  data() {
    return {
      showAlert: false,
      alertMessage: '',
    }
  },
  methods: {
    copyToClipboard(text) {
      const el = document.createElement('textarea');
      el.value = text;
      el.setAttribute('readonly', '');
      el.style.position = 'absolute';
      el.style.left = '-9999px';
      document.body.appendChild(el);
      const selected =
        document.getSelection().rangeCount > 0
          ? document.getSelection().getRangeAt(0)
          : false;
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      if (selected) {
        document.getSelection().removeAllRanges();
        document.getSelection().addRange(selected);
      }
      this.showAlert = true;
      this.alertMessage = `Скопировано: ${text}`;
    },
    closeAlert() {
      this.showAlert = false;
    },
  }
}
</script>

<style lang="scss">
header {
  background: #222A31;
  span {
    color: #fff;
    font-weight: 500;
  }
  .header {
  }
  .header__left {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    column-gap: 45px;
    padding: 21px 24px 25px 0;
    &__mail {
      display: flex;
      text-align: center;
      column-gap: 13px;
      cursor: pointer;
    }
    &__phone {
      display: flex;
      align-items: center;
      column-gap: 7px;
      cursor: pointer;
    }
    &__call {
      border-bottom: 1px dashed #8F8F8F;
    }
    &__search {
      input {
        padding: 0;
        background: none;
        border: none;
        border-radius: 0;
        border-bottom: 1px solid rgba(255, 255, 255, 0.4);
        margin-right: 7px;
        &:focus {
          background: none;
          border-bottom: 1px solid rgba(255, 255, 255, 0.4);
          color: #fff;
        }
      }
      .form-control:focus {
        box-shadow: none;
      }
    }
  }
  .header__right {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    column-gap: 25px;
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 2;
    &:before {
      content: "";
      z-index: -1;
      position: absolute;
      background: #FF8000;
      width: 100%;
      height: 100%;
      transform: skew(20deg);
      top: 0;
      right: 20px;
    }
    &__login {
      display: flex;
      column-gap: 12px;
      justify-content: center;
      align-items: center;
    }
    &__cart {
      display: flex;
      column-gap: 13px;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
