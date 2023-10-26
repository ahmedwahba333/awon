<template>
    <div class="bg">
        <NavBarPages/>
        <div class="container">
            <div class="row align-items-center">
            <div class="box col col-lg-7 col-md-12 col-sm-12 col-12">
                <p class="title py-3">Payment Details</p>
                <div class="row gx-8">
                    <div class="col-12">
                        <div class="d-flex flex-column">
                            <p class="text mb-1">Person Name</p>
                            <input class="form-control mb-3" type="text" placeholder="Name" value="">
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="d-flex flex-column">
                            <p class="text mb-1">Card Number</p>
                            <input class="form-control mb-3" type="text" placeholder="1234 5678 435678">
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="d-flex flex-column">
                            <p class="text mb-1">Expiry</p>
                            <input class="form-control mb-3" type="text" placeholder="MM/YYYY">
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="d-flex flex-column">
                            <p class="text mb-1">CVV/CVC</p>
                            <input class="form-control mb-3 pt-2 " type="password" placeholder="***">
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="">
                        <div class=""> <label class="radio"> <input type="radio" value="terms">
                        accept terms and conditions <span></span> </label> </div>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="btn ">
                            <div class="pay">Pay</div>
                            <span class="fas fa-arrow-right"></span>
                        </div>
                    </div>
                </div>
            </div>
                <div class="col col-lg-4 col-md-12 col-sm-12 col-12">
                    <div class="box">
                        <div class="title">Overview</div>
                        <div class="sub-title"> Order Address</div>
                        <div class="info">127 Salim St., Helmeya, Cairo </div>
                        <div class="sub-title"> Worker Name</div>
                        <div class="info">127 Salim St., Helmeya, Cairo </div>
                        <div class="sub-title"> Order Description </div>
                        <div class="info">Living room + kitchen </div>
                        <div class="sub-title"> Order Date</div>
                        <div class="info"> 1/1/2024 </div>
                        <div class="sub-title"> Total </div>
                        <div class="info">450 LE</div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <!-- </div> -->
        <FooterComponent/>
    <!-- </div> -->
</template>

<script>
    import NavBarPages from "@/components/NavBarPages.vue";
    import FooterComponent from "@/components/footer.vue";
    export default {
    name: "paymentDetails",
    components: {
        FooterComponent,
        NavBarPages,
    },
    };

</script>

<style lang="scss" scoped>
    @import "../scss/global/colors";
    @import "../scss/global/variables";

    .bg {
    background-color: $backgroundColor;
    }
    .box {
    @include box;
    margin: 1%;
    }
    .title {
    font-weight: bold;
    font-size: $subTitle;
    }
    .sub-title{
        font-weight: bold;
    }
    .btn {
    @include button;
    text-align: center;
    display: block;
    margin-left: auto;
    margin-right: auto; 
    }
    

</style>