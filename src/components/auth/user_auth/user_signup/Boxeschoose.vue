<template>
    <div class="choosen">
        <button :class="{ active: isActiveCustomer }" class="btn-choosen" @click="triggerCustomer">Customer</button>
        <button :class="{ active: isActiveAgency }" class="btn-choosen" @click="triggerAgency">Agency</button>
    </div>
    <div class="forget-pass my-2">
        <router-link to="login">have an account..?
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right"
                viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
            </svg>
        </router-link>
    </div>
    <FormCustomerComponent v-if="customerflag" />
    <FormAgencyComponent v-if="agencyflag" />
</template>

<script>
import FormCustomerComponent from "./FormCustomer.vue";
import FormAgencyComponent from "./FormAgency.vue";
export default {
    name: 'BoxeschooseComponent',
    components: { FormCustomerComponent, FormAgencyComponent },
    data() {
        return {
            customerflag: false,
            agencyflag: false,
            isActiveCustomer: false,
            isActiveAgency: false,
        }
    },
    methods: {
        triggerCustomer() {
            this.customerflag = !this.customerflag;
            this.agencyflag = false;
            this.isActiveCustomer = !this.isActiveCustomer;
            this.isActiveAgency = false;
        },
        triggerAgency() {
            this.agencyflag = !this.agencyflag;
            this.customerflag = false;
            this.isActiveAgency = !this.isActiveAgency;
            this.isActiveCustomer = false;
        }
    }
}
</script>

<style lang="scss">
@import "../../../../scss/global/colors";
@import "../../../../scss/global/variables";

.btn-choosen {
    @include button;
    width: 316px;
    height: 105px;
}
.signup-btn{
    @include button;
    margin: 0;
}

.active {
    background-color: $darkOrange;
    border: 0px;
    color: $whiteColor;
}

.forget-pass {
    a {
        text-decoration: none;
        color: $blueColor;
        font-size: $paragraph;
    }
}
</style>