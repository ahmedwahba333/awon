<template>
  <!--Navbar-->
<nav class="navbar navbar-expand-lg navbar-dark indigo mb-4">

  <!-- Navbar brand -->
  <a class="navbar-brand" href="#">Navbar</a>

  <!-- Collapsible content -->
  <!-- <div class="collapse navbar-collapse" id="navbarSupportedContent"> -->
    <!-- <form class="form-inline d-flex justify-content-center md-form form-sm mt-0">
      <input class="form-control form-control-sm ml-3 w-75" type="text"  <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" >
        <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
        
        aria-label="Search">
    </form>
    <form class="form-inline ml-auto">
      <div class="md-form my-0">
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" >
        <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
        <input class="form-control" type="text" placeholder="Search" aria-label="Search">
      </div>
      
    </form> -->

<!-- html code -->
<input type="text" name="txtBox" >
  <!-- </div> -->
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
input {
  background: url("http://kodyrabatowe.wp.pl/img/ico/search_gr.png") top left
    no-repeat;
  height: 30px;
  padding-left: 25px;
}
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