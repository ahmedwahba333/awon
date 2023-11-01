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
          <li class="breadcrumb-item" aria-current="page">Services</li>
        </ol>
        <ol class="addCard mx-2 col-lg-10 col-md-12 col-sm-12">
          <li>
            <router-link to="/AddServiceSA">
              <button class="btn">Add new service</button>
            </router-link>
          </li>
        </ol>
      </div>
      <div class="row justify-content-center mt-3">
        <div
          class="col-12 col-lg-8 box"
          v-for="(service, id) in services"
          :key="id"
        >
          <div class="card my-3">
            <img
              :src="`${service.img}`"
              class="card-img-top Clip-path:circle()"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">{{ service["Name"] }}</h5>
              <p class="m-3">{{ service["Details"] }}</p>
              <div class="d-flex justify-content-end align-item-end">
                <button class="btn" @click="deleteCat(service.id)">
                  Remove service
                </button>
                <routre-link to="/#">
                  <button class="btn"  @click="EditData">Edit Service</button>
                </routre-link>
              </div>
              <div
                class="modal fade"
                id="exampleModalToggle"
                aria-hidden="true"
                aria-labelledby="exampleModalToggleLabel"
                tabindex="-1"
              >
                <div class="modal-dialog modal-dialog-centered">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1
                        class="modal-title fs-5 fw-bold"
                        id="exampleModalToggleLabel"
                      >
                        Edit Service
                      </h1>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      <div class="row mb-3">
                        <div class="col-4">Agency Name</div>
                        <div class="col-8">
                          <input
                            type="text"
                            placeholder=""
                            v-model="service.Name"
                          />
                        </div>
                      </div>

                      <div class="row mb-3">
                        <div class="col-4">Details</div>
                        <div class="col-8">
                          <input
                            type="text"
                            placeholder=""
                            v-model="service.Details"
                          />
                        </div>
                      </div>

                      <div class="row mb-3">
                        <div class="col-4">Category</div>
                        <div class="col-8">
                          <input type="text" v-model="service.Category_id" />
                        </div>
                      </div>
                    </div>
                    <div class="modal-footer">
                      <button
                        class="btn editBtn"
                        data-bs-dismiss="modal"
                        @click="EditData"
                      >
                        Edit Service
                      </button>
                    </div>
                  </div>
                </div>
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
  name: "SAServiceCategories",
  components: {
    NavBarSADash,
  },
  data() {
    return {
      services: {
        Category_id: "",
        id: "",
        Name: "",
        Details: "",
        img: "https://i.postimg.cc/hjHcRHDm/cleaning.jpg",
      },
    };
  },
  created() {
    this.getServices();
  },
  methods: {
    getServices() {
      axios
        .get("http://localhost:2000/service")
        .then((res) => {
          this.services = res.data;
          this.services.Category_id = res.data.Category_id;
          this.services.id = res.data.id;
          this.services.Name = res.data.Name;
          this.services.Details = res.data.Details;
          this.services.img = res.data.img;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    deleteCat(id) {
      axios
        .delete(`http://localhost:2000/service/${id}`)
        .then((res) => console.log(res))
        .catch((err) => {
          console.log(err);
        });
      this.getServices();
    },
    EditData() {
      axios
        .put(`http://localhost:2000/service/${this.id}`, this.services)
        .then(() => {
          this.getServices();
        })
        .catch((err) => console.log(err))
        .then(this.$router.push("/SAServiceCategories"));
      this.getServices();
      // location.reload()
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
