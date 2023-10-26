<template>
    <div class="container">
        <div class="text-center w-100 d-flex justify-content-center mt-5 align-items-center">
            <p class="btn-login-text py-2">Agency Details</p>
        </div>
        <div class="row gy-3">
            <div class="col-sm-6 col-6 text-start">
                <label class="form-label label-text fs-media-6" for="Agency_Name">Name</label>
                <input class="form-control" type="text" v-model="Agency_Name" name="Agency_Name" id="Agency_Name">
            </div>
            <div class="col-sm-6 col-6 text-start">
                <label class="form-label label-text fs-media-6" for="Agency_Email">Email</label>
                <input class="form-control" type="text" v-model="Agency_Email" name="Agency_Email" id="Agency_Email">
            </div>
            <div class="col-sm-6 col-6 text-start">
                <label class="form-label label-text fs-media-6" for="phone-number1">Phone Number 1</label>
                <input class="form-control" type="text" name="phone-number1" id="phone-number1">
            </div>
            <div class="col-sm-6 col-6 text-start">
                <label class="form-label label-text fs-media-6" for="phone-number2">Phone Number 2</label>
                <input class="form-control" type="text" name="phone-number2" id="phone-number2">
            </div>
            <div class="col-sm-6 col-6 text-start">
                <label class="form-label label-text fs-media-6" for="Agency_PostCode">Post Code</label>
                <input class="form-control" type="text" v-model="Agency_PostCode" name="Agency_PostCode"
                    id="Agency_PostCode">
            </div>
            <div class="col-md-6 col-sm-12 col-12 text-start">
                <label class="form-label label-text fs-media-6" for="governorate">Governorate</label>
                <input class="form-control" type="text" name="governorate" id="governorate">
                <!-- <select name="" id="">
                    <option value="Alabama">Alabama</option>
                    <option value="Alaska">Alaska</option>
                    <option value="Arizona">Arizona</option>
                    <option value="Arkansas">Arkansas</option>
                    <option value="California">California</option>
                    <option value="Colorado">Colorado</option>
                    <option value="Connecticut">Connecticut</option>
                    <option value="Delaware">Delaware</option>
                    <option value="Florida">Florida</option>
                    <option value="Georgia">Georgia</option>
                    <option value="Hawaii">Hawaii</option>
                    <option value="Idaho">Idaho</option>
                    <option value="Illinois">Illinois</option>
                    <option value="Indiana">Indiana</option>
                    <option value="Iowa">Iowa</option>
                    <option value="Kansas">Kansas</option>
                    <option value="Kentucky">Kentucky</option>
                    <option value="Louisiana">Louisiana</option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                </select> -->
            </div>
            <div class="col-sm-6 col-6 text-start">
                <label class="form-label label-text fs-media-6" for="city">City</label>
                <input class="form-control" type="text" name="city" id="city">
            </div>
            <div class="col-md-6 col-sm-12 col-12 text-start">
                <label class="form-label label-text fs-media-6" for="address">Address</label>
                <input class="form-control" type="text" name="address" id="address">
            </div>
            <div class="col-md-6 col-sm-12 col-12 text-start">
                <label for="idfront" class="form-label label-text fs-media-6">Front commercial card ID</label>
                <input class="form-control" type="text" id="idfront" placeholder="path of image on drive">
            </div>
            <div class="col-md-6 col-sm-12 col-12 text-start">
                <label for="idback" class="form-label label-text fs-media-6">Back commercial card ID</label>
                <input class="form-control" type="text" id="idback" placeholder="path of image on drive">
            </div>
        </div>
        <div class="text-center w-100 d-flex justify-content-center mt-5 align-items-center">
            <p class="btn-login-text py-2">Agency’s Owner Details</p>
        </div>
        <div class="row gy-3 justify-content-center align-items-end">
            <div class="col-sm-6 col-6 text-start">
                <label class="form-label label-text fs-media-6" for="owner-fname">First Name</label>
                <input class="form-control" type="text" name="owner-fname" id="owner-fname">
            </div>
            <div class="col-sm-6 col-6 text-start">
                <label class="form-label label-text fs-media-6" for="owner-lname">Last Name</label>
                <input class="form-control" type="text" name="owner-lname" id="owner-lname">
            </div>
            <div class="col-sm-6 col-6 text-start">
                <label class="form-label label-text fs-media-6" for="owner-email">Email</label>
                <input class="form-control" type="text" name="owner-email" id="owner-email">
            </div>
            <div class="col-sm-6 col-6 text-start">
                <label class="form-label label-text fs-media-6" for="owner-phone-number1">Phone Number 1</label>
                <input class="form-control" type="text" name="owner-phone-number1" id="owner-phone-number1">
            </div>
            <div class="col-sm-6 col-6 text-start">
                <label class="form-label label-text fs-media-6" for="owner-phone-number2">Phone Number 2</label>
                <input class="form-control" type="text" name="owner-phone-number2" id="owner-phone-number2">
            </div>

            <div class="col-sm-6 col-6 text-start">
                <label class="form-label label-text fs-media-6" for="owner-birthofdate">Birth Of Date</label>
                <input class="form-control" type="date" name="owner-birthofdate" id="owner-birthofdate">
            </div>
            <div class="col-md-6 col-sm-12 col-12 text-start">
                <label for="owner-idfront" class="form-label label-text fs-media-6">Front National card ID</label>
                <input class="form-control" type="text" id="owner-idfront" placeholder="path of image on drive">
            </div>
            <div class="col-md-6 col-sm-12 col-12 text-start">
                <label for="owner-idback" class="form-label label-text fs-media-6">Back National card ID</label>
                <input class="form-control" type="text" id="owner-idback" placeholder="path of image on drive">
            </div>
            <div class="col-md-6 col-sm-12 col-12 text-start">
                <div class="d-flex flex-column text-start mb-2">
                    <label class="form-label label-text fs-media-6" for="owner-Password">Password</label>
                    <div class="d-flex align-items-center">
                        <input class="form-control myInput" :type="inputType" name="owner-Password" id="owner-Password">
                        <svg @click="triggerEye()" xmlns="http://www.w3.org/2000/svg" width="25" height="25"
                            fill="currentColor" class="bi bi-eye eye-icon ms-2" viewBox="0 0 16 16" v-if="eyeFlag">
                            <path
                                d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                            <path
                                d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                            class="bi bi-eye-slash eye-icon ms-2" viewBox="0 0 16 16" v-if="eyeSlashFlag"
                            @click="triggerEyeSlash()">
                            <path
                                d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z" />
                            <path
                                d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z" />
                            <path
                                d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z" />
                        </svg>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-sm-12 col-12 text-start">

                <!-- <input class="form-control" type="text" name="owner-Confirm Password" id="owner-Confirm Password"> -->
                <div class="d-flex flex-column text-start mb-2">
                    <label class="form-label label-text fs-media-6" for="owner-Confirm-Password">Confirm Password</label>
                    <div class="d-flex align-items-center">
                        <input class="form-control myInput" :type="inputType" name="owner-Confirm-Password"
                            id="owner-Confirm-Password">
                        <svg @click="triggerEye()" xmlns="http://www.w3.org/2000/svg" width="25" height="25"
                            fill="currentColor" class="bi bi-eye eye-icon ms-2" viewBox="0 0 16 16" v-if="eyeFlag">
                            <path
                                d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                            <path
                                d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                            class="bi bi-eye-slash eye-icon ms-2" viewBox="0 0 16 16" v-if="eyeSlashFlag"
                            @click="triggerEyeSlash()">
                            <path
                                d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z" />
                            <path
                                d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z" />
                            <path
                                d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z" />
                        </svg>
                    </div>
                </div>
            </div>
            <div class="col-sm-12 col-12">
                <div class="confirm d-flex justify-content-between align-items-center">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" name="owner-flexCheckDefault"
                            id="owner-flexCheckDefault">
                        <label class="form-check-label" for="owner-flexCheckDefault">
                            agree on terms and conditions
                        </label>
                    </div>
                    <div>
                        <router-link to="login"><button type="submit" @click="submitData"
                                class="signup-btn">Signup</button></router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import useVuelidate from '@vuelidate/core';
import { required, email } from '@vuelidate/validators';
export default {
    name: "FormAgencyComponent",
    data() {
        return {
            v$: useVuelidate(),
            email: '',
            pass: '',
            inputType: 'password',
            eyeFlag: true,
            eyeSlashFlag: false,
            Agency_Name: "",
            Agency_Email: "",
            // Agency_Name:"",
            // Agency_Name:"",
            // Agency_Name:"",
            // Agency_Name:"",
            // Agency_Name:"",
        }
    },
    validations() {
        return {
            email: { required, email },
            pass: { required }
        }
    },
    methods: {
        submitData() {
            this.v$.$validate();
            if (!this.v$.$error) {
                console.log('ok');
            } else {
                console.log('cannot');
            }
        },
        triggerEye() {
            this.eyeFlag = !this.eyeFlag;
            this.eyeSlashFlag = !this.eyeSlashFlag;
            this.inputType = "text";
        },
        triggerEyeSlash() {
            this.eyeSlashFlag = !this.eyeSlashFlag;
            this.eyeFlag = !this.eyeFlag;
            this.inputType = "password";
        }
    }
}
</script>

<style lang="scss" scoped>
.eye-icon {
    cursor: pointer;
}

@media only screen and (max-width: 996px) {
    .fs-media-6 {
        font-size: 16px !important;
    }
}
</style>