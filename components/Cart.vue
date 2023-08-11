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
      <div class="cart__content-first" v-if="currentStep === 'first'">
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
            <button @click="actualStep('second')" class="custom-btn">
              продолжить
            </button>
            <UIButton class="btn-white">
              Отменить
            </UIButton>
          </div>
        </div>
      </div>
      <div class="cart__content-second" v-else-if="currentStep === 'second'">
        <div class="row">
          <div class="col-lg-4">
            <div class="cart__content-title">
              <p>Выберите плательщика из списка</p>
            </div>
            <div class="cart__content-acc">
              <div
                class="cart__content-acc-item"
                v-for="(item, index) in payerData"
                :key="item.id"
              >
                <button
                  class="cart__content-acc-item-btn"
                  @click="activeAcc = (activeAcc === index) ? null : index"
                >
                  <div>
                    <p>{{ item.fio }}</p>
                    <p>{{ item.phone }}</p>
                  </div>
                  <img src="/cartImg/arrow.svg" alt="" />
                </button>
                <div class="cart__content-acc-item-body" v-show="activeAcc === index">
                  <div class="cart__content-acc-item-body-text">
                    <button @click="selectPayerAndAddress(item, 'payer'), actualStep('third')">
                      <p>Физическое лицо</p>
                      <p>{{item.fio}}</p>
                      <p>{{item.phone}}</p>
                    </button>
                  </div>
                  <div class="cart__content-acc-item-body-btn">
                    <button @click="changePayerAndAddress(index, item, 'payer')">
                      <img src="/cartImg/edit.svg" alt=""/>
                    </button>
                    <button @click="deleteSelectPayerAndAddress(index, 'payer')">
                      <img src="/cartImg/close1.svg" alt="" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="cart__content-title">
              <p>Добавьте новые реквизиты:</p>
            </div>
            <div class="cart__content-form">
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
                      <button @click="changePayerAndAddress(index, item), activeDrop = !activeDrop">
                        <p class="dropdown-item">{{item.fio}}</p>
                      </button>
                    </li>
                  </ul>
                </li>
                <input type="text" placeholder="Фио плательщика" v-model="fio_payer">
                <input type="number" placeholder="Телефон плательщика" v-model="phone_payer">
                <button class="btn-white" @click="savePayerAndChangePayer">Сохранить и продолжить</button>
              </form>
            </div>
            <div class="cart__content-btn">
              <button class="btn-white" @click="actualStep('first')">назад</button>
              <button class="custom-btn" @click="actualStep('third')">продолжить</button>
            </div>
          </div>
        </div>
      </div>
      <div class="cart__content-third" v-else-if="currentStep === 'third'">
        <div class="row">
          <div class="col-lg-4">
            <div class="cart__content-title">
              <p>Выберите адрес из списка:</p>
            </div>
            <div class="cart__content-acc">
              <div
                class="cart__content-acc-item"
                v-for="(item, index) in addressData"
                :key="item.id"
              >
                <button
                  class="cart__content-acc-item-btn"
                  @click="activeAcc = (activeAcc === index) ? null : index"
                >
                  <div>
                    <p>г. {{ item.city }}</p>
                    <div>
                      <span>Ул. {{ item.street }}, Д. {{ item.home }}, Кв. {{ item.flat }}</span>
                    </div>
                  </div>
                  <img src="/cartImg/arrow.svg" alt="" />
                </button>
                <div class="cart__content-acc-item-body" v-show="activeAcc === index">
                  <div class="cart__content-acc-item-body-text">
                    <button @click="selectPayerAndAddress(item, 'address')">
                      <p>г. {{ item.city }}</p>
                      <div>
                        <span>Ул. {{ item.street }}, Д. {{ item.home }}, Кв. {{ item.flat }}</span>
                      </div>
                    </button>
                  </div>
                  <div class="cart__content-acc-item-body-btn">
                    <button @click="changePayerAndAddress(index, item, 'address')">
                      <img src="/cartImg/edit.svg" alt=""/>
                    </button>
                    <button @click="deleteSelectPayerAndAddress(index, 'address')">
                      <img src="/cartImg/close1.svg" alt="" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="cart__content-title">
              <p>Добавьте новый адрес:</p>
            </div>
            <div class="cart__content-form">
              <form @submit.prevent="" action="#">
                <input type="text" placeholder="Город:" v-model="address_city">
                <input type="text" placeholder="Улица:" v-model="address_street">
                <div class="cart__content-form-flex">
                  <input type="number" placeholder="Дом:" v-model="address_home">
                  <input type="number" placeholder="Квартира:" v-model="address_flat">
                </div>
                <textarea placeholder="Комментарий курьеру:" v-model="address_comment"></textarea>
                <button class="btn-white" @click="saveAddressAndChangeAddress">Сохранить и продолжить</button>
              </form>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="cart__content-delivery">
              <div class="cart__content-title">
                <p>Выберете службу доставки :</p>
              </div>
              <div class="row">
                <div
                  class="col-lg-6"
                  v-for="item in deliveryData"
                  :key="item.id"
                >
                  <div class="input-radio-custom">
                    <input
                      type="radio"
                      v-model="selectedDeliveryOption"
                      :name="'deliveryOption'"
                      :value="item.name"
                      :id="'deliveryOption' + item.id"
                    />
                    <label :for="'deliveryOption' + item.id"></label>
                    <img :src="item.img" alt="" />
                  </div>
                </div>
              </div>
              <div class="cart__content-delivery-text">
                <p>Стоимость доставки указана по информации от транспортной компании и рассчитана исходя из данных указанных при оформлении заказа.
                  Она может быть изменена при смене адреса доставки, плательщика, смены расценок транспортной компании.
                  Стоимость доставки будет включена в счет заказа.
                </p>
                <span>
                  Стоимость доставки: 1000 руб.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="cart__content-btn" style="justify-content: flex-end">
          <button class="btn-white" @click="actualStep('second')">назад</button>
          <button class="custom-btn" @click="actualStep('fourth')">продолжить</button>
        </div>
      </div>
      <div class="cart__content-fourth" v-else-if="currentStep === 'fourth'">
        <div class="row">
          <div
            class="col-lg-3"
            v-for="item in payment"
            :key="payment.id"
          >
            <div class="cart__content-payment" style="margin-bottom: 50px">
              <div class="input-radio-custom" style="align-items: center; column-gap: 25px">
                <input
                  type="radio"
                  v-model="selectedPayment"
                  :name="'selectedPayment'"
                  :value="item.text"
                  :id="'optionPayment' + item.id"
                />
                <label :for="'optionPayment' + item.id"></label>
                <div style="display: flex; flex-direction: column; align-items: center">
                  <img :src="item.img" alt="" style="width: 75px"/>
                  <p style="width: 150px; text-align: center">{{item.text}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="cart__content-btn" style="justify-content: flex-end">
          <button class="btn-white" @click="actualStep('third')">назад</button>
          <button class="custom-btn" @click="actualStep('fifth')">продолжить</button>
        </div>
      </div>
      <div class="cart__content-fifth" v-else-if="currentStep === 'fifth'">
        <div class="row">
          <div class="col-lg-6">
            <div class="cart__content-fifth-title">
              <p>Плательщик</p>
            </div>
            <div class="cart__content-fifth-body">
              <div class="row">
                <div class="col-lg-5">
                  <p>Ф.И.О:</p>
                  <p>Телефон:</p>
                  <p>Способ оплаты:</p>
                </div>
                <div class="col-lg-7">
                  <p>{{ getSelectedPayer.fio }}</p>
                  <p>{{ getSelectedPayer.phone }}</p>
                  <p>{{ selectedPayment }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="cart__content-fifth-title">
              <p>Доставка</p>
            </div>
            <div class="cart__content-fifth-body">
              <div class="row">
                <div class="col-lg-5">
                  <p>Способ доставки:</p>
                  <p>Адрес доставки:</p>
                </div>
                <div class="col-lg-7">
                  <p>ТК "{{ selectedDeliveryOption }}"</p>
                  <p>г.{{ getSelectedAddress.city }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-12">
            <table class="table table-responsive-lg">
              <thead class="table-light">
              <tr>
                <th scope="col">№</th>
                <th scope="col">Наименование</th>
                <th scope="col">Количество</th>
                <th scope="col">всего</th>
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
                  <span>{{item.count}}</span>
                </td>
                <td>{{calcLocalPrice}} руб.</td>
              </tr>
              </tbody>
            </table>
            <div class="cart__content-first-bottom">
              <div class="cart__content-first-bottom-price">
                <p>Всего: {{allPrice}} руб.</p>
              </div>
              <div class="cart__content-first-bottom-btn">
                <button class="btn-white" @click="actualStep('first')">
                  Отменить
                </button>
                <UIButton>
                  оформить
                </UIButton>
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
    },
    addressData: {
      type: Array,
      default: () => [],
    },
    deliveryData: {
      type: Array,
      default: () => [],
    },
    currentStep: {
      type: String,
      default: () => "first",
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
      payment: [
        {
          id: 1,
          img: "/cartImg/payment1.svg",
          text: "Он-лайн оплата банковской картой",
        }
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
      dataTab: null,
      address_city: "",
      address_street: "",
      address_home: "",
      address_flat: "",
      address_comment: "",
      selectedDeliveryOption: null,
      selectedPayment: null,
    }
  },
  methods: {
    counter(operation, index, cartData) {
    },
    deleteCard(data) {
      this.$store.dispatch('cart/cart/deleteObject', data)
    },
    savePayerAndChangePayer() {
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
    saveAddressAndChangeAddress() {
      if (this.address_city !== "" && this.address_street !== "" && this.address_home !== "" && this.address_flat !== "")
      {
        const address = {
          city: this.address_city,
          street: this.address_street,
          home: this.address_home,
          flat: this.address_flat,
          comment: this.address_comment,
        };
        if (this.selectPayerTriggered === false) {
          this.$store.commit('cart/address/UPDATE_ADDRESS', address);
        } else {
          let index = this.indexTab;
          let newData  = {
            city: this.address_city,
            street: this.address_street,
            home: this.address_home,
            flat: this.address_flat,
            comment: this.address_comment
          };
          this.$store.commit('cart/address/CHANGE_ADDRESS', { index, newData });
        }
        this.address_city = "";
        this.address_street = "";
        this.address_home = "";
        this.address_flat = "";
        this.address_comment = ""

        this.selectPayerTriggered = false;
      }
    },
    changePayerAndAddress(index, data, check) {
      this.selectPayerTriggered = true;
      if(check === 'payer') {
        this.dataTab = data;
        this.fio_payer = data.fio;
        this.phone_payer = data.phone
      } else if (check === 'address') {
        this.dataTab = data;
        this.address_city = data.city;
        this.address_street = data.street;
        this.address_home = data.home;
        this.address_flat = data.flat;
      }
      this.indexTab = index
      console.log(data)
    },
    deleteSelectPayerAndAddress(index, check) {
      if(check === 'payer') {
        this.$store.commit('cart/payer/DELETE_PAYER', index)
      } else if (check === 'address') {
        this.$store.commit('cart/address/DELETE_ADDRESS', index)
      }
    },
    selectPayerAndAddress(item, check) {
      if(check === 'payer') {
        this.$store.commit('cart/payer/SELECTED_PAYER', item)
      } else if (check === 'address') {
        this.$store.commit('cart/address/SELECTED_ADDRESS', item)
      }
    },
    actualStep(step) {
      this.$emit('actualStep', step)
    }
  },
  computed: {
    ...mapGetters('cart/payer', ["getSelectData", "getSelectedPayer"]),
    ...mapGetters('cart/address', ["getSelectedAddress"]),
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
      &-bottom {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        column-gap: 48px;
      }
    }
    &-second {
      &-btn {
        display: flex;
        column-gap: 13px;
        .btn-white {
          padding: 15px 47px;
        }
      }
    }
  }
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

  .cart__content-title {
    margin-bottom: 16px;
    p {
      color: #000;
      font-size: 20px;
      font-weight: 400;
    }
  }
  .cart__content-acc {
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
        p, span {
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
          p, span {
            text-align: start;
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
  .cart__content-form {
    &-flex {
      display: flex;
      column-gap: 13px;
      input {
        width: 180px;
      }
    }
    form {
      display: flex;
      flex-direction: column;
      .nav-item.dropdown {
        border-radius: 5px;
        border: 1px solid #C9C6C6;
        background: #FFF;
        margin-bottom: 13px;
        padding-left: 5px;
        height: 47px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: relative;
        .dropdown-toggle {
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
        height: 47px;
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
      textarea {
        height: 80px;
        padding: 10px 23px;
        margin-bottom: 13px;
        &::placeholder {
          color: #767373;
        }
        font-size: 15px;
        font-weight: 400;
      }
    }
  }
  .cart__content-delivery {
    img {
      margin-bottom: 26px;
    }
    &-text {
      margin-left: 30px;
      p {
        color: #767373;
        font-size: 14px;
        font-weight: 400;
        margin-bottom: 30px;
      }
      span {
        font-size: 20px;
        font-weight: 500;
      }
    }
  }
  .cart__content-btn {
    display: flex;
    column-gap: 13px;
    .btn-white {
      padding: 15px 47px;
    }
  }
  .cart__content-fifth-title {
    background: #222A31;
    padding: 6px 22px;
    margin-bottom: 20px;
    p {
      color: #FFF;
      font-size: 18px;
      font-weight: 400;
      line-height: 30px;
    }
  }
  .cart__content-fifth-body {
    margin-left: 50px;
    margin-bottom: 20px;
    p {
      color: #000;
      font-family: Ubuntu;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 30px; /* 187.5% */
    }
  }
  .input-radio-custom {
    display: flex;
    column-gap: 12px;
    align-items: flex-start;
    position: relative;
  }
  input[type="radio"] {
    display: none;
  }
  label {
    width: 19px;
    height: 19px;
    border: 3px solid #000;
    cursor: pointer;
    position: relative;
  }
  input[type='radio']:checked + label:after {
    content: "";
    position: absolute;
    top: 3px;
    left: 3px;
    right: 3px;
    bottom: 3px;
    background-color: #000;
  }


}
</style>
