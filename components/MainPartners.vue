<template>
  <section class="main__partners">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="main__partners-title">
            <h2>наши партнеры</h2>
          </div>
          <div class="main__partners-subtitle">
            <img src="/main/partnersMain/marks.svg" alt="" />
            <div class="main__partners-subtitle-text">
              <p>Мы работаем с лучшими партнерами В ассортименте </p>
              <p>нашего завода шесть типов бетонных заводов, начиная </p>
              <p>от супермобильных бетонных заводов EUROMIX CROCUS </p>
              <p>серии 750, бетонных заводов серии 30/800.4 COMPACT (в </p>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
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
                      class="carousel-item-content p-3"
                      v-for="carouselContent in carouselItem.content"
                      :key="carouselContent.id"
                      :class="carouselContent.col"
                    >
                      <img :src="carouselContent.img" alt="">
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
  name: "MainPartners",
  data() {
    return {
      activeIndex: 0,
      carouselData: [
        {
          id: 1,
          content: [
            {
              id: 1,
              img: "/main/partnersMain/imageCarousel1.png",
              col: "col-lg-4"
            },
            {
              id: 2,
              img: "/main/partnersMain/imageCarousel2.png",
              col: "col-lg-4"
            },
            {
              id: 3,
              img: "/main/partnersMain/imageCarousel3.png",
              col: "col-lg-4"
            },
            {
              id: 4,
              img: "/main/partnersMain/image4.png",
              col: "col-lg-4"
            },
            {
              id: 5,
              img: "/main/partnersMain/image5.png",
              col: "col-lg-4"
            },
            {
              id: 6,
              img: "/main/partnersMain/image6.png",
              col: "col-lg-4"
            },
            {
              id: 7,
              img: "/main/partnersMain/image7.png",
              col: "col-lg-8"
            },
            {
              id: 8,
              img: "/main/partnersMain/image8.png",
              col: "col-lg-4"
            },
          ],
        },
        {
          id: 2,
          content: [
            {
              id: 1,
              img: "/main/partnersMain/imageCarousel1.png",
              col: "col-lg-4"
            },
            {
              id: 2,
              img: "/main/partnersMain/imageCarousel2.png",
              col: "col-lg-4"
            },
            {
              id: 3,
              img: "/main/partnersMain/imageCarousel3.png",
              col: "col-lg-4"
            },
            {
              id: 4,
              img: "/main/partnersMain/image4.png",
              col: "col-lg-4"
            },
            {
              id: 5,
              img: "/main/partnersMain/image5.png",
              col: "col-lg-4"
            },
            {
              id: 6,
              img: "/main/partnersMain/image6.png",
              col: "col-lg-4"
            },
            {
              id: 7,
              img: "/main/partnersMain/image7.png",
              col: "col-lg-4"
            },
            {
              id: 8,
              img: "/main/partnersMain/image8.png",
              col: "col-lg-4"
            },
          ],
        },
        {
          id: 3,
          content: [
            {
              id: 1,
              img: "/main/partnersMain/imageCarousel1.png",
              col: "col-lg-4"
            },
            {
              id: 2,
              img: "/main/partnersMain/imageCarousel2.png",
              col: "col-lg-4"
            },
            {
              id: 3,
              img: "/main/partnersMain/imageCarousel3.png",
              col: "col-lg-4"
            },
            {
              id: 4,
              img: "/main/partnersMain/image4.png",
              col: "col-lg-4"
            },
            {
              id: 5,
              img: "/main/partnersMain/image5.png",
              col: "col-lg-4"
            },
            {
              id: 6,
              img: "/main/partnersMain/image6.png",
              col: "col-lg-4"
            },
            {
              id: 7,
              img: "/main/partnersMain/image7.png",
              col: "col-lg-4"
            },
            {
              id: 8,
              img: "/main/partnersMain/image8.png",
              col: "col-lg-4"
            },
          ],
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
.main__partners {
  margin-bottom: 46px;
  &-title {
    margin-bottom: 54px;
    h2 {
      color: #222A31;
      font-size: 24px;
      font-weight: 700;
      text-transform: uppercase;
    }
  }
  &-subtitle {
    display: flex;
    column-gap: 29px;
    align-items: flex-start;
    p {
      color: #8F8F8F;
      font-size: 16px;
      font-style: italic;
      font-weight: 400;
      line-height: 24px;
    }
  }
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
        border-radius: 5px;
        background: #fff;
        box-shadow: 0px 20px 40px 0px #D6E2E4;
        padding: 36px 60px;
      }
    }
  }
}
</style>
