<template>
    <div class="login-main">
        <div class="d-flex justify-content-center align-items-center py-5">
            <div class="text-center">
                <figure>
                    <img class="logo-img" src="../../../assets/images/logo.jpg" alt="">
                </figure>
                <div class="myCon">
                    <p class="title-heading">Awon</p>
                    <p class="title-slogin">Awon, your help is everywhere</p>
                    <p class="btn-login-text py-2">Reset Password</p>
                    <div class="forget-pass my-2">
                        <router-link to="login">Login
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-arrow-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                            </svg>
                        </router-link>
                    </div>
                </div>
                <form>
                    <div class="d-flex flex-column text-start mb-2">
                        <label class="form-label label-text" for="email">Enter Confirmation Code</label>
                        <input class="form-control myInput" type="text" name="email" id="email">
                    </div>
                </form>
                <div>
                    <router-link to="setup-password"><button class="btn-login">confirm code</button></router-link>
                </div>
            </div>
        </div>
        <FooterComponent />
    </div>
</template>

<script>
import FooterComponent from '@/components/footer.vue';
export default {
    name: 'ResetComponent',
    components: { FooterComponent },
}
</script>

<style lang="scss" scoped>
@import "../../../scss/global/colors";
@import "../../../scss/global/variables";

.login-main {
    background-image: url('../../../assets/images/background.png');
    background-color: $backgroundColor;

    .title-heading {
        font-size: $title;
        font-weight: bold;
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