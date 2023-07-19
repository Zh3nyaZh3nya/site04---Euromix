<template>
<section class="advantages">
  <div class="container">
    <div class="advantages-phone">
      <button>
        <span>8-800-350-2008</span>
      </button>
      <button>
        <img src="/main/advantagesMain/phone.svg" alt="" />
      </button>
      <button>
        <img src="/main/advantagesMain/telegram.svg" alt="" />
      </button>
    </div>
    <div class="advantages-title">
      <h2>Надежное партнерство</h2>
      <h3>Производители выбирают нас</h3>
    </div>
    <div class="advantages__content">
      <div class="row">
        <div class="col-lg-5">
          <div class="advantages__content__left">
            <div
              class="advantages__content__left-item"
              v-for="advantages in advantagesData"
              :key="advantages.id"
            >
              <img src="/main/advantagesMain/checkMark.svg" alt="" />
              <p>{{advantages.text}}</p>
            </div>
          </div>
        </div>
        <div class="col-lg-7">
          <div class="advantages__content__right">
            <p>Спросите и я Вам отвечу</p>
            <p>Евгений Самсонов</p>
            <p>Менеджер проектов</p>
            <UIButton>ЗАДАТЬ ВОПРОС</UIButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
import UIButton from "@/components/UI/UIButton";
export default {
  name: "MainAdvantages",
  components: {
    UIButton
  },
  data() {
    return {
      advantagesData: [
        {
          id: 1,
          text: "Качественное оборудование (комплектующие)"
        },
        {
          id: 2,
          text: "Широкий ассортимент",
        },
        {
          id: 3,
          text: "Доступный ценовой  диапазон\n"
        },
        {
          id: 4,
          text: "Прямые поставки",
        },
      ]
    }
  },
}
</script>

<style lang="scss">
.advantages {
  background: url("/main/advantagesMain/bg.png") no-repeat;
  background-size: cover;
  position: relative;
  padding: 35px 0;
  &:before {
    content: "";
    background: url("/main/advantagesMain/triangle.svg") no-repeat;
    display: block;
    position: absolute;
    top: 95px;
    left: 248px;
    width: 52px;
    height: 52px;
  }
  &:after {
    content: "";
    background: url("/main/advantagesMain/triangle.svg") no-repeat;
    display: block;
    position: absolute;
    top: 88px;
    right: 208px;
    width: 52px;
    height: 52px;
    transform: rotate(-33.161deg);
  }
  .container {
    &:before {
      content: "";
      background: url("/main/advantagesMain/man.png") no-repeat;
      position: absolute;
      right: 352px;
      bottom: 0;
      width: 504px;
      height: 414px;
    }
  }
  &-phone {
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 10px;
    margin-right: 240px;
    position: relative;
    margin-bottom: 32px;
    span {
      color: #FFF;
      font-size: 36px;
      font-weight: 700;
      text-transform: uppercase;
      margin-right: 10px;
    }
    &:before {
      content: "";
      background: url("/main/advantagesMain/triangle.svg") no-repeat;
      display: block;
      position: absolute;
      top: 0;
      left: 150px;
      width: 52px;
      height: 52px;
      transform: rotate(143deg);
    }
  }
  &-title {
    position: relative;
    text-align: center;
    margin-right: 255px;
    margin-bottom: 58px;
    h2 {
      color: #FF6B00;
      font-size: 60px;
      font-weight: 700;
      line-height: 60px; /* 100% */
      text-transform: uppercase;
    }
    h3 {
      color: #FFF;
      font-size: 40px;
      font-weight: 500;
      line-height: 40px; /* 100% */
      position: relative;
      &:before {
        content: "";
        background: url("/main/advantagesMain/triangle.svg") no-repeat;
        display: block;
        position: absolute;
        top: 5px;
        left: 62px;
        width: 52px;
        height: 52px;
        transform: rotate(-33.161deg);
      }
    }
    &:before {
      content: "";
      position: absolute;
      bottom: -22px;
      left: 16px;
      background: url("/main/advantagesMain/bracket.svg") no-repeat;
      display: block;
      width: 46px;
      height: 166px;
    }
    &:after {
      content: "";
      position: absolute;
      bottom: -22px;
      right: 32px;
      background: url("/main/advantagesMain/bracket.svg") no-repeat;
      display: block;
      width: 46px;
      height: 166px;
      transform: scaleX(-1);
    }
  }
  &__content {
    &__left {
      display: flex;
      flex-direction: column;
      row-gap: 21px;
      &-item {
        display: flex;
        align-items: center;
        column-gap: 18px;
        p {
          color: #FFF;
          font-size: 18px;
          font-weight: 500;
          line-height: 20px;
        }
      }
    }
    &__right {
      position: relative;
      p:nth-child(1) {
        color: #FF6B00;
        font-size: 24px;
        font-weight: 700;
        margin-bottom: 12px;
      }
      p:nth-child(2) {
        color: #FFF;
        font-size: 24px;
        font-weight: 500;
      }
      p:nth-child(3) {
        color: #FFF;
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 14px;
      }
      button {
        padding: 19px 42px;
        color: #FFF;
        font-size: 16px;
        font-weight: 700;
      }
    }
  }
}
</style>
