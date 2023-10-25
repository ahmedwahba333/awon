<template>
    
  <div class="all">
      <NavBarPages/>
         <div class="container grid mb-5">
              <div clas="row">
                <p class="title mt-5 mx-5">Booking Details</p>
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
        <div>
        <h5>House Keeping</h5>
        <div class="row"> 
          <label class="form-check-label mt-1 ms-1 fw-bold">Cleaning</label>
        </div>

        <!-- <div class="d-flex align-items-center gap-3" > -->
          <div class="row">
            <div class="col-8"> 
          <input type="checkbox" class="form-check-input" >
          <label for="" class="form-check-label mt-1 ms-1">Full house(120m-170m)</label>
           </div>
           <div class="col-4">
          <label class> price :400LE</label>
           </div>
          </div>
          <!-- </div> -->
      


        <div class="row">
            <div class="col-8"> 
          <input type="checkbox" class="form-check-input" >
          <label for="" class="form-check-label mt-1 ms-1">Full house(170m-240m)</label>
           </div>
           <div class="col-4">
          <label class=""> price :600LE</label>
           </div>
          </div>
      
          <div class="row">
            <div class="col-8"> 
          <input type="checkbox" class="form-check-input" >
          <label for="" class="form-check-label mt-1 ms-1">Deep clean(bathroom+kitchen)</label>
            </div>
           <div class="col-4">
          <label> price :300LE</label>
           </div>
          </div>
  
        <div class="d-flex align-items-center gap-3" >
          <div class="row">
            <div class="col-4"> 
          <input type="checkbox" class="form-check-input" >
          <label class="form-check-label mt-1 ms-1">Deap clean furniture</label>
           </div>

           <div class="col-4">
             <label class="ms-4"> 50LE per piece</label>
           </div>
           <div class=" col-4">
             <label> no of pieces</label>
             <input type="text" class="no ms-1">
           </div>
         
          </div>
        </div>
      

        <div class="row mt-3">
          <div class="col-4">
            <input type="checkbox" class="form-check-input" >
            <label class="form-check-label mt-1 ms-1 fw-bold">Gardening</label>
          </div>
          <div class="col-4">
            <label class="ms-4">30LE per meter</label>
          </div>
          <div class=" col-4">
             <label> no of meter</label>
             <input type="text" class="no ms-2">
           </div>
          </div>
      </div>
      </div>
    </li><hr/>

    <li>
      <div class="dropdown-item">
        <h5>Caring Services</h5>
          <div class="row mt-1">
          <div class="col-4">
            <input type="checkbox" class="form-check-input" >
            <label class="form-check-label mt-1 ms-1 fw-bold">House nursing</label>
          </div>
          <div class="col-4">
            <label class="ms-4">30LE per hour</label>
          </div>
          <div class=" col-4">
             <label> no of hours</label>
             <input type="text" class="no ms-2">
           </div>
        </div>

        <div class="row mt-1">
          <div class="col-4">
            <input type="checkbox" class="form-check-input" >
            <label class="form-check-label mt-1 ms-1 fw-bold">Baby sitting</label>
          </div>
          <div class="col-4">
            <label class="ms-4">30LE per hour</label>
          </div>
          <div class=" col-4">
             <label> no of hours</label>
             <input type="text" class="no ms-2">
           </div> 
        </div>

        <div class="row mt-1">
          <div class="col-4">
            <input type="checkbox" class="form-check-input" >
            <label class="form-check-label mt-1 ms-1 fw-bold">Elderly Care</label>
          </div>
          <div class="col-4">
            <label class="ms-4">30LE per hour</label>
          </div>
          <div class=" col-4">
             <label> no of hours</label>
             <input type="text" class="no ms-2">
           </div>
        </div>
      </div>
    </li> <hr/>

    <li>
      <div class="dropdown-item">
        <h5>House Maintenance</h5>
        <div class="row mt-1">
          <div class="col-4">
            <input type="checkbox" class="form-check-input" >
            <label class="form-check-label mt-1 ms-1 fw-bold">Plumping</label>
          </div>
          <div class="col-4">
            <label class="ms-4">100 per preview</label>
          </div>
        </div>

        <div class="row mt-1">
          <div class="col-4">
            <input type="checkbox" class="form-check-input" >
            <label class="form-check-label mt-1 ms-1 fw-bold">Carpentry</label>
          </div>
          <div class="col-4">
            <label class="ms-4">100 per preview</label>
          </div>
        </div>

        <div class="row mt-1">
          <div class="col-4">
            <input type="checkbox" class="form-check-input" >
            <label class="form-check-label mt-1 ms-1 fw-bold">Moving Furniture</label>
          </div>
          <div class="col-4">
            <label class="ms-4">100 per preview</label>
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
   

<div class="form-row row">
            <div class="form-group col-md-6 mb-2">
              <label for="dateFrom" class="mx-2 fw-light dateLable">choose date</label>
              <input type="Date" class="form-control" >
            </div>
            <div class="form-group col-md-6 tS1">
              <select name="timeSlot" class="form-control">
                  <option selected>choose time slot</option>
                  <option value="9-12">9-12Am</option>
                  <option value="9-3">12-3pm</option>
                  <option value="3-6">3-6pm</option>
                  <option value="6-9">6-9pm</option>
              </select>
            </div>
          </div>

      <div class="row">
          <div class="col-lg-4 col-md-6 mt-3"><input type="radio" name="bookingDays" value="multibleDays" class="me-1">more then one day</div>
      </div>

      <div class="form-row row">
            <div class="form-group col-md-6">
              <label for="dateFrom" class="mx-2 fw-light dateLable">from</label>
              <input type="Date" class="form-control" id="dateFrom"  >
            </div>
            <div class="form-group col-md-6 mb-sm-3 mb-md-0">
              <label for="dateTo" class="mx-2 fw-light dateLable">to</label>
              <input type="Date" class="form-control" id="dateTo" >
            </div>
      </div>

      <div class="form-row row mt-3">
          <div class="form-group col-md-6">
              <select name="timeSlot" class="form-control">   
                  <option selected>choose time slot</option>
                  <option value="9-12">9-12Am</option>
                  <option value="9-3">12-3pm</option>
                  <option value="3-6">3-6pm</option>
                  <option value="6-9">6-9pm</option>
              </select>
          </div>
      </div>

  <div class="row form-row">
     <p class="mb-2 mt-4">Do you have a promo code?</p>
     <div class="form-group col-md-6">
          <input type="text" class="form-control" placeholder="insert promo code">
      </div>
</div> 
</form>
</div>
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
            <select name="timeSlot" class="form-control">
                  <option value="select">Select</option>
                  <option value="Alexandria">Alexandria</option>
                  <option value="Aswan">Aswan</option>
                  <option value="Asyut">Asyut</option>
                  <option value="Beheira">Beheira</option>
                  <option value="Beni Suef">Beni Suef</option>
                  <option value="Cairo">Cairo</option>
                  <option value="Dakahlia">Dakahlia</option>
                  <option value="Damietta">Damietta</option>
                  <option value="Faiyum">Faiyum</option>
                  <option value="Gharbia">Gharbia</option>
                  <option value="Giza">Giza</option>
                  <option value="Ismailia">Ismailia</option>
                  <option value="Kafr El Sheikh">Kafr El Sheikh</option>
                  <option value="Luxor">Luxor</option>
                  <option value="Matrouh">Matrouh</option>
                  <option value="Minya">Minya</option>
                  <option value="Monufia">Monufia</option>
                  <option value="New Valley">New Valley</option>
                  <option value="Port Said">Port Said</option>
                  <option value="Qalyubia">Qalyubia</option>
                  <option value="Qena">Qena</option>
                  <option value="Red Sea">Red Sea</option>
                  <option value="Sharqia">Sharqia</option>
                  <option value="Sohag">Sohag</option>
                  <option value="South Sinai">South Sinai</option>
                  <option value="Suez">Suez</option>
              </select>
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

          <div class="row d-flex justify-content-center mt-2">
            <router-link class="btn next" :to="'/payment'"> Next</router-link>
          </div>
      </form>
      </div>

</div>
<FooterComponent/>
</div>
</template>

<script>
import NavBarPages from '@/components/NavBarPages.vue';
import FooterComponent from '../components/footer.vue';

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

.mainService{
  font-size: $paragraph !important;
}
.personalInfo{
  @include box;
}

input ,select{
  color:$blueColor;
  background-color: $backgroundColor;
  border-radius: 10px;
  border:none;

  &:focus{
      border:solid 1px $orangeColor;
      outline: none;
      box-shadow:1px 1px 3px $orangeColor;
  }
}

form{
  margin:0px 60px 0px 60px;
  font-weight: $bold;
  font-size: $paragraph;
}

.bookingDet{
  @include box;
  font-weight: $bold;
  label{
font-weight:$semiBold;
font-size: $paragraph;
}
}

.worckerNm{
  font-size: $title;
  margin:0px 60px 0px 60px;
 
}

li{
  label{
    font-size:$small!important;
}
  }

.tS1{
margin-top: 30px;
}

.dateLable{
  font-size:18px !important;
}

.next{
@include button ;
}


input[type="date"]::-webkit-calendar-picker-indicator {
background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30' fill='none'%3e%3cpath d='M22.9164 3.33979V1.08435C22.9164 0.491571 22.3497 0 21.6664 0C20.983 0 20.4163 0.491571 20.4163 1.08435V3.25304H9.58307V1.08435C9.58307 0.491571 9.0164 0 8.33307 0C7.64973 0 7.08306 0.491571 7.08306 1.08435V3.33979C2.58306 3.70124 0.399731 6.02897 0.0663976 9.48443C0.0330643 9.90371 0.433064 10.2507 0.899731 10.2507H29.0997C29.583 10.2507 29.983 9.88925 29.933 9.48443C29.5997 6.02897 27.4164 3.70124 22.9164 3.33979Z' fill='%23F97B22'/%3e%3cpath d='M28.3333 12.419H1.66667C0.75 12.419 0 13.0696 0 13.8647V22.7709C0 27.1082 2.5 29.9998 8.33333 29.9998H21.6667C27.5 29.9998 30 27.1082 30 22.7709V13.8647C30 13.0696 29.25 12.419 28.3333 12.419ZM10.35 24.5203C10.2667 24.5781 10.1833 24.6504 10.1 24.6938C10 24.7516 9.9 24.795 9.8 24.8239C9.7 24.8673 9.6 24.8962 9.5 24.9106C9.38333 24.9251 9.28333 24.9396 9.16667 24.9396C8.95 24.9396 8.73333 24.8962 8.53333 24.8239C8.31667 24.7516 8.15 24.6504 7.98333 24.5203C7.68333 24.2456 7.5 23.8697 7.5 23.4938C7.5 23.1178 7.68333 22.7419 7.98333 22.4672C8.15 22.3371 8.31667 22.2359 8.53333 22.1636C8.83333 22.048 9.16667 22.019 9.5 22.0769C9.6 22.0913 9.7 22.1202 9.8 22.1636C9.9 22.1925 10 22.2359 10.1 22.2937C10.1833 22.3516 10.2667 22.4094 10.35 22.4672C10.65 22.7419 10.8333 23.1178 10.8333 23.4938C10.8333 23.8697 10.65 24.2456 10.35 24.5203ZM10.35 19.46C10.0333 19.7202 9.6 19.8793 9.16667 19.8793C8.73333 19.8793 8.3 19.7202 7.98333 19.46C7.68333 19.1853 7.5 18.8094 7.5 18.4335C7.5 18.0576 7.68333 17.6816 7.98333 17.4069C8.45 17.0021 9.18333 16.872 9.8 17.1033C10.0167 17.1756 10.2 17.2768 10.35 17.4069C10.65 17.6816 10.8333 18.0576 10.8333 18.4335C10.8333 18.8094 10.65 19.1853 10.35 19.46ZM16.1833 24.5203C15.8667 24.7805 15.4333 24.9396 15 24.9396C14.5667 24.9396 14.1333 24.7805 13.8167 24.5203C13.5167 24.2456 13.3333 23.8697 13.3333 23.4938C13.3333 23.1178 13.5167 22.7419 13.8167 22.4672C14.4333 21.9323 15.5667 21.9323 16.1833 22.4672C16.4833 22.7419 16.6667 23.1178 16.6667 23.4938C16.6667 23.8697 16.4833 24.2456 16.1833 24.5203ZM16.1833 19.46C16.1 19.5178 16.0167 19.5756 15.9333 19.6335C15.8333 19.6913 15.7333 19.7347 15.6333 19.7636C15.5333 19.807 15.4333 19.8359 15.3333 19.8503C15.2167 19.8648 15.1167 19.8793 15 19.8793C14.5667 19.8793 14.1333 19.7202 13.8167 19.46C13.5167 19.1853 13.3333 18.8094 13.3333 18.4335C13.3333 18.0576 13.5167 17.6816 13.8167 17.4069C13.9667 17.2768 14.15 17.1756 14.3667 17.1033C14.9833 16.872 15.7167 17.0021 16.1833 17.4069C16.4833 17.6816 16.6667 18.0576 16.6667 18.4335C16.6667 18.8094 16.4833 19.1853 16.1833 19.46ZM22.0167 24.5203C21.7 24.7805 21.2667 24.9396 20.8333 24.9396C20.4 24.9396 19.9667 24.7805 19.65 24.5203C19.35 24.2456 19.1667 23.8697 19.1667 23.4938C19.1667 23.1178 19.35 22.7419 19.65 22.4672C20.2667 21.9323 21.4 21.9323 22.0167 22.4672C22.3167 22.7419 22.5 23.1178 22.5 23.4938C22.5 23.8697 22.3167 24.2456 22.0167 24.5203ZM22.0167 19.46C21.9333 19.5178 21.85 19.5756 21.7667 19.6335C21.6667 19.6913 21.5667 19.7347 21.4667 19.7636C21.3667 19.807 21.2667 19.8359 21.1667 19.8503C21.05 19.8648 20.9333 19.8793 20.8333 19.8793C20.4 19.8793 19.9667 19.7202 19.65 19.46C19.35 19.1853 19.1667 18.8094 19.1667 18.4335C19.1667 18.0576 19.35 17.6816 19.65 17.4069C19.8167 17.2768 19.9833 17.1756 20.2 17.1033C20.5 16.9877 20.8333 16.9588 21.1667 17.0166C21.2667 17.031 21.3667 17.06 21.4667 17.1033C21.5667 17.1322 21.6667 17.1756 21.7667 17.2335L22.0167 17.4069C22.3167 17.6816 22.5 18.0576 22.5 18.4335C22.5 18.8094 22.3167 19.1853 22.0167 19.46Z' fill='%23F97B22'/%3e%3c/svg%3e");
background-position: center;
background-repeat: no-repeat;
}

select {
background: transparent;
background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='25' height='20' viewBox='0 0 35 30' fill='none'%3e%3cpath d='M29.7045 10.6067L17.4004 21.2133L5.09632 10.6067' stroke='%23193655' stroke-width='2'/%3e%3c/svg%3e");
background-repeat: no-repeat;
background-position-x: 99%;
background-position-y: 10px;
border-radius: 10px;
background-color: $backgroundColor;
color:$blueColor;
}

.servicesDrop{
  background-color: $backgroundColor;
  width:fit-content;
  padding: 5px 15px;
  color:$blueColor;
  border:solid 1px $backgroundColor;
  border-radius: 10px;
}

.dropdown-menu{
  width:fit-content;
  padding: 20px; 
}

li{
  label , h5{
    color: $blueColor !important;
  }
}

.no{
  width:50px
}

</style>



