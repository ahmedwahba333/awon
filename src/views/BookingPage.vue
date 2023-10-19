<template>
    
  <div class="all">
      <NavBarPages/>
         <div class="container grid mb-5">
              <div clas="row">
                <p class="title mt-5 mx-5">Booking Details</p>
              </div>
                    
               <!-- Personal Info -->
      <div class=" personalInfo">
          <form>
          <div class="form-row row">
            <div class="form-group col-md-6">
              <label for="inputEmail4">First Name</label>
              <input type="text" class="form-control" id="inputEmail4" >
            </div>
            <div class="form-group col-md-6">
              <label for="inputPassword4">Last Name</label>
              <input type="text" class="form-control" id="inputPassword4" >
            </div>
          </div>
         
          <div class=" form-row row mt-2 mb-0"><p>Where do you want your service?</p></div>
         
          <div class="form-row row mb-2">
            <div class="form-group col-lg-2 col-md-3">
              <input type="radio" value="home" name="address" class="mx-1">Home
            </div>
            <div class="form-group col-lg-3 col-md-3 col-md-5">
              <input type="radio" value="home" name="address" class="mx-1">Another place
            </div>
          </div>
         
          <div class="form-group">
            <label for="inputAddress">National ID</label>
            <input type="text" class="form-control" id="inputAddress">
          </div>
          <div class="form-group">
            <label for="inputGovernate">Governate</label>
            <input type="text" class="form-control" id="inputGovernate">
          </div>
          <div class="form-group">
            <label for="inputCity">City</label>
            <input type="text" class="form-control" id="inputCity" placeholder="">
          </div>
          <div class="form-group">
            <label for="inputCity">Address</label>
            <input type="text" class="form-control" id="inputAdress" placeholder="">
          </div>
          <div class="form-row row">
            <div class="form-group col-md-4">
              <label for="inputBuilding">Building no.</label>
              <input type="text" class="form-control" id="inputBuilding">
            </div>
            <div class="form-group col-md-4">
              <label for="inputFloor">Floor no.</label>
              <input type="text" class="form-control" id="inputFloor">
            </div>
            <div class="form-group col-md-4">
              <label for="inputFlat">Flat no.</label>
              <input type="text" class="form-control" id="inputFlat">
            </div>
            </div>
            <div class="form-row row">
            <div class="form-group col-md-6">
              <label for="inputMobile1">Mobile 1</label>
              <input type="email" class="form-control" id="inputMobile1" >
            </div>
            <div class="form-group col-md-6">
              <label for="inputMobile2">Mobile 2</label>
              <input type="password" class="form-control" id="inputMobile2" >
            </div>
          </div>
      </form>
      </div>
         <!-- Booking Details -->
    <div class="bookingDet">
      <div class="cardInner">
      <div><p class="worckerNm mb-2">Worker Name: Mohamed Ali</p></div>
      <form>

<div class="form-group row">
<div class="dropdown">
  <button class="servicesDrop dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
   Select Services
  </button>
  <ul class="dropdown-menu">
    <li>
      <div class="dropdown-item">
        <h5>House Keeping</h5>
        <div class="d-flex align-items-center gap-3" >
          <div>
          <input type="checkbox" class="form-check-input" >
          <label for="" class="form-check-label mt-1 ms-1">Cleaning</label>
        </div>
        <div>
          <input type="checkbox" class="form-check-input" >
          <label for="" class="form-check-label mt-1 ms-1">Gardening</label>
        </div>
      </div>
      </div>
    </li> <hr/>

    <li>
      <div class="dropdown-item">
        <h5>Facilities</h5>
        <div class="d-flex align-items-center gap-3" >
          <div>
          <input type="checkbox" class="form-check-input" >
          <label for="" class="form-check-label mt-1 ms-1">House Gaurd</label>
        </div>
        <div>
          <input type="checkbox" class="form-check-input" >
          <label for="" class="form-check-label mt-1 ms-1">Driver</label>
        </div>
        </div>
      </div>
    </li> <hr/>

    <li>
      <div class="dropdown-item">
        <h5>service</h5>
        <div class="d-flex align-items-center gap-3" >
          <div>
          <input type="checkbox" class="form-check-input" >
          <label for="" class="form-check-label mt-1 ms-1">Plumbing</label>
        </div>
        <div>
          <input type="checkbox" class="form-check-input" >
          <label for="" class="form-check-label mt-1 ms-1">Carpentry</label>
        </div>
        <div>
          <input type="checkbox" class="form-check-input" >
          <label for="" class="form-check-label mt-1 ms-1">Moving Furniture</label>
        </div>
        </div>
      </div>
    </li><hr/>
  </ul>
</div>
</div>

<div class="row">
  <p class="mb-0 mt-3">For how many days would you like to book the service?</p>
  <div class="col-lg-3 mt-0"><input type="radio" name="bookingDays" value="singleDay" class="me-1">Single day</div>
</div>
   

    </div>
    <FooterComponent/>
</template>

<script>
import NavBarPages from '@/components/NavBarPages.vue';
import FooterComponent from '../components/footer.vue'

  export default {
  name: 'BookingPage',
  components: { 
      NavBarPages ,
      FooterComponent
  },

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
  font-size: $subTitle;
  font-weight: $bold;
}

</style>



