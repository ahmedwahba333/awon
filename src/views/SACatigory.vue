<template>
  <div class="bg">
    <NavBarSADash />
    <div class="container">
      <div class="row pt-3 breadCrumb">
        <ol class="breadcrumb d-flex col-6">
          <li class="breadcrumb-item me-2">Dashboard</li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 320 512"
            fill="#F97B22"
            class="mt-2 me-2"
          >
            <path
              d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"
            />
          </svg>
          <li class="breadcrumb-item" aria-current="page">
            Services Categories
          </li>
        </ol>
        <ol class="addCard mx-2 col-lg-10 col-md-12 col-sm-12">
          <li>
            <button class="btn">Add category</button>
          </li>
        </ol>
      </div>
      <div class="row justify-content-center my-5">
        <div
          class="col-12 col-lg-8 box"
          v-for="(category, id) in categories"
          :key="id"
        >
          <div class="card my-3">
            <img
              :src="`${category.img}`"
              class="card-img-top Clip-path:circle()"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">{{ category["Name"] }}</h5>
              <p class="m-3">{{ category["Details"] }}</p>
              <div class="d-flex justify-content-end align-item-end">
                <button class="btn">Add services</button>
                <button class="btn">Delete Cat</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import NavBarSADash from "@/components/NavBarSADash.vue";
export default {
  name: "SACatigory",
  components: {
    NavBarSADash,
  },
  data() {
    return {
      categories: [],
    };
  },
  created() {
    this.getCategory();
  },
  methods: {
    getCategory() {
      axios
        .get("http://localhost:2000/category")
        .then((res) => {
          this.categories = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/global/colors";
@import "../scss/global/preset";
@import "../scss/global/variables";
.bg {
  background-color: $backgroundColor;
  color: $blueColor;
  min-height: 100vh;
}

.addCard {
  margin-left: 1px;
  list-style: none;
  display: flex;
  justify-content: end;
//   position: absolute;
//   right: 290px;
//   @media (max-width: 767px) {
//     position: absolute;
//     right: 95px;
//   }
//   @media (max-width: 1440px) {
//     position: absolute;
//   right: 290px;
//   }
//   @media (min-width: 1266px) {
//     position: absolute;
//   right: 235px;
//   }

}
.breadcrumb-item {
  font-size: $paragraph !important;
  color: $blueColor !important;
  font-weight: bold !important;
}
.breadCrumb {
  margin-left: 1px;
}
.subtitle {
  font-size: $subTitle;
  font-weight: bold;
}

// .cardStyle {
//   background-color: white;
//   border-radius: $border-radius-big;
//   box-shadow: 2px 4px 4px 2px rgba(117, 113, 113, 0.25);
//   font-size: $paragraph !important;
//   color: $blueColor !important;
//   font-weight: bold !important;
// }

// .searchCard {
//   @extend .cardStyle;
//   @extend .subtitle;
// }
.boxCard {
  background-color: white;
  border-radius: $border-radius-big;
  box-shadow: 2px 4px 4px 2px rgba(117, 113, 113, 0.25);
}
button {
  @include button;
}
img {
  margin: 10px;
  max-width: 250px;
  height: 200px;
  clip-path: circle();
}
</style>
