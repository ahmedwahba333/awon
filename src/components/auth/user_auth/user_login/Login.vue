<template>
    <div class="login-main">
        <div class="d-flex justify-content-center align-items-center py-5">
            <div class="text-center">
                <figure>
                    <img class="logo-img" src="../../../../assets/images/logo.jpg" alt="">
                    <!-- https://drive.google.com/file/d/1elgLJgasuBtUMk56bf-tdRUR8K8JiW8Y/view?usp=sharing -->
                    <!-- <img :src="imgSrc" alt="Image description" v-if="imgSrc != ''"> -->
                    <!-- <router-link to="/" class="title-heading">Awon</router-link> -->
                </figure>
                <div class="myCon">
                    <router-link to="/" class="title-heading">Awon</router-link>
                    <!-- <input type="text" v-model="img">
                    <button @click="imgHandle()">submit</button> -->



                    <p class="title-slogin">Awon, your help is everywhere</p>
                    <p class="btn-login-text py-2">login</p>
                    <div class="forget-pass my-2">
                        <router-link to="signup">don’t have an account..?
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-arrow-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                            </svg>
                        </router-link>
                    </div>
                </div>
                <form @submit="prevent">
                    <div class="d-flex flex-column text-start mb-2">
                        <label class="form-label label-text" for="email">Email</label>
                        <input class="form-control myInput" v-model="email" type="text" name="email" id="email">
                    </div>
                    <div class="d-flex flex-column text-start mb-2">
                        <label class="form-label label-text" for="password">Password</label>
                        <div class="d-flex align-items-center">
                            <input class="form-control myInput" v-model="pass" :type="inputType" name="password"
                                id="password">
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
                </form>
                <div>
                    <div class="forget-pass my-2">
                        <router-link to="reset-password">forget your password
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-arrow-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                            </svg>
                        </router-link>
                    </div>
                    <button type="submit" class="btn-login" @click="submitData">login</button>
                </div>
            </div>
        </div>
        <FooterComponent />
    </div>
</template>

<script>
import FooterComponent from '@/components/footer.vue';
import useVuelidate from '@vuelidate/core';
import { required, email } from '@vuelidate/validators';
import axios from 'axios';
export default {
    name: 'LoginComponent',
    components: { FooterComponent },
    data() {
        return {
            v$: useVuelidate(),
            email: '',
            pass: '',
            inputType: 'password',
            eyeFlag: true,
            eyeSlashFlag: false,
            users: [],
            agencies: [],
        }
    },
    validations() {
        return {
            email: { required, email },
            pass: { required }
        }
    },
    created() {
        axios.get("http://localhost:2000/cx").then((res) => {
            this.users = res.data;
        }).then(
            axios.get("http://localhost:2000/agency").then((res) => {
                this.agencies = res.data;
            })).catch((err) => {
                console.log(err);
            })
    },
    methods: {
        //     getImageIdFromGoogleDriveLink(link) {
        //         const linkParts = link.split("/");
        //         const imageId = linkParts[linkParts.length - 2];
        //         return imageId;
        //     },
        //     imgHandle() {
        //         this.imgSrc = "https://drive.google.com/uc?export=view&id=" + this.getImageIdFromGoogleDriveLink(this.img);
        //     }
        checkUser() {
            for (let i = 0; i < this.users.length; i++) {
                if (this.email == this.users[i]['Email'] && this.pass == this.users[i]['Password']) {
                    localStorage.setItem("cxInfo", JSON.stringify(this.users[i]))
                    this.$router.push('/');
                    break;
                }else if (this.email == this.agencies[i]['Email'] && this.pass == this.agencies[i]['owner_Password']) {
                    localStorage.setItem("agInfo", JSON.stringify(this.agencies[i]))
                    this.$router.push('/agancydash');
                    break;
                }
            }
        },
        submitData() {
            this.v$.$validate();
            if (!this.v$.$error) {
            this.checkUser();
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
@import "../../../../scss/global/colors";
@import "../../../../scss/global/variables";

.login-main {
    background-image: url('../../../../assets/images/background.png');
    background-color: $backgroundColor;

    .eye-icon {
        cursor: pointer;
    }

    .title-heading {
        font-size: $title;
        font-weight: bold;
        text-decoration: none;
        color: $blueColor;
    }

    .title-slogin {
        font-size: $subTitle;
    }

    .logo-img {
        width: 200px;
        border-radius: 50%;
    }

    .myInput {
        width: 60vw;
    }

    .myCon {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .btn-login-text {
            background-color: $blueColor;
            color: $whiteColor;
            border-radius: $border-radius-big;
            width: 316px;
            font-size: $subTitle;
        }
    }

    .label-text {
        color: $blueColor;
        font-size: $subTitle;
        font-weight: bold;
    }

    .btn-login {
        @include button;
    }

    .forget-pass {
        a {
            text-decoration: none;
            color: $blueColor;
            font-size: $paragraph;
        }
    }
}
</style>