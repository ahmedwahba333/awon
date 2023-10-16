<template>
    <NavBarPages/>
    <FooterComponent/>
    <div class="all">
        <div class="container grid mb-5">
            <div clas="row"><p class="title">Booking Details</p></div>

            <div clas="row personlaInfo">

            </div>






        </div>


    </div>
</template>

<script>
import NavBarPages from '@/components/NavBarPages.vue';
import FooterComponent from '../components/footer.vue'

    export default {
    name: 'BookingPage',
    components: { 
        NavBarPages ,
        FooterComponent
    }

}
</script>

<style lang="scss" scoped>

@import '../scss/global/colors';
@import '../scss/global/variables';

.all{
    background-color: $backgroundColor;
    color:$blueColor
}

.title{
    font-size: $title;
    font-weight: $bold;
}

</style>