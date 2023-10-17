<template>
  <div class="bg">
    <NavBarPages />
    <div class="container">
      <div class="box">
        <!-- <div class="d-flex flex-row mx-5 justify-content-between"> -->
          <div class="d-flex flex-wrap justify-content-center align-items-center col-12 col-lg-6 col-md-8 col-sm-12 ">
            <img src="../assets/images/writereview/1.jpg" alt="Cx" />
            <h4 class="mx-5">Fatma A.</h4>
          </div>
        <!-- </div> -->
        <div class="d-flex flex-wrap justify-content-between align-items-center col-12 col-lg-8 col-md-4 col-sm-12 p-5">
          <div class=" rateWorker ">
            <div>
              <p>Rate the worker</p>
            </div>
            <div class="rating">
              <input type="radio" name="rating" value="5" id="5" /><label
                for="5"
                >☆</label
              >
              <input type="radio" name="rating" value="4" id="4" /><label
                for="4"
                >☆</label
              >
              <input type="radio" name="rating" value="3" id="3" /><label
                for="3"
                >☆</label
              >
              <input type="radio" name="rating" value="2" id="2" /><label
                for="2"
                >☆</label
              >
              <input type="radio" name="rating" value="1" id="1" /><label
                for="1"
                >☆</label
              >
            </div>
          </div>
          <div class=" rateService justify-content-center">
            <div>
              <p>Rate the service</p>
            </div>
            <div>
              <div class="rating">
                <input type="radio" name="rating" value="5" id="5" /><label
                  for="5"
                  >☆</label
                >
                <input type="radio" name="rating" value="4" id="4" /><label
                  for="4"
                  >☆</label
                >
                <input type="radio" name="rating" value="3" id="3" /><label
                  for="3"
                  >☆</label
                >
                <input type="radio" name="rating" value="2" id="2" /><label
                  for="2"
                  >☆</label
                >
                <input type="radio" name="rating" value="1" id="1" /><label
                  for="1"
                  >☆</label
                >
              </div>
            </div>
          </div>
        </div>
        <div class="d-flex flex-row mx-5">
             <div class="col-12 ">
                      <div class="commentbox ">
                          <h4>Write review</h4> <div class="comment-area">
                              <textarea class="form-control" rows="4"></textarea>
                          </div>
                          <div class="comment-btns mt-2">
                              <div class="row justify-content-end">
                                      <div class="col-12 col-xl-3 col-md-7 col-sm-10 ">
                                      <button class="btn">Add</button>      
                                      </div>
                            
                                      <div class="col-12 col-xl-3  col-md-7 col-sm-10 ">
                                      <button class="btn btn-cancel">Cancel <i class="fa fa-long-arrow-right ml-1"></i></button>      
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
        </div>
      </div>
  
    <FooterComponent />
  </div>
</template>

<script>
import NavBarPages from "@/components/NavBarPages.vue";
import FooterComponent from "@/components/footer.vue";
export default {
  name: "WriteReview",
  components: { FooterComponent, NavBarPages },
};
</script>

<style lang="scss" scoped>
@import "../scss/global/colors";
@import "../scss/global/variables";

.bg {
  background-color: $backgroundColor;
}
.box {
  @include box;
  height: auto;
  h4 {
    font-weight: $bold;
  }
  p {
    font-size: $paragraph;
    font-weight: $bold;
    color: $blueColor;
  }
  .rating {
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
  }

  .rating > input {
    display: none;
  }

  .rating > label {
    position: relative;
    font-size: 40px;
    font-weight: 300;
    color: $orangeColor;
    cursor: pointer;
  }

  .rating > label::before {
    content: "\2605";
    position: absolute;
    opacity: 0;
  }

  .rating > label:hover:before,
  .rating > label:hover ~ label:before {
    opacity: 1 !important;
  }

  .rating > input:checked ~ label:before {
    opacity: 1;
  }

  .rating:hover > input:checked ~ label:before {
    opacity: 0.4;
  }
.btn{
  @include button ;
  &-cancel{
    background-color: $backgroundColor;
    color: black;
      &:hover {
        background-color: $backgroundColor;
        border: 0px;
        color: $orangeColor;
    }

  }
}
 
}
</style>
