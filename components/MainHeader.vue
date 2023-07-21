<template>
  <section class="main">
    <div class="main-bg">
      <div class="main__top">
        <div class="main__top__content container">
          <div class="main__top__content-title">
            <h1>Мобильный бетонный завод</h1>
            <h1>EUROMIX CROCUS</h1>
          </div>
        </div>
      </div>
    </div>
    <div class="main__bottom container-fluid">
      <div class="main__bottom__content container">
        <div class="main__bottom__content-title">
          <p>30</p>
          <div>
            <span>лет</span>
            <div>
              <p>успешной</p>
              <p>работы</p>
            </div>
          </div>
        </div>
        <div class="main__bottom__content-subtitle">
          <p>«Завод EUROMIX» - производитель бетонных заводов EUROMIX CROCUS - это</p>
          <p>предприятие, которое за годы партнерства плотного сотрудничества с западными</p>
          <p>коллегами выработало уникальную стратегию, максимально приблизившись к</p>
          <p>оптимуму «цена-качество», имеющее большой опыт в производстве</p>
          <p>строительного и технологического оборудования</p>
        </div>
        <div class="main__form">
          <Application></Application>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "MainHeader"
}
</script>

<style lang="scss">
.main {
  margin-bottom: 18px;
  &-bg {
    background: url("/main/headerMain/header.png") no-repeat;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: 1;
    }
  }
  &__top {
    position: relative;
    z-index: 2;
    padding: 162px 0 162px 0;
    &__content {
      &-title {
        h1 {
          font-size: 36px;
          font-weight: 400;
        }
        h1:first-child {
          color: #fff;
        }
        h1:last-child {
          color: #FF6B00;
          font-weight: 700;
        }
      }
    }
  }
  &__bottom {
    padding: 6px 0 15px 0;
    background: #222A31;
    &__content {
      position: relative;
      display: flex;
      column-gap: 60px;
      &-title {
        p {
          font-size: 130px;
          line-height: 106px;
          font-weight: 700;
        }
        div {
          display: flex;
          column-gap: 11px;
          span {
            font-size: 41px;
            font-weight: 700;
          }
          div {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            p {
              font-size: 14px;
              font-weight: 500;
              line-height: 14px
            }
          }
        }
        p, span {
          color: #EC5600;
          margin: 0;
        }
      }
      &-subtitle {
        margin: 38px 0;
        p {
          margin: 0;
          font-size: 15px;
          font-weight: 400;
          color: #fff;
          opacity: 0.5;
        }
      }
    }
  }
  &__form {
    position: absolute;
    z-index: 2;
    right: 0;
    bottom: 46px;
    opacity: 0.800000011920929;
  }
}
</style>
