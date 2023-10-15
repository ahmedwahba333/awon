<template>
    <NavBarDash/>
    <!-- <SideBarPage/> -->
<div class="all">
    <div class="container grid">

          <!-- BreadCrumb -->
        <div class="row pt-3 breadCrumb"> 
                 <ol class="breadcrumb">
                   <li class="breadcrumb-item active me-2">Dashboard</li>
                   <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512" fill="#F97B22" class="mt-2 me-2">
             <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></svg>
                   <li class="breadcrumb-item active" aria-current="page">Service History</li>
                 </ol>  
        </div>

          <!-- Title -->
        <div class="row title">
            <p>Service History</p>
        </div>


        <!-- Search Filter -->
        <div class="row searchCard pt-3 pb-3">

            <p class="subtitle "> Search using:</p>

            <div class="col-lg-3 col-md-4 col-sm-5">
                <p class="searchKey">Order ID</p>
            </div>

            <div class="col-md-7 col-sm-5"> 
                <input type="search" class="search">
            </div>

            <div class="col-lg-3 col-md-4 col-sm-5">
                <p class="searchKey">Customer ID</p>
            </div>

            <div class="col-md-7 col-sm-5"> 
                <input type="search" class="search">
            </div>

            <div class="col-lg-3 col-md-4 col-sm-5">
                <p class="searchKey">Worker Name</p>
            </div>

            <div class="col-md-7 col-sm-5"> 
                <input type="search" class="search">
            </div>

            <div class="col-lg-3 col-md-4 col-sm-5">
                <p class="searchKey">Order Date</p>
            </div>

            <div class="col-md-7 col-sm-5"> 
                <input type="search" class="search">
            </div>
        </div>

        <!-- Services Table -->

        <div class="row grid servicesTable mb-4 mt-4 text-center" id="table-wrapper">
            <div class="col-12 mt-3 overflow-auto" id="table-scroll">
                <!-- <table class="table mb-2" style="color:$blueColor; --bs-table-color:$blueColor;" id="">
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
                </table> -->
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
                        <tr>
                           <td>#128</td>
                           <td>2 Bedkkkkkkkkkkkkkk</td>
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


        
        


    







    </div>

</div>  
</template>

<script>
import NavBarDash from '../components/NavBarDash.vue';
// import SideBarPage from '../components/SideBarPage.vue'
    export default {
        name:'ServiceHistorySA',

        components:{
            NavBarDash,
            // SideBarPage
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
  }
}

.servicesTable{
    @extend .cardStyle
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
}

.all{
    background-color: $backgroundColor;
    // font-family: 'Raleway';
    // margin-left: 300px;
}

thead tr tbody{
    display: block;
}
#table-wrapper {
//   position:relative;
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
//box-shadow: inset 0 0 5px rgb(114, 114, 114); 
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
    // position: absolute;
    width: 100% !important;

    // th{
    //     padding-left: 34px;

    // }
}

tbody{
    font-size: $paragraph;

    // :nth-child(1){

    //     td{
    //         padding-top: 60px;
    //     }
    // }
}


</style>



<style>

    
</style>