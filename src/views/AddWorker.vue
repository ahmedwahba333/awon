<template>
  <div class="bg">
    <NavBarSADash />
    <div class="container">
      <form action="" class="form-control">
        <h2 class="headline">Add Worker</h2>

        <div>
          <div class="row mb-4">
            <div class="col-lg-6 col-md-6 col-sm-12">
              <label>First name</label>
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
          <div class="row mb-4">
            <div class="col-lg-6 col-md-6 col-sm-12">
              <label>Address</label>
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
          <div class="row mb-4">
            <div class="col-lg-6 col-md-6 col-sm-12">
              <label>Gender</label>
              <input
                type="text"
                class="form-control w-100 rounded-5"
                placeholder="Gender"
                aria-label="Gender"
              />
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12">
              <label for="">Years of exp.</label>
              <input
                type="email"
                class="form-control w-100 rounded-5"
                placeholder="Years of exp."
                aria-label="Years of exp."
              />
            </div>
          </div>
          <div class="row mb-4">
            <div class="col-lg-6 col-md-6 col-sm-12">
              <label>Photo</label>
              <input
                type="text"
                class="form-control w-100 rounded-5"
                placeholder="Photo"
                aria-label="Photo"
              />
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12">
              <label for="">Area</label>
              <input
                type="email"
                class="form-control w-100 rounded-5"
                placeholder="Area"
                aria-label="Area"
              />
            </div>
          </div>
          <div class="row mb-4">
            <div class="col-lg-6 col-md-6 col-sm-12">
              <label>Front national ID card</label>
              <input
                type="text"
                class="form-control w-100 rounded-5"
                placeholder="Front national ID card"
                aria-label="Front national ID card"
              />
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12">
              <label for="">Back national ID card</label>
              <input
                type="email"
                class="form-control w-100 rounded-5"
                placeholder="Back national ID card"
                aria-label="Back national ID card"
              />
            </div>
          </div>

         
        </div>

      <div class="row">
        <div class="form-group mb-4 col-lg-6 col-md-6 col-sm-12">
              <div class="dropdown ">
                <button
                  class="servicesDrop w-100 rounded-5 dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Select Category
                </button>
                <ul class="dropdown-menu ">
                  <li v-for="(category,id) in categories" :key="id">
                    <div class="dropdown-item">
                      <div>
                        <div class="row">
                          <div class="col-8">
                            <input type="checkbox" class="form-check-input" />
                            <label for="" class="form-check-label mt-1 ms-1">{{ category['Name']}}</label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
             <div class="form-group mb-4 col-lg-6 col-md-6 col-sm-12">
              <div class="dropdown ">
                <button
                  class="servicesDrop w-100 rounded-5 dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Select Services
                </button>
                <ul class="dropdown-menu">
          <li v-for="(category,id) in categories" :key="id">
            <div class="dropdown-item">
              <h5>{{ category['Name']}}</h5>
              <div class="d-flex align-items-center gap-3">
                <div v-for="(service,id) in services" :key="id">
                  <input type="checkbox" class="form-check-input" />
                  <label for="" class="form-check-label mt-1 ms-1"  v-if="category['id']==service['Category_id']" 
                    >{{service['Name']}}</label
                  >
                </div>
              </div>
            </div>
          </li>
          <hr />

        </ul>
              </div>
            </div>
      </div>
          <div class="row justify-content-end">
                                      <div class="col-12 col-xl-2 col-md-4 col-sm-8 ">
                                      <button class="btn">Add</button>      
                                      </div>
                                      </div>
      </form>



 <!-- <form class="row  mb-4"> -->
            
          <!-- </div> -->
    </div>
    <FooterComponent />
  </div>
</template>

<script>
import NavBarSADash from "@/components/NavBarSADash.vue";
import FooterComponent from "@/components/footer.vue";
import axios from 'axios';
export default {
  name: "WriteReview",
  components: { FooterComponent, NavBarSADash },
  data() {
    return {
       categories:[],
       services:[]
    }
  },
  created(){
    this.getCategory();
    this.getService();
  },
  
  methods:{
    getCategory(){
      axios.get("http://localhost:2000/category")
      .then((res)=> {this.categories = res.data})
      .catch((err)=>{console.log(err)})
    },
    getService(){
      axios.get("http://localhost:2000/service")
      .then((res)=> {this.services = res.data})
      .catch((err)=>{console.log(err)})
    },
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/global/colors";
@import "../scss/global/variables";

.bg {
  background-color: $backgroundColor;
}

.form-control {
  background-color: $backgroundColor;
  border: 0;

  label {
    color: $blueColor;
  }
  input {
    background-color: white;
    border: 1px solid black;
  }
}
button {
  @include button;
  margin:0;
  padding: 0;
}
.headline {
  margin-top: 20px;
}

.servicesDrop {
  background-color: $whiteColor;
  // width: 50%;
  // padding: 5px 15px;
  color: $blueColor;
  border: solid 1px $backgroundColor;
  // border-radius: 10px;
}

.dropdown-menu {
  width: fit-content;
  padding: 20px;
}



// .drop{
//   margin: -5px;
// }
</style>
