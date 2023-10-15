<template>
    <div class="bg">
        <NavBarPages/>
        <div class="container">
        <div class="row  align-items-center">
            <div class="col col-lg-8 col-md-6 col-sm-12 col-12">
                <div class="box"> content </div>
            </div>
            <div class="col col-lg-4 col-md-6 col-sm-12 col-12">
                <div class="box"> content </div>
            </div>
        </div>
        </div>

        <FooterComponent/>
    </div>
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
    margin: 2%;
    }
</style>