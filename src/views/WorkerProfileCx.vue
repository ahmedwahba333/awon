    <template>
    <div class="bg">
        <NavBarPages />
        <div class="img">
            <img src="../assets/images/1.jpg">
        </div>
        <div class="box">
            Worker Availability
        </div>
        <div class="box">
            House Cleaning, Bathroom Cleaning, Kitchen Cleaning
        </div>
        <div class="box">
            
        </div>
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
    $blueColor: #193655 ; 
    $orangeColor : #F97B22 ; 
    $darkOrange: #C15000 ; 
    $backgroudColor : #EBEBD3  ;
    $whiteColor : #FFFFFF;

    .bg{
    background-color: $backgroudColor;
    }
    </style>
