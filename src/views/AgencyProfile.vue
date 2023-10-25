<template>
  <NavBarSADashVue />
  <div class="all">
    <div class="container grid">
      <!-- BreadCrumb -->
      <div class="row pt-3 breadCrumb">
        <ol class="breadcrumb">
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
          <li class="breadcrumb-item" aria-current="page">Agencies</li>
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
          <li class="breadcrumb-item" aria-current="page">Agency Profile</li>
        </ol>
      </div>
      <!-- Search Filter -->
      <div class="row searchCard pt-3 pb-3">
        <p class="subtitle mx-4">Account</p>
        <div class="col-lg-5 col-md-5 col-sm-12">
          <img
            src="../assets/images/about-us.jpg"
            class="card-img-top Clip-path:circle()"
            alt=""
          />
        </div>

        <div class="col-lg-3 col-md-3 col-sm-6">
          <p class="searchKey">Name</p>
          <p class="servent">Home care</p>
          <p class="searchKey">Email&Phone</p>
          <p class="servent">a******76@gmail.com</p>
          <p class="servent">+20 1121998968</p>
        </div>

        <div class="col-lg-3 col-md-3 col-sm-6">
          <p class="searchKey">Location</p>
          <p class="servent">
            3 street sayed algarhe haram al giza, Giza, GZ 12512 - Egypt
          </p>
          <p class="searchKey">Time Zone</p>
          <p class="servent">UTC+03:00 cairo</p>
        </div>
      </div>

      <!-- Services Table -->

      <div class="row grid servicesTable mt-4 text-center" id="table-wrapper">
        <div class="col-12 mt-3 overflow-auto" id="table-scroll">
          <table
            class="table mb-2"
            style="color: $blueColor; --bs-table-color: $blueColor"
            id=""
          >
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
              <tr>
                <td>#128</td>
                <td>2 Bedrooms</td>
                <td>12/7/2023</td>
                <td>#127566</td>
                <td>Mark Lee</td>
                <td>Mohsen</td>
              </tr>
              <tr v-for="n in 12" :key="n">
                <td>#127</td>
                <td>2 Bedrooms</td>
                <td>12/7/2023</td>
                <td>#127566</td>
                <td>Mark Lee</td>
                <td>Mohsen</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

        <p class="subtitle mt-4">Agency Worker</p>
        <div class="row justify-content-center my-5 gap-5">
          <div class="card " style="width: 18rem">
            <img
              src="../assets/subservices/gardener1.jpg"
              class="card-img-top Clip-path:circle()"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Mohamed Tarek</h5>
              <p class="card-text">16 St. Emad Eldein - Down Town - Cairo</p>
              <svg
                class="d-block m-auto"
                xmlns="http://www.w3.org/2000/svg"
                width="125"
                height="22"
                viewBox="0 0 125 22"
                fill="none"
              >
                <path
                  d="M10.8425 0.0842438L13.2768 7.57622L21.1543 7.57622L14.7813 12.2065L17.2155 19.6985L10.8425 15.0682L4.46943 19.6985L6.90373 12.2065L0.530669 7.57622L8.4082 7.57622L10.8425 0.0842438Z"
                  fill="#F97B22"
                />
                <path
                  d="M36.5935 0.0842438L39.0278 7.57622L46.9053 7.57622L40.5322 12.2065L42.9665 19.6985L36.5935 15.0682L30.2204 19.6985L32.6547 12.2065L26.2816 7.57622L34.1592 7.57622L36.5935 0.0842438Z"
                  fill="#F97B22"
                />
                <path
                  d="M62.3444 0.0842438L64.7787 7.57622L72.6563 7.57622L66.2832 12.2065L68.7175 19.6985L62.3444 15.0682L55.9714 19.6985L58.4057 12.2065L52.0326 7.57622L59.9102 7.57622L62.3444 0.0842438Z"
                  fill="#F97B22"
                />
                <path
                  d="M88.0954 0.0842438L90.5297 7.57622L98.4072 7.57622L92.0342 12.2065L94.4685 19.6985L88.0954 15.0682L81.7224 19.6985L84.1567 12.2065L77.7836 7.57622L85.6611 7.57622L88.0954 0.0842438Z"
                  fill="#F97B22"
                />
                <path
                  d="M113.846 0.0842438L116.281 7.57622L124.158 7.57622L117.785 12.2065L120.219 19.6985L113.846 15.0682L107.473 19.6985L109.908 12.2065L103.535 7.57622L111.412 7.57622L113.846 0.0842438Z"
                  fill="#F97B22"
                />
              </svg>
              <a href="#" class="btn d-block m-auto mb-3 mt-3">Book Now</a>
            </div>
          </div>
          <div class="card mb-4" style="width: 18rem">
            <img
              src="../assets/subservices/gardener3.jpg"
              class="card-img-top Clip-path:circle()"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Salma Osama</h5>
              <p class="card-text">16 St. Emad Eldein - Down Town - Cairo</p>
              <svg
                class="d-block m-auto"
                xmlns="http://www.w3.org/2000/svg"
                width="125"
                height="22"
                viewBox="0 0 125 22"
                fill="none"
              >
                <path
                  d="M10.8425 0.0842438L13.2768 7.57622L21.1543 7.57622L14.7813 12.2065L17.2155 19.6985L10.8425 15.0682L4.46943 19.6985L6.90373 12.2065L0.530669 7.57622L8.4082 7.57622L10.8425 0.0842438Z"
                  fill="#F97B22"
                />
                <path
                  d="M36.5935 0.0842438L39.0278 7.57622L46.9053 7.57622L40.5322 12.2065L42.9665 19.6985L36.5935 15.0682L30.2204 19.6985L32.6547 12.2065L26.2816 7.57622L34.1592 7.57622L36.5935 0.0842438Z"
                  fill="#F97B22"
                />
                <path
                  d="M62.3444 0.0842438L64.7787 7.57622L72.6563 7.57622L66.2832 12.2065L68.7175 19.6985L62.3444 15.0682L55.9714 19.6985L58.4057 12.2065L52.0326 7.57622L59.9102 7.57622L62.3444 0.0842438Z"
                  fill="#F97B22"
                />
                <path
                  d="M88.0954 0.0842438L90.5297 7.57622L98.4072 7.57622L92.0342 12.2065L94.4685 19.6985L88.0954 15.0682L81.7224 19.6985L84.1567 12.2065L77.7836 7.57622L85.6611 7.57622L88.0954 0.0842438Z"
                  fill="#F97B22"
                />
                <path
                  d="M113.846 0.0842438L116.281 7.57622L124.158 7.57622L117.785 12.2065L120.219 19.6985L113.846 15.0682L107.473 19.6985L109.908 12.2065L103.535 7.57622L111.412 7.57622L113.846 0.0842438Z"
                  fill="#C3C3C3"
                />
              </svg>
              <a href="#" class="btn d-block m-auto mb-3 mt-3">Book Now</a>
            </div>
          </div>
          <div class="card mb-4" style="width: 18rem">
            <img
              src="../assets/subservices/gardener2.jpg"
              class="card-img-top Clip-path:circle()"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Omar Tarek</h5>
              <p class="card-text">16 St. Emad Eldein - Down Town - Cairo</p>
              <svg
                class="d-block m-auto"
                xmlns="http://www.w3.org/2000/svg"
                width="125"
                height="22"
                viewBox="0 0 125 22"
                fill="none"
              >
                <path
                  d="M10.8425 0.0842438L13.2768 7.57622L21.1543 7.57622L14.7813 12.2065L17.2155 19.6985L10.8425 15.0682L4.46943 19.6985L6.90373 12.2065L0.530669 7.57622L8.4082 7.57622L10.8425 0.0842438Z"
                  fill="#F97B22"
                />
                <path
                  d="M36.5935 0.0842438L39.0278 7.57622L46.9053 7.57622L40.5322 12.2065L42.9665 19.6985L36.5935 15.0682L30.2204 19.6985L32.6547 12.2065L26.2816 7.57622L34.1592 7.57622L36.5935 0.0842438Z"
                  fill="#F97B22"
                />
                <path
                  d="M62.3444 0.0842438L64.7787 7.57622L72.6563 7.57622L66.2832 12.2065L68.7175 19.6985L62.3444 15.0682L55.9714 19.6985L58.4057 12.2065L52.0326 7.57622L59.9102 7.57622L62.3444 0.0842438Z"
                  fill="#F97B22"
                />
                <path
                  d="M88.0954 0.0842438L90.5297 7.57622L98.4072 7.57622L92.0342 12.2065L94.4685 19.6985L88.0954 15.0682L81.7224 19.6985L84.1567 12.2065L77.7836 7.57622L85.6611 7.57622L88.0954 0.0842438Z"
                  fill="#F97B22"
                />
                <path
                  d="M113.846 0.0842438L116.281 7.57622L124.158 7.57622L117.785 12.2065L120.219 19.6985L113.846 15.0682L107.473 19.6985L109.908 12.2065L103.535 7.57622L111.412 7.57622L113.846 0.0842438Z"
                  fill="#F97B22"
                />
              </svg>
              <a href="#" class="btn d-block m-auto mb-3 mt-3">Book Now</a>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import NavBarSADashVue from '@/components/NavBarSADash.vue';
export default {
  name: "AgencyProfile",
  components: {
    NavBarSADashVue,
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
