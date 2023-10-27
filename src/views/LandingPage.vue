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
 <!-- We offer -->
      <div class="row justify-content-center my-5 gap-5">
        <div class="col-12 col-lg-5">
        <h2><span>We offer</span> +200 workers to do everything you’d need, 
        ensuring quality & speed for your everyday tasks, so you can focus on what matters to you. 
        we’re your <span>Awon.</span></h2>
      </div>
        <div class="col-12 col-lg-5" v-for="(category,id) in categories" :key="id">
          <div class="card mb-2 gap-2">
            <img
              :src="`${category.img}`"
              class="card-img-top object-fit-cover"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">{{ category['Name'] }}</h5>
            </div>
          </div>
        </div>
      </div>
      
<!-- Our Happy customer -->
      <div class="row text-center my-5">
        <h2>Our Happy Customer</h2>
      </div>
      <div class="row justify-content-center gap-4">
          <div class="box m-0 col-md-4 col-sm-6 col-12" v-for="(rev,i) in cxReview.slice(0,6)" :key="i" >
            <div class="d-flex flex-row justify-content-between">
              <div class="p-2">
                <h4>{{rev['Name']}}</h4>
               <star-rating active-color="#F97B22"  star-size=30 read-only :rating="`${rev.Rate}`"></star-rating>
              </div>
              <div>
                <img :src="`${rev.picture}`" alt="Cx" />
              </div>
            </div>
            <div>
              <p class="p-2">
                {{rev['Review']}}
              </p>
            </div>
          </div>
      </div>

<!-- Contact Us -->
      <div class="row text-center my-5" id>
        <h2>Contact us</h2>
      </div>
      <div class="d-flex justify-content-center">
        <form>
          <div class="mb-3 col-lg-6 col-md-4">
            <div>
              <input
                type="text"
                class="input"
                id="inputName"
                placeholder="name"
              />
            </div>
          </div>
          <div class="mb-3 col-lg-6 col-md-4">
            <div>
              <input
                type="email"
                class="input"
                id="inputEmail"
                placeholder="e-mail"
              />
            </div>
          </div>
          <div class="mb-3 col-lg-6 col-md-4">
            <div>
              <input
                type="text"
                class="input"
                id="inputPhone"
                placeholder="phone number"
              />
            </div>
          </div>
          <div class="mb-3 col-lg-6 col-md-4">
            <div>
              <textarea
                class="input"
                placeholder="write you message here"
                id="inputMessage"
              ></textarea>
            </div>
          </div>
          <button class="btn d-block m-auto mb-3">send</button>
        </form>
      </div>

      <div class="row text-center my-5">
        <h2>FAQs</h2>
      </div>
      <div class="d-flex justify-content-center">
    

        <nav class="accordion arrows">
          <input type="radio" name="accordion" id="cb1" />
          <section class="box">
            <label class="box-title" for="cb1"> How do i book a service?</label>
            <label class="box-close" for="acc-close"></label>
            <div class="box-content">
                  it’s so easy. all you have to do is choose 
                  the service you need and book a worker that you deem suitable with the time slots available.  
            </div>
          </section>
          <input type="radio" name="accordion" id="cb2" />
          <section class="box">
            <label class="box-title" for="cb2">How can i pay?</label>
            <label class="box-close" for="acc-close"></label>
            <div class="box-content">
            we accept cash on delivery of service and you can also pay online using your debit card.
            </div>
          </section>
          <input type="radio" name="accordion" id="cb3" />
          <section class="box mb-5">
            <label class="box-title" for="cb3">What happen if the worker is late?</label>
            <label class="box-close" for="acc-close"></label>
            <div class="box-content">
                    we  track our workers to make sure they arrive on time, 
                    we also send you a confirmation text upon going to your house.
            </div>
          </section>

          <input type="radio" name="accordion" id="acc-close" />
        </nav>
      </div>
    </div>
    <FooterComponent />
  </div>
</template>

<script>
import NavBarPages from "@/components/NavBarPages.vue";
import FooterComponent from "@/components/footer.vue";
import axios from 'axios';
import StarRating from 'vue-star-rating';
export default {
  name: "LandingPage",
  components: { FooterComponent, NavBarPages, StarRating },
  data() {
    return {
       categories:[],
       cxReview:[]
    }
  },
  created(){
    this.getCategory();
    this.getReview();
  },
  methods:{
    getCategory(){
      axios.get("http://localhost:2000/category")
      .then((res)=> {this.categories = res.data})
      .catch((err)=>{console.log(err)})
    },
    getReview(){
      axios.get("http://localhost:2000/review")
      .then((res)=> {console.log(this.cxReview = res.data)})
      .catch((err)=>{console.log(err)})
    }
  }
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
  .carousel-inner {
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
    line-height: 4rem;
    @media (max-width:1200px) {
      line-height: 3.2rem;
    }
    span{
      font-size: 35px;
    }
  }
  .card {
    height: 20rem;
    &:hover{
      box-shadow:0 0 15px $orangeColor ;
    }
    img {
      height: 15rem;
    }
  }
  .card-title {
    font-size: $subTitle;
    font-weight: bold;
    color: $blueColor;
    text-align: center;
  }
  .box {
    @include box;
    width: 350px;
    padding: 15px;
    height: 190px;
    margin: 10px;

    img {
      clip-path: circle();
      height: 70px;
    }
  }
  h4 {
    font-size: $paragraph;
  }

  form {
    .input {
      border: 3px solid $blueColor;
      border-radius: 33px;
      width: 716px;
      height: 69px;
      padding: 9px 4px 9px 40px;
      background: white;
      @media (max-width: 767px) {
        width: 350px;
        height: 55px;
      }
      &:focus {
        border-color: $orangeColor;
        outline: none;
      }
      &#inputMessage {
        height: 262px;
      }
    }
    .input[placeholder] {
      font-size: $paragraph;
      font-weight: $semiBold;
    }
    .btn {
      @include button;
    }
  }

  .accordion {
    margin: auto;
    // width: 50%;
  }
  .accordion input {
    display: none;
  }
  .accordion {
    .box {
      position: relative;
      background: white;
      height: 64px;
      transition: all 1ms linear ;
      border: 3px solid $blueColor;
      border-radius: 33px;
      width: 716px;
      height: 69px;
      padding: 9px 4px 9px 40px;
      background: white;
      @media (max-width: 767px) {
        width: 350px;
        height: 55px;
      }
    }

    .box-title {
       
      font-weight: $semiBold;
      font-size: $small;
      color: $blueColor;
      width: calc(100% - 30px);
      height: 64px;
      text-align: center;
      line-height: 36px;
      display: inline-block;
      cursor: pointer;
      -webkit-touch-callout: none;
      -webkit-user-select: none;
      -khtml-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;

       @media(min-width: 767px) {
        font-size: 20px;
      }
    }
    .box-content {
      width: calc(100% - 40px);
      padding: 30px 20px;
      font-size: $small;
      font-weight: $semiBold;
      color: $blueColor;
      display: none;
       @media(min-width: 767px) {
        font-size: 20px;
       }
    }
    .box-close {
      position: absolute;
      height: 64px;
      width: 100%;
      top: 0;
      left: 0;
      cursor: pointer;
      display: none;
    }
    input:checked + .box {
      height: auto;
      margin-top: 20px ;
    }
    input:checked + .box .box-title {
      border-bottom: 1px solid $blueColor;
    }
    input:checked + .box .box-content,
    input:checked + .box .box-close {
      display: inline-block;
    }
  }


}
</style>
