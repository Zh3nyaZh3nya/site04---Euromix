<template>
<section class="main__reviews">
  <div class="container">
    <div class="main__reviews-title">
      <h2>отзывы наших клиентов</h2>
    </div>
    <div class="main__reviews__content">
      <div class="row">
        <div class="col-lg-5">
          <div class="main__reviews__content-subtitle">
            <img src="/main/reviewsMain/marks.svg" alt="" />
            <p>
              Благодарные отзывы наших клиентов
              - лучшее подтверждение высокого
              качества наших работ
            </p>
          </div>
        </div>
        <div class="col-lg-7">
          <div class="main__reviews__content__slider">
            <div id="carouselExampleIndicators" class="carousel slide">
              <div class="carousel-indicators">
                <button
                  type="button"
                  v-for="(carouselItem, index) in carouselData"
                  :key="carouselItem.id"
                  :class="{ 'active': index === activeIndex }"
                  @click="setActiveIndex(index)"
                ></button>
              </div>
              <div class="carousel-inner">
                <div
                  class="carousel-item"
                  v-for="(carouselItem, index) in carouselData"
                  :key="carouselItem.id"
                  :class="{ 'active': index === activeIndex }"
                >
                  <div class="row">
                    <div
                      class="carousel-item-content"
                      v-for="carouselContent in carouselItem.content"
                      :key="carouselContent.id"
                      :class="carouselContent.col"
                    >
                      <img :src="carouselContent.img" alt="">
                      <p>{{carouselContent.text}}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
  name: "MainReviews",
  data() {
    return {
      activeIndex: 0,
      carouselData: [
        {
          id: 1,
          content: [
            {
              id: 1,
              img: "/main/reviewsMain/sert.png",
              col: "col-lg-4",
            },
            {
              id: 2,
              img: "/main/reviewsMain/sert.png",
              col: "col-lg-4",
            },
            {
              id: 3,
              img: "/main/reviewsMain/sert.png",
              col: "col-lg-4",
            },
          ]
        },
        {
          id: 2,
          content: [
            {
              id: 1,
              img: "/main/reviewsMain/sert.png",
              col: "col-lg-4",
            },
            {
              id: 1,
              text: "здесь могла быть ваша реклама",
              col: "col-lg-4"
            },
            {
              id: 3,
              img: "/main/reviewsMain/sert.png",
              col: "col-lg-4",
            },
          ]
        },
      ]
    }
  },
  methods: {
    setActiveIndex(index) {
      this.activeIndex = index;
    }
  }
}
</script>

<style lang="scss">
.main__reviews {
  background: url("/main/reviewsMain/bg.png") no-repeat;
  background-size: cover;
  padding: 47px 0 32px 0;
  margin-bottom: 40px;
  &-title {
    margin-bottom: 84px;
    h2 {
      color: #222A31;
      font-size: 24px;
      font-weight: 700;
      text-transform: uppercase;
    }
  }
  &__content {
    &-subtitle {
      display: flex;
      column-gap: 28px;
      p {
        width: 300px;
        color: #4A4A4A;
        font-style: italic;
        font-weight: 400;
        line-height: 20px;
      }
    }
    &__slider {
      .carousel {
        &-indicators {
          column-gap: 15px;
          align-items: center;
          button {
            position: relative;
            background: #FF6B00;
            border-radius: 50px;
            width: 10px;
            height: 10px;
          }
          button.active::after {
            content: "";
            position: absolute;
            top: -4px;
            left: -4px;
            width: 18px;
            height: 18px;
            border: 2px solid #FF6B00;
            border-radius: 50px;
          }
        }
        &-inner {
          .carousel-item.active {
            padding-bottom: 36px;
          }
        }
      }
    }
  }
}
</style>
