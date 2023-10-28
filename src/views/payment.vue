<template>
    <div class="bg">
        <NavBarPages/>
        <div class="container">
            <div class="row align-items-center">
            <div class="box col col-lg-7 col-md-12 col-sm-12 col-12">
                <p class="title py-3">Payment Details</p>
                <div class="row gx-8">
                    <div class="col-12">
                        <div class="d-flex flex-column">
                            <p class="text">Person Name yo</p>
                            <input class="form-control" type="text" placeholder="Name" value="" v-model="fullName">
                            <span class="error-feedback" v-if="v$.fullName.$error"> {{ v$.fullName.$errors[0].$message }}</span>
                        </div>
                            <div class="d-flex flex-column">
                            <p class="text">Person Name</p>
                            <input class="form-control" type="text" placeholder="Card Holder Name"  v-model="fullName">
                            <span class="error-feedback" v-if="v$.fullName.$error"> {{ v$.fullName.$errors[0].$message }}</span>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="d-flex flex-column">
                            <p class="text">Card Number</p>
                            <input class="form-control" type="text" placeholder="1234 5678 435678"  v-model="cardNumber">
                            <span class="error-feedback" v-if="v$.cardNumber.$error"> {{ v$.cardNumber.$errors[0].$message }}</span>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="d-flex flex-column">
                            <p class="text">Expiry</p>
                            <input class="form-control" type="text" placeholder="MM/YYYY"  v-model="expiry">
                            <span class="error-feedback" v-if="v$.expiry.$error"> {{ v$.expiry.$errors[0].$message }}</span>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="d-flex flex-column">
                            <p class="text">CVV/CVC</p>
                            <input class="form-control" type="password" placeholder="***" v-model="cvv">
                            <span class="error-feedback" v-if="v$.cvv.$error"> {{ v$.cvv.$errors[0].$message }}</span>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="">
                        <div class=""> <label class="radio"> <input type="radio" value="terms">
                        accept terms and conditions <span></span> </label> </div>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="btn ">
                            <div><router-link to="#" class="pay" @click="completePayment()" data-bs-target="#exampleModalToggle" data-bs-toggle="modal"> Pay</router-link></div>
                        </div>
                        <div class="back-btn d-flex align-items-start">
                            <div class="back"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#193655" class="bi bi-arrow-left-circle" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/></svg></div>
                            <div class="back"> back</div>
                        </div>
                    </div>
                </div>
            </div>
                <div class="col col-lg-4 col-md-12 col-sm-12 col-12">
                    <div class="box">
                        <div class="title">Overview</div>
                        <div class="sub-title"> Order Address</div>
                        <div class="info">127 Salim St., Helmeya, Cairo </div>
                        <div class="sub-title"> Worker Name</div>
                        <div class="info">127 Salim St., Helmeya, Cairo </div>
                        <div class="sub-title"> Order Description </div>
                        <div class="info">Living room + kitchen </div>
                        <div class="sub-title"> Order Date</div>
                        <div class="info"> 1/1/2024 </div>
                        <div class="sub-title"> Total </div>
                        <div class="info">450 LE</div>
                    </div>
                </div>
            </div>
            <!-- <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1"> -->


    <div class="modal-dialog modal-dialog-centered">
<div id="exampleModalToggle" class="modal fade" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
	<div class="modal-dialog modal-confirm">
		<div class="modal-content">
			<div class="modal-header">
				<div class="icon-box">
					<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
                    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/></svg>
				</div>				
				<div class="modal-title text-align-center">Awesome!</div>	
			</div>
			<div class="modal-body">
				<p class="text-center">Your booking has been confirmed. Check your email for detials.</p>
			</div>
			<div class="modal-footer">
				<button class="btn btn-success btn-block" data-dismiss="modal">OK</button>
			</div>
		</div>
	</div>
</div>
    </div>
</div>
        </div>
        <FooterComponent/>
</template>

<script>
    import NavBarPages from "@/components/NavBarPages.vue";
    import FooterComponent from "@/components/footer.vue";
    import useVuelidate from "@vuelidate/core";
    import { required, minLength, numeric } from "@vuelidate/validators";
    
export default {
    name: "paymentDetails",
    components: {
        FooterComponent,
        NavBarPages,
    },
    data() {
        return {
            v$: useVuelidate(),
            fullName: "",
            cardNumber: "",
            expiry: "",
            cvv: "",
        }
    },
    validations() {
        return {
            name: { required },
            cardNumber: { required, numeric, minLength: minLength(16) },
            expiry: { required, numeric, minLength: minLength(6) },
            cvv: { required, numeric, minLength: minLength(3) },
        };
    },
    methods: {
        completePayment() {
            this.v$.$validate();
            if (!this.v$.$error) {
                console.log('Payment completed successfully');
            } else {
                console.log('payement failed');
            }
        }
    }
}

</script>

<style lang="scss" scoped>
    @import "../scss/global/colors";
    @import "../scss/global/variables";

    .bg {
    background-color: $backgroundColor;
    }
    .box {
    @include box;
    margin: 1%;
    }
    .title {
    font-weight: bold;
    font-size: $subTitle;
    }
    .sub-title{
        font-weight: bold;
    }
    .btn {
    @include button;
    text-align: center;
    display: block;
    margin-left: auto;
    margin-right: auto;

    }

    .back-btn{
    &:hover {
        color: $orangeColor;
    }}

    .back{
        font-size: 18px;
        padding-left: 2%;
        
    }
    .error-feedback{
        color:red;
        font-size: $small;
    }
    .form-control{
        margin: 2px;
    }
    .text{
        margin: 2px;
    }
    .fa-arrow-right{
        color: $blueColor;
    }
    .pay{
    text-decoration: none;
    cursor: pointer;
    color: $whiteColor;
    }

	.modal-confirm {		
		color: $blueColor;
		width: 325px;
		margin: 30px auto;
	}
	.modal-confirm .modal-content {
		padding: 20px;
		border-radius: 5px;
		border: none;
	}
	.modal-confirm .modal-header {
		border-bottom: none;   
        position: relative;
	}
	.modal-confirm h4 {
		text-align: center;
		font-size: 26px;
		margin: 30px 0 -15px;
	}
	.modal-confirm .form-control, .modal-confirm .btn {
		min-height: 40px;
		border-radius: 3px; 
	}
	.modal-confirm .close {
        position: absolute;
		top: -5px;
		right: -5px;
	}	
	.modal-confirm .modal-footer {
		border: none;
		text-align: center;
		border-radius: 5px;
		font-size: 13px;
	}	
	.modal-confirm .icon-box {
		color: #fff;		
		position: absolute;
		margin: 0 auto;
		left: 0;
		right: 0;
		top: -70px;
		width: 95px;
		height: 95px;
		border-radius: 50%;
		z-index: 9;
		background:  $orangeColor;
		padding: 20px;
		text-align: center;
		box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
	}
    .modal-title {
        font-weight: $semiBold;
        font-size: $title;
        margin: auto;
        margin-top: 20px;
    }
	.modal-confirm .icon-box i {
		position: relative;
		top: 10px;
	}
	.modal-confirm.modal-dialog {
		margin-top: 80px;
	}
    .modal-confirm .btn {
        color: #fff;
        border-radius: $border-radius-small;
		background:  $orangeColor;
		text-decoration: none;
		transition: all 0.4s;
        line-height: normal;
        border: none;
    }
	.modal-confirm .btn:hover, .modal-confirm .btn:focus {
		background: $orangeColor;
		outline: none;
	}
	.trigger-btn {
		display: inline-block;
		margin: 100px auto;
	}


</style>