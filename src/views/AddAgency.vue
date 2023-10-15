<template>
  <div class="page">
    <NavBarDash />
    <div class="">
      <!-- <SideBarPage class="min-width"/> -->
      <div class="d-flex border-2 justify-content-center flex-wrap">
        <h2 class="headline">Agency Info</h2>
      </div>
      <div>
        <form class="">
          <div class="row m-4">
            <div class="col">
              <label >Full name</label>
              <input
                type="text"
                class="form-control w-100 rounded-5"
                placeholder="Full name"
                aria-label="Full name"
              />
            </div>
            <div class="col">
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
            <div class="col">
              <label for="">Phone No1</label>
              <input
                type="text"
                class="form-control w-100 rounded-5"
                placeholder="Phone No1"
                aria-label="Phone No1"
              />
            </div>
            <div class="col">
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
            <div class="col">
              <label for="">Front of trade register card</label>
              <input
                type="file"
                class="form-control w-100 rounded-5 "
                placeholder="Front of trade register card"
                aria-label="Front of trade register card"
              />
            </div>
            <div class="col">
              <label for="">Back of trade register card</label>
              <input
                type="file"
                class="form-control w-100 rounded-5"
                placeholder="Back of trade register card"
                aria-label="Back of trade register card"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import NavBarDash from "@/components/NavBarDash.vue";
// import SideBarPage from '@/components/SideBarPage.vue';
export default {
  name: "AddAgency",
  components: {
    NavBarDash,
    // SideBarPage,
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/global/colors";
@import "../scss/global/preset";
@import "../scss/global/variables";
.page {
  background-color: $backgroudColor;
  min-height: 100vh;
  font: $paragraph;
  color: $blueColor;
  input {
    color:$orangeColor;
  }
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
</style>
