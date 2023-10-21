<template>
  <div class="bg container-fluid">
    <NavBarPages />
  </div>
</template>

<script>
import NavBarPages from "@/components/NavBarPages.vue";
export default {
  components: {
    NavBarPages,
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
</style>
