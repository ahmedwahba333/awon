<template>
<NavBarSADash/>
<div class="all">

    <div class="container grid">
          <!-- BreadCrumb -->
        <div class="row pt-3 breadCrumb"> 
                 <ol class="breadcrumb">
                   <li class="breadcrumb-item me-2">Dashboard</li>
                   <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512" fill="#F97B22" class="mt-2 me-2">
                      <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/>
                    </svg>
                   <li class="breadcrumb-item" aria-current="page">Service History</li>
                 </ol>  
        </div>

          <!-- Title -->
        <div class="row title">
            <p>Service History</p>
        </div>


        <!-- Search Filter -->
        <div class="row searchCard pt-3 pb-3">
            <p class="subtitle mx-4"> Search using:</p>

            <div class="col-lg-3 col-md-4 col-sm-5">
                <p class="searchKey">Order ID</p>
            </div>

            <div class="col-md-7 col-sm-5"> 
                <input type="search" class="search form-control" v-model="orderID">
            </div>

            <div class="col-lg-3 col-md-4 col-sm-5">
                <p class="searchKey">Customer ID</p>
            </div>

            <div class="col-md-7 col-sm-5"> 
                <input type="search" class="search form-control" v-model="cxID">
            </div>

            <div class="col-lg-3 col-md-4 col-sm-5">
                <p class="searchKey">Worker Name</p>
            </div>

            <div class="col-md-7 col-sm-5"> 
                <input type="search" class="search form-control" v-model="workerNm">
            </div>

            <div class="col-lg-3 col-md-4 col-sm-5">
                <p class="searchKey">Order Date</p>
            </div>

            <div class="col-md-7 col-sm-5"> 
                <input type="search" class="search form-control" v-model="orderDate">
            </div>
        </div>

        <!-- Services Table -->



        <div class="row grid servicesTable mt-4 text-center" id="table-wrapper">
            
            <div class="col-12 mt-3 overflow-auto" id="table-scroll">
                <table class="table mb-2" style="color:$blueColor; --bs-table-color:$blueColor;" id="">
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
                         <tr v-for="order in  handleSearch" :key="order.id">
                           <td>{{order.id}}</td>
                           <td>{{order.Order_Details}}</td>
                           <td>{{order.Order_Date}}</td>
                           <td>{{order.Customer_id}}</td>
                           <td>{{ order.Customer_FName }} {{  order.Customer_LName}}</td>
                           <td>{{order.Worker_FName }} {{order.Worker_LName  }}</td>
                    </tr>
                       </tbody>
                    </table>
            </div>
        </div>
    </div>

</div>
</template>

<script>
import NavBarSADash from '../components/NavBarSADash.vue';
import axios from 'axios';

    export default {
        name:'ServiceHistorySA',
        components:{
            NavBarSADash,

        },

        data(){
            return{
                  orders:[],
                  orderID:'',
                  cxID:'',
                  orderDate:'',
                  workerNm:'',
            }
        },

            created(){
                this.getAllOrders();
            },

            methods:{
                getAllOrders(){
                    axios.get("http://localhost:2000/order")
                    .then ((res)=> this.orders=res.data)
                    .catch (err=> console.log (err))
                },
            },

            computed:{
            handleSearch(){
                return this.orders.filter((elem) => {
                       return (
                         elem.id.toString().toLowerCase().includes(this.orderID.toLowerCase()) &&
                         elem.Customer_id.toString().toLowerCase().includes(this.cxID.toLowerCase()) &&
                         elem.Worker_FName.toLowerCase().includes(this.workerNm.toLowerCase()) &&
                         elem.Order_Date.toString().toLowerCase().includes(this.orderDate.toLowerCase())
                                );
                                                     });
                           }
                    } 
    }
</script>

<style lang="scss" scoped>
 
 @import '../scss/global/colors';
 @import  '../scss/global/variables';



p{
    color: $blueColor;
}

.breadCrumb{
    margin-left: 1px;
}

.breadcrumb-item{
    font-size:$paragraph !important;
    color:$blueColor !important;
    font-weight: bold !important;   
}
 
.title{
    font-size: $title;
    font-weight: bold;

}

.subtitle{
    font-size: $subTitle;
    font-weight: bold;
}

.cardStyle{
    background-color: white;
    border-radius: $border-radius-big;
    box-shadow: 2px 4px 4px 2px rgba(117, 113, 113, 0.25);
    

}

.searchCard{
    @extend .cardStyle;
    @extend .subtitle;

}

input.search {
  border: 1px solid $blueColor;
  border-radius: 28px;
  background: $whiteColor;
    
  &:focus {
    outline: none;
    background-color:$backgroundColor;
    color: $blueColor;
    border-color: $orangeColor;
    box-shadow:1px 1px 3px $orangeColor;
  }
}

.servicesTable{
    @extend .cardStyle;
};


@media (min-width:991px) {
    .search{
        width: 500px;
    }

    .searchKey{
        padding-left: 30px;
    }  
}

@media (max-width: 990.999px) {

    .searchKey{
        padding-left: 30px;
    }
}

@media (max-width: 767px) {
    .search{
        width: 250px;
        margin-left: 30px;
    }

    thead{
       font-size: $paragraph !important;
        }

   tbody{
            font-size: $small !important;  
        }

    p{
        font-size: $paragraph !important;
    }
}

@media (max-width:575px){
        .searchKey{
        margin-top: 5px;
        margin-bottom: 1px;
    }

    .searchCard{
        margin-left: 5px;
        margin-right: 5px;
        display: flex;
        justify-content: center;
}

   thead{
       font-size: $paragraph !important;
        }

   tbody{
            font-size: $small !important;  
        }
        
   .servicesTable{
    margin: 0px 5px 0px 5px;
    }

    p{
        font-size: $paragraph !important;
    }

.search{
    width:350px
}
}

.all{
    background-color: $backgroundColor;
    padding-bottom: 30px;
}

thead tr tbody{
    display: block;
}
#table-wrapper {
display: block;

}
#table-scroll {
  height:350px;
  overflow:auto;  
  margin-top:20px;
  
}
#table-wrapper table {
  width:100%;
}

::-webkit-scrollbar {
  width: 13px;
}

/* Track */
::-webkit-scrollbar-track {
  border-radius: 10px;
  background-color: #898B8E;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background:$blueColor; 
  border-radius: 10px;
  height: 66px;
}

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
  background: $orangeColor; 
}

table{
    color:$blueColor !important
}

thead{
    font-size: $subTitle;
    width: 100% !important;

}

tbody{
    font-size: $paragraph;
}



 

</style>
