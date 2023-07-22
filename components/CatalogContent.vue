<template>
  <section class="catalog__content">
    <div class="container">
      <div class="catalog__content-title">
        <h2>Каталог</h2>
      </div>
      <div class="catalog__content__tabs">
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
      <div class="catalog__content-card">
        <transition name="slide-fade" mode="out-in">
          <div v-if="activeTab === 'factories'" key="factories" class="catalog__content-card__factories">
            <div class="row">
              <div
                class="col-lg-4"
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
                    </div>
                    <div class="main__catalog__content__card-btn">
                      <button>
                        <img src="/main/catalogMain/arrowButton.svg" alt="" />
                      </button>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </transition>
        <transition name="slide-fade" mode="out-in">
          <div v-if="activeTab === 'products'" key="products" class="catalog__content-card__products">
            <div class="row">
              <div
                class="col-lg-3"
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
                    </div>
                    <div class="main__catalog__content__card-btn">
                      <button>
                        <img src="/main/catalogMain/arrowButton.svg" alt="" />
                      </button>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </transition>
        <transition name="slide-fade" mode="out-in">
          <div v-if="activeTab === 'accessories'" key="accessories" class="catalog__content-card__accessories">
            <div class="row">
              <div
                class="col-lg-3"
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
                    </div>
                    <div class="main__catalog__content__card-btn">
                      <button>
                        <img src="/main/catalogMain/arrowButton.svg" alt="" />
                      </button>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </section>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "CatalogContent",
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
.catalog__content {
  &-title {
    margin-bottom: 23px;
    h2 {
      color: #222A31;
      font-size: 24px;
      font-weight: 700;
      text-transform: uppercase;
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
  .main__catalog__content__card {
    &-img {
      img {
        max-width: 373px;
        width: 100%;
      }
    }
    &__text {
      margin: 0 10px 0 22px;
      &-title {
        margin-bottom: 30px;
        max-width: 292px;
        width: 100%;
        h3 {
          color: #222A31;
          font-size: 18px;
          font-weight: 500;
        }
      }
    }
    &-btn {
      button {
        border: 30px solid transparent;
        border-right: 30px solid #FF6B00;
        border-bottom: 30px solid #FF6B00;
        img {
          bottom: 8px;
        }
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
