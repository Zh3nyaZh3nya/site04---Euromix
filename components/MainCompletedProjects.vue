<template>
  <section class="projects">
    <div class="container">
      <div class="projects-title">
        <h2>выполненные проекты</h2>
      </div>
      <div class="projects-subtitle">
        <img src="/main/projectsMain/marks.svg" alt="">
        <p>«ЗАВОД EUROMIX» производитель бетонных заводов EUROMIX CROCUS - это предприятие, имеющее большой опыт в производстве строительного и технологического оборудования. Наш завод производит и поставляет супермобильные, мобильные, стационарные бетонные заводы EUROMIX CROCUS, бетоносмесители серии EUROMIX, растворо- бетонные узлы (РБУ) бетоносмесительные установки (БСУ), а также отдельные комплектующие бетонных заводов, системы рециклинга бетона, тепловые центры для бетонных заводов зимнего исполнения. Предприятие осуществляет продажу бетонных заводов EUROMIX CROCUS с доставкой по России, СНГ и странам дальнего зарубежья</p>
      </div>
      <div class="projects__content">
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
      <div class="projects-btn">
        <UIButton>Все проекты</UIButton>
      </div>
    </div>
  </section>
</template>

<script>
import UIButton from "@/components/UI/UIButton";
export default {
  name: "MainCompletedProjects",
  components: {UIButton},
}
</script>

<style lang="scss">
.projects {
  background: url("/main/projectsMain/bg.png") no-repeat;
  background-size: cover;
  padding: 35px 0 18px 0;
  margin-bottom: 70px;
  &-title {
    margin-bottom: 39px;
    h2 {
      color: #FFF;
      font-size: 24px;
      font-weight: 700;
      text-transform: uppercase;
    }
  }
  &-subtitle {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    column-gap: 27px;
    margin-bottom: 45px;
    p {
      width: 982px;
      color: #bbbaba;
      font-size: 16px;
      font-style: italic;
      font-weight: 400;
      line-height: 24px;
    }
  }
  &__content {
    margin-bottom: 43px;
    &-card {
      &-img {
        position: relative;
        margin-bottom: 11px;
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
      &-text {
        display: flex;
        align-items: center;
        column-gap: 15px;
        &-date {
          background: #FF6B00;
          transform: skew(20deg);
          padding: 6px 19px 7px 23px;
          text-align: start;
          width: 94px;
          border-radius: 3px;
          span {
            transform: skew(-20deg);
            color: #fff;
            display: inline-block;
            font-weight: 500;
          }
          span:nth-child(1) {
            font-size: 20px;
          }
          span:nth-child(2) {
            font-size: 14px;
          }
          span:nth-child(3) {
            font-size: 15px;
          }
        }
        p {
          width: 400px;
          color: #FFF;
          font-size: 18px;
          font-weight: 400;
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
