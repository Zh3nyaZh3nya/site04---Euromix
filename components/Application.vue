<template>
  <div class="application__form">
    <div class="application__form-title">
      <h2>Оставьте заявку</h2>
    </div>
    <div class="application__form-subtitle">
      <p>Мы отправим Вам цены,</p>
      <p>условия и сроки поставки</p>
    </div>
    <form action="#">
      <input type="text" placeholder="Ваше имя"/>
      <input type="number" placeholder="Телефон"/>
      <button class="main__form-btn">
        Отправить
      </button>
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
        <label class="form-check-label" for="flexCheckChecked">
          Согласен с пользовательским
          соглашением
        </label>
      </div>
    </form>
    <div class="application__form__footer">
      <div class="application__form__footer__left">
        <img src="/main/headerMainForm/watch.svg" alt="" />
        <p>Ответим в</p>
        <p>течение часа</p>
      </div>
      <div class="application__form__footer__right">
        <img src="/main/headerMainForm/handshake.svg" alt="" />
        <p>Индивидуальные</p>
        <p>условия доставки</p>
        <p>и оплаты</p>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "Application"
}
</script>

<style lang="scss">
.application__form {
  background: #FF6B00;
  max-width: 308px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 31px 34px;
  &-title {
    h2 {
      font-size: 24px;
      font-weight: 700;
      text-transform: uppercase;
      color: #fff;
    }
  }
  &-subtitle {
    margin-bottom: 39px;
    p {
      font-size: 15px;
      font-weight: 500;
      color: #fff;
    }
  }
  form {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 12px;
    input[type='text'], input[type='number'] {
      margin-bottom: 8px;
      padding: 11px 18px;
      border-radius: 3px;
    }
    button {
      margin-bottom: 8px;
      width: 115px;
      padding: 15px;
      font-size: 14px;
      font-weight: 700;
      text-transform: uppercase;
      border-radius: 100px;
      background: #222A31;
      color: #fff;
    }
    .form-check {
      padding-left: 0;
      label {
        font-size: 15px;
        font-weight: 400;
        line-height: 13px;
        color: #222A31;
      }
    }
    .form-check-input {
      position: absolute;
      z-index: -1;
      opacity: 0;
    }
    .form-check-input+label {
      display: inline-flex;
      align-items: center;
      user-select: none;
    }
    .form-check-input+label::before {
      content: '';
      display: inline-block;
      width: 1em;
      height: 1em;
      flex-shrink: 0;
      flex-grow: 0;
      border: 2px solid #000;
      border-radius: 0.25em;
      margin-right: 0.5em;
      background-repeat: no-repeat;
      background-position: center center;
      background-size: 50% 50%;
    }
    .form-check-input:checked+label::before {
      background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23000' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
      background-size: 10px;
    }
  }
  &__footer {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    column-gap: 35px;
    img {
      margin-bottom: 3px;
    }
    p {
      font-size: 14px;
      font-weight: 400;
      line-height: 14px;
      color: #222A31;
    }
    &__left {
      margin-top: 6px;
    }
    &__left, &__right {
      display: flex;
      align-items: center;
      flex-direction: column;
    }
  }
}

</style>
