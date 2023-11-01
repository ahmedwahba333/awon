<template>
  <NavBarSADashVue />
  <div class="all">
    <div class="container grid">
      <!-- BreadCrumb -->
      <div class="row pt-3 breadCrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item me-2">Dashboard</li>
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512" fill="#F97B22" class="mt-2 me-2">
            <path
              d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
          </svg>
          <li class="breadcrumb-item" aria-current="page">Agencies</li>
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512" fill="#F97B22" class="mt-2 me-2">
            <path
              d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
          </svg>
          <li class="breadcrumb-item" aria-current="page">Agency Profile</li>
        </ol>
      </div>
      <!-- Search Filter -->
      <div class="searchCard pt-3">
        <div class="row d-flex flex wrap">
          <p class="subtitle mx-4 col-9">Account</p>
          <p class="subtitle mx-4 col-2">
            <router-link to="/#">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gear-fill"
                viewBox="0 0 16 16" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">
                <path
                  d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
              </svg>
            </router-link>
          </p>
        </div>
        <div class="row">
          <div class="col-lg-3 col-md-5 col-sm-12 pb-4">
            <img :src="`${agencyInfo.Logo}`" class="card-img-top object-fit-cover Clip-path:circle()"
              :alt="`agencyimg${i}`" />
          </div>
          <div class="col-lg-4 col-md-3 col-sm-6">
            <p class="searchKey">Name</p>
            <p class="searchKey">{{ agencyInfo.Agency_Name }}</p>
            <p class="searchKey">Email</p>
            <p class="servent">{{ agencyInfo.Email }}</p>
          </div>
          <div class="col-lg-4 col-md-3 col-sm-6">
            <p class="searchKey">Phone</p>
            <p class="servent">{{ agencyInfo.Owner_Phone_no }}</p>
            <p class="searchKey">Location</p>
            <p class="servent">
              {{ agencyInfo.Agency_Address }}
            </p>
          </div>
        </div>
      </div>
      <!-- Services Table -->
      <div class="row grid servicesTable mt-4 text-center" id="table-wrapper">
        <div class="col-12 mt-3 overflow-auto" id="table-scroll">
          <table class="table mb-2" style="color: $blueColor; --bs-table-color: $blueColor" id="">
            <thead>
              <tr>
                <th scope="col">Order ID</th>
                <th scope="col">Order Details</th>
                <th scope="col">Order Date</th>
                <th scope="col">Customer ID</th>
                <th scope="col">Customer Name</th>
                <th scope="col">Worker Name</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(order, id) in orders" :key="id">
                <td>{{ order.id }}</td>
                <td>{{ order.Order_Details }}</td>
                <td>{{ order.Order_Date }}</td>
                <td>{{ order.Customer_id }}</td>
                <td>{{ order.Customer_FName }} {{ order.Customer_LName }}</td>
                <td>{{ order.Worker_FName }} {{ order.Worker_LName }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <p class="subtitle mt-4">Top Worker</p>
      <div class="row justify-content-center gap-5">
        <div class="card mb-4" style="width: 18rem">
          <img src="../assets/subservices/gardener3.jpg" class="card-img-top Clip-path:circle()" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Salma Osama</h5>
            <p class="card-text">16 St. Emad Eldein - Down Town - Cairo</p>
            <svg class="d-block m-auto" xmlns="http://www.w3.org/2000/svg" width="125" height="22" viewBox="0 0 125 22"
              fill="none">
              <path
                d="M10.8425 0.0842438L13.2768 7.57622L21.1543 7.57622L14.7813 12.2065L17.2155 19.6985L10.8425 15.0682L4.46943 19.6985L6.90373 12.2065L0.530669 7.57622L8.4082 7.57622L10.8425 0.0842438Z"
                fill="#F97B22" />
              <path
                d="M36.5935 0.0842438L39.0278 7.57622L46.9053 7.57622L40.5322 12.2065L42.9665 19.6985L36.5935 15.0682L30.2204 19.6985L32.6547 12.2065L26.2816 7.57622L34.1592 7.57622L36.5935 0.0842438Z"
                fill="#F97B22" />
              <path
                d="M62.3444 0.0842438L64.7787 7.57622L72.6563 7.57622L66.2832 12.2065L68.7175 19.6985L62.3444 15.0682L55.9714 19.6985L58.4057 12.2065L52.0326 7.57622L59.9102 7.57622L62.3444 0.0842438Z"
                fill="#F97B22" />
              <path
                d="M88.0954 0.0842438L90.5297 7.57622L98.4072 7.57622L92.0342 12.2065L94.4685 19.6985L88.0954 15.0682L81.7224 19.6985L84.1567 12.2065L77.7836 7.57622L85.6611 7.57622L88.0954 0.0842438Z"
                fill="#F97B22" />
              <path
                d="M113.846 0.0842438L116.281 7.57622L124.158 7.57622L117.785 12.2065L120.219 19.6985L113.846 15.0682L107.473 19.6985L109.908 12.2065L103.535 7.57622L111.412 7.57622L113.846 0.0842438Z"
                fill="#C3C3C3" />
            </svg>
            <a href="#" class="btn d-block m-auto mb-3 mt-3">Book Now</a>
          </div>
        </div>
        <div class="card mb-4" style="width: 18rem">
          <img src="../assets/subservices/gardener3.jpg" class="card-img-top Clip-path:circle()" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Salma Osama</h5>
            <p class="card-text">16 St. Emad Eldein - Down Town - Cairo</p>
            <svg class="d-block m-auto" xmlns="http://www.w3.org/2000/svg" width="125" height="22" viewBox="0 0 125 22"
              fill="none">
              <path
                d="M10.8425 0.0842438L13.2768 7.57622L21.1543 7.57622L14.7813 12.2065L17.2155 19.6985L10.8425 15.0682L4.46943 19.6985L6.90373 12.2065L0.530669 7.57622L8.4082 7.57622L10.8425 0.0842438Z"
                fill="#F97B22" />
              <path
                d="M36.5935 0.0842438L39.0278 7.57622L46.9053 7.57622L40.5322 12.2065L42.9665 19.6985L36.5935 15.0682L30.2204 19.6985L32.6547 12.2065L26.2816 7.57622L34.1592 7.57622L36.5935 0.0842438Z"
                fill="#F97B22" />
              <path
                d="M62.3444 0.0842438L64.7787 7.57622L72.6563 7.57622L66.2832 12.2065L68.7175 19.6985L62.3444 15.0682L55.9714 19.6985L58.4057 12.2065L52.0326 7.57622L59.9102 7.57622L62.3444 0.0842438Z"
                fill="#F97B22" />
              <path
                d="M88.0954 0.0842438L90.5297 7.57622L98.4072 7.57622L92.0342 12.2065L94.4685 19.6985L88.0954 15.0682L81.7224 19.6985L84.1567 12.2065L77.7836 7.57622L85.6611 7.57622L88.0954 0.0842438Z"
                fill="#F97B22" />
              <path
                d="M113.846 0.0842438L116.281 7.57622L124.158 7.57622L117.785 12.2065L120.219 19.6985L113.846 15.0682L107.473 19.6985L109.908 12.2065L103.535 7.57622L111.412 7.57622L113.846 0.0842438Z"
                fill="#C3C3C3" />
            </svg>
            <a href="#" class="btn d-block m-auto mb-3 mt-3">Book Now</a>
          </div>
        </div>
        <div class="card mb-4" style="width: 18rem">
          <img src="../assets/subservices/gardener2.jpg" class="card-img-top Clip-path:circle()" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Omar Tarek</h5>
            <p class="card-text">16 St. Emad Eldein - Down Town - Cairo</p>
            <svg class="d-block m-auto" xmlns="http://www.w3.org/2000/svg" width="125" height="22" viewBox="0 0 125 22"
              fill="none">
              <path
                d="M10.8425 0.0842438L13.2768 7.57622L21.1543 7.57622L14.7813 12.2065L17.2155 19.6985L10.8425 15.0682L4.46943 19.6985L6.90373 12.2065L0.530669 7.57622L8.4082 7.57622L10.8425 0.0842438Z"
                fill="#F97B22" />
              <path
                d="M36.5935 0.0842438L39.0278 7.57622L46.9053 7.57622L40.5322 12.2065L42.9665 19.6985L36.5935 15.0682L30.2204 19.6985L32.6547 12.2065L26.2816 7.57622L34.1592 7.57622L36.5935 0.0842438Z"
                fill="#F97B22" />
              <path
                d="M62.3444 0.0842438L64.7787 7.57622L72.6563 7.57622L66.2832 12.2065L68.7175 19.6985L62.3444 15.0682L55.9714 19.6985L58.4057 12.2065L52.0326 7.57622L59.9102 7.57622L62.3444 0.0842438Z"
                fill="#F97B22" />
              <path
                d="M88.0954 0.0842438L90.5297 7.57622L98.4072 7.57622L92.0342 12.2065L94.4685 19.6985L88.0954 15.0682L81.7224 19.6985L84.1567 12.2065L77.7836 7.57622L85.6611 7.57622L88.0954 0.0842438Z"
                fill="#F97B22" />
              <path
                d="M113.846 0.0842438L116.281 7.57622L124.158 7.57622L117.785 12.2065L120.219 19.6985L113.846 15.0682L107.473 19.6985L109.908 12.2065L103.535 7.57622L111.412 7.57622L113.846 0.0842438Z"
                fill="#F97B22" />
            </svg>
            <a href="#" class="btn d-block m-auto mb-3 mt-3">Book Now</a>
          </div>
        </div>
      </div>
      <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel"
        tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5 fw-bold" id="exampleModalToggleLabel">
                Edit Worker
              </h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="row mb-3">
                <div class="col-4">Agency Name</div>
                <div class="col-8">
                  <input type="text" placeholder="" v-model="agencyInfo.Agency_Name" />
                </div>
              </div>

              <div class="row mb-3">
                <div class="col-4">Email</div>
                <div class="col-8">
                  <input type="email" placeholder="" v-model="agencyInfo.Email" />
                </div>
              </div>

              <div class="row mb-3">
                <div class="col-4">Phone</div>
                <div class="col-8">
                  <input type="text" v-model="agencyInfo.Owner_Phone_no" />
                </div>
              </div>

              <div class="row mb-3">
                <div class="col-4">adress</div>
                <div class="col-8">
                  <input type="text" v-model="agencyInfo.Agency_Address" />
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button class="btn editBtn" @click="EditData">Edit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import NavBarSADashVue from "@/components/NavBarSADash.vue";
export default {
  name: "SAAgencyProfile",
  components: {
    NavBarSADashVue,
  },
  data() {
    return {
      id: " ",
      // Agencies: [],
      orders: [],
      // orderID: "",
      // cxID: "",
      // orderDate: "",
      // workerNm: "",
      agencyInfo: {
        id: "",
        Owner_First_name: "",
        Owner_last_name: "",
        Email: "",
        Gender: "",
        Owner_Phone_no: "",
        Owner_DOB: "",
        Owner_front_nid: "",
        Owner_back_nid: "",
        trade_register_card: "",
        rating: "",
        Logo: "",
        Agency_Name: "",
        Agency_Email: "",
        Agency_Address: "",
        Agency_PostCode: "",
        Agency_City: "",
        BackNaAgency_Governoratetional_ID: "",
        Agency_Phone_no: "",
        Agency_Phone_no2: "",
        owner_Password: "",
      },
    };
  },
  created() {
    this.getAgency();
    this.getAllOrders();
  },
  methods: {
    getAllOrders() {
      axios
        .get("http://localhost:2000/order")
        .then((res) => {
          this.orders = res.data;
          console.log(res.data);
        })
        .catch((err) => console.log(err));
    },
    getAgency() {
      this.id = this.$route.params.id;
      console.log(this.id);
      axios
        .get(`http://localhost:2000/agency/${this.id}`)
        .then((res) => {
          this.agencyInfo = res.data;
          this.agencyInfo.id = res.data.id;
          this.agencyInfo.Owner_First_name = res.data.Owner_First_name;
          this.agencyInfo.Owner_last_name = res.data.Owner_last_name;
          this.agencyInfo.Email = res.data.Email;
          this.agencyInfo.Gender = res.data.Gender;
          this.agencyInfo.Owner_Phone_no = res.data.Owner_Phone_no;
          this.agencyInfo.Owner_DOB = res.data.Owner_DOB;
          this.agencyInfo.Owner_front_nid = res.data.Owner_front_nid;
          this.agencyInfo.Owner_back_nid = res.data.Owner_back_nid;
          this.agencyInfo.trade_register_card = res.data.trade_register_card;
          this.agencyInfo.rating = res.data.rating;
          this.agencyInfo.Logo = res.data.Logo;
          this.agencyInfo.Agency_Name = res.data.Agency_Name;
          this.agencyInfo.Agency_Email = res.data.Agency_Email;
          this.agencyInfo.Agency_Address = res.data.Agency_Address;
          this.agencyInfo.Agency_PostCode = res.data.Agency_PostCode;
          this.agencyInfo.Agency_City = res.data.Agency_City;
          this.agencyInfo.BackNaAgency_Governoratetional_ID = res.data.BackNaAgency_Governoratetional_ID;
          this.agencyInfo.Agency_Phone_no = res.data.Agency_Phone_no;
          this.agencyInfo.Agency_Phone_no2 = res.data.Agency_Phone_no2;
          this.agencyInfo.owner_Password = res.data.owner_Password;
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },

    EditData() {
      axios
        .put(`http://localhost:2000/agency/${this.id}`, this.agencyInfo)
        .then((res) => {
          console.log(res);
          this.agencyInfo = {
            // First_name: "",
            // Last_name: "",
            // Phone: "",
            // Address: "",
            // Area: "",
            // Categories: "",
            // email: "",
          };
        })
        .catch((err) => console.log(err))
        .then(this.$router.push(`/SAAgencyProfile/${this.id}`));
      this.getAgency();
      this.getAllOrders();
      location.reload()
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/global/colors";
@import "../scss/global/variables";

.card-text {
  text-align: center;
  font-size: $paragraph;
  color: $blueColor;
}

img {
  margin-top: 15px;
  clip-path: circle();
  height: 200px;
}

.btn {
  @include button;
}

p {
  color: $blueColor;
}

.breadCrumb {
  margin-left: 1px;
}

svg {
  color: $orangeColor;

  &:hover {
    color: $blueColor;
  }
}

.breadcrumb-item {
  font-size: $paragraph !important;
  color: $blueColor !important;
  font-weight: bold !important;
}

.title {
  font-size: $title;
  font-weight: bold;
}

.subtitle {
  font-size: $subTitle;
  font-weight: bold;
}

.cardStyle {
  background-color: white;
  border-radius: $border-radius-big;
  box-shadow: 2px 4px 4px 2px rgba(117, 113, 113, 0.25);
}

.searchCard {
  @extend .cardStyle;
  @extend .subtitle;
}

input.search {
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

.servicesTable {
  @extend .cardStyle;
}

@media (min-width: 991px) {
  .search {
    width: 500px;
  }

  .searchKey {
    padding-left: 30px;
  }
}

@media (max-width: 990.999px) {
  .searchKey {
    padding-left: 30px;
  }
}

@media (max-width: 767px) {
  .search {
    width: 250px;
    margin-left: 30px;
  }
}

@media (max-width: 575px) {
  .searchKey {
    margin-top: 5px;
    margin-bottom: 1px;
  }

  .searchCard {
    margin-left: 5px;
    margin-right: 5px;
    display: flex;
    justify-content: center;
  }

  .search {
    width: 350px;
  }
}

.all {
  background-color: $backgroundColor;
}

thead tr tbody {
  display: block;
}

#table-wrapper {
  display: block;
}

#table-scroll {
  height: 350px;
  overflow: auto;
  margin-top: 20px;
}

#table-wrapper table {
  width: 100%;
}

::-webkit-scrollbar {
  width: 13px;
}

/* Track */
::-webkit-scrollbar-track {
  border-radius: 10px;
  background-color: #898b8e;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: $blueColor;
  border-radius: 10px;
  height: 66px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: $orangeColor;
}

table {
  color: $blueColor !important;
}

thead {
  font-size: $subTitle;
  width: 100% !important;
}

tbody {
  font-size: $paragraph;
}

// img {
//   width: 200px;
//   height: 200px;
//   border-radius: 100%;
// }
.servent {
  font-size: medium;
  padding-left: 40px;
}
</style>

<style></style>
