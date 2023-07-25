<template>
  <div class="accordion accordion-flush" id="accordionFlushExample">
    <div class="accordion-title">
      <svg xmlns="http://www.w3.org/2000/svg" width="273" height="37" viewBox="0 0 273 37" fill="none">
        <path d="M271.782 4.69581C273.146 2.70494 271.721 0 269.307 0H3C1.34314 0 0 1.34315 0 3V34C0 35.6569 1.34314 37 3 37H248.064C249.054 37 249.98 36.5121 250.539 35.6958L271.782 4.69581Z" fill="#FF8000"/>
      </svg>
      <p>Каталог</p>
    </div>
    <div
      class="accordion-item"
      v-for="(item, index) in accordionData"
      :key="item.id"
    >
      <button
        class="accordion-button"
        @click="activeAcc = (activeAcc === item.id) ? null : item.id"
        :class="{ [activeClass]: activeAcc === item.id }"
      >
        <p>{{item.nameAcc}}</p>
        <img src="/accImg/arrow.svg" alt="">
      </button>
      <transition name="slide-fade">
        <div v-show="activeAcc === item.id">
          <div
            class="accordion-body"
            v-for="content in item.contentAcc"
            :key="content.id"
          >
            <p>{{content.text}}</p>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "Accordion",
  data() {
    return {
      activeAcc: null,
      activeClass: "active",
      accordionData: [
        {
          id: 1,
          nameAcc: "Бетонные заводы",
          active: "factories",
          contentAcc: [
            {
              id: 1,
              text: "Бетоносмесители",
            },
            {
              id: 2,
              text: "Бетоносмесители роторного типа серии euromix 600",
            },
            {
              id: 3,
              text: "Двухвальные бетоносмесители серии euromix 620",
            },
            {
              id: 4,
              text: "Бетоносмесители планетарного типа c.m.",
            },
            {
              id: 5,
              text: "Двухвальные бетоносмесители c.m.",
            },
          ]
        },
        {
          id: 2,
          nameAcc: "Продукция",
          active: "products",
          contentAcc: [
            {
              id: 1,
              text: "Бетоносмесители",
            },
            {
              id: 2,
              text: "Бетоносмесители роторного типа серии euromix 600",
            },
            {
              id: 3,
              text: "Двухвальные бетоносмесители серии euromix 620",
            },
            {
              id: 4,
              text: "Бетоносмесители планетарного типа c.m.",
            },
            {
              id: 5,
              text: "Двухвальные бетоносмесители c.m.",
            },
            {
              id: 6,
              text: "Бетоносмесители планетарного типа sicoma ",
            },
            {
              id: 7,
              text: "Двухвальные бетоносмесители sicoma",
            },
            {
              id: 8,
              text: "Бетоносмесители принудительного типа бп ",
            },
            {
              id: 9,
              text: "Силосы ",
            },
            {
              id: 10,
              text: "Силосы цемента серии eurosilo",
            },
            {
              id: 11,
              text: "Силосы цемента серии eurosilo mobile",
            },
            {
              id: 12,
              text: "Станции растирания мкр типа",
            },
            {
              id: 13,
              text: "Дозирующие комплексы инертных материалов ",
            },
            {
              id: 14,
              text: "Дополнительное оборудование",
            },
            {
              id: 15,
              text: "Кабина оператора ",
            },
          ]
        },
        {
          id: 3,
          nameAcc: "Комплектующие",
          active: "complete",
          contentAcc: [
            {
              id: 1,
              text: "Бетоносмесители",
            },
            {
              id: 2,
              text: "Бетоносмесители роторного типа серии euromix 600",
            },
            {
              id: 3,
              text: "Двухвальные бетоносмесители серии euromix 620",
            },
            {
              id: 4,
              text: "Бетоносмесители планетарного типа c.m.",
            },
            {
              id: 5,
              text: "Двухвальные бетоносмесители c.m.",
            },
            {
              id: 6,
              text: "Бетоносмесители планетарного типа sicoma ",
            },
            {
              id: 7,
              text: "Двухвальные бетоносмесители sicoma",
            },
            {
              id: 8,
              text: "Бетоносмесители принудительного типа бп ",
            },
            {
              id: 9,
              text: "Силосы ",
            },
            {
              id: 10,
              text: "Силосы цемента серии eurosilo",
            },
          ]
        },
      ]
    }
  },
}
</script>

<style scoped lang="scss">
.accordion {
  &-title {
    position: relative;
    margin-bottom: 25px;
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
    flex-direction: column;
    padding: 0 16px 0 19px;
    .accordion-button {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;
      p {
        color: #000;
        font-size: 20px;
        font-weight: 500;
        line-height: 24px;
      }
      img {
        transition: transform 0.3s ease;
      }
    }
    .accordion-button.active {
      p {
        color: #FF6B00;
      }
      img {
        transform: rotate(90deg);
      }
    }
  }
  &-body {
    margin-bottom: 15px;
    p {
      color: #53595F;
      font-size: 15px;
      font-weight: 400;
      line-height: 14px;
    }
  }
  .slide-fade-enter-active {
    transition: all .2s ease;
  }
  .slide-fade-leave-active {
    transition: all .1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active до версии 2.1.8 */ {
    transform: translateY(10px);
    opacity: 0;
  }
}
</style>
