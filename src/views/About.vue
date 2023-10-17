<template>
	<NavBarPages/>
    <div class="bg">
	<div class="container">
		<div class="row ">
			<div class="col-lg-6 col-md-6 col-sm-12 col-12 py-3">
				<img src="../assets/images/about-us.jpg">
			</div>

			<div class="col-lg-6 col-md-6 col-sm-12 col-12 py-3">
				<div class="title">Awn is an online services agency since 2023.</div>
				<div class="para ">
				We offer many reliable and high-quality services especially for you, served by more than 200 trusted workers ready to help you at any time.
				We can clean your house, take care of your children and more. Our concern is your comfort and satisfaction.
				Sign up and enjoy our services now.
				</div>
				<div class="btn">Discover</div>
			</div>				
			</div>
		</div>
	<FooterComponent/>
	</div>


</template>

<script>
    import NavBarPages from "@/components/NavBarPages.vue";
    import FooterComponent from "@/components/footer.vue";
    export default {
    name: "aboutUs",
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

	img{
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
	.para{
    font-size: $paragraph;
	color: $blueColor;
	}
</style>