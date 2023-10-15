<template>
    <div class="bg">
        <NavBarPages/>

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
</style>