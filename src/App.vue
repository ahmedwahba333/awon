<template>
  
    
  <WorkerPageDashboard/>
  <FooterComponent/>
  
</template>



<script>
import WorkerPageDashboard from './views/workerPageDashboard.vue'
import FooterComponent from './components/footer.vue'
export default{

components:{
  WorkerPageDashboard,
  FooterComponent
}
}

</script>

<style lang="scss">
#app {
  color: #2c3e50;
  background-color: #EBEBD3;
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
