<template>
  <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
  <NavBarPages/>
   <LandingPage/>
  <!-- <NavBarDash/> -->
 
  <router-view/>
  
    
  <FooterComponent/>
  
</template>



<script>
import NavBarPages from "@/components/NavBarPages.vue";
// import NavBarDash from "@/components/NavBarDash.vue";
import LandingPage from "@/views/LandingPage.vue";
import FooterComponent from './components/footer.vue';
export default {
  components: {
    NavBarPages,
    LandingPage,
    // NavBarDash,
    FooterComponent
  },
};



</script>

<style lang="scss">
#app {
  font-family: 'Raleway', sans-serif;
}

// nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
