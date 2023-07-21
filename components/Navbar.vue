<template>
  <section class="navbar">
    <div class="container">
      <div class="navbar__logo">
        <nuxt-link to="/">
          <img src="/navbar/logo.png" alt="#" />
          <span>Работаем с  1992 года!</span>
        </nuxt-link>
      </div>
      <nav>
        <ul class="nav">
          <li class="nav-link">
            <nuxt-link to="#">О заводе</nuxt-link>
            <img src="/line.svg" alt="">
          </li>
          <li class="nav-link">
            <nuxt-link to="#">Каталог</nuxt-link>
            <img src="/line.svg" alt="">
          </li>
          <li class="nav-link">
            <nuxt-link to="#">Цены</nuxt-link>
            <img src="/line.svg" alt="">
          </li>
          <li class="nav-link">
            <nuxt-link to="#">Услуги</nuxt-link>
            <img src="/line.svg" alt="">
          </li>
          <li class="nav-link">
            <nuxt-link to="#">Контакты</nuxt-link>
            <img src="/line.svg" alt="">
          </li>
        </ul>
      </nav>
    </div>
  </section>
</template>

<script>
export default {
  name: "Navbar"
}
</script>

<style lang="scss">
.navbar {
  display: flex;
  justify-content: space-between;
  &__logo {
    a {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    span {
      color: #222A31;
    }
  }
  nav {
    ul {
      li {
        display: flex;
        justify-content: center;
        align-items: center;
        column-gap: 35px;
        font-size: 15px;
        font-weight: 700;
        text-transform: uppercase;
        a {
          color: #474747;
        }
        img {
          background-color: #D9D9D9;
        }
      }
    }
  }
}
</style>
