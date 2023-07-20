<template>
<section class="main__about">
  <div class="container">
    <div class="main__about-title">
      <h2>о компании</h2>
    </div>
    <div class="main__about-subtitle">
      <p>EUROMIX CROCUS - </p>
      <p>РОССИЙСКИЕ БЕТОННЫЕ ЗАВОДЫ</p>
    </div>
    <div class="main__about__content">
      <div class="row">
        <div class="col-lg-6">
          <div class="main__about__content-text">
            <p>«Завод EUROMIX» - производитель бетонных заводов EUROMIX CROCUS - это предприятие,
              которое за годы партнерства плотного сотрудничества с западными коллегами выработало уникальную стратегию,
              максимально приблизившись к оптимуму «цена-качество», имеющее большой опыт в производстве строительного и технологического оборудования. ...
            </p>
          </div>
          <div class="main__about__content__advantages">
            <div class="row">
              <div
                class="col-lg-4"
                v-for="item in aboutData"
                :key="item.id"
              >
                <div class="main__about__content__advantages-item">
                  <img :src="item.img" alt="" />
                  <p>{{item.text}}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="main__about__content-btn">
            <UIButton>подробнее</UIButton>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="main__about__content-video">
            <img src="/main/aboutMain/Screenshot_21.png" alt="">
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
  name: "MainAbout",
  components: {UIButton},
  data() {
    return {
      aboutData: [
        {
          id: 1,
          img: "/main/aboutMain/member.svg",
          text: "Европейский Инженеринг",
        },
        {
          id: 2,
          img: "/main/aboutMain/gear.svg",
          text: "Качественные Комплектующие",
        },
        {
          id: 3,
          img: "/main/aboutMain/wallet.svg",
          text: "Выгодная Цена",
        },
      ]
    }
  },
}
</script>

<style lang="scss">
.main__about {
  &-title {
    margin-bottom: 30px;
    h2 {
      color: #222A31;
      font-size: 24px;
      font-weight: 700;
      text-transform: uppercase;
    }
  }
  &-subtitle {
    font-size: 40px;
    font-weight: 700;
    text-transform: uppercase;
    line-height: 40px;
    margin-bottom: 70px;
    p:nth-child(1) {
      color: #FF6B00;
    }
    p:nth-child(2) {
      color: #222A31;
      width: 575px;
    }
  }
  &__content {
    &-text {
      margin-bottom: 40px;
      p {
        color: #474747;
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
      }
    }
    &__advantages {
      display: flex;
      margin-bottom: 48px;
      &-item {
        display: flex;
        align-items: center;
        column-gap: 15px;
        p {
          font-size: 15px;
          font-weight: 400;
          line-height: 15px; /* 100% */
        }
      }
    }
  }
}
</style>
