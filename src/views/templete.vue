<template>
  <NavBarPages />
  <div class="bg">
    <div class="container"></div>
    <FooterComponent />
  </div>
</template>

<script>
import NavBarPages from "@/components/NavBarPages.vue";
import FooterComponent from "@/components/footer.vue";
export default {
  name: " ",
  components: {
    FooterComponent,
    NavBarPages,
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/global/colors";
@import "../scss/global/variables";

.bg {
  background-color: $backgroundColor;
}

img {
  width: 70%;
}

.btn {
  @include button;
  margin: center;
}
.title {
  font-weight: bold;
  font-size: $title;
  color: $blueColor;
}
.para {
  font-size: $paragraph;
  color: $blueColor;
}
</style>
