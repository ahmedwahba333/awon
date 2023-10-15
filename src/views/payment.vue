<template>
    <div>
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

<style>

</style>