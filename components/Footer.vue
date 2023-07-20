<template>
<footer>
  <div class="container">
    <div class="footer__top">
      <div class="row">
        <div class="col-lg-3">
          <div class="footer__top-title">
            <h3>Мы перезвоним вам
              в удобное время!</h3>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="footer__top-input">
            <form action="#">
              <input type="number" placeholder="Введите ваш телефон">
              <UIButton>Отправить</UIButton>
            </form>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="footer__top-phone">
            <img src="/footer/phone.svg" alt="" />
            <span>+7 (4872) 704-838</span>
          </div>
        </div>
      </div>
    </div>
    <hr>
    <div class="footer__middle">
      <div class="row">
        <div class="col-lg-7">
          <div class="footer__middle__left">
            <div class="row">
              <div class="footer__middle__left-contacts col-lg-4">
                <div class="footer-nav-title">
                  <h3>Контакты</h3>
                </div>
                <div class="footer__middle__left-contacts-mail">
                  <img src="/footer/mail.svg" alt="" />
                  <p>info@euromix.biz</p>
                </div>
                <div class="footer__middle__left-contacts-phone">
                  <img src="/footer/smallphone.svg" alt="" />
                  <p>+7 (4872) 704-838</p>
                </div>
                <nuxt-link to="/">
                  <img src="/footer/logo.png" alt="" />
                </nuxt-link>
              </div>
              <div class="footer__middle__left-nav col-lg-4">
                <div class="footer-nav-title">
                  <h3>карта сайта</h3>
                </div>
                <nav class="footer-nav">
                  <ul>
                    <li>
                      <nuxt-link to="#">
                        <img src="/footer/arrow.svg" alt=""/>
                        о заводе
                      </nuxt-link>
                    </li>
                    <li>
                      <nuxt-link to="#">
                        <img src="/footer/arrow.svg" alt=""/>
                        услуги
                      </nuxt-link>
                    </li>
                    <li>
                      <nuxt-link to="#">
                        <img src="/footer/arrow.svg" alt=""/>
                        Новости
                      </nuxt-link>
                    </li>
                    <li>
                      <nuxt-link to="#">
                        <img src="/footer/arrow.svg" alt=""/>
                        Отзывы
                      </nuxt-link>
                    </li>
                    <li>
                      <nuxt-link to="#">
                        <img src="/footer/arrow.svg" alt=""/>
                        Партнеры
                      </nuxt-link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div class="footer__middle__left-catalog col-lg-4">
                <div class="footer-nav-title">
                  <h3>каталог</h3>
                </div>
                <nav class="footer-nav">
                  <ul>
                    <li>
                      <nuxt-link to="#">
                        <img src="/footer/arrow.svg" alt=""/>
                        бетонные заводы
                      </nuxt-link>
                    </li>
                    <li>
                      <nuxt-link to="#">
                        <img src="/footer/arrow.svg" alt=""/>
                        продукция
                      </nuxt-link>
                    </li>
                    <li>
                      <nuxt-link to="#">
                        <img src="/footer/arrow.svg" alt=""/>
                        комплектующие
                      </nuxt-link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div class="footer__middle__left-social col-lg-12">
                <h3>Мы в социальных сетях:</h3>
                <div class="footer__middle__left-social-img">
                  <img src="/footer/vk.svg" alt="" />
                  <img src="/footer/wp.svg" alt="" />
                  <img src="/footer/youtube.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-5">
          <div class="footer__middle__right">
            <yandex-map :coords="coords" :zoom="15" style="width: 100%; height: 400px;">
              <ymap-marker
                :coords="coords"
                marker-id="123"
                hint-content="оно вот туто вот здесь да"
              />
            </yandex-map>
          </div>
        </div>
      </div>
    </div>
    <hr>
    <div class="footer__bottom">
      <div class="footer__bottom-text">
        <span>Политика конфиденциальности</span>
        <span>Пользовательское соглашение</span>
        <span>Условия использования сайта</span>
        <p>Copyright © 1992-2022 euromix. Все права защищены.</p>
      </div>
    </div>
  </div>
</footer>
</template>

<script>
import UIButton from "@/components/UI/UIButton";
export default {
  name: "Footer",
  components: {UIButton},
  data() {
    return {
      coords: [ 55.579017, 37.605733 ],

    }
  },
}
</script>

<style lang="scss">
footer {
  background: url("/footer/bg.png") no-repeat;
  background-size: cover;
  padding: 29px 0 21px 0;
  hr {
    opacity: 0.5;
    background: #747778;
  }
  .footer__top {
    .row {
      align-items: center;
    }
    &-title {
      h3 {
        color: #FFF;
        font-size: 20px;
        font-weight: 500;
        width: 204px;
      }
    }
    &-input {
      form {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        column-gap: 10px;
        border-radius: 100px;
        border: 2px solid #FF6B00;
        background: rgba(214, 226, 228, 0.10);
        padding: 3px 5px 3px 0px;
        input {
          height: 40px;
          width: 70%;
          background: none;
          color: #FFF;
          font-size: 16px;
          font-weight: 400;
        }
      }
    }
    &-phone {
      display: flex;
      align-items: center;
      span {
        color: #FFF;
        font-size: 24px;
        font-weight: 500;
      }
    }
  }
  .footer__middle {
    .footer-nav-title {
      margin-top: 35px;
      margin-bottom: 43px;
      h3 {
        color: #FF6B00;
        font-size: 16px;
        font-weight: 500;
        text-transform: uppercase;
      }
    }
    .footer-nav {
      ul {
        li {
          margin-bottom: 26px;
          a {
            display: flex;
            align-items: center;
            column-gap: 8px;
            color: #FFF;
            font-size: 14px;
            font-weight: 500;
          }
        }
      }
    }
    &__left {
      &-contacts {
        &-mail, &-phone {
          display: flex;
          justify-content: flex-start;
          column-gap: 18px;
          margin-bottom: 20px;
        }
        p {
          color: #FFF;
          font-size: 16px;
          font-weight: 500;
        }
      }
      &-social {
        h3 {
          color: #FFF;
          font-size: 16px;
          font-weight: 400;
        }
        &-img {
          display: flex;
          align-items: center;
          column-gap: 16px;
        }
      }
    }
  }
  .footer__bottom {
    span {
      display: inline-block;
      padding-right: 9px;
      margin-bottom: 9px;
    }
    span, p {
      color: #FFF;
      font-size: 14px;
      font-weight: 400;
    }
  }
}
</style>
