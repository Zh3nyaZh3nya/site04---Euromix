<template>
  <header>
    <div class="header container">
      <div class="header__left">
        <div class="header__left__mail">
          <img src="/svgHeader/mail.svg" alt="#" />
          <span>info@euromix.biz</span>
        </div>
        <div class="header__left__phone">
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
      <div class="header__right">
        <div class="header__right__login">
          <img src="/svgHeader/login.svg" alt="" />
          <span>Вход</span>
        </div>
        <img src="/line.svg" alt="">
        <div class="header__right__cart">
          <img src="/svgHeader/cart.svg" style="width: 28px" alt="" />
          <span>Корзина</span>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "header-component"
}
</script>

<style lang="scss">
header {
  display: flex;
  background: #222A31;
  span {
    color: #fff;
    font-weight: 500;
  }
  .header {
    display: flex;
    padding-left: 30px;
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
    }
    &__phone {
      display: flex;
      align-items: center;
      column-gap: 7px;
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
    padding: 0 25px;
    background: #FF8000;
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
