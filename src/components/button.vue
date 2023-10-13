<template>
  <div>
    <button class="button">button</button>
  </div>
</template>

<script>
export default {
  name: "buttonComponent",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../scss/global/colors";
$blueColor: #193655;
$orangeColor: #f97b22;
$darkOrange: #c15000;
$backgroudColor: #ebebd3;
$whiteColor: #ffffff;
.button {
  width: 150px;
  height: 50px;
  border-radius: 10px;
  background-color: $orangeColor;
  border: 0px;
  color: $whiteColor;
  font-weight: 600;
  &:hover {
    background-color: $darkOrange;
      border: 0px;

  }
}
</style>
