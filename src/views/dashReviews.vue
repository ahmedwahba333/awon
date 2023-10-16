<template>
    <NavBarDash/>
    <div class="bg">
        
    </div>
</template>

<script>
import NavBarDash from "@/components/NavBarDash.vue";

export default {
    name: "dashReviews",
    components: {
    NavBarDash,
    }
}


</script>
<style lang="scss" scoped>
    @import "../scss/global/colors";
    @import "../scss/global/variables";

.bg{
    background-color: $backgroundColor;
}
</style>