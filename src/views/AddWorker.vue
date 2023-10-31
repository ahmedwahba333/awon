<template>
  <div class="bg">
    <NavBarSADash />
    <div class="container">
      <form @submit.prevent="addWorker()">
        <h2 class="headline">Add Worker</h2>
        <div>
          <div class="row mb-4">
            <div class="col-lg-6 col-md-6 col-sm-12">
              <label>First name</label>
              <input type="text" class="w-100 rounded-5 p-2" placeholder="First name" aria-label="First name"
                v-model="formValues.First_name" />
              <!-- <span class="error-feedback" v-if="v$.First_name.$error">{{v$.First_name.$errors[0].$message}}</span> -->
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12">
              <label for="">Last name</label>
              <input type="text" class="w-100 rounded-5 p-2" placeholder="Last name" aria-label="Last name"
                v-model="formValues.Last_name" />
              <!-- <span class="error-feedback" v-if="v$.Last_name.$error">{{v$.Last_name.$errors[0].$message}}</span> -->
            </div>
          </div>
          <div class="row mb-4">
            <div class="col-lg-6 col-md-6 col-sm-12">
              <label>Address</label>
              <input type="text" class="w-100 rounded-5 p-2" placeholder="Address" aria-label="Address"
                v-model="formValues.Address" />
              <!-- <span class="error-feedback" v-if="v$.Address.$error">{{ v$.Address.$errors[0].$message}}</span> -->
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12">
              <label for="">Phone</label>
              <input type="text" class="w-100 rounded-5 p-2" placeholder="start number with 20" aria-label="Phone"
                v-model="formValues.Phone" />
              <!-- <span class="error-feedback" v-if="v$.Phone.$error">{{ v$.Phone.$errors[0].$message}}</span> -->
            </div>
          </div>
          <div class="row mb-4">
            <div class="form-group col-lg-6 col-md-6 col-sm-12">
              <label for="">Gender</label>
              <div class="dropdown">
                <button class="servicesDrop w-100 rounded-5 p-2 dropdown-toggle" type="button" data-bs-toggle="dropdown"
                  aria-expanded="false">
                  Select Gender
                </button>
                <ul class="dropdown-menu">
                  <li v-for="singleGender in genders" :key="singleGender">
                    <div class="dropdown-item">
                      <div>
                        <div class="row">
                          <div class="col-8">
                            <input type="radio" class="form-check-input" v-model="formValues.Gender"
                              v-bind:value="singleGender.code" />
                            <label for="" class="form-check-label mt-1 ms-1">{{
                              singleGender.description
                            }}</label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12">
              <label for="">Years of exp.</label>
              <input type="text" class="w-100 rounded-5 p-2" placeholder="Years of exp." aria-label="Years of exp."
                v-model="formValues.Experience" />
            </div>
          </div>
          <div class="row mb-4">
            <div class="col-lg-6 col-md-6 col-sm-12">
              <label>Photo</label>
              <input type="text" class="w-100 rounded-5 p-2" placeholder="Photo" aria-label="Photo" />
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12">
              <label for="">Area</label>
              <input type="text" class="w-100 rounded-5 p-2" placeholder="Area" aria-label="Area"
                v-model="formValues.Area" />
            </div>
          </div>
          <div class="row mb-4">
            <div class="col-lg-6 col-md-6 col-sm-12">
              <label>Front national ID card</label>
              <input type="text" class="w-100 rounded-5 p-2" placeholder="Front national ID card"
                aria-label="Front national ID card" v-model="formValues.FrontNational_ID" />
              <!-- <span class="error-feedback" v-if="v$.FrontNational_ID.$error">{{v$.FrontNational_ID.$errors[0].$message}}</span> -->
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12">
              <label for="">Back national ID card</label>
              <input type="text" class="w-100 rounded-5 p-2" placeholder="Back national ID card"
                aria-label="Back national ID card" v-model="formValues.BackNational_ID" />
              <!-- <span class="error-feedback" v-if="v$.BackNational_ID.$error">{{v$.BackNational_ID.$errors[0].$message}}</span> -->
            </div>
          </div>
        </div>

        <div class="row">
          <div class="form-group mb-4 col-lg-6 col-md-6 col-sm-12">
            <div class="dropdown">
              <button class="servicesDrop w-100 rounded-5 dropdown-toggle" type="button" data-bs-toggle="dropdown"
                aria-expanded="false" data-bs-auto-close="outside">
                Select Category
              </button>
              <ul class="dropdown-menu">
                <li v-for="(category, id) in categories" :key="id">
                  <div class="dropdown-item">
                    <div>
                      <div class="row">
                        <div class="col-8">
                          <input type="checkbox" class="form-check-input"
                            v-model="valuesOfCategory" :value="`${category.Name}`" :id="`category${category.id}`" :name="`category${category.id}`" />
                          <label :for="`category${category.id}`" class="form-check-label mt-1 ms-1">{{
                            category["Name"]
                          }}</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="form-group mb-4 col-lg-6 col-md-6 col-sm-12">
            <div class="dropdown">
              <button class="servicesDrop w-100 rounded-5 dropdown-toggle" type="button" data-bs-toggle="dropdown"
                aria-expanded="false" data-bs-auto-close="outside">
                Select Services
              </button>
              <ul class="dropdown-menu">
                <li v-for="(category, id) in categories" :key="id">
                  <div class="dropdown-item">
                    <h5>{{ category["Name"] }}</h5>
                    <div class="d-flex align-items-center gap-3">
                      <div v-for="(service, id) in services" :key="id">
                        <input type="checkbox" class="form-check-input" v-if="category['id'] == service['Category_id']"
                       v-model="valuesOfService" :value="`${service.Name}`" :id="`service${service.id}`" :name="`service${service.id}`"/>
                        <label :for="`service${service.id}`" class="form-check-label mt-1 ms-1"
                          v-if="category['id'] == service['Category_id']">{{ service["Name"] }}</label>
                      </div>
                    </div>
                  </div>
                </li>
                <hr />
              </ul>
            </div>
          </div>
        </div>
        <div class="row mb-2 justify-content-end">
          <div class="col-12 col-xl-2 col-md-4 col-sm-8">
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
import axios from "axios";
import useVuelidate from "@vuelidate/core";
import { required, minLength, numeric } from "@vuelidate/validators";
export default {
  name: "WriteReview",
  components: { FooterComponent, NavBarSADash },
  data() {
    return {
      valuesOfCategory:[],
      valuesOfService:[],
      categories: [],
      services: [],
      // gender: "M",

      genders: [
        {
          code: "Female",
          description: "Female",
        },
        {
          code: "Male",
          description: "Male",
        },
      ],
      v$: useVuelidate(),
      First_name: "",
      Last_name: "",
      Phone: "",
      Address: "",
      FrontNational_ID: "",
      BackNational_ID: "",

      formValues: {
        First_name: "",
        Last_name: "",
        Phone: "",
        Address: "",
        FrontNational_ID: "",
        BackNational_ID: "",
        Gender: "",
        Categories: "",
        Service_1: "",
        Service_2: "",
        Service_3: "",
        Service_4: "",
        Area: "",
        Experience: "",
      },
    };
  },
  validations() {
    return {
      firstName: { required, minLength: minLength(3) },
      lastName: { required, minLength: minLength(3) },
      phone: { required, numeric, minLength: minLength(13) },
      address: { required },
      frontId: { required },
      backId: { required },
    };
  },
  created() {
    this.getCategory();
    this.getService();
  },

  // mounted(){
  //   this.addWorker();
  // },
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
    getService() {
      axios
        .get("http://localhost:2000/service")
        .then((res) => {
          this.services = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    addWorker() {
      console.log("signupNow..");
      this.v$.$validate();
      if (!this.v$.$error) {
        console.log("Form validate successfully");
      } else {
        console.log("Form validate failed");
      }
        this.formValues.Categories = this.valuesOfCategory[0]
        this.formValues.Service_1 = this.valuesOfService[0]
        this.formValues.Service_2 = this.valuesOfService[1]
        this.formValues.Service_3 = this.valuesOfService[2]
        this.formValues.Service_4 = this.valuesOfService[3]
      axios
        .post("http://localhost:2000/worker", this.formValues)
        
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
        this.$router.push("/SADashHome");

      // console.log(this.valuesOfCategory);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/global/colors";
@import "../scss/global/variables";

.bg {
  background-color: $backgroundColor;
}

form {
  background-color: $backgroundColor;
  border: 0;

  label {
    color: $blueColor;
  }

  input {
    background-color: white;
    border: 0.8px solid black;
  }
}

button {
  @include button;
  margin: 0;
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
  border: 1px solid black;
}

.dropdown-menu {
  width: fit-content;
  padding: 20px;
}

.error-feedback {
  color: red;
  font-size: $small;
}
</style>
