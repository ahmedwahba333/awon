<template>
    <div class="login-main">
        <div class="d-flex justify-content-center align-items-center py-5">
            <div class="text-center">
                <figure>
                    <!-- <img class="logo-img" src="../../../../assets/images/logo.jpg" alt=""> -->
                    <!-- https://drive.google.com/file/d/1elgLJgasuBtUMk56bf-tdRUR8K8JiW8Y/view?usp=sharing -->
                    <!-- <img :src="imgSrc" alt="Image description" v-if="imgSrc != ''"> -->
                    <router-link to="/" class="title-heading">Awon</router-link>
                </figure>
                <div class="myCon">
                    <!-- <router-link to="/" class="title-heading">Awon</router-link> -->
                    <!-- <input type="text" v-model="img"> -->
                    <!-- <button @click="imgHandle()">submit</button> -->



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
                        <input class="form-control myInput" type="text" name="email" id="email">
                    </div>
                    <div class="d-flex flex-column text-start mb-2">
                        <label class="form-label label-text" for="password">Password</label>
                        <input class="form-control myInput" type="text" name="password" id="password">
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
                    <button class="btn-login">login</button>
                </div>
            </div>
        </div>
        <FooterComponent />
    </div>
</template>

<script>
import FooterComponent from '@/components/footer.vue';
// import useVuelidate from '@vuelidate/core';
// import { required } from '@vuelidate/validators';
export default {
    name: 'LoginComponent',
    components: { FooterComponent },
    // data() {
    //     return {
    //         imgSrc: '',
    //         img: '',
    //     }
    // },
    // methods: {
    //     getImageIdFromGoogleDriveLink(link) {
    //         const linkParts = link.split("/");
    //         const imageId = linkParts[linkParts.length - 2];
    //         return imageId;
    //     },
    //     imgHandle() {
    //         this.imgSrc = "https://drive.google.com/uc?export=view&id=" + this.getImageIdFromGoogleDriveLink(this.img);
    //     }
    // }
}
</script>

<style lang="scss" scoped>
@import "../../../../scss/global/colors";
@import "../../../../scss/global/variables";

.login-main {
    background-image: url('../../../../assets/images/background.png');
    background-color: $backgroundColor;

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