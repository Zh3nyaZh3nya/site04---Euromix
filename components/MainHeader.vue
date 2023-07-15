<template>
  <section class="main">
    <div class="main-bg">
      <div class="main__top">
        <div class="main__top__content container">
          <div class="main__top__content-title">
            <h1>Мобильный бетонный завод</h1>
            <h1>EUROMIX CROCUS</h1>
          </div>
        </div>
      </div>
    </div>
    <div class="main__bottom container-fluid">
      <div class="main__bottom__content container">
        <div class="main__bottom__content-title">
          <p>30</p>
          <div>
            <span>лет</span>
            <div>
              <p>успешной</p>
              <p>работы</p>
            </div>
          </div>
        </div>
        <div class="main__bottom__content-subtitle">
          <p>«Завод EUROMIX» - производитель бетонных заводов EUROMIX CROCUS - это</p>
          <p>предприятие, которое за годы партнерства плотного сотрудничества с западными</p>
          <p>коллегами выработало уникальную стратегию, максимально приблизившись к</p>
          <p>оптимуму «цена-качество», имеющее большой опыт в производстве</p>
          <p>строительного и технологического оборудования</p>
        </div>
        <div class="main__form">
          <div class="main__form-title">
            <h2>Оставьте заявку</h2>
          </div>
          <div class="main__form-subtitle">
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
          <div class="main__form__footer">
            <div class="main__form__footer__left">
              <img src="/main/headerMainForm/watch.svg" alt="" />
              <p>Ответим в</p>
              <p>течение часа</p>
            </div>
            <div class="main__form__footer__right">
              <img src="/main/headerMainForm/handshake.svg" alt="" />
              <p>Индивидуальные</p>
              <p>условия доставки</p>
              <p>и оплаты</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "MainHeader"
}
</script>

<style lang="scss">
.main {
  &-bg {
    background: url("/main/headerMain/header.png") no-repeat;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: 1;
    }
  }
  &__top {
    position: relative;
    z-index: 2;
    padding: 162px 0 162px 0;
    &__content {
      &-title {
        h1 {
          font-size: 36px;
          font-weight: 400;
        }
        h1:first-child {
          color: #fff;
        }
        h1:last-child {
          color: #FF6B00;
          font-weight: 700;
        }
      }
    }
  }
  &__bottom {
    padding: 6px 0 15px 0;
    background: #222A31;
    &__content {
      position: relative;
      display: flex;
      column-gap: 60px;
      &-title {
        p {
          font-size: 130px;
          line-height: 106px;
          font-weight: 700;
        }
        div {
          display: flex;
          column-gap: 11px;
          span {
            font-size: 41px;
            font-weight: 700;
          }
          div {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            p {
              font-size: 14px;
              font-weight: 500;
              line-height: 14px
            }
          }
        }
        p, span {
          color: #EC5600;
          margin: 0;
        }
      }
      &-subtitle {
        margin: 38px 0;
        p {
          margin: 0;
          font-size: 15px;
          font-weight: 400;
          color: #fff;
          opacity: 0.5;
        }
      }
    }
  }
  &__form {
    position: absolute;
    z-index: 2;
    right: 0;
    bottom: 46px;
    border-radius: 3px;
    opacity: 0.800000011920929;
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
}
</style>
