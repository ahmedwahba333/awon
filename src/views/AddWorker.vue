<template>
  <div class="bg">
     <NavBarSADash />
    <div class="container">
         <form action="" class="form-control">
     
        <h2 class="headline">Add Worker</h2>
     
      <div>
          <div class="row">
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
                type="email"
                class="form-control w-100 rounded-5"
                placeholder="Last name"
                aria-label="Last name"
              />
            </div>
          </div>
           <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-12">
              <label >Address</label>
              <input
                type="text"
                class="form-control w-100 rounded-5"
                placeholder="Address"
                aria-label="Address"
              />
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12">
              <label for="">Phone</label>
              <input
                type="email"
                class="form-control w-100 rounded-5"
                placeholder="Phone"
                aria-label="Phone"
              />
            </div>
          </div>
      </div>
  </form>
    </div>
    <FooterComponent />
       
    </div>
</template>

<script>
import NavBarSADash from "@/components/NavBarSADash.vue";
import FooterComponent from "@/components/footer.vue";
export default {
  name: "WriteReview",
  components: { FooterComponent, NavBarSADash },
};
</script>

<style lang="scss" scoped>
@import "../scss/global/colors";
@import "../scss/global/variables";

.bg {
  background-color: $backgroundColor;
}
.form-control{
  background-color: $backgroundColor;
  
  label {
    color: $blueColor;
  }
  input{
    background-color: white;
    border:1px solid black;
  }
}
button{
  @include button
}
.headline {
  margin-top: 20px;
}
</style>
