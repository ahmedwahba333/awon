<template>
  <div class="bg">
    <NavBarPages />
    <div
      id="myCarousel"
      class="carouselSlide carousel-fade"
      data-bs-ride="carousel"
      data-bs-interval="2100"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            class="d-block w-100 object-fit-cover"
            src="../assets/images/sliderphotos/slider-md-1.jpg"
            alt="slide1"
          />
          <div class="carousel-caption">
            <h1>HANDY HANDS THAT ARE HAPPY TO HELP</h1>
          </div>
        </div>
        <div class="carousel-item">
          <img
            class="d-block w-100 object-fit-cover"
            src="../assets/images/sliderphotos/slider-md-2.jpg"
            alt="slide2"
          />
          <div class="carousel-caption">
            <h1>HANDY HANDS THAT ARE HAPPY TO HELP</h1>
          </div>
        </div>
        <div class="carousel-item">
          <img
            class="d-block w-100 object-fit-cover"
            src="../assets/images/sliderphotos/slider-md-3.jpg"
            alt="slide3"
          />
          <div class="carousel-caption">
            <h1>HANDY HANDS THAT ARE HAPPY TO HELP</h1>
          </div>
        </div>
        <div class="carousel-item">
          <img
            class="d-block w-100 object-fit-cover"
            src="../assets/images/sliderphotos/slider-md-4.jpg"
            alt="slide4"
          />
          <div class="carousel-caption">
            <h1>HANDY HANDS THAT ARE HAPPY TO HELP</h1>
          </div>
        </div>
        <div class="carousel-item">
          <img
            class="d-block w-100 object-fit-cover"
            src="../assets/images/sliderphotos/slider-md-5.jpg"
            alt="slide5"
          />
          <div class="carousel-caption">
            <h1>HANDY HANDS THAT ARE HAPPY TO HELP</h1>
          </div>
        </div>
        <div class="carousel-caption">
          <h1>HANDY HANDS THAT ARE HAPPY TO HELP</h1>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row text-center my-5 ">
        <h2>We offer +200 workers to do everything you need</h2>
      </div>
      <div class="row justify-content-center my-5 gap-5">
        <div class="col-12 col-lg-5 ">
          <div class="card  mb-2 gap-2">
            <img
              src="../assets/images/cardphotos/cleaning.jpg"
              class="card-img-top object-fit-cover"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">House Keeping</h5>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-5">
          <div class="card  mb-2 gap-2">
            <img
              src="../assets/images/cardphotos/foodServices.jpeg"
              class="card-img-top object-fit-cover"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Food Services</h5>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center gap-5" >
        <div class="col-12 col-lg-5" >
          <div class="card  mb-2 gap-2">
            <img
              src="../assets/images/cardphotos/elderly-care.jpg"
              class="card-img-top object-fit-cover"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Care giving</h5>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-5">
          <div class="card  mb-2 gap-2">
            <img
              src="../assets/images/cardphotos/carpentry.jpg"
              class="card-img-top object-fit-cover"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">House Maintenance</h5>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center my-5">
        <div class="col-lg-5">
          <div class="card mb-2 gap-2">
            <img
              src="../assets/images/cardphotos/private-services.jpg"
              class="card-img-top object-fit-cover"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Personal services</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
    <FooterComponent />
  </div>
</template>

<script>
import NavBarPages from "@/components/NavBarPages.vue";
import FooterComponent from "@/components/footer.vue";
export default {
  name: "LandingPage",
  components: { FooterComponent, NavBarPages },
};
</script>

<style lang="scss" scoped>
@import "../scss/global/colors";
@import "../scss/global/variables";

.carousel-caption {
  top: 0;
  h1 {
    color: $blueColor;
    text-shadow: 2px 2px 5px $blueColor;
    font-weight: bold;
    width: 90%;
    text-align: left;
    opacity: 1;
    @media (min-width: 576px) {
      width: 70%;
    }
    @media (min-width: 767px) {
      width: 50%;
    }
    @media (min-width: 1200px) {
      width: 40%;
    }
    @media (min-width: 1400px) {
      width: 30%;
    }
  }
}

.carouselSlide {
  .carousel-inner{
 height: 550px;
  img {
    position: absolute;
    top: 0;
    left: 0;
    min-height: 500px;
    opacity: 0.5;
  }
  }
 
}
.bg {
  background-color: $backgroundColor;
}
.container {
  h2 {
    color: $blueColor;
    font-size: $title;
    font-weight: $semiBold;
  }
  .card {
    height: 20rem;
    img {
      height: 15rem;
    }
  }
  .card-title {
    font-size: $subTitle;
    font-weight: bold;
    color: $blueColor ;
    text-align: center;
  }
}
</style>
