<template>
    <div class="container">
        <form @submit.prevent="signup">
            <div class="row gy-3 justify-content-center">
                <div class="col-md-6 text-start">
                    <label class="form-label label-text" for="First_name">First Name</label>
                    <input class="form-control" type="text" v-model="userData.First_name" name="First_name" id="First_name"
                        placeholder="Ahmed">
                </div>
                <div class="col-md-6 text-start">
                    <label class="form-label label-text" for="Last_name">Last Name</label>
                    <input class="form-control" type="text" v-model="userData.Last_name" name="Last_name" id="Last_name"
                        placeholder="Mostafa">
                </div>
                <div class="col-md-6 text-start">
                    <label class="form-label label-text" for="Phone_no">Phone Number</label>
                    <input class="form-control" type="text" v-model="userData.Phone_no" name="Phone_no" id="Phone_no"
                        placeholder="2001116002720">
                </div>
                <div class="col-md-6 text-start">
                    <label class="form-label label-text" for="Gender">Gender</label>
                    <select class="form-select" v-model="userData.Gender" name="Gender" id="Gender">
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </div>
                <div class="col-md-6 text-start">
                    <label class="form-label label-text" for="DOB">Date Of Birth</label>
                    <input class="form-control" type="date" v-model="userData.DOB" name="DOB" id="DOB">
                </div>
                <div class="col-md-6 text-start">
                    <label class="form-label label-text" for="Email">Email</label>
                    <input class="form-control" type="text" v-model="userData.Email" name="Email" id="Email"
                        placeholder="example@example.com">
                </div>
                <div class="col-md-6 text-start">
                    <label class="form-label label-text" for="Password">Password</label>
                    <div class="d-flex flex-column text-start mb-2">
                        <div class="d-flex align-items-center">
                            <input class="form-control myInput" :type="inputType" v-model="userData.Password"
                                name="Password" id="Password" placeholder="#########">
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
                <div class="col-md-6 text-start">
                    <label class="form-label label-text" for="Confirm-Password">Confirm Password</label>
                    <div class="d-flex align-items-center">
                        <input class="form-control myInput" :type="inputType" name="Confirm-Password" id="Confirm-Password"
                            placeholder="#########">
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
                <div class="confirm d-flex justify-content-between align-items-center">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="checkTerms" id="flexCheckDefault">
                        <label class="form-check-label" for="flexCheckDefault">
                            agree on terms and conditions
                        </label>
                    </div>
                    <div>
                        <button class="signup-btn" type="submit">Signup</button>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: "FormCustomerComponent",
    data() {
        return {
            inputType: 'password',
            eyeFlag: true,
            eyeSlashFlag: false,
            userData: {
                First_name: "",
                Last_name: "",
                Phone_no: "",
                Gender: "",
                DOB: "",
                Email: "",
                Password: "",
            }
        }
    },
    methods: {
        // start of eye icon logic
        triggerEye() {
            this.eyeFlag = !this.eyeFlag;
            this.eyeSlashFlag = !this.eyeSlashFlag;
            this.inputType = "text";
        },
        triggerEyeSlash() {
            this.eyeSlashFlag = !this.eyeSlashFlag;
            this.eyeFlag = !this.eyeFlag;
            this.inputType = "password";
        },
        // end of eye icon logic
        async signup() {
            await axios.post("http://localhost:2000/cx", this.userData);
            localStorage.setItem("cxInfo", JSON.stringify(this.userData));
            this.$router.push("/");
        },
    }
}
</script>

<style lang="scss" scoped>
.eye-icon {
    cursor: pointer;
}
</style>