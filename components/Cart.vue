<template>
<section class="cart">
  <div class="container">
    <div class="cart__line__progress">
      <div
        class="cart__line__progress-item"
        v-for="item in stepCart"
        :key="item.id"
      >
        <div class="cart__line__progress-item-number">
          <p>{{item.id}}</p>
        </div>
        <div class="cart__line__progress-item-text">
          <p>{{item.text}}</p>
        </div>
      </div>
      <hr>
    </div>
    <div class="cart__content">
      <div class="cart__content-first">
        <table class="table table-responsive-lg">
          <thead class="table-light">
            <tr>
              <th scope="col">№</th>
              <th scope="col">Наименование</th>
              <th scope="col">Количество</th>
              <th scope="col">Цена</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody class="table-group-divider">
            <tr v-for="(item, index) in cartData" :key="item.id">
              <th scope="row">{{index + 1}}</th>
              <td>
                <img :src="item.img" alt="" style="width: 62px" />
                <p>{{item.title}}</p>
              </td>
              <td>
                <button @click="counter('plus', index, cartData)">
                  <img src="/cartImg/plus.svg" alt="" />
                </button>
                <p>{{item.count}}</p>
                <button @click="counter('minus', index, cartData)" style="height: 3px">
                  <img src="/cartImg/minus.svg" alt="" />
                </button>
              </td>
              <td>{{calcLocalPrice}} руб.</td>
              <td>
                <button @click="deleteCard(cartData)">
                  <img src="/cartImg/close.svg" alt="">
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="cart__content-first-bottom">
          <div class="cart__content-first-bottom-price">
            <p>Всего: {{allPrice}} руб.</p>
          </div>
          <div class="cart__content-first-bottom-btn">
            <UIButton>
              продолжить
            </UIButton>
            <UIButton class="btn-white">
              Отменить
            </UIButton>
          </div>
        </div>
      </div>
      <div class="cart__content-second">
        <div class="row">
          <div class="col-lg-4">
            <div class="cart__content-second-title">
              <p>Выберите плательщика из списка</p>
            </div>
            <div class="cart__content-second-acc">
              <div
                class="cart__content-second-acc-item"
                v-for="(item, index) in payerData"
                :key="item.id"
              >
                <button
                  class="cart__content-second-acc-item-btn"
                  @click="activeAcc = (activeAcc === index) ? null : index"
                >
                  <div>
                    <p>{{ item.fio }}</p>
                    <p>{{ item.phone }}</p>
                  </div>
                  <img src="/cartImg/arrow.svg" alt="" />
                </button>
                <div class="cart__content-second-acc-item-body" v-show="activeAcc === index">
                  <div class="cart__content-second-acc-item-body-text">
                    <p>Физическое лицо</p>
                    <p>{{item.fio}}</p>
                    <p>{{item.phone}}</p>
                  </div>
                  <div class="cart__content-second-acc-item-body-btn">
                    <button @click="selectPayer(index, item)">
                      <img src="/cartImg/edit.svg" alt=""/>
                    </button>
                    <button @click="deleteSelectPayer(index)">
                      <img src="/cartImg/close1.svg" alt="" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="cart__content-second-title">
              <p>Добавьте новые реквизиты:</p>
            </div>
            <div class="cart__content-second-form">
              <form @submit.prevent="" action="#">
                <li class="nav-item dropdown">
                  <p
                    class="nav-link dropdown-toggle"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    @click="activeDrop = !activeDrop"
                  >
                    {{ selectedFio || "Физическое лицо" }}

                  </p>
                  <ul class="dropdown-menu" :style="{ display: activeDrop ? 'block' : 'none' }">
                    <li
                      v-for="(item, index) in payerData"
                      :key="item.id"
                    >
                      <button @click="selectPayer(index, item), activeDrop = !activeDrop">
                        <p class="dropdown-item">{{item.fio}}</p>
                      </button>
                    </li>
                  </ul>
                </li>
                <input type="text" placeholder="Фио плательщика" v-model="fio_payer">
                <input type="number" placeholder="Телефон плательщика" v-model="phone_payer">
                <button class="btn-white" @click="savePayerAndSelectPayer">Сохранить и продолжить</button>
              </form>
            </div>
            <div class="cart__content-second-btn">
              <UIButton class="btn-white">назад</UIButton>
              <UIButton>продолжить</UIButton>
            </div>
          </div>
        </div>
      </div>
      <div class="cart__content-third"></div>
      <div class="cart__content-fourth"></div>
      <div class="cart__content-fifth"></div>
    </div>
  </div>
</section>
</template>

<script>
import UIButton from "@/components/UI/UIButton";
import {mapGetters} from "vuex";
export default {
  name: "Cart",
  components: {UIButton},
  props: {
    cartData: {
      type: Array,
      default: () => [],
    },
    payerData: {
      type: Array,
      default: () => [],
    }
  },
  data() {
    return {
      stepCart: [
        {
          id: 1,
          text: "Корзина",
        },
        {
          id: 2,
          text: "выбор плательщика",
        },
        {
          id: 3,
          text: "Способ доставки",
        },
        {
          id: 4,
          text: "Способ оплаты",
        },
        {
          id: 5,
          text: "Подтверждение",
        },
      ],
      count: 1,
      activeAcc: null,
      activeClass: "active",
      fio_payer: "",
      phone_payer: "",
      activeDrop: false,
      selectedFio: null,
      selectPayerTriggered: false,
      indexTab: null,
      dataTab: null
    }
  },
  methods: {
    counter(operation, index, cartData) {
    },
    deleteCard(data) {
      this.$store.dispatch('cart/cart/deleteObject', data)
    },
    savePayerAndSelectPayer() {
      if (this.phone_payer !== undefined && this.fio_payer !== undefined && this.phone_payer !== "" && this.fio_payer !== "") {
        const payer = {
          fio: this.fio_payer,
          phone: this.phone_payer,
        };
        if (this.selectPayerTriggered === false) {
          this.$store.commit('cart/payer/UPDATE_PAYER', payer);
        } else {
          let index = this.indexTab;
          let newData = {
            fio: this.fio_payer,
            phone: this.phone_payer,
          };
          this.$store.commit('cart/payer/CHANGE_DATA', { index, newData });
        }
        this.fio_payer = "";
        this.phone_payer = "";
        this.selectedFio = "Физическое лицо";

        this.selectPayerTriggered = false;
      }
    },
    selectPayer(index, data) {
      this.selectPayerTriggered = true;
      this.dataTab = data;
      this.fio_payer = data.fio;
      this.phone_payer = data.phone
      this.indexTab = index
      console.log(this.dataTab)
    },
    deleteSelectPayer(index) {
      this.$store.commit('cart/payer/DELETE_PAYER', index)
    }
  },
  computed: {
    ...mapGetters('cart/payer', ["getSelectData"]),
    allPrice() {
      return this.cartData.reduce((sum, obj) => sum + obj.price, 0) ;
    },
    calcLocalPrice() {
      let priceCard = this.cartData.reduce(obj => obj)
      return priceCard.price;
    }
  }
}
</script>

<style lang="scss">
.cart {
  margin-bottom: 195px;
  &__line__progress {
    position: relative;
    display: flex;
    justify-content: space-between;
    z-index: 2;
    align-items: center;
    margin-bottom: 70px;
    &-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      &-number {
        border-radius: 50px;
        background: #FF6B00;
        padding: 9px 13px 9px 13px;
        p {
          color: #FFF;
          font-weight: 700;
        }
      }
      &-text {
        p {
          color: #222A31;
          font-size: 13px;
          font-weight: 500;
          line-height: 30px; /* 230.769% */
          text-transform: uppercase;
        }
      }
    }
    hr {
      position: absolute;
      z-index: -1;
      top: 0;
      left: 25px;
      background: #FF6B00;
      height: 1px;
      max-width: 1084px;
      width: 100%;
    }
  }
  &__content {
    &-first {
      .table {
        margin-bottom: 40px;
        &-light {
          background: #222A31;
          width: 100%;
          tr {
            th {
              color: #ECECEC;
              font-size: 14px;
              font-weight: 400;
              line-height: 30px;
            }
          }
        }
        &-group-divider {
          tr {
            td {
              vertical-align: middle;
            }
            td:nth-child(2) {
              display: flex;
              align-items: center;
              column-gap: 15px;
              p {
                color: #000;
                font-size: 15px;
                font-weight: 500;
                width: 330px;
              }
            }
            td:nth-child(3) {
              p {
                padding: 10px 15px;
                border: 1px solid #DCD9D9;
                background: #FFF;
                color: #9B9B9B;
              }
            }
          }
        }
      }
      &-bottom {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        column-gap: 48px;
      }
    }
    &-second {
      &-title {
        margin-bottom: 16px;
        p {
          color: #000;
          font-size: 20px;
          font-weight: 400;
        }
      }
      &-acc {
        &-item {
          margin-bottom: 10px;
          &-btn {
            display: flex;
            justify-content: space-between;
            align-items: center;
            text-align: start;
            padding: 6px 18px;
            width: 100%;
            border-radius: 5px;
            background: #222A31;
            p {
              color: #FFF;
              font-size: 18px;
              font-weight: 400;
              margin-bottom: 4px;
            }
          }
          &-body {
            border: 1px solid #D9D9D9;
            background: #FFF;
            padding: 11px 12px 21px 18px;
            display: flex;
            justify-content: space-between;
            &-text {
              p {
                color: #222A31;
                font-size: 15px;
                font-weight: 400;
                margin-bottom: 2px;
              }
            }
            &-btn {
              display: flex;
              justify-content: center;
              align-items: flex-end;
              column-gap: 11px;
              button {
                display: flex;
                align-items: center;
              }
            }
          }
        }
      }
      &-form {
        form {
          display: flex;
          flex-direction: column;
          .nav-item.dropdown {
            border-radius: 5px;
            border: 1px solid #C9C6C6;
            background: #FFF;
            margin-bottom: 13px;
            padding-left: 5px;
            .dropdown-toggle {
              position: relative;
              color: #767373;
              font-size: 15px;
              font-weight: 400;
              &::after {
                position: absolute;
                right: 14px;
                background: url('/cartImg/arrowInput.svg') no-repeat;
                width: 14px;
                height: 14px;
                border: none;
              }
            }
            ul {
              width: 100%;
            }
          }
          input {
            border-radius: 5px;
            border: 1px solid #C9C6C6;
            background: #FFF;
            padding: 9px 23px;
            margin-bottom: 13px;
            &::placeholder {
              color: #767373;
              font-weight: 400;
              line-height: 30px;
            }
          }
          .btn-white {
            padding: 15px 34px;
            margin-bottom: 80px;
          }
        }
      }
      &-btn {
        display: flex;
        column-gap: 13px;
        .btn-white {
          padding: 15px 47px;
        }
      }
    }
  }
}
</style>
