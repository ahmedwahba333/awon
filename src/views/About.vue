<template>
	<NavBarPages/>
    <div class="bg">
	<div class="container">
		<div class="row  d-flex justify-content-center">
			<div class="col-md-6 col-sm-12 col-12 py-3 d-flex justify-content-center">
				<img src="../assets/images/about-us.jpg">
			</div>
			<div class="col-md-6 col-sm-12 col-12 py-3">
				<div class="title col-sm-12">Awn is an online services agency since 2023.</div>
				<div class="para col-sm-12">
				We offer many reliable and high-quality services especially for you, served by more than 200 trusted workers ready to help you at any time.
				We can clean your house, take care of your children and more. Our concern is your comfort and satisfaction.
				Sign up and enjoy our services now.
				</div>
				<div class="btn">Discover</div>
			</div>				
		</div>
			<div class="row">
				<div class="col-lg-12">
				<div class="title col-sm-12 d-flex justify-content-center">Our Office location </div>
				<div class=" col-sm-12 d-flex justify-content-center"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2280.9484977147704!2d31.19881800380563!3d30.047117098870253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14584131cac08c7d%3A0xbd00be7b9494a8f4!2sMohandessin%2C%20Giza%20Governorate!5e0!3m2!1sen!2seg!4v1697726956494!5m2!1sen!2seg" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
		</div></div>
				<div class="row col-lg-12">
					<div class="title col-sm-12 d-flex justify-content-center">Awon Owners</div>
					<div class="para owners d-flex justify-content-center col-sm-6">
							1/ Ahmed Mostafa	<br>
							2/ Amr Mohammed		<br>
							3/ Omar AlFarouq Tarek <br>
					</div>
					<div class="para owners d-flex justify-content-center col-sm-6">
							4/ Sara Nagy<br>
							5/ Nada Mohammed<br>
							6/ Nada Ahmed<br>
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
	width: 100%;
	}
	
    .btn {
    @include button;
		margin-left: 150px;
		@media (min-width:"575px") {
			margin-left: 200px;
		}
    }

	.title {
    font-weight: bold;
    font-size: $title;
	color: $blueColor;
	padding: 2%;
    }
	.para{
    font-size: $paragraph;
	color: $blueColor;
	}
	.map{
	padding: 20px;
	}
	.owners{
		padding: 2%;
	}
</style>