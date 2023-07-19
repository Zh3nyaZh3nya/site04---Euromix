<template>
  <section class="popular__products">
    <div class="container">
      <div class="popular__products-title">
        <h2>популярные товары</h2>
      </div>
      <div class="popular__products__content">
        <div class="row">
          <div
            class="popular__products__content-item col-lg-3"
            v-for="products in productsData"
            :key="products.id"
          >
            <div class="popular__products__content-item-img">
              <img :src="products.img" alt="" />
            </div>
            <div class="popular__products__content-item-availability">
              <p>{{products.availability}}</p>
            </div>
            <div class="popular__products__content-item-title">
              <p>{{products.title}}</p>
            </div>
            <div class="popular__products__content-item-price">
              <p>{{products.price}}</p>
            </div>
            <div class="popular__products__content-item-footer">
              <div class="popular__products__content-item-footer-cart" v-show="products.availability === 'В наличии'">
                <button>
                  <img src="/main/popularProductsMain/cart.svg" alt="" />
                  <p>В корзину</p>
                </button>
              </div>
              <div class="popular__products__content-item-footer-btn">
                <button>
                  <img src="/main/popularProductsMain/arrowButton.svg" alt="">
                </button>
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
  name: "PopularProducts",
  data() {
    return {
      productsData: [
        {
          id: 1,
          img: "/main/popularProductsMain/img1.png",
          availability: "В наличии",
          title: "Мобильные бетонные заводы Euromix Crocus",
          price: "1 212 000 руб",
        },
        {
          id: 2,
          img: "/main/popularProductsMain/img1.png",
          availability: "В наличии",
          title: "Мобильные бетонные заводы Euromix Crocus",
          price: "1 212 000 руб",
        },
        {
          id: 3,
          img: "/main/popularProductsMain/img1.png",
          availability: "В наличии",
          title: "Мобильные бетонные заводы Euromix Crocus",
          price: "1 212 000 руб",
        },
        {
          id: 4,
          img: "/main/popularProductsMain/img1.png",
          availability: "Нет в наличии",
          title: "Мобильные бетонные заводы Euromix Crocus",
          price: "1 212 000 руб",
        },
      ]
    }
  },
}
</script>

<style lang="scss">
.popular__products {
  margin-bottom: 106px;
  &-title {
    margin-bottom: 40px;
    h2 {
      color: #222A31;
      font-size: 24px;
      font-weight: 700;
      text-transform: uppercase;
    }
  }
  &__content {
    &-item {
      &-img {
        margin-bottom: 17px;
      }
      &-availability {
        margin-bottom: 6px;
        p {
          color: #FF6B00;
          font-size: 15px;
          font-weight: 500;
        }
      }
      &-title {
        margin-bottom: 16px;
        p {
          font-size: 20px;
          font-weight: 400;
        }
      }
      &-price {
        margin-bottom: 24px;
        p {
          color: #222A31;
          font-size: 18px;
          font-weight: 700;
        }
      }
      &-footer {
        display: flex;
        &-cart {
          margin-left: 15px;
          button {
            display: flex;
            align-items: center;
            column-gap: 10px;
            background: none;
          }
          img {
            filter: brightness(0) saturate(100%) invert(60%) sepia(78%) saturate(5073%) hue-rotate(360deg) brightness(104%) contrast(102%);
          }
          p {
            color: #FF6B00;
            font-size: 16px;
            font-weight: 500;
          }
        }
        &-btn {
          position: absolute;
          right: 0;
          bottom: 0;
          button {
            border: 28px solid #fff;
            border-right: 28px solid #FF6B00;
            border-bottom: 28px solid #FF6B00;
            border-top-right-radius: 7px;
            border-bottom-left-radius: 7px;
            img {
              position: absolute;
            }
          }
        }
      }
    }
  }
}
/*
        position: absolute;
        right: 0;
        bottom: 0;
        button {
          border: 47px solid #fff;
          border-right: 47px solid #FF6B00;
          border-bottom: 47px solid #FF6B00;
          border-top-right-radius: 7px;
          border-bottom-left-radius: 7px;
          img {
            position: absolute;
          }
        }*/
</style>
