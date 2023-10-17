<template>
  <SideBarPage />
  <!-- <div class="container"> -->
    <div class="content">
<h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni vero eligendi, suscipit exercitationem sit laborum tenetur fuga quos, 
    porro repellat, commodi similique quam dolores ad veritatis harum? Sunt, deleniti nostrum.
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non consequatur natus corporis ipsam vitae voluptas commodi deleniti ratione, 
    sed nisi dolor aspernatur eius nostrum veritatis possimus nemo autem suscipit porro?</h1>
    </div>

  <!-- </div> -->
</template>

<script>
import SideBarPage from "@/components/SideBarPage.vue";
export default {
  name: "AgancyDash",
  components: { SideBarPage },
};
</script>

<style lang="scss" scoped>
@import "../scss/global/colors";
@import "../scss/global/variables";

.content {
  background-color: $backgroundColor;
  display: inline-block;
  margin-left: 15%;
  padding: 25px;
}
// .box {
//   @include box;
//   height: 500px;
//   h4 {
//     font-weight: $bold;
//   }
//   p {
//     font-size: $paragraph;
//     font-weight: $bold;
//   }
// }
</style>
