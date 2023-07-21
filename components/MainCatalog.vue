<template>
  <section class="main__catalog">
    <div class="container">
      <div class="main__catalog-title">
        <h2>КАТАЛОГ</h2>
      </div>
      <div class="main__catalog__tabs">
        <ul class="nav nav-pills">
          <li class="nav-item">
            <button class="nav-link" :class="{active: activeTab === 'factories'}" @click="activeTab = 'factories'">
              <p>Бетонные заводы</p>
            </button>
          </li>
          <li class="nav-item">
            <button class="nav-link" :class="{active: activeTab === 'products'}" @click="activeTab = 'products'">
              <p>Продукция</p>
            </button>
          </li>
          <li class="nav-item">
            <button class="nav-link" :class="{active: activeTab === 'accessories'}" @click="activeTab = 'accessories'">
              <p>Комплектующие</p>
            </button>
          </li>
        </ul>
      </div>
      <div class="main__catalog__content">
        <transition name="slide-fade" mode="out-in">
          <div v-if="activeTab === 'factories'" key="factories" class="main__catalog__content__factories">
            <div class="row">
              <div
                class="col-lg-6"
                v-for="factories in getFactoriesData"
                :key="factories.id"
              >
                <a href="#" @click.prevent="goTo(factories)">
                  <div class="main__catalog__content__card">
                    <div class="main__catalog__content__card-img">
                      <img :src="factories.img" alt="" />
                    </div>
                    <div class="main__catalog__content__card__text">
                      <div class="main__catalog__content__card__text-title">
                        <h3>{{factories.title}}</h3>
                      </div>
                      <div class="main__catalog__content__card__text-subtitle">
                        <p>{{factories.subtitle}}</p>
                      </div>
                    </div>
                    <div class="main__catalog__content__card-btn">
                      <button>
                        <img src="/main/catalogMain/arrowButton.svg" alt="" />
                      </button>
                    </div>
                  </div>
                </a>
              </div>
              <div class="main__catalog__content__transition col-lg-6">
                <nuxt-link to="#">
                  Перейти в каталог
                  <img src="/main/catalogMain/arrowButtonOrange.svg" alt="">
                </nuxt-link>
              </div>
            </div>
          </div>
        </transition>
        <transition name="slide-fade" mode="out-in">
          <div v-if="activeTab === 'products'" key="products" class="main__catalog__content__products">
            <div class="row">
              <div
                class="col-lg-6"
                v-for="products in getProductsData"
                :key="products.id"
              >
                <a @click.prevent="goTo(products)">
                  <div class="main__catalog__content__card">
                    <div class="main__catalog__content__card-img">
                      <img :src="products.img" alt="" />
                    </div>
                    <div class="main__catalog__content__card__text">
                      <div class="main__catalog__content__card__text-title">
                        <h3>{{products.title}}</h3>
                      </div>
                      <div class="main__catalog__content__card__text-subtitle">
                        <p>{{products.subtitle}}</p>
                      </div>
                    </div>
                    <div class="main__catalog__content__card-btn">
                      <button>
                        <img src="/main/catalogMain/arrowButton.svg" alt="" />
                      </button>
                    </div>
                  </div>
                </a>
              </div>
              <div class="main__catalog__content__transition col-lg-6">
                <nuxt-link to="#">
                  Перейти в каталог
                  <img src="/main/catalogMain/arrowButtonOrange.svg" alt="">
                </nuxt-link>
              </div>
            </div>
          </div>
        </transition>
        <transition name="slide-fade" mode="out-in">
          <div v-if="activeTab === 'accessories'" key="accessories" class="main__catalog__content__accessories">
            <div class="row">
              <div
                class="col-lg-6"
                v-for="accessories in getAccessoriesData"
                :key="accessories.id"
              >
                <a href="#" @click.prevent="goTo(accessories)">
                  <div class="main__catalog__content__card">
                    <div class="main__catalog__content__card-img">
                      <img :src="accessories.img" alt="" />
                    </div>
                    <div class="main__catalog__content__card__text">
                      <div class="main__catalog__content__card__text-title">
                        <h3>{{accessories.title}}</h3>
                      </div>
                      <div class="main__catalog__content__card__text-subtitle">
                        <p>{{accessories.subtitle}}</p>
                      </div>
                    </div>
                    <div class="main__catalog__content__card-btn">
                      <button>
                        <img src="/main/catalogMain/arrowButton.svg" alt="" />
                      </button>
                    </div>
                  </div>
                </a>
              </div>
              <div class="main__catalog__content__transition col-lg-6">
                <nuxt-link to="#">
                  Перейти в каталог
                  <img src="/main/catalogMain/arrowButtonOrange.svg" alt="">
                </nuxt-link>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: "MainCatalog",
  data() {
    return {
      activeTab: 'factories',
      activeClass: 'factories',
    }
  },
  methods: {
    ...mapActions('main/mainCatalog', ['setSelectData']),
    goTo(data) {
      this.setSelectData(data.pageContent);

      this.$router.push({path: '/' + data.idRoute});
    }
  },
  computed: {
    getFactoriesData() {
      return this.$store.state.main.mainCatalog.mainCatalogData[0].factoriesData;
    },
    getProductsData() {
      return this.$store.state.main.mainCatalog.mainCatalogData[1].productsData;
    },
    getAccessoriesData() {
      return this.$store.state.main.mainCatalog.mainCatalogData[2].accessoriesData;
    },
  }
}
</script>

<style lang="scss">

.main__catalog {
  &-title {
    margin-bottom: 11px;
    h2 {
      color: #222A31;
      font-size: 24px;
      font-weight: 700;
    }
  }
  &__tabs {
    display: flex;
    justify-content: center;
    margin-bottom: 26px;
    .nav {
      &-item {
        .nav-link {
          text-align: start;
          display: flex;
          column-gap: 14px;
          align-items: center;
          padding: 9px 24px 11px 28px;
          p {
            color: black;
            font-size: 20px;
            font-weight: 400;
          }
        }
        .nav-link.active {
          background: #FF8000;
          transform: skew(20deg);
          p, img {
            filter: brightness(0) invert(1);
            transform: skew(-20deg);
            color: #fff;
          }
        }
      }
    }
  }
  &__content {
    &__card {
      margin-bottom: 28px;
      padding-bottom: 18px;
      position: relative;
      &-img {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 15px;
      }
      &__text {
        margin: 0 54px;
        &-title {
          margin-bottom: 14px;
          h3 {
            font-size: 24px;
            font-weight: 400;
          }
        }
        &-subtitle {
          width: 400px;
          p {
            color: #474747;
            font-size: 14px;
            font-weight: 400;
          }
        }
      }
      &-btn {
        position: absolute;
        right: 0;
        bottom: 0;
        button {
          border: 47px solid transparent;
          border-right: 47px solid #FF6B00;
          border-bottom: 47px solid #FF6B00;
          border-top-right-radius: 7px;
          border-bottom-left-radius: 7px;
          img {
            position: absolute;
          }
        }
      }
      &:hover {
        border-radius: 5px;
        background: #FFF;
        box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.25);
      }
    }
    &__transition {
      display: flex;
      justify-content: center;
      align-items: center;
      a {
        display: flex;
        align-items: center;
        column-gap: 11px;
        color: #FF6B00;
        font-size: 16px;
        font-weight: 500;
        text-transform: uppercase;
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
    transform: translateX(10px);
    opacity: 0;
  }
}

</style>
