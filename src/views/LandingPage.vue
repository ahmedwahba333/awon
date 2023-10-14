<template>
<NavBarPages/>
 <div id="myCarousel" class="carouselSlide" data-bs-ride="carousel" data-bs-interval="2000" >
  <div class="carousel-inner">
    
    <div class="carousel-item active">
      <img class="d-block w-100" src="../assets/images/BGslider/pic1.png" alt="slide1">
      <div class="carousel-caption d-none d-md-block">
        <h1>HANDY HANDS THAT ARE HAPPY TO HELP</h1>
      </div>
    </div>
    <div class="carousel-item ">
      <img class="d-block w-100" src="../assets/images/BGslider/pic2.jpeg" alt="slide2">
      <div class="carousel-caption d-none d-md-block">
        <h1>HANDY HANDS THAT ARE HAPPY TO HELP</h1>
      </div>
    </div>
    <div class="carousel-item ">
      <img class="d-block w-100" src="../assets/images/BGslider/pic3.png" alt="slide3">
      <div class="carousel-caption d-none d-md-block">
        <h1>HANDY HANDS THAT ARE HAPPY TO HELP</h1>
      </div>
    </div>
    <div class="carousel-item ">
      <img class="d-block w-100" src="../assets/images/BGslider/pic4.jpeg" alt="slide4">
      <div class="carousel-caption d-none d-md-block">
        <h1>HANDY HANDS THAT ARE HAPPY TO HELP</h1>
      </div>
    </div>
    <div class="carousel-item ">
      <img class="d-block w-100" src="../assets/images/BGslider/pic5.png" alt="slide5">
      <div class="carousel-caption d-none d-md-block">
        <h1>HANDY HANDS THAT ARE HAPPY TO HELP</h1>
      </div>
    </div>
  </div>
</div>
<FooterComponent />
</template>

<script>
import NavBarPages from "@/components/NavBarPages.vue";
import FooterComponent from '@/components/footer.vue';
export default {
  name: 'LandingPage',
   components: { FooterComponent,
   NavBarPages ,
   },

}

</script>

<style lang="scss" scoped>
@import "../scss/global/colors";
// .carouselSlide{
//   position: relative;
//   height: 100%;
// }
h1{
 color: $blueColor;
 text-shadow: 2px 2px 5px $blueColor;
 font-weight: bold;
 width: 30%;
  text-align: left;
  
}
</style>