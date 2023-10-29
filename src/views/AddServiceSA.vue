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
          <li class="breadcrumb-item" aria-current="page">Add Services</li>
        </ol>
      </div>
      <div class="row m-5">
        <h2>Adding new Service</h2>
      </div>
      <div class="row">
        <form action="" @submit.prevent="handlSubmit">
          <div class="mb-3 d-flex col-auto">
            <label for="exampleFormControlInput1" class="form-label col-2"
              >Category Name:</label
            >
            <input
              type=""
              class="form-control"
              id="exampleFormControlInput1"
              v-model="FormValue[Category_id]"
            />
          </div>
          <div class="mb-3 d-flex col-auto">
            <label for="exampleFormControlInput1" class="form-label col-2"
              >Service Name:
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              v-model="FormValue.Name"
            />
          </div>
          <div class="mb-3 d-flex col-auto">
            <label for="exampleFormControlInput1" class="form-label col-2"
              >Descriptive Photo:</label
            >
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              v-model="FormValue.img"
            />
          </div>
          <div class="mb-3 d-flex col-auto">
            <label for="exampleFormControlTextarea1" class="form-label col-2"
              >Service Details:</label
            >
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="5"
              v-model="FormValue.Details"
            ></textarea>
          </div>
          <div class="d-flex justify-content-end">
            <button class="btn">Done</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import NavBarSADash from "@/components/NavBarSADash.vue";
export default {
  name: "AddServiceSA",
  components: {
    NavBarSADash,
  },
  data() {
    return {
      FormValue: {
        Name: "",
        Details: "",
        img: "https://i.postimg.cc/CKssHd5L/cleaning.jpg",
      },
    };
  },
  methods: {
    handlSubmit() {
      axios
        .post("http://localhost:2000/service", this.FormValue)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
      this.$router.push("/SAServiceCategories");
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
.form-control {
  border: 1px solid $blueColor;
  border-radius: 28px;
  background: $whiteColor;
  &:focus {
    outline: none;
    background-color: $backgroundColor;
    color: $blueColor;
    border-color: $orangeColor;
    box-shadow: 1px 1px 3px $orangeColor;
  }
}
</style>
