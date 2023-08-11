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
                <transition name="slide-fade" mode="out-in">
                  <div
                    class="carousel-item"
                    v-for="(carouselItem, index) in carouselData"
                    :key="carouselItem.id"
                    style="display: block"
                    v-if="index === activeIndex"
                  >
                    <div class="row">
                      <div
                        class="carousel-item-content"
                        v-for="carouselContent in carouselItem.content"
                        :key="carouselContent.id"
                        :class="carouselContent.col"
                        @click="increaseImg(carouselContent.imgIncrease), increaseActive = true"
                      >
                        <img :src="carouselContent.img" alt="">
                        <p>{{carouselContent.text}}</p>
                      </div>
                      <div class="carousel-item-increase" v-show="increaseActive">
                        <button class="close" @click="increaseActive = false">
                          <img src="/cartImg/close1.svg" alt="">
                        </button>
                        <div class="carousel-item-increase-img">
                          <img :src="activeImg" alt="">
                        </div>
                      </div>
                    </div>
                  </div>
                </transition>
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
      increaseActive: false,
      activeImg: "",
      carouselData: [
        {
          id: 1,
          content: [
            {
              id: 1,
              img: "/main/reviewsMain/sert.png",
              imgIncrease: "/main/reviewsMain/sertIncrease.png",
              col: "col-lg-4",
            },
            {
              id: 2,
              img: "/main/reviewsMain/sert.png",
              imgIncrease: "/main/reviewsMain/sertIncrease.png",
              col: "col-lg-4",
            },
            {
              id: 3,
              img: "/main/reviewsMain/sert.png",
              imgIncrease: "/main/reviewsMain/sertIncrease.png",
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
              imgIncrease: "/main/reviewsMain/sertIncrease.png",
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
              imgIncrease: "/main/reviewsMain/sertIncrease.png",
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
    },
    increaseImg(item) {
      this.activeImg = item;
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
          .carousel-item {
            padding-bottom: 36px;
            &-content {
              &:hover {
                cursor: pointer;
                &::before {
                  content: "";
                  position: absolute;
                  width: 203px;
                  height: 100%;
                  top: 0;
                  left: 0;
                  z-index: 2;
                  border-radius: 5px;
                  opacity: 0.9;
                  transition: opacity 0.3s;
                  background: #FF6B00;
                  background-image: url("/main/reviewsMain/increase.svg");
                  background-repeat: no-repeat;
                  background-position: center;
                }

              }
              img {
                position: relative;
                max-width: 100%;
              }
            }
            &-increase {
              position: fixed;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background: #000;
              opacity: .8;
              z-index: 100;
              .close {
                position: absolute;
                right: 50px;
                top: 25px;
                img {
                  filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(2%) hue-rotate(201deg) brightness(107%) contrast(101%);
                  width: 30px;
                }
              }
              &-img {
                display: flex;
                justify-content: center;
                margin-top: 60px;
              }
            }
          }
        }
      }
    }
  }
  .slide-fade-enter-active,
  .slide-fade-leave-active {
    transition: all .2s ease;
  }

  .slide-fade-enter, .slide-fade-leave-to /* .slide-fade-leave-active до версии 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }
}
</style>
