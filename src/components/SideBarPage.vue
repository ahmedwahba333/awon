<template>
    <div>
        <div class="container-fluid">
        <div class="row flex-nowrap">
            <div class="bg-white col-auto col-md-4 col-lg-3 min-vh-100 d-flex flex-column justify-content-between">
                <div class="bg-white p-2">
                <a class="d-flex text-decoration-none mt-1 align-items-center ">
                    <span class="fs-4 d-none d-sm-inline">Dashboard</span>
                </a>
                <ul class="nav nav-pills flex-column mt-4 ">
                    <li class="nav-item py-2 py-sm-0">
                        <router-link to="#" class="nav-link ">
                            <i class="bi bi-box-arrow-left"></i><span class="fs-4 ms-3 d-none d-sm-inline">Home</span>
                        </router-link>
                    </li>
                    <li class="nav-item py-2 py-sm-0 ">
                        <router-link to="#" class="nav-link ">
                            <span class="fs-4 ms-3 d-none d-sm-inline">Worcker</span>
                        </router-link>
                    </li>
                    <li class="nav-item py-2 py-sm-0 ">
                        <router-link to="#" class="nav-link ">
                            <span class="fs-4 ms-3 d-none d-sm-inline">Serveise history</span>
                        </router-link>
                    </li>
                    <li class="nav-item py-2 py-sm-0 ">
                        <router-link to="#" class="nav-link ">
                            <span class="fs-4 ms-3 d-none d-sm-inline">rewiews</span>
                        </router-link>
                    </li>
                </ul>
            </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
    export default {
        name:'SideBarPage'
    }
</script>

<style lang="scss" scoped>
@import "../scss/global/colors";

$blueColor: #193655 ; 
$orangeColor : #F97B22 ; 
$darkOrange: #C15000 ; 
$backgroudColor : #EBEBD3  ;
$whiteColor : #FFFFFF;
.nav-pills li a:hover{
    background-color: #EBEBD3;
}
.nav-pills li {
    color: #193655;
}


</style>