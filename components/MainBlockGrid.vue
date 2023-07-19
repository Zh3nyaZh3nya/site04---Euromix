<template>
  <section class="main__grid">
    <div class="container">
      <div class="row">
        <div class="main__grid__content">
          <div
            class="main__grid__item col-lg-2"
            v-for="item in gridData"
            :key="item.id"
          >
            <div class="main__grid__item-img">
              <img :src="item.img" alt="">
            </div>
            <div class="main__grid__item-title">
              <h2>{{item.title}}</h2>
            </div>
          </div>

        </div>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "MainBlockGrid",
  data() {
    return {
      gridData: [
        {
          id: 1,
          img: "/main/blockGridMain/certificate.svg",
          title: "Сертификаты качества",
        },
        {
          id: 1,
          img: "/main/blockGridMain/car.svg",
          title: "Продукция в наличии на складе",
        },
        {
          id: 1,
          img: "/main/blockGridMain/table.svg",
          title: "Развернутая комплектация с ценами",
        },
        {
          id: 1,
          img: "/main/blockGridMain/member.svg",
          title: "Мобильная бригада пуско-наладки оборудования",
        },
        {
          id: 1,
          img: "/main/blockGridMain/car.svg",
          title: "Свой автопарк везем застрахованные грузы",
        },
      ]
    }
  },
}
</script>

<style lang="scss">
.main__grid {
  background: url("/main/blockGridMain/фон.png") no-repeat;
  background-size: cover;
  display: flex;
  padding: 65px 0;
  margin-bottom: 75px;
  &__content {
    display: flex;
    column-gap: 28px;
    flex-wrap: wrap;
  }
  &__item {
    border: 2px solid #FF6B00;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 35px 0;
    min-width: 220px;
    &-img {
      padding: 0 60px;
      margin-bottom: 45px;
    }
    &-title {
      padding: 0 11px;
      text-align: center;
      h2 {
        color: #FFF;
        font-size: 15px;
        font-weight: 500;
        line-height: 20px;
      }
    }
  }
}
</style>
