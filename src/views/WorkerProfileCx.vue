    <template>
    <div class="bg">
        <NavBarPages />
        <h1>worker</h1>
        <FooterComponent />
    </div>
    </template>

    <script>
    import NavBarPages from "@/components/NavBarPages.vue";
    import FooterComponent from "@/components/footer.vue";

    export default {
    name: "WorkerProfile",
    components: {
        FooterComponent,
        NavBarPages,
    },
    };
    </script>

    <style lang="scss" scoped>
    @import "../scss/global/colors";

    .bg{
    background-color: red;
    }
    </style>
