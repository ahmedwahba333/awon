<template>
  <div class="bg">
    <NavBarPages />

    <div class="container-fluid">
      <div class="row pt-3 justify-content-center align-items-center">
        <button
          class="servicesDrop dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="37"
            viewBox="0 0 35 37"
            fill="none"
          >
            <path
              d="M33.855 30.0427L32.1161 28.3037C33.0226 26.9348 33.5591 25.2884 33.5591 23.5124C33.5591 18.7026 29.6557 14.7993 24.8459 14.7993C20.0361 14.7993 16.1328 18.7026 16.1328 23.5124C16.1328 28.3222 20.0361 32.2256 24.8459 32.2256C26.6219 32.2256 28.2498 31.6891 29.6372 30.7826L31.3761 32.5215C31.7276 32.873 32.1716 33.0395 32.6341 33.0395C33.0966 33.0395 33.5406 32.873 33.892 32.5215C34.5395 31.8556 34.5395 30.7456 33.855 30.0427Z"
              fill="#F97B22"
            />
            <path
              d="M31.7446 3.73684V7.84366C31.7446 9.34209 30.8196 11.2105 29.8947 12.154L29.5617 12.45C29.3027 12.6904 28.9142 12.7459 28.5812 12.635C28.2112 12.5055 27.8413 12.413 27.4713 12.3205C26.6573 12.117 25.7878 12.0245 24.8999 12.0245C18.5177 12.0245 13.3379 17.2043 13.3379 23.5865C13.3379 25.6954 13.9114 27.7673 15.0028 29.5432C15.9278 31.0971 17.2227 32.3921 18.6287 33.2616C19.0541 33.539 19.2206 34.131 18.8506 34.464C18.7211 34.575 18.5917 34.6675 18.4622 34.76L15.8723 36.4434C13.4674 37.9419 10.1561 36.2584 10.1561 33.2616V23.3645C10.1561 22.051 9.41609 20.3676 8.67612 19.4427L1.66493 11.969C0.739968 11.0255 0 9.34209 0 8.23214V3.92183C0 1.68343 1.66493 0 3.68134 0H28.0632C30.0797 0 31.7446 1.68343 31.7446 3.73684Z"
              fill="#F97B22"
            />
          </svg>
          Filter Services
        </button>
        <ul class="dropdown-menu">
          <li>
            <div class="dropdown-item">
              <h5>House Keeping</h5>
              <div class="d-flex align-items-center gap-3">
                <div>
                  <input type="checkbox" class="form-check-input" />
                  <label for="" class="form-check-label mt-1 ms-1"
                    >Cleaning</label
                  >
                </div>
                <div>
                  <input type="checkbox" class="form-check-input" />
                  <label for="" class="form-check-label mt-1 ms-1"
                    >Gardening</label
                  >
                </div>
              </div>
            </div>
          </li>
          <hr />

          <li>
            <div class="dropdown-item">
              <h5>Facilities</h5>
              <div class="d-flex align-items-center gap-3">
                <div>
                  <input type="checkbox" class="form-check-input" />
                  <label for="" class="form-check-label mt-1 ms-1"
                    >House Gaurd</label
                  >
                </div>
                <div>
                  <input type="checkbox" class="form-check-input" />
                  <label for="" class="form-check-label mt-1 ms-1"
                    >Driver</label
                  >
                </div>
              </div>
            </div>
          </li>
          <hr />

          <li>
            <div class="dropdown-item">
              <h5>service</h5>
              <div class="d-flex align-items-center gap-3">
                <div>
                  <input type="checkbox" class="form-check-input" />
                  <label for="" class="form-check-label mt-1 ms-1"
                    >Plumbing</label
                  >
                </div>
                <div>
                  <input type="checkbox" class="form-check-input" />
                  <label for="" class="form-check-label mt-1 ms-1"
                    >Carpentry</label
                  >
                </div>
                <div>
                  <input type="checkbox" class="form-check-input" />
                  <label for="" class="form-check-label mt-1 ms-1"
                    >Moving Furniture</label
                  >
                </div>
              </div>
            </div>
          </li>
          <hr />
        </ul>
        <input class="search mt-2" type="search" v-model="input" />
      </div>

      <!-- <div class="row"> -->
        <div class="col-12 col-md-12 col-sm-8 pt-3 mb-3">
          <div id="carouselExampleDark" class="carousel carousel-dark slide">
            <div class="carousel-indicators carasou">
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>

            <div class="carousel-inner mb-5">
              <!-- Carasol first slide -->
              <div class="carousel-item active" data-bs-interval="10000">
                <div class="row justify-content-center gap-4"  >
                <div
                  class="card mb-4 col-md-4 col-sm-6 col-6"
                  v-for="worker in  handleSearch.slice(1,50)" :key="worker.id"
                  style="width: 25rem; border-radius: 15px;"
                >
                  <img
                    :src="`${worker.img}`"
                    class="card-img-top object-fit-cover"
                    :alt="`workerimg${i}`"
                  />

                  <div class="card-body">
                    <h5 class="card-title">
                      {{ worker["First_name"] }} {{ worker["Last_name"] }}
                    </h5>
                    <p class="card-text">
                      {{ worker["Service_1"] }}:
                      {{ worker["Service_1_price"] }}
                    </p>
                    <p class="card-text">
                      {{ worker["Service_2"] }}:
                      {{ worker["Service_2_price"] }}
                    </p>
                    <p class="card-text">
                      {{ worker["Service_3"] }}:
                      {{ worker["Service_3_price"] }}
                    </p>
                    <p class="card-text">
                      {{ worker["Service_4"] }}
                      {{ worker["Service_4_price"] }}
                    </p>
                    <p class="card-text">Exp years:
                      {{ worker["Experience"] }}
                    </p>
                    <star-rating active-color="#F97B22" read-only  star-size=30 :rating="`${worker.Rate}`"></star-rating>
                    <router-link to="workerProfile">
                      <a class="btn d-block m-auto mb-3 mt-3">See details</a></router-link
                    >
                  </div>
                </div>
              </div>
              </div>

              <!-- Carasol slides -->
              <div
                class="carousel-item mb-0 pb-0"
                data-bs-interval="2000"
                v-for="i in 2"
                :key="i"
              >
                <div class="row justify-content-center gap-4">
                <div
                  class="card mb-4 col-md-4 col-sm-6 col-6"
                  v-for="worker in  handleSearch.slice(51,100)" :key="worker.id"
                  style="width: 25rem; border-radius: 15px;"
                >
                  <img
                    :src="`${worker.img}`"
                    class="card-img-top object-fit-cover"
                    :alt="`workerimg${i}`"
                  />

                  <div class="card-body">
                    <h5 class="card-title">
                      {{ worker["First_name"] }} {{ worker["Last_name"] }}
                    </h5>
                    <p class="card-text">
                      {{ worker["Service_1"] }}:
                      {{ worker["Service_1_price"] }}
                    </p>
                    <p class="card-text">
                      {{ worker["Service_2"] }}:
                      {{ worker["Service_2_price"] }}
                    </p>
                    <p class="card-text">
                      {{ worker["Service_3"] }}:
                      {{ worker["Service_3_price"] }}
                    </p>
                    <p class="card-text">
                      {{ worker["Service_4"] }}
                      {{ worker["Service_4_price"] }}
                    </p>
                    <p class="card-text">Exp years:
                      {{ worker["Experience"] }}
                    </p>
                    <star-rating active-color="#F97B22" read-only star-size=30 :rating="`${worker.Rate}`"></star-rating>
                    <router-link to="workerProfile">
                      <a class="btn d-block m-auto mb-3 mt-3">See details</a></router-link
                    >
                  </div>
                </div>
              </div>
              </div>
     
            </div>

            <!-- Carasol Buttons < > -->
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="prev"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 60 60"
                fill="none"
              >
                <path
                  d="M31.0292 7.02944L14.0586 24L31.0292 40.9706"
                  stroke="#F97B22"
                  stroke-width="10"
                />
              </svg>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="next"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 60 60"
                fill="none"
              >
                <path
                  d="M16.9708 7.02944L33.9414 24L16.9708 40.9706"
                  stroke="#F97B22"
                  stroke-width="10"
                />
              </svg>
            </button>
          </div>
        <!-- </div> -->
      </div>
    </div>
    <FooterComponent />
  </div>
</template>

<script>
import NavBarPages from "@/components/NavBarPages.vue";
import FooterComponent from "@/components/footer.vue";
import axios from "axios";
import StarRating from "vue-star-rating"
export default {
  name: "LandingPage",
  components: { FooterComponent, NavBarPages,StarRating },
  data() {
    return {
      workerData: [],
      input:"",
      id:""
    };
  },
  created(){
    this.getWorker();
  },
  methods: {

    getWorker(){
      axios.get("http://localhost:2000/worker")
      .then((res)=> {this.workerData = res.data})
      .catch((err)=>{console.log(err)})
    },
  },
  computed:{
    handleSearch(){
        return this.workerData.filter((elem)=>elem.Service_1.toLowerCase().includes(this.input.toLowerCase()))
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/global/colors";
@import "../scss/global/variables";

.bg {
  background-color: $backgroundColor;
}

.servicesDrop{
  background-color: $backgroundColor;
  width:fit-content;
  color:$blueColor;
  border:solid 2px $backgroundColor;
  border-radius: 10px;
  border-color: $orangeColor;

}

.dropdown-menu{
  width:fit-content;
  padding: 20px;

}

li{
  label , h5

.servicesDrop {
  background-color: $backgroundColor;
  width: fit-content;
}
}
.search{
    margin-left:35px ;
}
input.search {
    border: 2px solid black;
    border-radius: 28px;
    width: 350px;
    padding: 9px 4px 9px 40px;
    background: $backgroundColor
      url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='orange' width='16' height='16' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'%3E%3C/path%3E%3C/svg%3E")
      no-repeat 13px center;
    &:focus {
      border-color: $orangeColor;
      outline: none;
    }
  }

.reviewImg{
    height: 80px;
    width: 80px;
}

.reviewBox{
    font-size: $paragraph ;
    font-weight:normal;
    display: flex;
    justify-content: center;

    svg ,.stars{
        display: inline;
    }

    .review{
        font-weight:normal;
        font-size: $small;
    }

    .CXName{
        font-size: $small ;
    }
}
.carousel .carousel-item{
 background-color: $backgroundColor;
}
.carousel .carousel-indicators button {
   width: 20px;
   height: 20px;
   border-radius: 100%;
   background-color:$orangeColor;
   position: relative;
   bottom: -60px;

}




.search {
  margin-left: 35px;
}
input.search {
  border: 2px solid black;
  border-radius: 28px;
  width: 350px;
  padding: 9px 4px 9px 40px;
  background: $backgroundColor
    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='orange' width='16' height='16' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'%3E%3C/path%3E%3C/svg%3E")
    no-repeat 13px center;
  &:focus {
    border-color: $orangeColor;
    outline: none;
  }
}

.reviewImg {
  height: 80px;
  width: 80px;
}

.reviewBox {
  font-size: $paragraph;
  font-weight: normal;
  display: flex;
  justify-content: center;

  svg,
  .stars {
    display: inline;
  }

  .review {
    font-weight: normal;
    font-size: $small;
  }

  .CXName {
    font-size: $small;
  }
}
.carousel .carousel-item {
  background-color: $backgroundColor;
}
.carousel .carousel-indicators button {
  width: 20px;
  height: 20px;
  border-radius: 100%;
  background-color: $orangeColor;
  position: relative;
  bottom: -60px;
}

.search {
  margin-left: 35px;
}
input.search {
  border: 2px solid black;
  border-radius: 28px;
  width: 350px;
  padding: 9px 4px 9px 40px;
  background: $backgroundColor
    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='orange' width='16' height='16' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'%3E%3C/path%3E%3C/svg%3E")
    no-repeat 13px center;
  &:focus {
    border-color: $orangeColor;
    outline: none;
  }
}

.reviewImg {
  height: 80px;
  width: 80px;
}

.reviewBox {
  font-size: $paragraph;
  font-weight: normal;
  display: flex;
  justify-content: center;

  svg,
  .stars {
    display: inline;
  }

  .review {
    font-weight: normal;
    font-size: $small;
  }

  .CXName {
    font-size: $small;
  }
}
.carousel .carousel-item {
  background-color: $backgroundColor;
}
.carousel .carousel-indicators button {
  width: 20px;
  height: 20px;
  border-radius: 100%;
  background-color: $orangeColor;
  position: relative;
  bottom: -60px;
}


.serv {
  font-size: $title;
  font-family: "raleway";
  font-weight: bold;
  text-align: center;
  color: $blueColor;
}

.servpara {
  font-size: $paragraph;
  font-family: "raleway";
  color: $blueColor;
}

img {
  margin-top: 15px;
  clip-path: circle();
  height: 200px;
}

.card-title {
  text-align: center;
  font-size: $subTitle;
  font-weight: bold;
  color: $blueColor;
}

.card-text {
  text-align: center;
  font-size: $paragraph;
  color: $blueColor;
}
.btn {
  @include button;
}
.carousel-control-prev,.carousel-control-next{
width: 5%;
}


.carousel-control-prev,
.carousel-control-next {
  width: 5%;
}
.carousel-control-prev,
.carousel-control-next {
  width: 5%;
}
</style>
