<template>
    <div class="container">
        <div class="text-center w-100 d-flex justify-content-center mt-5 align-items-center">
            <p class="btn-login-text py-2">Agency Details</p>
        </div>
        <div class="row gy-3">
            <div class="col-sm-6 col-6 text-start">
                <label class="form-label label-text fs-media-6" for="Agency_Name">Name</label>
                <input class="form-control" type="text" v-model="agencyData.Agency_Name" name="Agency_Name" id="Agency_Name"
                    placeholder="bokbok agency">
            </div>
            <div class="col-sm-6 col-6 text-start">
                <label class="form-label label-text fs-media-6" for="Agency_Email">Email</label>
                <input class="form-control" type="text" v-model="agencyData.Agency_Email" name="Agency_Email" id="Agency_Email"
                    placeholder="example@example.com">
            </div>
            <div class="col-sm-6 col-6 text-start">
                <label class="form-label label-text fs-media-6" for="Agency_Phone_no">Phone Number 1</label>
                <input class="form-control" type="text" v-model="agencyData.Agency_Phone_no" name="Agency_Phone_no"
                    id="Agency_Phone_no" placeholder="2001116002720">
            </div>
            <div class="col-sm-6 col-6 text-start">
                <label class="form-label label-text fs-media-6" for="Agency_Phone_no2">Phone Number 2</label>
                <input class="form-control" type="text" v-model="agencyData.Agency_Phone_no2" name="Agency_Phone_no2"
                    id="Agency_Phone_no2" placeholder="2001116002720">
            </div>
            <div class="col-sm-6 col-6 text-start">
                <label class="form-label label-text fs-media-6" for="Agency_PostCode">Post Code</label>
                <input class="form-control" type="text" v-model="agencyData.Agency_PostCode" name="Agency_PostCode"
                    id="Agency_PostCode" placeholder="1234">
            </div>
            <div class="col-md-6 col-sm-12 col-12 text-start">
                <label class="form-label label-text fs-media-6" for="Agency_Governorate">Governorate</label>
                <select v-model="agencyData.Agency_Governorate" name="Agency_Governorate" id="Agency_Governorate" class="form-select">
                    <option value="" selected disabled>Select</option>
                    <option value="Alexandria">Alexandria</option>
                    <option value="Aswan">Aswan</option>
                    <option value="Asyut">Asyut</option>
                    <option value="Beheira">Beheira</option>
                    <option value="Beni Suef">Beni Suef</option>
                    <option value="Cairo">Cairo</option>
                    <option value="Dakahlia">Dakahlia</option>
                    <option value="Damietta">Damietta</option>
                    <option value="Faiyum">Faiyum</option>
                    <option value="Gharbia">Gharbia</option>
                    <option value="Giza">Giza</option>
                    <option value="Ismailia">Ismailia</option>
                    <option value="Kafr El Sheikh">Kafr El Sheikh</option>
                    <option value="Luxor">Luxor</option>
                    <option value="Matrouh">Matrouh</option>
                    <option value="Minya">Minya</option>
                    <option value="Monufia">Monufia</option>
                    <option value="New Valley">New Valley</option>
                    <option value="Port Said">Port Said</option>
                    <option value="Qalyubia">Qalyubia</option>
                    <option value="Qena">Qena</option>
                    <option value="Red Sea">Red Sea</option>
                    <option value="Sharqia">Sharqia</option>
                    <option value="Sohag">Sohag</option>
                    <option value="South Sinai">South Sinai</option>
                    <option value="Suez">Suez</option>
                </select>
            </div>
            <div class="col-sm-6 col-6 text-start">
                <label class="form-label label-text fs-media-6" for="Agency_City">City</label>
                <input class="form-control" type="text" v-model="agencyData.Agency_City" name="Agency_City" id="Agency_City"
                    placeholder="dokki">
            </div>
            <div class="col-md-6 col-sm-12 col-12 text-start">
                <label class="form-label label-text fs-media-6" for="Agency_Address">Address</label>
                <input class="form-control" type="text" v-model="agencyData.Agency_Address" name="Agency_Address" id="Agency_Address"
                    placeholder="156st elmesaha">
            </div>
            <div class="col-md-6 col-sm-12 col-12 text-start" title="path of image on drive">
                <label for="trade_register_card" class="form-label label-text fs-media-6">commercial card ID</label>
                <input class="form-control" type="text" v-model="trade_register_cardSrc" name="trade_register_card"
                    id="trade_register_card" placeholder="path of image on drive">
            </div>
            <div class="col-md-6 col-sm-12 col-12 text-start" title="path of image on drive">
                <label class="form-label label-text fs-media-6" for="Logo">Agency Logo</label>
                <input class="form-control" type="text" v-model="logoSrc" name="Logo" id="Logo"
                    placeholder="path of image on drive">
            </div>
        </div>
        <div class="text-center w-100 d-flex justify-content-center mt-5 align-items-center">
            <p class="btn-login-text py-2">Agency’s Owner Details</p>
        </div>
        <div class="row gy-3 align-items-end">
            <div class="col-sm-6 col-6 text-start">
                <label class="form-label label-text fs-media-6" for="Owner_First_name">First Name</label>
                <input class="form-control" type="text" v-model="agencyData.Owner_First_name" name="Owner_First_name"
                    id="Owner_First_name" placeholder="ahmed">
            </div>
            <div class="col-sm-6 col-6 text-start">
                <label class="form-label label-text fs-media-6" for="Owner_last_name">Last Name</label>
                <input class="form-control" type="text" v-model="agencyData.Owner_last_name" name="Owner_last_name"
                    id="Owner_last_name" placeholder="mostafa">
            </div>
            <div class="col-sm-6 col-6 text-start">
                <label class="form-label label-text fs-media-6" for="Email">Email</label>
                <input class="form-control" type="text" v-model="agencyData.Email" name="Email" id="Email"
                    placeholder="example2@example.com">
            </div>
            <div class="col-sm-6 col-6 text-start">
                <label class="form-label label-text fs-media-6" for="Owner_Phone_no">Phone Number</label>
                <input class="form-control" type="text" v-model="agencyData.Owner_Phone_no" name="Owner_Phone_no" id="Owner_Phone_no"
                    placeholder="2001116002720">
            </div>

            <div class="col-sm-6 col-6 text-start">
                <label class="form-label label-text fs-media-6" for="Owner_DOB">Birth Of Date</label>
                <input class="form-control" type="date" v-model="agencyData.Owner_DOB" name="Owner_DOB" id="Owner_DOB">
            </div>
            <div class="col-sm-6 col-6 text-start" title="path of image on drive">
                <label class="form-label label-text fs-media-6" for="Owner_front_nid">Front National card ID</label>
                <input class="form-control" type="text" v-model="Owner_front_nidSrc" name="Owner_front_nid"
                    id="Owner_front_nid" placeholder="path of image on drive">
            </div>
            <div class="col-sm-6 col-6 text-start">
                <div class="d-flex flex-column text-start">
                    <label class="form-label label-text fs-media-6" for="owner_Password">Password</label>
                    <div class="d-flex align-items-center">
                        <input class="form-control myInput" :type="inputType" v-model="agencyData.owner_Password" name="owner_Password"
                            id="owner_Password" placeholder="#########">
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
            <div class="col-sm-6 col-6 text-start" title="path of image on drive">
                <label class="form-label label-text fs-media-6" for="Owner_back_nid">Back National card ID</label>
                <input class="form-control" type="text" v-model="Owner_back_nidSrc" name="Owner_back_nid"
                    id="Owner_back_nid" placeholder="path of image on drive">
            </div>
            <div class="col-sm-6 col-6 text-start">
                <!-- <input class="form-control" type="text" name="owner-Confirm Password" id="owner-Confirm Password"> -->
                <div class="d-flex flex-column text-start">
                    <label class="form-label label-text fs-media-6" for="owner-Confirm-Password">Confirm Password</label>
                    <div class="d-flex align-items-center">
                        <input class="form-control myInput" :type="inputType" name="owner-Confirm-Password"
                            id="owner-Confirm-Password" placeholder="#########">
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
            <div class="col-sm-6 col-6">
                <div class="confirm d-flex justify-content-between align-items-center">
                    <div class="form-check">
                        <input class="form-check-input check-sec" type="checkbox" value="" name="owner_check_terms"
                            id="owner_check_terms">
                        <!-- Button trigger modal -->
                        <label class="form-check-label check-sec text-decoration-underline" data-bs-toggle="modal"
                            data-bs-target="#exampleModal">
                            agree on terms and conditions
                        </label>

                        <!-- Modal -->
                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                            aria-hidden="true">
                            <div class="modal-dialog modal-dialog-scrollable">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="exampleModalLabel">Awon</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body text-start">
                                        <h2 class="text-center">Welcome to Awon!</h2>

                                        Awon is an online platform that connects users with a wide range of services, such
                                        as house cleaning, babysitting, cooking, and more. The platform allows users to
                                        easily find and book qualified and trusted service providers in their area. Awon is
                                        the perfect solution for anyone who is looking for a convenient and reliable way to
                                        find and book high-quality services.

                                        These terms and conditions (the "Terms") govern your use of the Awon website (the
                                        "Website") and the services offered through the Website (the "Services"). By using
                                        the Website or the Services, you agree to be bound by these Terms. If you do not
                                        agree to these Terms, please do not use the Website or the Services.

                                        1. Definitions

                                        "Awon" means Awon, Inc., a corporation incorporated in Egypt.
                                        "Customer" means any individual or entity that uses the Website or the Services.
                                        "Provider" means any individual or entity that provides services through the
                                        Website.
                                        "Services" means the services offered through the Website, such as house cleaning,
                                        babysitting, cooking, and more.
                                        /*"Website" means the Awon website located at https://www.awon.org/the-website.*/
                                        2. Use of the Website and Services

                                        You must be at least 18 years of age to use the Website or the Services.
                                        You must create an account on the Website in order to use the Services.
                                        You agree to use the Website and the Services in accordance with these Terms and all
                                        applicable laws and regulations.
                                        You agree not to use the Website or the Services for any unlawful or unauthorized
                                        purpose.
                                        3. Provider Qualifications

                                        All Providers on the Awon platform are subject to a rigorous screening process.
                                        Awon requires all Providers to undergo a background check and to provide references.
                                        Awon also requires all Providers to have the necessary skills and experience to
                                        provide the services they offer.
                                        4. Booking Services

                                        To book a service, you must create an account on the Website and provide your
                                        contact information.
                                        Once you have created an account, you can browse the list of Providers and select
                                        the Provider that you would like to book.
                                        Once you have selected a Provider, you will be able to see their availability and
                                        book a service.
                                        You will be required to pay for the service in advance.
                                        5. Payment

                                        All payments for services are processed through the Awon website.
                                        Awon accepts all major credit cards.
                                        You will be required to pay for the service in full before the Provider arrives.
                                        6. Cancellations and Refunds

                                        You may cancel a booking at any time, but you may be subject to a cancellation fee.
                                        You may request a refund if the Provider does not arrive on time or if the Provider
                                        does not meet your expectations.
                                        All refund requests will be reviewed by Awon on a case-by-case basis.
                                        7. Disclaimer of Warranties

                                        Awon disclaims all warranties, express or implied, with respect to the Website and
                                        the Services, including but not limited to any warranties of merchantability,
                                        fitness for a particular purpose, and title.
                                        Awon does not warrant that the Website or the Services will be available,
                                        uninterrupted, secure, or error-free.
                                        8. Limitation of Liability

                                        To the fullest extent permitted by law, Awon shall not be liable for any direct,
                                        indirect, incidental, special, or consequential damages arising out of or in
                                        connection with your use of the Website or the Services.
                                        9. Governing Law

                                        These Terms and your use of the Website and the Services shall be governed by and
                                        construed in accordance with the laws of the State of California, without regard to
                                        its conflict of law provisions.
                                        10. Entire Agreement

                                        These Terms constitute the entire agreement between you and Awon with respect to
                                        your use of the Website and the Services.
                                        11. Severability

                                        If any provision of these Terms is held to be invalid or unenforceable, such
                                        provision shall be struck from these Terms and the remaining provisions shall remain
                                        in full force and effect.
                                        12. Changes to the Terms

                                        Awon reserves the right to change these Terms at any time. Any changes to these
                                        Terms will be posted on the Website. Your continued use of the Website or the
                                        Services after any changes to these Terms
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary"
                                            data-bs-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
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
import axios from 'axios';
// import useVuelidate from '@vuelidate/core';
// import { required, email } from '@vuelidate/validators';
export default {
    name: "FormAgencyComponent",
    data() {
        return {
            // v$: useVuelidate(),
            inputType: 'password',
            eyeFlag: true,
            eyeSlashFlag: false,
            logoSrc: "",
            trade_register_cardSrc: "",
            Owner_front_nidSrc: "",
            Owner_back_nidSrc: "",
            agencyData: {
                Agency_Name: "",
                Agency_Email: "",
                Agency_Phone_no: "",
                Agency_Phone_no2: "",
                Agency_PostCode: "",
                Agency_Governorate: "",
                Agency_City: "",
                Agency_Address: "",
                Logo: "",
                trade_register_card: "",
                Owner_First_name: "",
                Owner_last_name: "",
                Email: "",
                Owner_Phone_no: "",
                Owner_DOB: "",
                Owner_front_nid: "",
                Owner_back_nid: "",
                owner_Password: '',
            },
        }
    },
    // validations() {
    //     return {
    //         Email: { required, email },
    //         owner_Password: { required },
    //         // owner_Password: { required }
    //     }
    // },
    methods: {
        // getImageIdFromGoogleDriveLink(link) {
        //     if (link.startsWith("https://drive.google.com/file/d/") && link.endsWith("/view?usp=drive_link")) {
        //         const linkParts = link.split("/");
        //         const imageId = linkParts[linkParts.length - 2];
        //         return imageId;
        //     } else {
        //         return link;
        //     }

        // },
        // imgDriveHandle(key, val) {
        //     key = "https://drive.google.com/uc?export=view&id=" + this.getImageIdFromGoogleDriveLink(val);
        //     return key;
        // },
        imgDriveHandle(link) {
            if (link.startsWith("https://drive.google.com/file/d/") && link.endsWith("/view?usp=drive_link")) {
                const linkParts = link.split("/");
                const imageId = linkParts[linkParts.length - 2];
                const finalVal = "https://drive.google.com/uc?export=view&id=" + imageId;
                return finalVal;
            } else {
                return link;
            }
        },
        async submitData() {
            this.agencyData.Logo = this.imgDriveHandle(this.logoSrc);
            this.agencyData.trade_register_card = this.imgDriveHandle(this.trade_register_cardSrc);
            this.agencyData.Owner_front_nid = this.imgDriveHandle(this.Owner_front_nidSrc);
            this.agencyData.Owner_back_nid = this.imgDriveHandle(this.Owner_back_nidSrc);
            // this.v$.$validate();
            // if (!this.v$.$error) {
            //     console.log('ok');
            // } else {
            //     console.log('cannot');
            // }
            await axios.post("http://localhost:2000/agency", this.agencyData);
            localStorage.setItem("agInfo", JSON.stringify(this.agencyData));
            this.$router.push("/");
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