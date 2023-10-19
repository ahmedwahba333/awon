<template>
  <div class="bg container-fluid">
    <NavBarPages />
    <div class="child">
      <h2 class="serv">House Keeping: Your home, your haven.</h2>
      <p class="servpara">
        Your home is your sanctuary, a place where you can relax and recharge.
        it can be tough to find the time to keep your home as clean and tidy as
        you'd like with busy schedules. That's where housekeeping services come
        in, so you can focus on what's important to you.
      </p>
    </div>
    <div class="row justify-content-center my-5 gap-5">
      <div class="card" style="width: 18rem">
        <img
          src="../assets/images/cardphotos/cleaning.jpg"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">Cleaning</h5>
        </div>
      </div>
      <div class="card" style="width: 18rem">
        <img
          src="../assets/images/cardphotos/gardening.jpg"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">Gardening</h5>
        </div>
      </div>
    </div>
    <div class="child">
      <h2 class="serv">Caring services: For the people you love.</h2>
      <p class="servpara">
        Our experienced and compassionate caregivers can provide your loved ones
        with the care and support they need, so you can have peace of mind. We
        offer a wide range of services, including elderly care, babysitting, and
        respite care.
      </p>
    </div>
    <div class="row justify-content-center my-5 gap-5">
      <div class="card" style="width: 18rem">
        <img
          src="../assets/images/cardphotos/baby-sitting.jpg"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">Baby sitting</h5>
        </div>
      </div>
      <div class="card" style="width: 18rem">
        <img
          src="../assets/images/cardphotos/elderly-care.jpg"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">Elderly care</h5>
        </div>
      </div>
      <div class="card" style="width: 18rem">
        <img
          src="../assets/images/cardphotos/house-nursing.jpg"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">House nursing</h5>
        </div>
      </div>
    </div>
    <div class="child">
      <h2 class="serv">Food services: For every occasion.</h2>
      <p class="servpara">
        Whether you're planning a wedding, corporate event, or just a casual
        get-together, our chefs and caterers can create a delicious and
        memorable dining experience for you and your guests. We offer a wide
        range of cuisines and services, so you can find the perfect solution for
        your needs.
      </p>
    </div>
    <div class="row justify-content-center my-5 gap-5">
      <div class="card" style="width: 18rem">
        <img
          src="../assets/images/cardphotos/foodServices.jpeg"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">Food catering</h5>
        </div>
      </div>
      <div class="card" style="width: 18rem">
        <img
          src="../assets/subservices/chef3.jpg"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">Chefs</h5>
        </div>
      </div>
    </div>
    <div class="child">
      <h2 class="serv">House maintenance: For a safe and comfortable home.</h2>
      <p class="servpara">
        Our experienced and qualified technicians can handle all your house
        maintenance needs, from routine repairs to major projects. We offer a
        wide range of services, including plumbing, electrical, carpentry, and
        HVAC.
      </p>
    </div>
    <div class="row justify-content-center my-5 gap-5">
      <div class="card" style="width: 18rem">
        <img
          src="../assets/images/cardphotos/plumbing.jpg"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">Plumbing</h5>
        </div>
      </div>
      <div class="card" style="width: 18rem">
        <img
          src="../assets/images/cardphotos/carpentry.jpg"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">Carpentry</h5>
        </div>
      </div>
      <div class="card" style="width: 18rem">
        <img
          src="../assets/images/cardphotos/moving.jpg"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">Moving furniture</h5>
        </div>
      </div>
    </div>
    <div class="child">
      <h2 class="serv">
        Personal services: For a more convenient and secure life.
      </h2>
      <p class="servpara">
        Our experienced and reliable personal service providers can help you
        with a variety of tasks, such as house guarding, driving, and running
        errands. Free up your time and energy to focus on the things that matter
        most to you.
      </p>
    </div>
    <div class="row justify-content-center my-5 gap-5">
      <div class="card" style="width: 18rem">
        <img
          src="../assets/images/cardphotos/House-guard.jpg"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">House gaurd</h5>
        </div>
      </div>
      <div class="card" style="width: 18rem">
        <img
          src="../assets/subservices/driver2.jpg"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">Driver</h5>
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
  components: {
    NavBarPages,
    FooterComponent,
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
  margin: auto;
  margin-top: 25px;
  margin-bottom: 25px;
  padding: 15px;
  background-color: $whiteColor;
  width: 70%;
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

.card {
  height: 20rem;
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
