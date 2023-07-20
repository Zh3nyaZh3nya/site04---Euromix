<template>
  <section class="services">
    <div class="container">
      <div class="services-title">
        <h2>услуги и решения</h2>
        <h3>Компания полного цикла</h3>
      </div>
      <div class="services__tabs">
        <ul class="nav nav-pills">
          <li class="nav-item">
            <button class="nav-link" :class="{active: activeTab === 'oneTab'}" @click="activeTab = 'oneTab'">
              <img src="/main/servicesMain/member.svg" alt="">
              <p>Шефмонтажные работы</p>
            </button>
          </li>
          <li class="nav-item">
            <button class="nav-link" :class="{active: activeTab === 'twoTab'}" @click="activeTab = 'twoTab'" >
              <img src="/main/servicesMain/gear.svg" alt="">
              <p>Пусконалодочные работы</p>
            </button>
          </li>
          <li class="nav-item">
            <button class="nav-link" :class="{active: activeTab === 'threeTab'}" @click="activeTab = 'threeTab'" >
              <img src="/main/servicesMain/jobs.svg" alt="">
              <p>Монтажные работы</p>
            </button>
          </li>
          <li class="nav-item">
            <button class="nav-link" :class="{active: activeTab === 'fourTab'}" @click="activeTab = 'fourTab'" >
              <img src="/main/servicesMain/pencil.svg" alt="">
              <p>Инженеринг и проектирование</p>
            </button>
          </li>
        </ul>
      </div>
      <div class="services__content">
        <div class="services__content__shefmontazhnye" :class="{active: activeTab === 'oneTab'}">
          <div class="services__content__shefmontazhnye-title">
            <img src="/main/servicesMain/marks.svg" alt="">
            <p>Шеф-монтаж – это комплекс работ по установке и пусконаладке оборудования, который выполняется специалистами подрядной организации, предприятия заказчика или собственной фирмы-поставщика под наблюдением специалиста (инженера) поставщика и его организационно-техническим руководством </p>
          </div>
          <div class="row">
            <div
              class="col-lg-3"
              v-for="item in servicesData"
              :key="item.id"
            >
              <div class="services__content__shefmontazhnye-item">
                <div class="services__content__shefmontazhnye-item-img">
                  <img :src="item.img" alt="">
                  <button>
                    <img src="/main/servicesMain/arrowButton.svg" alt="">
                  </button>
                </div>
                <p>{{item.text}}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="services__content__shefmontazhnye" :class="{active: activeTab === 'twoTab'}">
          <div class="row">
            <div
              class="col-lg-3"
              v-for="item in servicesData"
              :key="item.id"
            >
              <div class="services__content__shefmontazhnye-item">
                <div class="services__content__shefmontazhnye-item-img">
                  <img :src="item.img" alt="">
                  <button>
                    <img src="/main/servicesMain/arrowButton.svg" alt="">
                  </button>
                </div>
                <p>{{item.text}}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="services__content__shefmontazhnye" :class="{active: activeTab === 'threeTab'}">
          <div class="services__content__shefmontazhnye-title">
            <img src="/main/servicesMain/marks.svg" alt="">
            <p>Шеф-монтаж – это комплекс работ по установке и пусконаладке оборудования, который выполняется специалистами подрядной организации, предприятия заказчика или собственной фирмы-поставщика под наблюдением специалиста (инженера) поставщика и его организационно-техническим руководством </p>
          </div>
          <div class="row">
            <div
              class="col-lg-3"
              v-for="item in servicesData"
              :key="item.id"
            >
              <div class="services__content__shefmontazhnye-item">
                <div class="services__content__shefmontazhnye-item-img">
                  <img :src="item.img" alt="">
                  <button>
                    <img src="/main/servicesMain/arrowButton.svg" alt="">
                  </button>
                </div>
                <p>{{item.text}}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="services__content__shefmontazhnye" :class="{active: activeTab === 'fourTab'}">
          <div class="services__content__shefmontazhnye-title">
            <img src="/main/servicesMain/marks.svg" alt="">
            <p>Шеф-монтаж – это комплекс работ по установке и пусконаладке оборудования, который выполняется специалистами подрядной организации, предприятия заказчика или собственной фирмы-поставщика под наблюдением специалиста (инженера) поставщика и его организационно-техническим руководством </p>
          </div>
          <div class="row">
            <div
              class="col-lg-3"
              v-for="item in servicesData"
              :key="item.id"
            >
              <div class="services__content__shefmontazhnye-item">
                <div class="services__content__shefmontazhnye-item-img">
                  <img :src="item.img" alt="">
                  <button>
                    <img src="/main/servicesMain/arrowButton.svg" alt="">
                  </button>
                </div>
                <p>{{item.text}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="services-btn">
        <UIButton>все проекты</UIButton>
      </div>
    </div>
  </section>
</template>

<script>
import UIButton from "@/components/UI/UIButton";
export default {
  name: "MainServices",
  components: {UIButton},
  data() {
    return {
      activeTab: "oneTab",
      servicesData: [
        {
          id: 1,
          img: "/main/servicesMain/img11.png",
          text: "В Москву отправлен бетоносмеситель EUROMIX 600.200.",
        },
        {
          id: 2,
          img: "/main/servicesMain/img11.png",
          text: "В Москву отправлен бетоносмеситель EUROMIX 600.200.",
        },
        {
          id: 3,
          img: "/main/servicesMain/img11.png",
          text: "В Москву отправлен бетоносмеситель EUROMIX 600.200.",
        },
        {
          id: 4,
          img: "/main/servicesMain/img11.png",
          text: "В Москву отправлен бетоносмеситель EUROMIX 600.200.",
        },
      ]
    }
  },
}
</script>

<style lang="scss">
.services {
  &-title {
    margin-bottom: 29px;
    h2 {
      color: #222A31;
      font-size: 24px;
      font-weight: 700;
      text-transform: uppercase;
    }
    h3 {
      color: #FF6B00;
      font-size: 14px;
      font-weight: 400;
      line-height: 30px; /* 214.286% */
      text-transform: uppercase;
    }
  }
  &__tabs {
    margin-bottom: 54px;
    .nav {
      display: flex;
      align-items: center;
      &-item {
        .nav-link {
          text-align: start;
          display: flex;
          column-gap: 14px;
          align-items: center;
          padding: 7px 25px 10px 37px;
          p {
            width: 133px;
            color: #222A31;
            font-size: 16px;
            font-weight: 500;
            line-height: 16px; /* 100% */
          }
        }
        .nav-link.active {
          background: #222A31;
          transform: skew(20deg);
          height: 54px;
          p, img {
            filter: brightness(0) invert(1);
            transform: skew(-20deg);
          }
        }
      }
    }
  }
  &__content {
    margin-bottom: 42px;
    &__shefmontazhnye.active {
      display: block;
    }
    &__shefmontazhnye {
      display: none;
      &-title {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        column-gap: 33px;
        margin-bottom: 27px;
        p {
          width: 840px;
          color: #8F8F8F;
          font-size: 16px;
          font-style: italic;
          font-weight: 400;
          line-height: 24px;
        }
      }
      &-item {
        &-img {
          position: relative;
          margin-bottom: 15px;
          button {
            border: 28px solid transparent;
            border-right: 28px solid #FF6B00;
            border-bottom: 28px solid #FF6B00;
            border-top-right-radius: 7px;
            border-bottom-left-radius: 7px;
            position: absolute;
            right: 0;
            bottom: 0;
            img {
              position: absolute;
            }
          }
        }
        p {
          color: #000;
          font-size: 15px;
          font-weight: 500;
          line-height: 20px; /* 125% */
        }
      }
    }
  }
  &-btn {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
