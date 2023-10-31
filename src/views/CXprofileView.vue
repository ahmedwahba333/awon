<template>
  <div class="bg">
    <NavBarPages />
    <div class="container grid mt-5">
      <div class="row searchCard pt-4 pb-4">
        <div class="setting">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="#F97B22"
            class="bi bi-gear"
            viewBox="0 0 16 16"
          >
            <path
              d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"
            />
            <path
              d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"
            />
          </svg>
        </div>
        <p class="subtitle mx-4">Account</p>
        <div class="col-lg-3 col-md-3 col-sm-6"> 
          <p class="searchKey mx-4">Name</p>
          <p class="servent mx-4">{{ cx["First_name"] }}</p>
          <p class="searchKey mx-4">Email</p>
          <p class="servent mx-4">a******76@gmail.com</p>
          <p class="searchKey mx-4">Phone</p>
          <p class="servent mx-4">+20 1121998968</p>
          <p class="searchKey mx-4">Payment method</p>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-6">
          <p class="searchKey mx-4">Location</p>
          <p class="servent mx-4">
            3 street sayed algarhe haram al giza, Giza, GZ 12512 - Egypt
          </p>
          <p class="searchKey mx-4">Time Zone</p>
          <p class="servent mx-4">UTC+03:00 cairo</p>
        </div>
        <div class="col-lg-5 col-md-5 col-sm-12">
          <img
            src="../assets/images/profile.jpg"
            class="card-img-top Clip-path:circle()"
            alt=""
          />
        </div>
      </div>
      <div class="row searchCard pt-4 pb-4 mt-5">
        <p class="subtitle mx-4">Upcoming Order</p>
        <div class="order d-flex">
          <div class="col-lg-5 col-md-5 col-sm-12">
          <img
            src="../assets/images/profile.jpg"
            class="card-img-top Clip-path:circle()"
            alt=""
          />
        </div>
        <div class="col-lg-3 col-md-3 col-sm-6">
          <p class="searchKey">Ali Saber</p>
          <p class="servent">Amr Mohamed Sayed</p>
          <p class="searchKey">Email</p>
          <p class="servent">a******76@gmail.com</p>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-6">
          <p class="searchKey mx-4">Location</p>
          <p class="servent mx-4">
            3 street sayed algarhe haram al giza, Giza, GZ 12512 - Egypt
          </p>
          <p class="searchKey mx-4">Time Zone</p>
          <p class="servent mx-4">UTC+03:00 cairo</p>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBarPages from "@/components/NavBarPages.vue";
import axios from "axios";
export default {
  components: {
    NavBarPages,
  },

  data() {
    return {
      cx: [],
    };
  },

  created() {
    axios
      .get("http://localhost:2000/cx")
      .then((res) => {
        this.cx = res.data;
      })
      .catch((err) => console.log(err));
},
};
</script>

<style lang="scss" scoped>
@import "../scss/global/colors";
@import "../scss/global/variables";
@import "../scss/main.scss";

.bg {
  background-color: $backgroundColor;
}
.setting {
  display: flex;
  justify-content: end;
  
}
img {
  margin-top: 15px;
  // margin-left: 15px;
  clip-path: circle();
  height: 200px;
}
.cardStyle {
  background-color: white;
  border-radius: $border-radius-big;
  box-shadow: 2px 4px 4px 2px rgba(117, 113, 113, 0.25);
}

.subtitle {
  font-size: $subTitle;
  font-weight: bold;
}
.searchCard {
  @extend .cardStyle;
  @extend .subtitle;
  display: flex;
}

.search {
  width: 500px;
}

.searchKey {
  font-size: $paragraph;
  font-weight: $semiBold;
  margin-left: auto;
}

@media (max-width: 990.999px) {
  .searchKey {
    padding-left: 20px;
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

.servent {
  font-size: medium;
  font-weight: $regular;
}

.order {
  width: 90%;
  height: 250px;
  justify-content: center;
  justify-items: center;
  margin: 0px auto;
}
</style>
