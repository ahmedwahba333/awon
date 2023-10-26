<template>
    <div class="container">
        <div class="row gy-3 justify-content-center">
            <div class="col-md-6 text-start">
                <label class="form-label label-text" for="name">Name</label>
                <input class="form-control" type="text" name="name" id="name">
            </div>
            <div class="col-md-6 text-start">
                <label class="form-label label-text" for="phone-number">Phone Number</label>
                <input class="form-control" type="text" name="phone-number" id="phone-number">
            </div>
            <div class="col-md-6 text-start">
                <label class="form-label label-text" for="date of birth">Date Of Birth</label>
                <input class="form-control" type="date" name="date of birth" id="date of birth">
            </div>
            <div class="col-md-6 text-start">
                <label class="form-label label-text" for="email">Email</label>
                <input class="form-control" type="text" name="email" id="email">
            </div>
            <div class="col-md-6 text-start">
                <label class="form-label label-text" for="Password">Password</label>
                <input class="form-control" type="text" name="Password" id="Password">
            </div>
            <div class="col-md-6 text-start">
                <label class="form-label label-text" for="Confirm Password">Confirm Password</label>
                <input class="form-control" type="text" name="Confirm Password" id="Confirm Password">
            </div>
            <div class="confirm d-flex justify-content-between align-items-center">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                    <label class="form-check-label" for="flexCheckDefault">
                        agree on terms and conditions
                    </label>
                </div>
                <div>
                   <router-link to="login"><button class="signup-btn">Signup</button></router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "FormCustomerComponent",
}
</script>

<style lang="scss" scoped></style>