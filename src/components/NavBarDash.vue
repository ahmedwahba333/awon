<template>
  <!--Navbar-->
<nav class="navbar navbar-expand-lg navbar-dark indigo mb-4">

  <!-- Navbar brand -->
  <a class="navbar-brand" href="#">Navbar</a>

  <!-- Collapsible content -->
  <div class="collapse navbar-collapse" id="navbarSupportedContent">

    <form class="form-inline ml-auto">
      <div class="md-form my-0">
        <input class="form-control" type="text" placeholder="Search" aria-label="Search">
      </div>
    </form>

  </div>
  <!-- Collapsible content -->

</nav>

</template>

<script>
export default {
  name: "NavBarDash",
};
</script>

<style lang="scss" scoped>
@import "../scss/global/colors";
// a {
// 	text-decoration: none;
// }

// .container {
// 	padding-left: 15px;
// 	padding-right: 15px;
// 	margin-left: auto;
// 	margin-right: auto;
// }

// .header {
// 	background-color: $blueColor;
// 	position: relative;
// 	.container {
// 		display: flex;
// 		justify-content: space-between;
// 		align-items: center;
// 		flex-wrap: wrap;
// 		position: relative;
// 	}
//   .logo {
// 		color: $whiteColor;
// 		font-size: 26px;
// 		font-weight: bold;
// 		height: 72px;
// 		display: flex;
// 		justify-content: center;
// 		align-items: center;
// 	}
// }
</style>