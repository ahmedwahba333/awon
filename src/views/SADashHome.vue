<template>
  <NavBarSADash />
  <div class="bg">
    <div class="container">
      <div class="row header p-3 col-12">
        <h1>Welcome To Dashboard Home</h1>
        <h5>All Information of Your About Agency</h5>
      </div>


      <div class="row justify-content-center gap-4">
        <div class="box sectionOne m-0 col-md-4 col-12 ">
          <div class="d-flex justify-content-between mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path d="M20.5703 14.6694H29.6579" stroke="#F97B22" stroke-width="4" stroke-linecap="round"
                stroke-linejoin="round" />
              <path d="M10.2012 14.6697L11.4994 15.9679L15.3941 12.0732" stroke="#F97B22" stroke-width="4"
                stroke-linecap="round" stroke-linejoin="round" />
              <path d="M20.5703 26.7866H29.6579" stroke="#F97B22" stroke-width="4" stroke-linecap="round"
                stroke-linejoin="round" />
              <path d="M10.2012 26.7864L11.4994 28.0846L15.3941 24.1899" stroke="#F97B22" stroke-width="4"
                stroke-linecap="round" stroke-linejoin="round" />
              <path
                d="M14.736 37.3803H25.1219C33.7767 37.3803 37.2387 33.9184 37.2387 25.2635V14.8776C37.2387 6.2227 33.7767 2.76074 25.1219 2.76074H14.736C6.0811 2.76074 2.61914 6.2227 2.61914 14.8776V25.2635C2.61914 33.9184 6.0811 37.3803 14.736 37.3803Z"
                stroke="#F97B22" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <h4>Total Orders</h4>
          </div>
          <div class="d-flex justify-content-between">
            <h4>{{ lastOrder }}</h4>

          </div>
        </div>
        <div class="box sectionOne m-0 col-md-4 col-12 ">
          <div class="d-flex justify-content-between mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="42" height="43" viewBox="0 0 42 43" fill="none">
              <path
                d="M14.623 0.804199C9.18048 0.804199 4.75586 5.22882 4.75586 10.6713C4.75586 16.0099 8.93121 20.3307 14.3737 20.5177C14.5399 20.4969 14.7061 20.4969 14.8307 20.5177H14.9346H14.9761C20.294 20.3307 24.4693 16.0099 24.4901 10.6713C24.4901 5.22882 20.0655 0.804199 14.623 0.804199Z"
                fill="#F97B22" />
              <path
                d="M25.1766 26.0409C19.381 22.1771 9.92944 22.1771 4.09226 26.0409C1.4541 27.8066 0 30.1955 0 32.7505C0 35.3056 1.4541 37.6737 4.07148 39.4186C6.97969 41.3713 10.8019 42.3476 14.6241 42.3476C18.4462 42.3476 22.2684 41.3713 25.1766 39.4186C27.794 37.6529 29.2481 35.2848 29.2481 32.709C29.2274 30.1539 27.794 27.7858 25.1766 26.0409Z"
                fill="#F97B22" />
              <path
                d="M37.4508 11.893C37.7832 15.9229 34.9165 19.4542 30.9489 19.932C30.9281 19.932 30.9281 19.932 30.9073 19.932H30.845C30.7204 19.932 30.5957 19.932 30.4919 19.9735C28.4769 20.0774 26.6281 19.4334 25.2363 18.2494C27.3759 16.3384 28.6015 13.4717 28.3523 10.3558C28.2069 8.67316 27.6252 7.13597 26.7527 5.82728C27.5421 5.43259 28.4561 5.18332 29.3909 5.10022C33.4624 4.74709 37.0976 7.77993 37.4508 11.893Z"
                fill="#F97B22" />
              <path
                d="M41.6027 31.1127C41.4365 33.1276 40.1486 34.8725 37.9882 36.0566C35.9109 37.1991 33.2935 37.7392 30.6969 37.6769C32.1926 36.3267 33.065 34.644 33.2312 32.8576C33.4389 30.2817 32.2133 27.8098 29.7621 25.8363C28.3704 24.7354 26.7501 23.8629 24.9844 23.219C29.5752 21.8895 35.35 22.7827 38.9022 25.6494C40.8133 27.1866 41.7896 29.1185 41.6027 31.1127Z"
                fill="#F97B22" />
            </svg>
            <h4>New Workers</h4>
          </div>
          <div class="d-flex justify-content-between">
            <h4>{{ NoWorker }}</h4>
            <!-- <div class="up d-flex justify-content-between p-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="17" viewBox="0 0 13 17" fill="none">
                        <path d="M11.5 6.57604L6.55436 1.63037L1.6087 6.57603" stroke="#F97B22" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M6.55469 15.4816L6.55469 1.76904" stroke="#F97B22" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                      <h6>7%</h6>
                   </div> -->
          </div>
        </div>
        <div class="box sectionOne m-0 col-md-4 col-12 ">
          <div class="d-flex justify-content-between mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="43" height="49" viewBox="0 0 43 49" fill="none">
              <path
                d="M11.5684 14.7441V12.5607C11.5684 7.49612 15.6426 2.52156 20.7072 2.04886C26.7397 1.46362 31.8268 6.21309 31.8268 12.133V15.2393"
                stroke="#F97B22" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              <path
                d="M14.9447 46.9999H28.4503C37.4991 46.9999 39.1197 43.3759 39.5924 38.9641L41.2806 25.4585C41.8884 19.9662 40.3127 15.4868 30.7012 15.4868H12.6937C3.08226 15.4868 1.5066 19.9662 2.11435 25.4585L3.80256 38.9641C4.27525 43.3759 5.89593 46.9999 14.9447 46.9999Z"
                stroke="#F97B22" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M29.5645 24.4907H29.5847" stroke="#F97B22" stroke-width="3" stroke-linecap="round"
                stroke-linejoin="round" />
              <path d="M13.8066 24.4907H13.8269" stroke="#F97B22" stroke-width="3" stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
            <h4>Services No.</h4>
          </div>
          <div class="d-flex justify-content-between">
            <h4>{{ serviceNo }}</h4>
            <!-- <div class="up d-flex justify-content-between p-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="17" viewBox="0 0 13 17" fill="none">
                        <path d="M11.5 6.57604L6.55436 1.63037L1.6087 6.57603" stroke="#F97B22" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M6.55469 15.4816L6.55469 1.76904" stroke="#F97B22" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                      <h6>30%</h6>
                   </div> -->
          </div>
        </div>


        <div class="box sectionTwoA m-0 col-md-4 col-12 ">
          <canvas id="myChart" height="40vh" width="100vw" border-bottom="5"></canvas>
        </div>
        <div class="box sectionTwoB m-0 col-md-4 col-12 ">
          <div class="p-2">
            <h4>Special Customer</h4>
          </div>
          <div class="d-flex flex-row justify-content-between" v-for="(ord, i) in orders.slice(0, 5)" :key="i">


            <div class="p-2">
              <p>{{ ord["Customer_FName"] }} {{ ord["Customer_LName"] }}</p>
            </div>
            <div class="p-2">
              <p>{{ ord.total_gain }}$</p>
            </div>
          </div>
        </div>
        <div class="box sectionThreeA m-0  col-md-4 col-sm-6 col-12 ">
          <div class="p-2">
            <h4>Services Status</h4>
          </div>
          <canvas id="myChart2" height="40vh" width="100vw" border-bottom="5"></canvas>
        </div>
        <div class="box sectionThreeB m-0 col-md-4 col-sm-6 col-12">
          <div class="p-2">
            <h4>Recent Reviews</h4>
          </div>
          <div class="d-flex flex-row my-3 align-items-center" v-for="(review, i) in recentReview" :key="i">
            <div>
              <img :src="`${review.picture}`" alt="Cx" class="object-fit-cover" />
            </div>
            <div class="ms-4">
              <h4>{{ review["Name"] }}</h4>
              <star-rating active-color="#F97B22" read-only star-size="20" :rating="`${review.Rate}`"></star-rating>
              <p>
                {{ review.Review }}
              </p>
            </div>
          </div>
        </div>


      </div>
    </div>

  </div>
</template>

<script>
import NavBarSADash from "@/components/NavBarSADash.vue";
import Chart from "chart.js/auto";
import axios from 'axios';
export default {
  name: "AgancyDash",
  components: { NavBarSADash },
  data() {
    return {
      Delivered: [],
      Pending: [],
      Canceled: [],
      cx: [],
      orders: [],
      lastOrder: 0,
      rev: [],
      recentReview: "",
      serviceNo: 0,
      services: [],
      workers: [],
      NoWorker: 0,


    }
  },
  created() {
    this.getCx(),
      this.lastOrderID(),
      this.getOrders(),
      this.getRev(),
      this.recentRev(),
      this.getServicesNo(),
      this.getWorker()

  },
  methods: {
    getCx() {
      axios.get("http://localhost:2000/cx")
        .then((res) => { this.cx = res.data })
        .catch((err) => { console.log(err) })
    },
    getOrders() {
      axios.get("http://localhost:2000/order")
        .then((res) => {
          this.orders = res.data
          this.lastOrder = this.orders.length
          for (let x = 0; x < this.orders.length; x++) {
            if (this.orders[x]["Order_Status"] == "completed") {
              this.Delivered.push("completed")
            }
            if (this.orders[x]["Order_Status"] == "pending") {
              this.Pending.push("pending")
            }
            if (this.orders[x]["Order_Status"] == "cancelled") {
              this.Canceled.push("cancelled")
            }
            console.log(this.Delivered
              , this.Pending,
              this.Canceled);
          }
          const ctx = document.getElementById("myChart");
          const ctx2 = document.getElementById("myChart2");
          new Chart(ctx, {
            type: "line",
            data: {
              labels: ["4 Oct.", "5 Oct.", "6 Oct.", "7 Oct.", "8 Oct.", "9 Oct.", "10 Oct.", "11 Oct.", "12 Oct."],

              datasets: [
                {
                  label: "Recruitment Report",
                  data: [8, 14, 12, 15, 10, 12, 9, 11, 13],
                  borderWidth: 3,
                  borderColor: '#F97B22',
                  fill: true,
                  backgroundColor: '#EBEBD3',

                },

              ],
            },
            options: {
              elements: {
                line: {
                  tension: 0.3,
                },

                animations: {
                  radius: {
                    duration: 400,
                    easing: "easeInOutBack",
                    loop: (context) => context.active,
                  },
                },
                hoverRadius: 12,
                hoverBackgroundColor: "yellow",
                interaction: {
                  mode: "nearest",
                  intersect: false,
                  axis: "x",
                },
                plugins: {
                  tooltip: {
                    enabled: false,
                  },

                },
              },
            },
          });
          const data = {
            labels: ["Canceled", "Pending", "Delivered"],
            datasets: [
              {
                label: "My First Dataset",
                data: [this.Canceled.length, this.Pending.length, this.Delivered.length],
                backgroundColor: [
                  '#193655',
                  '#EBEBD3',
                  '#F97B22'
                  ,
                ],
                hoverOffset: 4,
              },
            ],
          };
          new Chart(ctx2, {
            type: "doughnut",
            data: data,
            options: {
              theme: "light2",
              animationEnabled: true,
              exportEnabled: true,
              title: {
                text: "Annual Consumption of Electricity"
              },
              axisY: {
                title: "Consumption (KilowattHour)",
                labelFormatter: function (e) {
                  return (e.value / 1000000000000) + "T"
                }
              },
              toolTip: {
                shared: true,
                // contentFormatter: function(e) {
                //   return "<span style='color:" + e.entries[0].dataSeries.color + ";'>" + e.entries[0].dataPoint.label + "</span>: " + canvas.formatNumber(e.entries[0].dataPoint.y / 1000000000000, "#.#0") + "T KilowattHour";
                // }
              },
              data: [{
                type: "splineArea",
                color: "#7986CB",
                dataPoints: [
                  { label: "2009", y: 3644702000000 },
                  { label: "2010", y: 3788321000000 },
                  { label: "2011", y: 3779423000000 },
                  { label: "2012", y: 3726774000000 },
                  { label: "2013", y: 3767564000000 },
                  { label: "2014", y: 3788954000000 },
                  { label: "2015", y: 3780836000000 },
                  { label: "2016", y: 3807711000000 },
                ]
              }]
            },
            styleOptions: {
              width: "100%",
              height: "360px"
            }

          });
        })
        .catch((err) => { console.log(err) })

    },
    lastOrderID() {
      return this.lastOrder;
      // console.log(this.lastOrder);
    },
    getRev() {
      axios
        .get("http://localhost:2000/review")
        .then((res) => {
          this.rev = res.data.slice(-6, -3);
          this.recentReview = this.rev;
          console.log(this.recentReview);
        })
        .catch((err) => {
          console.log(err);
        });
    },

    recentRev() {
      console.log(this.recentReview);
      return this.recentReview;
    },
    getServicesNo() {
      axios
        .get("http://localhost:2000/service")
        .then((res) => {
          this.services = res.data;
          this.serviceNo = this.services.length;
          //  console.log(this.orders.length);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getWorker() {
      axios
        .get("http://localhost:2000/worker")
        .then((res) => {
          this.workers = res.data
          this.NoWorker = this.workers.length
        })
        .catch((err) => {
          console.log(err);
        });
    },

  },
  mounted() {


  }
};
</script>

<style lang="scss" scoped>
@import "../scss/global/colors";
@import "../scss/global/variables";

// .content {
//   background-color: $backgroundColor;
//   display: inline-block;
//   margin-left: 15%;
//   padding: 25px;
// }
img {
  clip-path: circle();
  width: 60%;
}

.bg {
  background-color: $backgroundColor;
  padding-bottom: 20px;
}

.container {
  h1 {
    font-size: $paragraph;
    font-weight: $bold;
    color: $blueColor;
  }

  h5 {
    font-size: $small;
    color: $blueColor;
    font-weight: $regular;
  }

  @media(min-width: 767px) {
    h1 {
      font-size: $title;
    }

    h5 {
      font-size: $paragraph;
    }
  }

}

.up {
  width: 60px;
  height: 30px;
  background-color: $backgroundColor;

}


.box {
  @include box;

  padding: 15px;

  margin: 10px;

  &.sectionOne {
    width: 350px;
    height: 120px;
  }

  &.sectionTwoA,
  &.sectionThreeB {
    width: 730px;
    height: 400px;

  }

  &.sectionTwoB,
  &.sectionThreeA {
    width: 350px;
    height: 400px;

  }

  &.sectionThreeB {
    @media(min-width: 375px) {
      p {
        font-size: $small;
      }

    }

  }
}

h4 {
  font-weight: $bold;
}

p {
  font-size: $paragraph;
  font-weight: $bold;
}
</style>
