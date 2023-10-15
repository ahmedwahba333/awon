<template>
    <div class="bg">
        <NavBarPages/>
        <div class="container">
        <!-- <div class="row  align-items-center">
            <div class="col col-lg-8 col-md-12 col-sm-12 col-12">
                <div class="box"> content </div>
            </div>
            <div class="col col-lg-4 col-md-12 col-sm-12 col-12">
                <div class="box"> content </div>
            </div> -->
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
                    <div class="btn">
                        <span class="">Pay</span>
                        <span class="fas fa-arrow-right"></span>
                    </div>
                </div>
            </div>
            </div>
            <div class="col col-lg-4 col-md-12 col-sm-12 col-12">
                <div class="box"> content </div>
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
    .btn {
    @include button;
    align-items: center;
    }
</style>