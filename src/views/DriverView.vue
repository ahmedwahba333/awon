<template>
  <div class="bg">
    <NavBarPages />
    <div class="bar d-flex justify-content-end">
      <form class="search">
        <input class="search" type="search" placeholder="Search" />
      </form>
    </div>
    <div class="child">
      <h2 class="serv">Driver</h2>
      <p class="servpara">
        We provide transportation for you from one location to another. It is
        essential for our drivers that they transport passengers in a safe,
        comfortable and professional manner while simultaneously keeping track
        of navigation, traffic and timing.
      </p>
    </div>
    <div class="row justify-content-center gap-4">
      <div class="card mb-4 col-md-4 col-sm-6 col-6" v-for="(worker, i) in workerData.slice(121, 130)" :key="i"
        style="width: 25rem; border-radius: 15px">
        <img :src="`${worker.img}`" class="card-img-top object-fit-cover" :alt="`workerimg${i}`" />

        <div class="card-body">
          <h5 class="card-title">
            {{ worker["First_name"] }} {{ worker["Last_name"] }}
          </h5>
          <p class="card-text">
            {{ worker["Service_1_price"] }}
            LE/hour
          </p>
          <p class="card-text">Exp: {{ worker["Experience"] }} years</p>
          <star-rating active-color="#F97B22" star-size="30" :rating="`${worker.Rate}`"
            style="justify-content: center"></star-rating>
          <router-link :to="`/workerProfile/${worker.id}`">
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
  background: $backgroundColor url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='orange' width='16' height='16' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'%3E%3C/path%3E%3C/svg%3E") no-repeat 13px center;

  &:focus {
    border-color: $orangeColor;
    outline: none;
  }
}

.row {
  margin: 0px !important;
}

.child {
  margin-left: 135px;
  margin-top: 25px;
  margin-bottom: 50px;
  padding: 15px;
  background-color: $whiteColor;
  width: 42%;
  height: auto;
  border-radius: $border-radius-big;
}

.serv {
  font-size: $title;
  font-family: "raleway";
  font-weight: bold;
  text-align: left;
  color: $blueColor;
  padding: 15px;
  padding-bottom: 0px;
}

.servpara {
  font-size: $paragraph;
  font-family: "raleway";
  color: $blueColor;
  padding: 15px;
  padding-top: 0px;
}

img {
  margin-top: 15px;
  clip-path: circle();
  height: 200px;
}

p {
  margin: 0px;
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
</style>
