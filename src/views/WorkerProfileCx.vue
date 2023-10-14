    <template>
    <div class="bg">
        <NavBarPages />
        <div class="img">
            <img src="../assets/images/1.jpg">
        </div>
        <div class="box">
            <div class="title">Worker Availability</div>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
</svg> House Cleaning, Bathroom Cleaning, Kitchen Cleaning<br>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
</svg> Available for work<br>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
</svg> Available for work in these areas: Giza, Sheikh Zayed, Haram
        </div>
        <div class="box">
            <div class="title">Worker Reviews</div>
            
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
    @import "../scss/global/variables";

    $blueColor: #193655 ; 
    $orangeColor : #F97B22 ; 
    $darkOrange: #C15000 ; 
    $backgroudColor : #EBEBD3  ;
    $whiteColor : #FFFFFF;

    .bg{
    background-color: $backgroudColor;
    }

    .box{
        color: $blueColor;
        background-color: $whiteColor;
        border-radius: $border-radius-big;
        margin:40px;
        padding: 30px;
        align-content: center;
        line-height: 1.5;
        font-size: $small;

    }
    .title{
        font-weight: bold;
        font-size: $subTitle;
    }
    </style>
