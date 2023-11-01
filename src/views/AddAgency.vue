<template>
  <div class="page">
    <NavBarSADash />
    <form @submit.prevent="handlSubmit()" class="form-control">
      <div class="d-flex border-2 justify-content-center flex-wrap">
        <h2 class="headline">Agency Info</h2>
      </div>
      <div>
        <div class="row m-4">
          <div class="col-lg-6 col-md-6 col-sm-12">
            <label>Full name</label>
            <input
              type="text"
              class="form-control w-100 rounded-5"
              placeholder="Full name"
              aria-label="Full name"
              v-model="FormValue.Agency_Name"
            />
          </div>
          <div class="col-lg-6 col-md-6 col-sm-12">
            <label for="">Email</label>
            <input
              type="email"
              class="form-control w-100 rounded-5"
              placeholder="Email"
              aria-label="Email"
              v-model="FormValue.Email"
            />
          </div>
        </div>
        <div class="row m-4">
          <div class="col-lg- col-md-6 col-sm-12">
            <label for="">Phone No1</label>
            <input
              type="text"
              class="form-control w-100 rounded-5"
              placeholder="Phone No1"
              aria-label="Phone No1"
              v-model="FormValue.Agency_Phone_no"
            />
          </div>
          <div class="col-lg-6 col-md-6 col-sm-12">
            <label for="">Phone No2</label>
            <input
              type="text"
              class="form-control w-100 rounded-5"
              placeholder="Phone No2"
              aria-label="Phone No2"
              v-model="FormValue.Agency_Phone_no2"
            />
          </div>
        </div>
        <div class="row m-4">
          <div class="col-lg-6 col-md-6 col-sm-12">
            <label for="">Front of trade register card</label>
            <input
              type="text"
              class="form-control w-100 rounded-5"
              placeholder="Front of trade register card"
              aria-label="Front of trade register card"
              v-model="FormValue.trade_register_card"
            />
          </div>
          <div class="col-6 col-md-6 col-sm-12">
            <label for="">Agency logo</label>
            <input
              type="text"
              class="form-control w-100 rounded-5"
              placeholder="Agency  logo"
              aria-label="Agency  logo"
              v-model="FormValue.Logo"
            />
          </div>
        </div>
      </div>
      <div class="d-flex border-2 justify-content-center flex-wrap">
        <h2 class="headline">Owner Details</h2>
      </div>
      <div>
        <div class="row m-4">
          <div class="col-lg-6 col-md-6 col-sm-12">
            <label>First name</label>
            <input
              type="text"
              class="form-control w-100 rounded-5"
              placeholder="First name"
              aria-label="First name"
              v-model="FormValue.Owner_First_name"
            />
          </div>
          <div class="col-lg-6 col-md-6 col-sm-12">
            <label for="">Last name</label>
            <input
              type="text"
              class="form-control w-100 rounded-5"
              placeholder="Last name"
              aria-label="Last name"
              v-model="FormValue.Owner_last_name"
            />
          </div>
        </div>
        <div class="row m-4">
          <div class="col-lg-6 col-md-6 col-sm-12">
            <label for="">Phone No.</label>
            <input
              type="text"
              class="form-control w-100 rounded-5"
              placeholder="Phone No."
              aria-label="Phone No."
              v-model="FormValue.Owner_Phone_no"
            />
          </div>
          <div class="col-lg-6 col-md-6 col-sm-12">
            <label for="">Date of Birth</label>
            <input
              type="date"
              class="form-control w-100 rounded-5"
              placeholder="Date of Birth"
              aria-label="Date of Birth"
              v-model="FormValue.Owner_DOB"
            />
          </div>
        </div>
        <div class="row m-4">
          <div class="col-lg-6 col-md-6 col-sm-12">
            <label>Front of trade register card</label>
            <input
              type="text"
              class="form-control w-100 rounded-5"
              placeholder="Front of trade register card"
              aria-label="Front of trade register card"
              v-model="FormValue.Owner_front_nid"
            />
          </div>
          <div class="col-lg-6 col-md-6 col-sm-12">
            <label for="">Back of trade register card</label>
            <input
              type="text"
              class="form-control w-100 rounded-5"
              placeholder="Back of trade register card"
              aria-label="Back of trade register card"
              v-model="FormValue.Owner_back_nid"
            />
          </div>
        </div>
      </div>
      <div class="d-flex border-2 justify-content-center flex-wrap">
        <h2 class="headline">Agency location</h2>
      </div>
      <div>
        <div class="row m-4">
          <div class="col-lg-6 col-md-6 col-sm-12">
            <label>Country</label>
            <input
              type="text"
              class="form-control w-100 rounded-5"
              placeholder="Country"
              aria-label="Country"
            />
          </div>
          <div class="col-lg-6 col-md-6 col-sm-12">
            <label for="">governorate</label>
            <input
              type="text"
              class="form-control w-100 rounded-5"
              placeholder="governorate"
              aria-label="governorate"
              v-model="FormValue.Agency_Governorate"
            />
          </div>
        </div>
        <div class="row m-4">
          <div class="col-lg-6 col-md-6 col-sm-12">
            <label for="">City</label>
            <input
              type="text"
              class="form-control w-100 rounded-5"
              placeholder="City"
              aria-label="City"
              v-model="FormValue.Agency_City"
            />
          </div>
          <div class="col-lg-6 col-md-6 col-sm-12">
            <label for="">Area</label>
            <input
              type="text"
              class="form-control w-100 rounded-5"
              placeholder="Area"
              aria-label="Area"
              v-model="FormValue.Agency_Area"
            />
          </div>
        </div>
        <div class="row m-4">
          <div class="col-12">
            <label for="">Full Address</label>
            <input
              type="text"
              class="form-control w-100 rounded-5"
              placeholder="Full Address"
              aria-label="Full Address"
              v-model="FormValue.Agency_Address"
            />
          </div>
        </div>
      </div>
      <div class="row m-4">
        <div class="col-lg-8 col-md-4 col-sm-12">
          <input type="radio" />
          <label for="">agree on terms and conditions</label>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-12">
          <button>Add agency</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import NavBarSADash from "@/components/NavBarSADash.vue";
export default {
  name: "AddAgency",
  components: {
    NavBarSADash,
  },
  data() {
    return {
      FormValue: {
        id: "",
        Owner_First_name: "",
        Owner_last_name: "",
        Email: "",
        Gender: "",
        Owner_Phone_no: "",
        Owner_DOB: "",
        Owner_front_nid:
          "https://id.nadra.gov.pk/wp-content/uploads/2023/09/NICOP-2.png",
        Owner_back_nid:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlGSAy9H4xvsdU501DmqFiYlrVc8YgZQ9bIQ&usqp=CAU",
        trade_register_card:
          "https://cdn-fhdpe.nitrocdn.com/BLYhuUokNZUPConOXRxXZciCtaTwvpft/assets/static/optimized/rev-3abaf38/wp-content/uploads/2021/01/BCL-BRN-763x1024.jpg",
        rating: "",
        Logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAEoSURBVDjLrZMxSgRBEEXfiBiIkRjpRTyAuZGH8ALewmtsbOAVNjM1F0FEwURwZ9vq+t+gZ3aR3RFEC5qGLv6v11XdnW3+ErsAs9nMpRT6vme5XLJYLDZW3/erfCmF+XzeAXT/QgBwc7ewASUYsOHidL+7vn1eVzCkzNX5cbdhkIKjgx0EWPDyrpXu5HAP2Ujw+LrcTmBDuu0y1LV+JVaaSG83qAnS2iBzPDdZQTKZIsqEgQYC6TtBraKmUJoqUaL+TNAMjLI5RIhaW/VMTxNUtUbKbgTDFT7DK4pMU8bExhRSpLp1DzwaJFFFDhQRUwSGp7ckh4mM7ytKUqNVrzIREwSXZwfdtpdWwsRQXWpT2WowFRHZxNl6I+l3BvXT3D98bAjH+PNn+gIL+yQjrYYUIQAAAABJRU5ErkJggg==",
        Agency_Name: "",
        Agency_Email: "",
        Agency_Address: "",
        Agency_PostCode: "",
        Agency_City: "",
        Agency_Governorate: "",
        Agency_Phone_no: "",
        Agency_Phone_no2: "",
        owner_Password: "",
        Agency_Country:"",
        Agency_Area:"",
      },
    };
  },
  methods: {
    handlSubmit() {
      axios
        .post("http://localhost:2000/agency", this.FormValue)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
      this.$router.push("/allAgencies");
      
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/global/colors";
@import "../scss/global/preset";
@import "../scss/global/variables";
.page {
  background-color: $backgroundColor;
  min-height: 100vh;
  font: $paragraph;
  color: $blueColor;
}
button {
  @include button;
}
.headline {
  display: flex;
  justify-content: center;
  border: 2px solid $blueColor;
  border-radius: 50px;
  padding: 10px;
  background-color: white;
  width: 90%;
  margin-top: 20px;
}
.form-control {
  background-color: $backgroundColor;
  label {
    color: $blueColor;
  }
  input {
    background-color: white;
  }
}
</style>
