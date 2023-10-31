<template>
  <div class="bg">
    <NavBarPages />
    <div class="bar d-flex justify-content-end">
      <form class="search">
        <input class="search" type="search" placeholder="Search" />
      </form>
    </div>
    <div class="d-flex col-lg-2">
      <h2 class="serv">Cleaning</h2>
    </div>
    <div class="child d-flex justify-content-center col-md-6">
      <div class="d-flex justify-content-center">
        <nav class="accordion arrows">
          <input type="radio" name="accordion" id="cb1" />
          <section class="box">
            <label class="box-title" for="cb1">Full house cleaning</label>
            <label class="box-close" for="acc-close"></label>
            <div class="box-content d-flex flex-wrap">
              <div class="col-4">
                <p>Living room & Bedroom</p>
                <ul>
                  <li>Dust all accessible surfaces</li>
                  <li>Wipe down all mirrors and glass fixtures</li>
                  <li>Clean all floor surfaces</li>
                  <li>Take out garbage and recycling</li>
                  <li>Tidy up furniture</li>
                  <li>Wipe down windows and mirrors</li>
                  <li>Change bed sheets</li>
                </ul>
              </div>
              <div class="col-4">
                <p>Bathroom</p>
                <ul>
                  <li>Wash and sanitize the toilet, shower, tub and sink</li>
                  <li>Dust all accessible surfaces</li>
                  <li>Wipe down all mirrors and glass fixtures</li>
                  <li>Clean all floor surfaces</li>
                  <li>Take out garbage</li>
                </ul>
              </div>
              <div class="col-4">
                <p>Kitchen</p>
                <ul>
                  <li>Dust all accessible surfaces</li>
                  <li>Empty sink and wash dirty dishes</li>
                  <li>Wipe down exterior of stove, oven and fridge</li>
                  <li>Clean all floor surfaces</li>
                  <li>Take out garbage</li>
                </ul>
              </div>
            </div>
          </section>
          <input type="radio" name="accordion" id="cb2" />
          <section class="box">
            <label class="box-title" for="cb2"
              >Deep clean ( Bathroom & Kitchen )</label
            >
            <label class="box-close" for="acc-close"></label>
            <div class="box-content d-flex flex-wrap">
              <div class="col-6">
                <p>Kitchen</p>
                <ul>
                  <li>Clean inside and outside of all appliances.</li>
                  <li>Clean cabinets and drawers, inside and out.</li>
                  <li>Clean countertops and backsplashes.</li>
                  <li>Clean the refrigerator and freezer.</li>
                  <li>Mop the floor.</li>
                  <li>Clean the walls and ceiling.</li>
                </ul>
              </div>
              <div class="col-6">
                <p>Bathroom</p>
                <ul>
                  <li>Clean the toilet, inside and out.</li>
                  <li>Clean the sink, countertop, and backsplash.</li>
                  <li>
                    Clean the bathtub or shower, including the walls, floor, and
                    fixtures.
                  </li>
                  <li>Clean the mirror.</li>
                  <li>Clean the floors and walls.</li>
                  <li>Clean the medicine cabinet.</li>
                  <li>Clean all light fixtures and other surfaces.</li>
                </ul>
              </div>
            </div>
          </section>
          <input type="radio" name="accordion" id="cb3" />
          <section class="box mb-5">
            <label class="box-title" for="cb3">Deep clean furniture</label>
            <label class="box-close" for="acc-close"></label>
            <div class="box-content d-flex flex-wrap">
              <div class="col-12">
                <p>
                  Cleaning your furniture pieces like: chairs. sofas, curtains
                  and carpets.
                </p>
                <ul>
                  <li>Vacuum the pieces thoroughly and wash them.</li>
                  <li>
                    Remove cushion and outer covers, and vacuum them separately.
                  </li>
                  <li>Spot clean any stains.</li>
                  <li>Iron pieces if needed</li>
                </ul>
              </div>
            </div>
          </section>

          <input type="radio" name="accordion" id="acc-close" />
        </nav>
      </div>
    </div>
    <div class="row justify-content-center gap-4">
      <div
        class="card mb-4 col-md-4 col-sm-6 col-6"
        v-for="(worker, i) in workerData.slice(17,26)"
        :key="i"
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
            {{ worker["Service_1"] }}
            {{ worker["Service_1_price"] }}
          </p>
          <p class="card-text">
            {{ worker["Service_2"] }}
            {{ worker["Service_2_price"] }}
          </p>
          <p class="card-text">
            {{ worker["Service_3"] }}
            {{ worker["Service_3_price"] }}
          </p>
          <p class="card-text">
            {{ worker["Service_4"] }}
            {{ worker["Service_4_price"] }}
          </p>
          <p class="card-text">Exp years:
            {{ worker["Experience"] }}
          </p>
          <star-rating active-color="#F97B22"  star-size=30 :rating="`${worker.Rate}`" style="justify-content: center;"></star-rating>
          <router-link to="workerProfile">
            <a class="btn d-block m-auto mb-3 mt-3">See details</a></router-link
          >
        </div>
      </div>
    </div>
    <!-- http://localhost:8080/img/cleaner1.65740dc5.jpg -->
    <!-- <img src="@/assets/subservices/cleaner1.jpg" alt=""> -->
    <!-- <div class="container">
      <div class="row gy-4">
        <div
          class="card col-lg-4 col-md-4 col-sm-6 col-6"
          v-for="(worker, i) in workerData"
          :key="i"
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
              Full house (120m2 ~ 170m2):
              {{ worker["Full house (120m2 ~ 170m2)"] }}
            </p>
            <p class="card-text">{{ worker["Full house (120m2 ~ 170m2)"] }}</p>
            <p class="card-text">{{ worker["Full house (120m2 ~ 170m2)"] }}</p>
            <svg
              class="d-block m-auto"
              xmlns="http://www.w3.org/2000/svg"
              width="125"
              height="22"
              viewBox="0 0 125 22"
              fill="none"
            >
              <path
                d="M10.8425 0.0842438L13.2768 7.57622L21.1543 7.57622L14.7813 12.2065L17.2155 19.6985L10.8425 15.0682L4.46943 19.6985L6.90373 12.2065L0.530669 7.57622L8.4082 7.57622L10.8425 0.0842438Z"
                fill="#F97B22"
              />
              <path
                d="M36.5935 0.0842438L39.0278 7.57622L46.9053 7.57622L40.5322 12.2065L42.9665 19.6985L36.5935 15.0682L30.2204 19.6985L32.6547 12.2065L26.2816 7.57622L34.1592 7.57622L36.5935 0.0842438Z"
                fill="#F97B22"
              />
              <path
                d="M62.3444 0.0842438L64.7787 7.57622L72.6563 7.57622L66.2832 12.2065L68.7175 19.6985L62.3444 15.0682L55.9714 19.6985L58.4057 12.2065L52.0326 7.57622L59.9102 7.57622L62.3444 0.0842438Z"
                fill="#F97B22"
              />
              <path
                d="M88.0954 0.0842438L90.5297 7.57622L98.4072 7.57622L92.0342 12.2065L94.4685 19.6985L88.0954 15.0682L81.7224 19.6985L84.1567 12.2065L77.7836 7.57622L85.6611 7.57622L88.0954 0.0842438Z"
                fill="#F97B22"
              />
              <path
                d="M113.846 0.0842438L116.281 7.57622L124.158 7.57622L117.785 12.2065L120.219 19.6985L113.846 15.0682L107.473 19.6985L109.908 12.2065L103.535 7.57622L111.412 7.57622L113.846 0.0842438Z"
                fill="#F97B22"
              />
            </svg>
            <router-link to="workerProfile">
              <a class="btn d-block m-auto mb-3 mt-3"
                >See details</a
              ></router-link
            >
          </div>
        </div>
      </div>
    </div> -->
    <FooterComponent />
  </div>
</template>

<script>
import NavBarPages from "@/components/NavBarPages.vue";
import FooterComponent from "@/components/footer.vue";
import axios from "axios";
import StarRating from "vue-star-rating"
export default {
  components: {
    NavBarPages,
    FooterComponent,
    StarRating,
  },
  data() {
    return {
      // pathImg: "../assets/subservices/",
      // imgArr:[],
      workerData: [],
    };
  },
  created() {
    axios
      .get("http://localhost:2000/worker")
      .then((res) => {
        this.workerData = res.data;
        // console.log(res.data);
        // this.pathImg = "../assets/subservices/" + res.data['img'];
      })
      .catch((err) => console.log(err));
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/global/colors";
@import "../scss/global/variables";
@import "../scss/main.scss";

.bg {
  background-color: $backgroundColor;
}

.bar {
  justify-content: end;
  margin-right: 140px;
  width: auto;
  height: 100px;
}
input.search {
  border: 2px solid $blueColor;
  border-radius: 28px;
  width: 350px;
  padding: 9px 4px 9px 40px;
  // margin-left: 550px;
  margin-top: 40px;
  background: $backgroundColor
    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='orange' width='16' height='16' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'%3E%3C/path%3E%3C/svg%3E")
    no-repeat 13px center;
  &:focus {
    border-color: $orangeColor;
    outline: none;
  }
}

.serv {
  justify-content: left;
  margin-left: 140px;
  font-size: $title;
  font-family: "raleway";
  font-weight: bold;
  text-align: center;
  color: $blueColor;
  padding: 20px;
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
    transition: all 1ms linear;
    border: 3px solid $blueColor;
    border-radius: 33px;
    width: 1255px;
    height: 69px;
    padding: 9px 4px 9px 40px;
    margin: 20px;
    background: white;
    overflow: hidden;
    @media (max-width: 767px) {
      width: 350px;
      height: 55px;
    }
  }
}
.box-title {
  font-weight: $semiBold;
  font-size: $subTitle;
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

  @media (min-width: 767px) {
    // font-size: 20px;
  }
}
.box-content {
  width: calc(100% - 40px);
  padding: 10px 5px;
  font-size: $paragraph;
  font-weight: $regular;
  color: $blueColor;
  display: none;
  @media (min-width: 767px) {
    // font-size: 20px;
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
  margin-top: 20px;
}
input:checked + .box .box-title {
  border-bottom: 1px solid $blueColor;
}
input:checked + .box .box-content,
input:checked + .box .box-close {
  display: inline-block;
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
}

.child {
  margin: auto;
  margin-top: 50px;
  margin-bottom: 25px;
  //   padding: 15px;
  //   background-color: $whiteColor;
  width: 100%;
  height: auto;
  //   border-radius: $border-radius-big;
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

.row {
  margin: 0 !important; 
}

img {
  margin-top: 15px;
  clip-path: circle();
  height: 200px;
}

p {
  margin: 0px;
}
// .card{
//   border-radius: 25px;
// }
.card-title {
  text-align: center;
  font-size: $subTitle;
  font-weight: bold;
  color: $blueColor;
}

.card-text {
  text-align: left;
  font-size: $paragraph;
  color: $blueColor;
}

.btn {
  @include button;
}
</style>
