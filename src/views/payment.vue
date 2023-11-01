<template>
    <div class="bg">
        <NavBarPages/>
        <div class="container">
            <div class="row align-items-center">
            <div class="box col col-lg-7 col-md-12 col-sm-12 col-12">
                <p class="title py-3">Payment Details</p>
                <div class="row gx-8">
                    <div class="col-12 d-flex flex-column">
                            <p class="text">Person Name</p>
                            <input class="form-control" type="text" placeholder="Card Holder Name"  v-model="name">
                            <span class="error-feedback" v-if="v$.name.$error">{{ v$.name.$errors[0].$message}}</span>
                            <!-- <template><span v-else-if="v$.name.$anyDirty"> </span></template> -->
                    </div>
                    <div class="col-12 d-flex flex-column">
                            <p class="text">Card Number</p>
                            <input class="form-control" type="text" placeholder="1234 5678 435678"  v-model="cardNumber">
                            <span class="error-feedback" v-if="v$.cardNumber.$error">{{ v$.cardNumber.$errors[0].$message}}</span>
                    </div>
                    <div class="col-6 d-flex flex-column">
                            <p class="text">Expiry</p>
                            <input class="form-control" type="text" placeholder="MM/YYYY"  v-model="expiry">
                            <span class="error-feedback" v-if="v$.expiry.$error">{{ v$.expiry.$errors[0].$message}}</span>
                    </div>
                    <div class="col-6 d-flex flex-column">
                            <p class="text">CVV/CVC</p>
                            <input class="form-control" type="password" placeholder="***" v-model="cvv">
                            <span class="error-feedback" v-if="v$.cvv.$error">{{ v$.cvv.$errors[0].$message}}</span>
                    </div>
                    <div class="col-12">
                            <input type="radio" value="terms" required v-model="terms">  accept terms and conditions<br>
                            <span class="error-feedback" v-if="v$.terms.$error">{{ v$.terms.$errors[0].$message}}</span>
                    </div>
                    <div class="col-12">
                        <div class="btn ">
                            <div @click="completePayment()" data-bs-target="#exampleModalToggle" data-bs-toggle="modal" v-if="!this.v$.$error"><router-link to="#" class="pay"> Pay </router-link></div>
                        </div>
                    </div>
                </div>
            </div>
                <div class="col col-lg-4 col-md-12 col-sm-12 col-12">
                    <div class="box">
                        <div class="title">Overview</div>
                        <div class="sub-title"> Address</div>
                        <div class="info">{{ newOrder.Order_Address }},{{ newOrder.Governorate }},{{ newOrder.City }}  </div>
                        <div class="sub-title"> Order Date</div>
                        <div class="info"> {{ newOrder.multDateFrom }} - {{ newOrder.multDateTo }} </div>
                        <div class="sub-title"> Ordar Total </div>
                        <div class="info">{{ newOrder.Order_Price }} LE </div>
                        <!-- <div class="sub-title"> Order Description </div> -->
                    </div>
                </div>
            </div>
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
				<router-link to="/"><button class="btn btn-success btn-block" data-dismiss="modal">OK</button></router-link>
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
    import axios from 'axios';
    import NavBarPages from "@/components/NavBarPages.vue";
    import FooterComponent from "@/components/footer.vue";
    import useValidate from "@vuelidate/core";
    import { required, minLength, maxLength, numeric } from '@vuelidate/validators'



    
export default {
    name: "paymentDetails",
    components: {
        FooterComponent,
        NavBarPages,
    },
    data() {
        return {
            v$: useValidate(),
            name: "",
            cardNumber: "",
            expiry: "",
            cvv: "",
            terms: "",
            newOrder: [],
            // radioIsActive: false,
            // radioIsActive: false,
        }
    },

    validations() {
        return {
            name: { required },
            cardNumber: { required, numeric, minLength: minLength(16), maxLength: maxLength(16)},
            expiry: { required, numeric, minLength: minLength(4), maxLength: maxLength(4)},
            cvv: { required, numeric, minLength: minLength(3), maxLength: maxLength(3)},
            terms: { required },
        };
    },

    mounted() {
    this.v$.$validate();
    const NewOrderArray = localStorage.getItem('newOrderDet');
        // this.getNewOrder()
    if (NewOrderArray) {
    this.newOrder = JSON.parse(NewOrderArray);
    }
    },

    methods: {
        completePayment() {
            this.v$.$validate();
            if (!this.v$.$error) {
                axios.post("http://localhost:2000/order",this.newOrder);
                console.log('Payment completed successfully');
                                // $('#exampleModalToggle').modal('hide');

                // console.log(radioIsActive);
            } else {
                localStorage.removeItem('newOrderDet')
                console.log('payment failed');
                                // $('#exampleModalToggle').modal('show')

            }
        },
//     completePayment() {
//   this.v$.$validate();
//   if (this.v$.$error) {
//     // Prevent the modal from showing up
//     return;
//   }

//   // The form is valid, so complete the payment
//   axios.post("http://localhost:2000/order", this.newOrder)
//     .then(() => {
//       $('#exampleModalToggle').modal('show');

//     })
//     .catch(() => {
//               $('#exampleModalToggle').modal('hide');

//     });
// }
    }

    
}

</script>

<style lang="scss" scoped>
    @import "../scss/global/colors";
    @import "../scss/global/variables";

    .bg {
    background-color: $backgroundColor;
    }
    .text{
        font-size: $paragraph
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
    font-size: $paragraph;
    }
    .info{
    font-size: $paragraph;
    }

    .back-btn{
    &:hover {
        color: $orangeColor;
    }}

    .back{
        font-size: 18px;
        padding-left: 2%;
        
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
    .error-feedback{
        color: red;
        font-size: $small;
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
    .modal-footer {
    display: flex;
    flex-shrink: 0;
    flex-wrap: nowrap;
    align-items: baseline;
    justify-content: space-evenly;
    padding: calc(var(--bs-modal-padding) - var(--bs-modal-footer-gap) * .5);
    background-color: var(--bs-modal-footer-bg);
    border-top: var(--bs-modal-footer-border-width) solid var(--bs-modal-footer-border-color);
    border-bottom-right-radius: var(--bs-modal-inner-border-radius);
    border-bottom-left-radius: var(--bs-modal-inner-border-radius);
    align-content: flex-end;
    flex-direction: row-reverse;}

	.modal-confirm .btn:hover, .modal-confirm .btn:focus {
		background: $orangeColor;
		outline: none;
	}
    .btn {
    @include button;
    text-align: center;
    display: block;
    margin-left: auto;
    margin-right: auto;

    }
</style>