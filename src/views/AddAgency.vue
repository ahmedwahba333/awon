<template>
  <div class="page">
    <NavBarSADash />
    <form action="" class="form-control">
      <div class="d-flex border-2 justify-content-center flex-wrap">
        <h2 class="headline">Agency Info</h2>
      </div>
      <div>
          <div class="row m-4">
            <div class="col-lg-6 col-md-6 col-sm-12">
              <label >Full name</label>
              <input
                type="text"
                class="form-control w-100 rounded-5"
                placeholder="Full name"
                aria-label="Full name"
              />
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12">
              <label for="">Email</label>
              <input
                type="email"
                class="form-control w-100 rounded-5"
                placeholder="Email"
                aria-label="Email"
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
              />
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12">
              <label for="">Phone No2</label>
              <input
                type="text"
                class="form-control w-100 rounded-5"
                placeholder="Phone No2"
                aria-label="Phone No2"
              />
            </div>
          </div>
          <div class="row m-4">
            <div class="col-lg-6 col-md-6 col-sm-12">
              <label for="">Front of trade register card</label>
              <input
                type="file"
                class="form-control w-100 rounded-5 "
                placeholder="Front of trade register card"
                aria-label="Front of trade register card"
              />
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12">
              <label for="">Back of trade register card</label>
              <input
                type="file"
                class="form-control w-100 rounded-5"
                placeholder="Back of trade register card"
                aria-label="Back of trade register card"
              />
            </div>
          </div>
          <div class="row m-4">
            <div class="col-lg-6 col-md-6 col-sm-12">
              <label for="">Front of tax card</label>
              <input
                type="file"
                class="form-control w-100 rounded-5 "
                placeholder="Front of tax card"
                aria-label="Front of tax card"
              />
            </div>
            <div class="col-6 col-md-6 col-sm-12">
              <label for="">Agency  logo</label>
              <input
                type="file"
                class="form-control w-100 rounded-5"
                placeholder="Agency  logo"
                aria-label="Agency  logo"
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
              <label >First name</label>
              <input
                type="text"
                class="form-control w-100 rounded-5"
                placeholder="First name"
                aria-label="First name"
              />
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12">
              <label for="">Last name</label>
              <input
                type="text"
                class="form-control w-100 rounded-5"
                placeholder="Last name"
                aria-label="Last name"
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
              />
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12">
              <label for="">Date of Birth</label>
              <input
                type="date"
                class="form-control w-100 rounded-5"
                placeholder="Date of Birth"
                aria-label="Date of Birth"
              />
            </div>
          </div>
          <div class="row m-4">
            <div class="col-lg-6 col-md-6 col-sm-12">
              <label for="">Front of trade register card</label>
              <input
                type="file"
                class="form-control w-100 rounded-5 "
                placeholder="Front of trade register card"
                aria-label="Front of trade register card"
              />
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12">
              <label for="">Back of trade register card</label>
              <input
                type="file"
                class="form-control w-100 rounded-5"
                placeholder="Back of trade register card"
                aria-label="Back of trade register card"
              />
            </div>
          </div>
          <div class="row m-4">
            <div class="col-lg-6 col-md-6 col-sm-12">
              <label for="">National ID card</label>
              <input
                type="file"
                class="form-control w-100 rounded-5 "
                placeholder="National ID card"
                aria-label="National ID card"
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
              <label >Country</label>
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
                type="email"
                class="form-control w-100 rounded-5"
                placeholder="governorate"
                aria-label="governorate"
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
              />
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12">
              <label for="">Area</label>
              <input
                type="text"
                class="form-control w-100 rounded-5"
                placeholder="Area"
                aria-label="Area"
              />
            </div>
          </div>
          <div class="row m-4">
            <div class="col-12">
              <label for="">Full Address</label>
              <input
                type="file"
                class="form-control w-100 rounded-5 "
                placeholder="Full Address"
                aria-label="Full Address"
              />
            </div>
          </div>
        </div>
        <div class="row m-4 ">
            <div class="col-lg-8 col-md-4 col-sm-12">
              <input type="radio">
              <label for="" >agree on terms and conditions</label>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12 ">
              <button>Add agency</button>
          </div>
      </div>
  </form>
  </div>
</template>

<script>
import NavBarSADash from "@/components/NavBarSADash.vue";
export default {
  name: "AddAgency",
  components: {
    NavBarSADash,
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
  input {
    color:$orangeColor;
  }
}
button{
  @include button
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
.form-control{
  background-color: $backgroundColor;
  label {
    color: $blueColor;
  }
  input{
    background-color: white;
  }
}
</style>
