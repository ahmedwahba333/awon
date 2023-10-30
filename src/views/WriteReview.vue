<template>
  <div class="bg">
    <NavBarPages />
    <div class="container">
      <div class="box">
        <!-- <div class="d-flex flex-row mx-5 justify-content-between"> -->
        <div
          class="d-flex flex-wrap justify-content-start align-items-center col-6 col-lg-6 col-md-4 col-sm-12 ms-5"
        >
          <img :src="`${worker.img}`" alt="Cx" class="object-fit-cover" />
          <h4 class="mx-2">{{worker['First_name']}} {{worker['Last_name']}}</h4>
        </div>
        <!-- </div> -->
        <div
          class="d-flex flex-wrap justify-content-between align-items-center col-12 col-lg-6 col-md-4 col-sm-12 p-5"
        >
          <div class="rateWorker">
            <div>
              <p>Rate the worker</p>
            </div>
            <star-rating
              active-color="#F97B22"
              star-size="30"
              v-model:rating="values.Rate"
                @update:rating ="setRatingWorker"
            ></star-rating>
          </div>
          <div class="rateService justify-content-center">
            <div>
              <p>Rate the service</p>
            </div>
            <div>
              <star-rating
                active-color="#F97B22"
                star-size="30"
                v-model:rating="values.RateService"
              @update:rating ="setRatingService"
              ></star-rating>
            </div>
          </div>
        </div>
        <div class="d-flex flex-row mx-5">
          <div class="col-12">
            <div class="commentbox">
              <h4>Write review</h4>
              <div class="comment-area">
                <textarea class="form-control" rows="4" v-model="values.Review"></textarea>
              </div>
              <div class="comment-btns mt-2">
                <div class="row justify-content-end">
                  <div class="col-12 col-xl-3 col-md-7 col-sm-10">
                    <button class="btn" @click="addReview(worker.id)">Add</button>
                  </div>

                  <div class="col-12 col-xl-3 col-md-7 col-sm-10">
                    <button class="btn btn-cancel" >
                      Cancel <i class="fa fa-long-arrow-right ml-1"></i>
                    </button>
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
import StarRating from 'vue-star-rating';
import axios from 'axios';
export default {
  name: "WriteReview",
  components: { FooterComponent, NavBarPages,StarRating },
data() {
  return{
    worker:{},
    id:'',
    values:{
      Rate: 0,
      RateService: 0,
      Review:"",
      Name:""
    
    },
}
  },
  created(){
    this.getWorkerByID();
    this.setRatingWorker();
  this.setRatingService();
  },
  methods: {

    getWorkerByID(){
      this.id = this.$route.params.id;
      axios.get(`http://localhost:2000/worker/${this.id}`)
      .then((res)=> {this.worker = res.data})
      .catch((err)=>{console.log(err)})
    },
    setRatingWorker(Rate){
      this.rating= Rate;
      // console.log(Rate);
    },
      setRatingService(RateService){
      this.rating= RateService;
      // console.log(Rate_service);
    },
    addReview() {
      axios
        .post("http://localhost:2000/review", this.values)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
      this.$router.push("/review");
    },

  },

};
</script>

<style lang="scss" scoped>
@import "../scss/global/colors";
@import "../scss/global/variables";
  img {
      clip-path: circle();
      }
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
  .btn {
    @include button;
    &-cancel {
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
