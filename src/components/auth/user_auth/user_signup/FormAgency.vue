<template>
    <div class="container">
        <div class="text-center w-100 d-flex justify-content-center mt-5 align-items-center">
            <p class="btn-login-text py-2">Agency Details</p>
        </div>
        <div class="row gy-3">
            <div class="col-sm-6 col-6 text-start">
                <label class="form-label label-text fs-media-6" for="name">Name</label>
                <input class="form-control" type="text" name="name" id="name">
            </div>
            <div class="col-sm-6 col-6 text-start">
                <label class="form-label label-text fs-media-6" for="email">Email</label>
                <input class="form-control" type="text" name="email" id="email">
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
                <label class="form-label label-text fs-media-6" for="post-code">Post Code</label>
                <input class="form-control" type="text" name="post-code" id="post-code">
            </div>
            <div class="col-sm-6 col-6 text-start">
                <label class="form-label label-text fs-media-6" for="country">Country</label>
                <input class="form-control" type="text" name="country" id="country">
            </div>
            <div class="col-md-6 col-sm-12 col-12 text-start">
                <label class="form-label label-text fs-media-6" for="governorate">Governorate</label>
                <input class="form-control" type="text" name="governorate" id="governorate">
            </div>
            <div class="col-md-6 col-sm-12 col-12 text-start">
                <label class="form-label label-text fs-media-6" for="address">Address</label>
                <input class="form-control" type="text" name="address" id="address">
            </div>
            <div class="col-md-6 col-sm-12 col-12 text-start">
                <label for="idfront" class="form-label label-text fs-media-6">Front commercial card ID</label>
                <input class="form-control" type="file" id="idfront">
            </div>
            <div class="col-md-6 col-sm-12 col-12 text-start">
                <label for="idback" class="form-label label-text fs-media-6">Back commercial card ID</label>
                <input class="form-control" type="file" id="idback">
            </div>
        </div>
        <div class="text-center w-100 d-flex justify-content-center mt-5 align-items-center">
            <p class="btn-login-text py-2">Agency’s Owner Details</p>
        </div>
        <div class="row gy-3 justify-content-center align-items-end">
            <div class="col-sm-6 col-6 text-start">
                <label class="form-label label-text fs-media-6" for="owner-name">Name</label>
                <input class="form-control" type="text" name="owner-name" id="owner-name">
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
            <div class="col-sm-6 col-6 text-start">
                <label class="form-label label-text fs-media-6" for="owner-national-id">National ID</label>
                <input class="form-control" type="text" name="owner-national-id" id="owner-national-id">
            </div>
            <div class="col-md-6 col-sm-12 col-12 text-start">
                <label for="owner-idfront" class="form-label label-text fs-media-6">Front National card ID</label>
                <input class="form-control" type="file" id="owner-idfront">
            </div>
            <div class="col-md-6 col-sm-12 col-12 text-start">
                <label for="owner-idback" class="form-label label-text fs-media-6">Back National card ID</label>
                <input class="form-control" type="file" id="owner-idback">
            </div>
            <div class="col-md-6 col-sm-12 col-12 text-start">
                <label class="form-label label-text fs-media-6" for="owner-Password">Password</label>
                <input class="form-control" type="text" name="owner-Password" id="owner-Password">
            </div>
            <div class="col-md-6 col-sm-12 col-12 text-start">
                <label class="form-label label-text fs-media-6" for="owner-Confirm Password">Confirm Password</label>
                <input class="form-control" type="text" name="owner-Confirm Password" id="owner-Confirm Password">
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
                        <router-link to="agancydash"><button class="signup-btn">Signup</button></router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "FormAgencyComponent",
}
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 996px) {
    .fs-media-6 {
        font-size: 16px !important;
    }
}
</style>