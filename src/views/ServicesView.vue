<template>
  <div class="bg">
    <NavBarPages />
    <template v-for="(categ, id) in category" :key="id">
      <div class="container">
        <div class="child">
          <h2 class="serv">{{ categ.Name }}</h2>
          <p class="servpara">
            {{ categ.Details }}
          </p>
        </div>

        <div class="d-flex flex-wrap">
          <template v-for="(service, id) in service" :key="id">
            <template v-if="service.Category_id == categ.id">
              <router-link :to="`service/${service.id}`">
                <div class="card me-5 my-2" style="width: 382px">
                  <img :src="`${service.img}`" class="card-img-top object-fit-cover" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">{{ service['Name'] }}</h5>
                  </div>
                </div>
              </router-link>
            </template>
          </template>
        </div>
      </div>
    </template>
    <FooterComponent class="mt-5" />
  </div>
</template>

<script>
import NavBarPages from "@/components/NavBarPages.vue";
import FooterComponent from "@/components/footer.vue";
import axios from 'axios';
export default {
  components: {
    NavBarPages,
    FooterComponent,
  },
  data() {
    return {
      service: [],
      category: [],
    }
  },
  created() {
    this.getservice();
    this.getcategory();
  },
  methods: {
    getservice() {
      axios.get("http://localhost:2000/service")
        .then((res) => { this.service = res.data })
        .catch((err) => { console.log(err) })
    },
    getcategory() {
      axios.get("http://localhost:2000/category")
        .then((res) => { this.category = res.data })
        .catch((err) => { console.log(err) })
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/global/colors";
@import "../scss/global/variables";
@import "../scss/main.scss";


.bg {
  background-color: $backgroundColor;
}

.child {
  // margin: auto;
  margin-top: 25px;
  margin-bottom: 25px;
  padding: 50px;
  background-color: $whiteColor;
  // width: 82%;
  height: auto;
  border-radius: $border-radius-big;
}

.serv {
  font-size: $title;
  font-family: "raleway";
  font-weight: bold;
  color: $blueColor;
}

.servpara {
  font-size: $paragraph;
  font-family: "raleway";
  color: $blueColor;
}

.card-body {
  width: 100%;
  margin: 0 !important;
  border-radius: $border-radius-big;
}

.card {
  height: 20rem;
  width: 25rem;
  padding: 0 !important;

  img {
    height: 15rem;

  }
}

.card-title {
  font-size: $subTitle;
  font-weight: bold;
  color: $blueColor;
  text-align: center;
  color: $blueColor;
}
</style>
