<template>
  <div class="bg">
    <NavBarPages />
    <div class="bar d-flex justify-content-end">
      <form class="search">
        <input class="search" type="search" placeholder="Search" v-model="input" />
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
            <label class="box-title" for="cb2">Deep clean ( Bathroom & Kitchen )</label>
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
      <div class="card mb-4 col-md-4 col-sm-6 col-6" v-for="(worker, i) in workerData.slice(17, 26)" :key="i"
        style="width: 25rem; border-radius: 15px">
        <img :src="`${worker.img}`" class="card-img-top object-fit-cover" :alt="`workerimg${i}`" />

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
          <p class="card-text">
            Exp years:
            {{ worker["Experience"] }}
          </p>
          <star-rating active-color="#F97B22" star-size="30" :rating="`${worker.Rate}`"
            style="justify-content: center"></star-rating>
          <router-link :to="`/./workerProfile/${worker.id}`">
            <a class="btn d-block m-auto mb-3 mt-3">See details</a></router-link>
        </div>
      </div>
    </div>
    <FooterComponent />
  </div>
</template>

<script>
import NavBarPages from "@/components/NavBarPages.vue";
import FooterComponent from "@/components/footer.vue";
import axios from "axios";
import StarRating from "vue-star-rating";
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
      input: "",
    };
  },
  created() {
    axios
      .get("http://localhost:2000/worker")
      .then((res) => {
        this.workerData = res.data;
      })
      .catch((err) => console.log(err));
  },
  computed: {
    handleSearch() {
      return (
        this.workerData.filter((elem) =>
          elem.Service_1.toLowerCase().includes(this.input.toLowerCase())
        ),
        this.workerData.filter((elem) =>
          elem.Service_2.toLowerCase().includes(this.input.toLowerCase())
        ),
        this.workerData.filter((elem) =>
          elem.Service_3.toLowerCase().includes(this.input.toLowerCase())
        ),
        this.workerData.filter((elem) =>
          elem.Experience.toLowerCase().includes(this.input.toLowerCase())
        )
      );
    },
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
  background: $backgroundColor url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='orange' width='16' height='16' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'%3E%3C/path%3E%3C/svg%3E") no-repeat 13px center;

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

.row {
  margin: 0px !important;
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

input:checked+.box {
  height: auto;
  margin-top: 20px;
}

input:checked+.box .box-title {
  border-bottom: 1px solid $blueColor;
}

input:checked+.box .box-content,
input:checked+.box .box-close {
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
