<template>
    <NavBarDash />
    <div class="all">
        <div class="container grid">

            <div class="row pt-3 breadCrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item me-2">Dashboard</li>
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512" fill="#F97B22"
                        class="mt-2 me-2">
                        <path
                            d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
                    </svg>
                    <li class="breadcrumb-item " aria-current="page">Worker Page</li>
                </ol>
            </div>



            <!-- Worker Personal Details -->
            <div class="row mt-sm-3  firstRow mb-5">
                <div class="col-lg-4 col-md-3 col-sm-3">
                    <img :src="worker.img" class="rounded-circle">
                </div>

                <div class="col-lg-8 col-md-9 col-sm-9 mt-md-3 mt-lg-0">
                    <div class="row worker">
                        <div class="col-lg-2 col-sm-1 mt-sm-2 ms-md-4 ms-lg-0 ms-sm-5">
                            <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 107 106"
                                fill="none">
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
                        </div>

                        <div class="col-lg-10 col-sm-9 mt-md-2 ms-md-5 ms-lg-0 ms-sm-5 mb-0">
                            <p class="workerName fw-bold mb-0">{{ worker.First_name }} {{ worker.Last_name }}</p>
                            <p class="position">Qualified employee</p>
                        </div>

                    </div>

                    <div class="row col-md-12 workerDetBox mt-0">
                        <div class="col-md-12 workerDet ms-md-4 ms-lg-0">
                            <div class="row mt-4">

                                <div class="col-md-5 col-sm-12 ms-4">
                                    <div class="mb-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                            class="bi bi-check-circle" viewBox="0 0 16 16">
                                            <path
                                                d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                            <path
                                                d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                                        </svg>
                                        <p class="mx-1 my-5">{{ worker.Categories }}</p>
                                    </div>

                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                            class="bi bi-geo-alt" viewBox="0 0 16 16">
                                            <path
                                                d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                                            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                        </svg>
                                        <p class="mx-1">{{ worker.Address }}</p>
                                    </div>
                                </div>

                                <div class="col-md-6 col-sm-12 address ms-sm-4 ms-md-0">
                                    <div class="mb-3 mt-sm-3 mt-md-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                            class="bi bi-map" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd"
                                                d="M15.817.113A.5.5 0 0 1 16 .5v14a.5.5 0 0 1-.402.49l-5 1a.502.502 0 0 1-.196 0L5.5 15.01l-4.902.98A.5.5 0 0 1 0 15.5v-14a.5.5 0 0 1 .402-.49l5-1a.5.5 0 0 1 .196 0L10.5.99l4.902-.98a.5.5 0 0 1 .415.103zM10 1.91l-4-.8v12.98l4 .8V1.91zm1 12.98 4-.8V1.11l-4 .8v12.98zm-6-.8V1.11l-4 .8v12.98l4-.8z" />
                                        </svg>
                                        <p class="mx-1">{{ worker.Area }}</p>
                                    </div>

                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                            class="bi bi-telephone" viewBox="0 0 16 16">
                                            <path
                                                d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                                        </svg>
                                        <p class="mx-1">{{ worker.Phone }}</p>
                                    </div>

                                </div>

                            </div>

                            <div class="row mb-4 d-flex text-end">
                                <router-link to="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        class="bi bi-gear-fill" viewBox="0 0 16 16" data-bs-target="#exampleModalToggle"
                                        data-bs-toggle="modal">
                                        <path
                                            d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
                                    </svg>
                                </router-link>

                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <!-- Worker Services Details (table) -->
            <div class="row grid ServiceDet mb-5 ">
                <div class=" tableTitle mt-4 ">
                    <span class="col-10 ms-lg-5 ms-md-3">Worker Services Details </span>
                    <span class="price col-2"></span>
                </div>

                <div class="col-12 mt-3">
                    <table class="table text-center" style="color:$blueColor; --bs-table-color:$blueColor;">
                        <thead>
                            <tr>
                                <th scope="col">Customer Name</th>
                                <th scope="col">Service</th>
                                <th scope="col">Income From CX</th>
                                <th scope="col">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="order in orders" :key="order.Worker_id" v-show="order.Worker_id == worker.id">
                                <td>{{ order.Customer_FName }} {{ order.Customer_LName }}</td>
                                <td>{{ order.Order_Details }}</td>
                                <td>{{ order.Order_Price }}</td>
                                <td :value="income">{{ order.Order_Date }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

<div class="row ">
    <div class="row mt-3 fw-bold mx-5 title d-flex"> Worker Reviews</div>
     <div class="row my-5 gap-3 justify-content-center">
        <div class="col-12 col-lg-4 col-md-3 reviewBox" v-for="(review,id) in reviews" :key="id" v-show="review.Worker_id==worker.id">
          <div class="mb-2 gap-2">
            <div class="card-body mt-5 mx-3">
              <h5 class="card-title CXName fw-bold">{{ review['Name'] }}</h5>
              <div class="stars">
                <star-rating read-only active-color="#F97B22" star-size=20 :rating="`${review.Rate}`"></star-rating>
               </div>
               <h5>{{ review['Review'] }}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>

            <!-- Edit popup -->
            <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel"
                tabindex="-1">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5 fw-bold" id="exampleModalToggleLabel">Edit Worker</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="row mb-3">
                                <div class="col-4">First Name</div>
                                <div class="col-8"><input type="text"  v-model="workerInfo.First_name">
                                </div>
                            </div>

                            <div class="row mb-3">
                                <div class="col-4">Last Name</div>
                                <div class="col-8"><input type="text"  v-model="workerInfo.Last_name">
                                </div>
                            </div>

                            <div class="row mb-3">
                                <div class="col-4">Phone</div>
                                <div class="col-8"><input type="text" v-model="workerInfo.Phone"></div>
                            </div>

                            <div class="row mb-3">
                                <div class="col-4">adress</div>
                                <div class="col-8"><input type="text" v-model="workerInfo.Address"></div>
                            </div>

                            <div class="row mb-3">
                                <div class="col-4">Service Name</div>
                                <div class="col-8"><input type="text" v-model="workerInfo.Categories"></div>
                            </div>

                            <div class="row mb-3">
                                <div class="col-4">Area</div>
                                <div class="col-8"><input type="text" v-model="workerInfo.Area"></div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button class="btn editBtn" @click="EditData" data-bs-dismiss="modal">Edit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import NavBarDash from '../components/NavBarDash.vue';
import axios from 'axios';
import StarRating from 'vue-star-rating';

export default {
    name: 'WorkerPageDashboard',
    components: {
        NavBarDash,
        StarRating
    },

    data() {
        return {
            worker: [],
            orders: [],
            reviews: [],
            totalIncome: 0,
            // arr: [],

            workerInfo: {
                First_name: '',
                Last_name: '',
                Categories: '',
                Phone: '',
                Address: '',
                Area: '',
                email: '',
                Service_1: '',
                Service_2: '',
                Service_3: '',
                Service_4: '',
                Service_1_price: '',
                Service_2_price: '',
                Service_3_price: '',
                Service_4_price: '',
                Experience: '',
                Rate: '',
                Reviews: '',
                FrontNational_ID: '',
                BackNational_ID: '',
                Badge: '',
                img: '',
                Gender: ''
            }
        }
    },

    created() {
        this.getAllWorkers();
        this.getAllOrders();
        this.getAllReviews();
        // this.test();

        // this.cal();

    },

    // mounted() {



    // },

    methods: {

        // test() {
        //     console.log(this.reviews)

        //     for (let i = 0; i < this.reviews.length; i++) {


        //         console.log(this.worker.id)

        //         if (this.reviews[i].Worker_id == this.worker.id) {
        //             this.arr.push(this.reviews[i])

        //         }


        //     }
        // },

        getAllWorkers() {
            this.id = this.$route.params.id
            axios.get(`http://localhost:2000/worker/${this.id}`)
                .then(res => {
                    this.worker = res.data
                    this.workerInfo.First_name = res.data.First_name
                    this.workerInfo.Last_name = res.data.Last_name
                    this.workerInfo.Categories = res.data.Categories
                    this.workerInfo.Address = res.data.Address
                    this.workerInfo.Area = res.data.Area
                    this.workerInfo.Phone = res.data.Phone
                    this.workerInfo.email = res.data.email
                    this.workerInfo.Service_1 = res.data.Service_1
                    this.workerInfo.Service_2 = res.data.Service_2
                    this.workerInfo.Service_3 = res.data.Service_3
                    this.workerInfo.Service_4 = res.data.Service_4
                    this.workerInfo.Service_1_price = res.data.Service_1_price
                    this.workerInfo.Service_2_price = res.data.Service_3_price
                    this.workerInfo.Service_3_price = res.data.Service_3_price
                    this.workerInfo.Service_4_price = res.data.Service_4_price
                    this.workerInfo.Experience = res.data.Experience
                    this.workerInfo.Rate = res.data.Rate
                    this.workerInfo.Reviews = res.data.Reviews
                    this.workerInfo.FrontNational_ID = res.data.FrontNational_ID
                    this.workerInfo.BackNational_ID = res.data.BackNational_ID
                    this.workerInfo.Badge = res.data.Badge
                    this.workerInfo.img = res.data.img
                    this.workerInfo.Gender = res.data.Gender


                })
                .catch(err => console.log(err))
        },

        getAllOrders() {
            axios.get("http://localhost:2000/order")
                .then((res) => this.orders = res.data)
                .catch(err => console.log(err))
        },

        getAllReviews() {
            axios.get("http://localhost:2000/review")
                .then((res) => {
                    this.reviews = res.data
                    // console.log(res.data)
                })

                .catch(err => console.log(err))
        },

        EditData() {

            axios.put(`http://localhost:2000/worker/${this.id}`, this.workerInfo)
                .then(res => {
                    console.log(res)
                    this.workerInfo = {
                        First_name: '',
                        Last_name: '',
                        Phone: '',
                        Address: '',
                        Area: '',
                        Categories: '',
                        email: ''
                    }
                })
                .catch(err => console.log(err))
                .then(this.$router.push(`/workerpageDash/${this.id}`))
                location.reload();
        },
    }
}
</script>

<style lang="scss" scoped>
@import '../scss/global/colors';
@import '../scss/global/variables';

@mixin Box {
    box-shadow: 2px 4px 4px 2px rgba(117, 113, 113, 0.25);
    background-color: $whiteColor;
    border-radius: $border-radius-big;
}

.all {
    background-color: $backgroundColor;
    color: $blueColor;
    padding-bottom: 30px;
}


.breadCrumb {
    margin-left: 1px;
}

.breadcrumb-item {
    font-size: $paragraph;
    color: $blueColor !important;
    font-weight: bold;
}

img {
    width: 270px;
    height: 270px;
}

svg {
    color: $orangeColor;
}

.workerName {
    color: $blueColor;
    font-size: $title;
}

.position {
    font-size: $subTitle;
    color: $blueColor;
}

.workerDet {
    @include Box;

    p {
        display: inline;
        font-size: $paragraph;
        color: $blueColor;
    }

    svg {
        display: inline;
        width: 30px;
        height: 30px;
    }
}


.ServiceDet {
    margin-top: 30px;
    @include Box;

    .tableTitle {
        font-size: $title;
        font-weight: bold;
        margin-left: 0px !important;
    }
}


thead {
    font-size: $paragraph !important;
    font-weight: bold !important;
    border-bottom: solid 2px $blueColor !important;
    color: $blueColor !important;
}

tbody {
    color: $blueColor !important;
    font-size: $paragraph !important;
}

.card-body{
    border: none !important;
}


.reviewBox {
    height: 180px;
    color: $blueColor;
    background-color: $whiteColor;
    border-radius: $border-radius-big;
    font-size: $paragraph ;
    box-shadow: 2px 4px 4px 2px rgba(117, 113, 113, 0.25);



    .CXName {
        font-size: $paragraph ;
    }
}

@media(min-width:991px) {
    .price {
        margin-left: 500px;
    }

    .reviewBox{
        width:300px
    }
}

@media (max-width: 990.999px) {
    img {
        width: 260px;

    }

    .worker {
        margin-left: 70px;
        margin-top: 80px;

    }

    .workerDet {
        margin-top: 80px;

    }

    .price {
        margin-left: 190px;
    }

}

@media (max-width: 767px)and (min-width: 576px) {
    .workerDet {
        margin-top: none !important;
        margin-left: none;
        margin-bottom: 15px;

        .firstRow {
            margin-left: 50px !important;
        }

        .workerDetBox {
            margin-top: none !important;
        }

        .innerReview {
            margin-left: 20px;
        }
    }

    .tableTitle {
        font-size: $paragraph !important;
    }

    thead {
        font-size: $small !important;
    }
}

@media (max-width: 575.666px) {
      .modal{
            width:500px !important;

            }

    .tableTitle {
        font-size: $small !important;
    }

    thead {
        font-size: $small !important;
    }

    tbody {
        font-size: $small !important;
    }

    .firstRow {
        display: flex;
        flex-wrap: wrap;
        margin-top: -80px !important;

        img {
            width: 300px;
            margin-left: 80px;
            margin-top: 80px;
        }

        .worker {
            margin-left: 140px;
        }
    }

    .ServiceDet {
        margin: 45px 0px 2px 2px;
    }

    .workerDetBox {
        margin: 0px 0px 2px 2px;
        margin-top: -50px !important;
    }

    .address {
        margin-top: 20px;
        margin-left: 30px;
    }

    .reviewTit {
        font-size: $paragraph !important;
        margin-left: 20px
    }
}

.modal-content {
    background-color: $backgroundColor ;
    font-size: $paragraph !important;
    font-weight: $semiBold;
}

input {
    border-radius: 10px !important;
    border: none !important;
    height: 35px;
    width: 300px;
    font-size: $small !important;
}

h1 {
    font-size: $title !important;
}

.editBtn {
    @include button;
}

.title{
    font-size: $title;
    width:300px
}
</style>
