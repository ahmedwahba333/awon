<template>
    <div class="login-main">
        <div class="d-flex justify-content-center align-items-center py-5">
            <div class="text-center">
                <figure>
                    <img class="logo-img" src="../../../assets/images/logo.jpg" alt="">
                </figure>
                <div class="myCon">
                    <router-link to="/" class="title-heading">Awon</router-link>
                    <p class="title-slogin">Awon, your help is everywhere</p>
                    <p class="btn-login-text py-2">Cpanel Signup</p>
                </div>
                <form>
                    <div class="d-flex flex-column text-start mb-2">
                        <label class="form-label label-text" for="email">Email</label>
                        <input class="form-control myInput" type="text" name="email" id="email">
                    </div>
                    <div class="d-flex flex-column text-start mb-2">
                        <label class="form-label label-text" for="adminKey">Admin Key</label>
                        <input class="form-control myInput" type="text" name="adminKey" id="adminKey">
                    </div>
                    <div class="d-flex flex-column text-start mb-2">
                        <label class="form-label label-text" for="password">Password</label>
                        <input class="form-control myInput" type="text" name="password" id="password">
                    </div>
                    <div class="d-flex flex-column text-start mb-2">
                        <label class="form-label label-text" for="confirmPassword">Confirm Password</label>
                        <input class="form-control myInput" type="text" name="confirmPassword" id="confirmPassword">
                    </div>
                </form>
                <div>
                    <router-link to="SADashHome"><button class="btn-login">Signup</button></router-link>
                </div>
            </div>
        </div>
        <FooterComponent />
    </div>
</template>

<script>
import FooterComponent from '@/components/footer.vue';
export default {
    name: 'LoginComponent',
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