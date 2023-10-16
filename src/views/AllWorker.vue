<template>
  <div>
    <NavBarDashVue />
    <div class="page">
    <SideBarPage class="fixed" />
    <div class="d-inlien">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
        perferendis officiis eligendi? Provident tenetur asperiores, aliquid
        mollitia nemo quo labore eos, praesentium, debitis eveniet consequuntur
        ipsam laboriosam ipsum itaque quam.
      </p>
    </div>
  </div>
  </div>
</template>

<script>
import NavBarDashVue from "@/components/NavBarDash.vue";
import SideBarPage from "@/components/SideBarPage.vue";
export default {
  name: "AllWorker",
  components: {
    SideBarPage,
    NavBarDashVue,
  },
};
</script>

<style lang="sass" scoped>
  
</style>
