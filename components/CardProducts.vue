<template>
  <section class="card__product" v-if="Object.keys(cardData).length">
    <div class="container">
      <div class="card__product-path">
        <nuxt-link to="/">Главная > </nuxt-link>
        <nuxt-link to="/catalog">Каталог > </nuxt-link>
        <span>{{cardData.title}}</span>
      </div>
      <div class="card__product__header">
        <div class="row">
          <div class="col-lg-6">
            <div class="card__product__header-slider">
              <div id="carouselExample" class="carousel slide">
                <div class="carousel-inner">
                    <div
                      class="carousel-item"
                      v-for="(item, index) in cardData.sliderImg"
                      :key="item.id"
                      v-show="index === activeIndex"
                    >
                      <img :src="item.img" class="d-block w-100" alt="...">
                    </div>
                  <div class="carousel-bottom">
                    <div
                      class="carousel-bottom-item"
                      v-for="(item, index) in cardData.sliderImg"
                      :key="item.id"
                      style="width: 74px; height: 51px;"
                      :class="{'active': index === activeIndex}"
                      @click="goToSlide(index)"
                    >
                      <img :src="item.img" alt="" style="width: 100%" />
                    </div>
                  </div>
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="prev"
                  @click="prevSlide"
                >
                  <img src="/cardImg/leftArrow.svg" alt="">
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="next"
                  @click="nextSlide()"
                >
                  <img src="/cardImg/rightArrow.svg" alt="">
                </button>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="card__product__header-title">
              <h2>
                {{cardData.title}}
              </h2>
              <hr>
            </div>
            <div class="card__product__header__content">
              <div class="row">
                <div class="col-lg-9">
                  <div class="card__product__header__content-order">
                    <img src="/cardImg/checkMarkGreen.svg" alt="" />
                    <span>Под заказ</span>
                  </div>
                  <div class="card__product__header__content-price">
                    <p>от {{cardData.price}} руб</p>
                  </div>
                  <div class="card__product__header__content-season">
                    <p>Сезонное исполнение:</p>
                    <div>
                      <img src="/cardImg/sun.svg" alt=""/>
                      <span>Летнее</span>
                    </div>
                    <div>
                      <img src="/cardImg/snowflake.svg" alt=""/>
                      <span>Зимнее</span>
                    </div>
                  </div>
                  <div class="card__product__header__content-btn">
                    <UIButton>Запросить условия и сроки поставки</UIButton>
                  </div>
                  <div class="card__product__header__content-achievement">
                    <div
                      class="card__product__header__content-achievement-item"
                      v-for="item in achievementHeader"
                      :key="item.id"
                    >
                      <img :src="item.img" alt="" />
                      <p>{{item.text}}</p>
                    </div>
                  </div>
                  <div class="card__product__header__content-btn-wp">
                    <UIButton class="btn-wp">
                      <img src="/cardImg/wp.svg" alt="" />
                      Чат с менеджером WhatsApp
                    </UIButton>
                  </div>
                  <div class="card__product__header__content-btn-cart" @click="selectCard(cardData)">
                    <UIButton class="cart-btn">
                      <img src="/cardImg/cart.svg" alt="">
                      заказать сейчас
                    </UIButton>
                  </div>
                </div>
                <div class="col-lg-3">
                  <div
                    class="card__product__header__content-item"
                    v-for="item in imgHeader"
                    :key="item.id"
                  >
                    <img :src="item.img" alt="" />
                    <p>{{item.text}}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card__product__content">
        <div class="row">
          <div class="col-lg-9">
            <div class="card__product__content__table">
              <div class="card__product__content__table-tabs">
                <ul class="nav">
                  <li class="nav-item">
                    <button class="nav-link" @click="activeTab = 'specifications'">характеристики</button>
                  </li>
                  <li class="nav-item">
                    <button class="nav-link" @click="activeTab = 'completeSets'">комплектации</button>
                  </li>
                  <li class="nav-item">
                    <button class="nav-link" @click="activeTab = 'desc'">описание</button>
                  </li>
                </ul>
              </div>
              <transition name="slide-fade" mode="in-out">
                <div class="card__product__content__table__specifications" v-show="activeTab === 'specifications'">
                  <div
                    class="card__product__content__table__specifications-item"
                    v-for="item in cardData.specifications"
                    :key="item.id"
                  >
                    <p>{{item.name}}</p>
                    <p>{{item.text}}</p>
                  </div>
                </div>
              </transition>
              <transition name="slide-fade" mode="in-out">
                <div class="card__product__content__table__complete" v-show="activeTab === 'completeSets'">
                  <div
                    class="card__product__content__table__complete-item"
                    v-for="item in cardData.completeSets"
                    :key="item.id"
                  >
                    <p>{{item.name}}</p>
                    <p>{{item.text}}</p>
                  </div>
                </div>
              </transition>
              <transition name="slide-fade" mode="in-out">
                <div class="card__product__content__table__desc" v-show="activeTab === 'desc'">
                  <div
                    class="card__product__content__table__desc-item"
                    v-for="item in cardData.desc"
                    :key="item.id"
                  >
                    <p>{{item.name}}</p>
                    <p>{{item.text}}</p>
                  </div>
                </div>
              </transition>
            </div>
            <div
              class="card__product__content-img"
              v-for="item in cardData.middleImg"
              :key="item.id"
            >
              <img :src="item.img" alt="" />
            </div>
          </div>
          <div class="col-lg-3">
            <div class="card__product__content__video">
              <div class="card__product__content__video-title">
                <svg xmlns="http://www.w3.org/2000/svg" width="273" height="37" viewBox="0 0 273 37" fill="none">
                  <path d="M271.782 4.69581C273.146 2.70494 271.721 0 269.307 0H3C1.34314 0 0 1.34315 0 3V34C0 35.6569 1.34314 37 3 37H248.064C249.054 37 249.98 36.5121 250.539 35.6958L271.782 4.69581Z" fill="#FF8000"/>
                </svg>
                <p>Видео презентация</p>
              </div>
              <div
                class="card__product__content__video-item"
                v-for="item in cardData.videoPresentation"
                :key="item.id"
              >
                <img :src="item.img" alt=""/>
              </div>
            </div>
            <div class="card__product__content__accordion">
              <accordion />
            </div>
          </div>
        </div>
      </div>
      <popular-products />
      <news />
    </div>
  </section>
</template>

<script>
import UIButton from "@/components/UI/UIButton";
import {mapActions} from "vuex";

export default {
  name: "Card",
  components: {UIButton},
  props: {
    cardData: {
      type: Object,
      default: () => {},
    }
  },
  data() {
    return {
      activeIndex: 0,
      activeTab: "specifications",
      imgHeader: [
        {
          id: 1,
          img: "/cardImg/sheet.svg",
          text: "Выгодный лизинг от 6,9%",
        },
        {
          id: 2,
          img: "/cardImg/medal.svg",
          text: "Гарантия 2 года",
        },
        {
          id: 3,
          img: "/cardImg/car.svg",
          text: "Доставка по РФ и СНГ",
        },
        {
          id: 4,
          img: "/cardImg/gear.svg",
          text: "доступные запасные части в наличии",
        },
      ],
      achievementHeader: [
        {
          id: 1,
          img: "/cardImg/checkMarkOrange.svg",
          text: "Перезвоним в течение 15 минут",
        },
        {
          id: 2,
          img: "/cardImg/checkMarkOrange.svg",
          text: "Отправим цены и условия поставки",
        },
        {
          id: 3,
          img: "/cardImg/checkMarkOrange.svg",
          text: "Уточним требования  к оборудованию",
        },
      ],
    }
  },
  methods: {
    prevSlide() {
      this.activeIndex = (this.activeIndex - 1 + this.cardData.sliderImg.length) % this.cardData.sliderImg.length;
    },
    nextSlide() {
      this.activeIndex = (this.activeIndex + 1) % this.cardData.sliderImg.length;
    },
    goToSlide(index) {
      this.activeIndex = index;
    },
    selectCard(data) {
      console.log(data)
      this.$store.dispatch('cart/cart/selectCard', data)
    }
  }
}
</script>

<style lang="scss">
.card__product {
  &-path {
    margin-bottom: 30px;
    a, span {
      color: #9B9B9B;
      font-size: 16px;
      font-weight: 500;
      &:hover {
        color: #000;
        border-bottom: 1px solid #9B9B9B;
      }
    }
  }
  &__header {
    margin-bottom: 47px;
    &-slider {
      .carousel {
        &-bottom {
          display: flex;
          justify-content: center;
          align-items: center;
          column-gap: 13px;
          &-item.active {
            border: 3px solid #EC5600;
          }
        }
        &-item {
          margin-bottom: 30px;
          display: block;
          float: none;
        }
        &-control-prev, &-control-next {
          width: 38px;
          height: 38px;
          top: auto;
          bottom: 10px;
          background: #FF8000;
          border-radius: 50px;
        }
      }
    }
    &-title {
      h2 {
        color: #222A31;
        font-size: 28px;
        font-weight: 400;
        line-height: 40px;
      }
    }
    &__content {
      &-order {
        margin-bottom: 25px;
        display: flex;
        align-items: center;
        column-gap: 13px;
      }
      &-price {
        margin-bottom: 15px;
        p{
          color: #FF6B00;
          font-size: 36px;
          font-weight: 500;
        }
      }
      &-season {
        display: flex;
        align-items: center;
        column-gap: 14px;
        margin-bottom: 20px;
        div {
          display: flex;
          align-items: center;
          column-gap: 5px;
        }
      }
      &-btn {
        display: flex;
        justify-content: center;
        margin-bottom: 16px;
        button {
          background: #FF8000;
        }
      }
      &-achievement {
        margin-bottom: 10px;
        &-item {
          display: flex;
          column-gap: 12px;
          margin-bottom: 10px;
        }
      }
      &-btn-wp {
        display: flex;
        justify-content: center;
        margin-bottom: 15px;
      }
      &-btn-cart {
        display: flex;
        justify-content: center;
      }
      &-item {
        display: grid;
        justify-items: center;
        text-align: center;
        background: #F1F1F1;
        margin-bottom: 6px;
        padding: 18px 25px;
        row-gap: 8px;
        p {
          color: #53595F;
          font-size: 14px;
          font-weight: 400;
          line-height: 14px;
        }
      }
    }
  }
  &__content {
    margin-bottom: 135px;
    &__table {
      margin-bottom: 35px;
      &-tabs {
        margin-bottom: 60px;
        ul {
          li {
            button {
              color: #222A31;
              font-size: 16px;
              font-weight: 500;
              line-height: 24px; /* 150% */
              text-transform: uppercase;
            }
          }
        }
      }
      &__specifications, &__complete, &__desc {
        padding: 0 37px;
        &-item, &-item, &-item {
          display: flex;
          justify-content: space-between;
          border-bottom: 1px solid #D9D9D9;
          p {
            color: #53595F;
            font-size: 15px;
            font-weight: 400;
            line-height: 36px; /* 240% */
          }
        }
      }
    }
    &-img {
      display: flex;
      justify-content: center;
      margin-bottom: 25px;
    }
    &__video {
      &-title {
        position: relative;
        margin-bottom: 17px;
        svg {
          position: relative;
          z-index: -1;
        }
        p {
          position: absolute;
          top: 6px;
          left: 30px;
          z-index: 2;
          color: #FFF;
          font-size: 16px;
          font-weight: 500;
          line-height: 24px;
        }
      }
      &-item {
        display: flex;
        justify-content: center;
        margin-bottom: 12px;
      }
    }
  }
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active до версии 2.1.8 */ {
    transform: translateX(-10px);
    opacity: 0;
    display: block;
  }
}
</style>
