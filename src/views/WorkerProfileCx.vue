<template>
  <div class="bg">
    <NavBarPages />
    <div class="container">
      <div class="d-flex justify-content-start">
        <div class="top d-flex flex-wrap justify-content-around align-items-center">
          <div class="img mx-5">
            <img :src="`${wk.img}`" />
            <!-- <img src="https://play-lh.googleusercontent.com/aFWiT2lTa9CYBpyPjfgfNHd0r5puwKRGj2rHpdPTNrz2N9LXgN_MbLjePd1OTc0E8Rl1=w240-h480-rw" alt=""> -->
          </div>
          <div class="">
            <div class="w-name"> {{ wk.First_name }} {{ wk.Last_name }} </div>
            <router-link :to="`/booking/${wk.id}`">
              <div class="btn m-0 mt-2">Book now</div>
            </router-link>
          </div>
        </div>
      </div>
      <div class="box row">
        <div class="col-md-6 col-sm-12 col-12">
          <div class="title">Worker Availability</div>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle"
            viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path
              d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
          </svg>
          <span class="wk-box"> {{ wk.Categories }} </span>
          <br />
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle"
            viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path
              d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
          </svg>
          <span class="wk-box">Available for work in these areas: {{ wk.Area }}</span><br>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle"
            viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path
              d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
          </svg>
          <span class="wk-box">{{ wk.First_name }} has prior experience of {{ wk.Experience }} years.</span><br />
        </div>
        <div class="col-md-6 col-sm-12 col-12">
          <div class="title">Worker Prices</div>
          <div class="subtitle"> {{ wk.Categories }} </div>
          <div class="d-flex">
            <div class="wk-info me-3 fs-6">
              <div> {{ wk.Service_1 }} </div>
              <div> {{ wk.Service_2 }} </div>
              <div> {{ wk.Service_3 }} </div>
              <div> {{ wk.Service_4 }} </div>
            </div>
            <div class="wk-info fs-6">
              <div> {{ wk.Service_1_price }} LE </div>
              <div v-if="wk.Service_3_price"> {{ wk.Service_2_price }} LE </div>
              <div v-if="wk.Service_3_price"> {{ wk.Service_3_price }} LE </div>
              <div v-if="wk.Service_4_price"> {{ wk.Service_4_price }} LE </div>
            </div>
          </div>
        </div>
      </div>
      <div class="box">
        <div class="title">Worker Reviews</div>
        <div class="row justify-content-center align-items-start">
          <div class="col col-lg-6 col-md-6 col-sm-12 col-12" v-for="(index, i) in rev.slice(0, 4)" :key="i">
            <div class="content row align-items-start">
              <div class="col-sm-7 col-7 p-0">
                <div class="cx name">Customer Name: {{ index.Name }} </div>
              </div>
              <div class="cx rate col-sm-5 col-5">
                <div class="rating">
                  <star-rating active-color="#F97B22" read-only star-size=15 :rating="`${index.Rate}`"></star-rating>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="cx-comment col-12 col-sm-12">
                {{ index.Review }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="box">
        <div class="title">Badges</div>
        <div class="b-box row">
          <div class="badge-icon col col-lg-3 col-md-3 col-sm-12 col-12">
            <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 107 106" fill="none">
              <path
                d="M102.246 87.3738L93.4932 89.4428C91.5303 89.9202 89.9919 91.4056 89.5675 93.3684L87.7107 101.167C86.7028 105.411 81.2917 106.737 78.48 103.395L62.6181 85.1457C61.3449 83.6603 62.0346 81.3261 63.9443 80.8487C73.3342 78.5675 81.7691 73.3156 87.976 65.8355C88.9839 64.6154 90.7876 64.4562 91.9017 65.5703L103.679 77.3474C107.711 81.3792 106.278 86.4189 102.246 87.3738Z"
                fill="#F97B22" />
              <path
                d="M3.83351 87.3738L12.5868 89.4428C14.5496 89.9202 16.088 91.4056 16.5124 93.3684L18.3692 101.167C19.3771 105.411 24.7882 106.737 27.5999 103.395L43.4619 85.1457C44.7351 83.6603 44.0454 81.3261 42.1356 80.8487C32.7457 78.5675 24.3108 73.3156 18.1039 65.8355C17.096 64.6154 15.2923 64.4562 14.1782 65.5703L2.40117 77.3474C-1.63063 81.3792 -0.198281 86.4189 3.83351 87.3738Z"
                fill="#F97B22" />
              <path
                d="M53.174 0C32.6437 0 16.0391 16.6046 16.0391 37.1349C16.0391 44.8272 18.3202 51.8828 22.2459 57.7714C27.9753 66.2594 37.0468 72.254 47.6038 73.7924C49.4075 74.1107 51.2642 74.2699 53.174 74.2699C55.0838 74.2699 56.9406 74.1107 58.7443 73.7924C69.3012 72.254 78.3727 66.2594 84.1021 57.7714C88.0278 51.8828 90.309 44.8272 90.309 37.1349C90.309 16.6046 73.7043 0 53.174 0ZM69.4073 35.9678L65.0041 40.371C64.2614 41.1137 63.837 42.546 64.1023 43.607L65.3755 49.0712C66.3834 53.3682 64.1023 55.0658 60.2827 52.7847L54.9777 49.6547C54.0228 49.0712 52.4313 49.0712 51.4764 49.6547L46.1714 52.7847C42.3518 55.0128 40.0707 53.3682 41.0786 49.0712L42.3518 43.607C42.564 42.5991 42.1927 41.1137 41.45 40.371L36.9407 35.9678C34.3413 33.3684 35.1901 30.769 38.7975 30.1854L44.4738 29.2305C45.4287 29.0714 46.5428 28.2226 46.9672 27.3738L50.0971 21.1139C51.7947 17.7187 54.5533 17.7187 56.2509 21.1139L59.3808 27.3738C59.8052 28.2226 60.9193 29.0714 61.9272 29.2305L67.6036 30.1854C71.1579 30.769 72.0067 33.3684 69.4073 35.9678Z"
                fill="#F97B22" />
            </svg>
            <div class="badge-name">{{ wk.Badge }}</div>
          </div>
        </div>
      </div>
      <FooterComponent />
    </div>
  </div>
</template>

<script>
import NavBarPages from "@/components/NavBarPages.vue";
import FooterComponent from "@/components/footer.vue";
import StarRating from 'vue-star-rating';
import axios from 'axios';

export default {

  name: "WorkerProfile",
  data() {
    return {
      id: '',
      wk: [],
      rev: []
    }
  },

  created() {
    this.getWkById()
    this.getReviews()
  },
  components: {
    FooterComponent,
    NavBarPages,
    StarRating,
  },
  methods: {
    getWkById() {
      this.id = this.$route.params.id
      // axios.get(`http://localhost:2000/worker/77`)
      axios.get(`http://localhost:2000/worker/${this.id}`)
        // .then(res =>this.wk = res.data)
        .then(res => {
          this.wk = res.data
          console.log(res.data)
        })
        .catch(err => console.log(err))
    },
    getReviews() {
      axios.get("http://localhost:2000/review")
        .then((res) => { console.log(this.rev = res.data) })
        .catch((err) => { console.log(err) })
    }
  }

};
</script>

<style lang="scss" scoped>
@import "../scss/global/colors";
@import "../scss/global/variables";

.bg {
  background-color: $backgroundColor;
}

.img {
  clip-path: circle();
  width: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.img img {
  width: 250px;
}

.box {
  @include box;
}

.btn {
  @include button;
  margin: center;
}

.title {
  font-weight: bold;
  font-size: $subTitle;
  color: $blueColor;
  margin-bottom: 1%;
  margin-top: 1%;

}

.subtitle {
  font-weight: bold;
  font-size: $paragraph;
  color: $blueColor;
  margin-bottom: 1%;
  margin-top: 1%;

}

.wk-box {
  padding: 20px;
  font-size: $paragraph;
}

.wk-info {
  font-size: $paragraph;
}

.content {
  margin: 1%;
  vertical-align: middle;
  font-weight: 600;
}

.cx-comment {
  margin: 2%;
}

.rev-img {
  clip-path: circle();
  width: 100px;
}

.badge-icon {
  display: inline-block;
  vertical-align: middle;
  justify-content: center;
}

.badge-icon svg {
  margin-top: 10px;
}

@media screen and (max-width: 570px) {
  .badge-icon svg {
    width: 50px;
    height: 50px;
  }
}

.badge-name {
  display: inline-block;
  vertical-align: middle;
  font-weight: 600;
  margin-left: 10px;
}

.b-box {
  display: flex;
  justify-content: center;
  align-items: center;
}

.w-name {
  color: $blueColor;
  font-size: $title;
  font-weight: 600;
}

.rating {
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
}

.rating>input {
  display: none;
}

.rating>label:before {
  opacity: 1;
}

.rating>label {
  position: relative;
  font-size: 20px;
  font-weight: 300;
  color: $orangeColor;
  cursor: pointer;
}

.rating>label::before {
  content: "\2605";
  position: absolute;
  opacity: 1;
}
</style>
