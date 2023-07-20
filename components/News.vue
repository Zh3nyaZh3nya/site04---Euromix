<template>
  <section class="news">
    <div class="container">
      <div class="news-title">
        <h2>новости компании</h2>
      </div>
      <div class="news__content">
        <div class="row">
          <div class="col-lg-6" v-for="item in 2" :key="item">
            <div class="projects__content-card">
              <div class="projects__content-card-img">
                <img src="/main/projectsMain/img1.png" alt="">
                <button>
                  <img src="/main/servicesMain/arrowButton.svg" alt="">
                </button>
              </div>
              <div class="projects__content-card-text">
                <div class="projects__content-card-text-date">
                  <span>23</span> <span>ноя</span>
                  <span>2022</span>
                </div>
                <p>В город Хабаровск произведена отгрузка бетоносмесителя EUROMIX 600.300М.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="news-btn">
        <UIButton>все новости</UIButton>
      </div>
    </div>
  </section>
</template>

<script>
import UIButton from "@/components/UI/UIButton";
export default {
  name: "MainNews",
  components: {UIButton}
}
</script>

<style lang="scss">
.news {
  margin-bottom: 40px;
  &-title {
    h2 {
      color: #222A31;
      font-size: 24px;
      font-weight: 700;
      text-transform: uppercase;
    }
  }
  &__content {
    margin-bottom: 48px;
  }

  .projects__content-card-text {
    p {
      color: #222A31;
      font-size: 18px;
      font-weight: 400;
    }
  }

  .projects__content-card-img button {
    right: 1px;
  }

  .news-btn {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
