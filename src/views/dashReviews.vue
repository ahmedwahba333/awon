<template>
<NavBarDash/>
<div class="bg">
    <div class="container">
    <div class="title">All Reviews</div>
        <div class="box"  v-for="(rev,i) in cxReview" :key="i" >
            <div class="row align-items-start">
                <div class="cx-icon col-lg-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#193655" class="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
</svg>
                </div>
                <div class="col-lg-10">
                    <div class="cx-name col-lg-12">{{rev.Name}}</div>
                    <div class="cx-rate col-lg-12 col-md-5 col-5">
                        <div class="rating">
                            <star-rating active-color="#F97B22"  star-size=15 :rating="`${rev.Rate}`"></star-rating>
                        </div>
                    </div>  
                        <div class="cx-comment col-sm-12 col-12">{{rev.Review}}</div>  
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import NavBarDash from "@/components/NavBarDash.vue";
import StarRating from 'vue-star-rating';
import axios from 'axios';

export default {
    name: "dashReviews",
    components: {
        NavBarDash,
        StarRating,
    },
    data() {
        return {
            cxReview: [],
        };
    },
    created() {
        this.getReview()
    },
    methods: {
        getReview() {
            axios.get("http://localhost:2000/review")
                .then((res) => { console.log(this.cxReview = res.data) })
                .catch((err) => { console.log(err) })
        }
    }
}

</script>
<style lang="scss" scoped>
    @import "../scss/global/colors";
    @import "../scss/global/variables";

    .bg{
    background-color: $backgroundColor;
}
    .title {
    font-weight: bold;
    font-size: $subTitle;
    color: $blueColor;
    padding: 1%;
    }
    .box {
    @include box;
    margin:20px;
    padding: 20px;
    
    }

    .cx-icon {
    display: flex;
    vertical-align: middle;
    justify-content: center;
    align-items: center;
    }
</style>