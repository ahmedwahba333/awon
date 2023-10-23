<template>
    <div class="login-main">
        <div class="d-flex justify-content-center align-items-center py-5">
            <div class="text-center">
                <figure>
                    <img class="logo-img" src="../../../../assets/images/logo.jpg" alt="">
                </figure>
                <div class="myCon">
                    <router-link to="/" class="title-heading">Awon</router-link>
                    <p class="title-slogin">Awon, your help is everywhere</p>
                    <p class="btn-login-text py-2">sign up as a..</p>
                </div>
                <BoxeschooseComponent />
            </div>
        </div>
        <FooterComponent />
    </div>
</template>

<script>
import FooterComponent from '@/components/footer.vue';
import BoxeschooseComponent from '@/components/auth/user_auth/user_signup/Boxeschoose.vue';
export default {
    name: 'SignupComponent',
    components: { FooterComponent, BoxeschooseComponent },
}
</script>

<style lang="scss">
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
    }

    .btn-login-text {
        background-color: $blueColor;
        color: $whiteColor;
        border-radius: $border-radius-big;
        width: 316px;
        font-size: $subTitle;
    }

    .label-text {
        color: $blueColor;
        font-size: $subTitle;
        font-weight: bold;
    }

    .btn-login {
        @include button;
    }
}
</style>