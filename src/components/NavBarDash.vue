<template>
  <div class="header" id="header">
    <div class="container">
      <sideBarPage />
      <router-link to="#" class="logo"><a>Awon</a></router-link>

      <form class="search">
        <input class="search" type="search" />
      </form>
      <img src="../assets/images/2.jpg" alt="Cx" />
    </div>
  </div>
</template>

<script>
import SideBarPage from "./SideBarPage.vue";
export default {
  name: "NavBarDash",
  components: {
    SideBarPage,
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/global/colors";
.header {
  background-color: $blueColor;
  position: relative;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    position: relative;
    width: 100%;
  }
  .logo {
    color: $whiteColor;
    font-size: 26px;
    font-weight: bold;
    height: 72px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img {
    clip-path: circle();
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & input.search {
    border: 2px solid $orangeColor;
    border-radius: 28px;
    width: 350px;
    padding: 9px 4px 9px 40px;
    background: $backgroundColor
      url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='orange' width='16' height='16' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'%3E%3C/path%3E%3C/svg%3E")
      no-repeat 13px center;
    &:focus {
      border-color: $orangeColor;
      outline: none;
    }
  }
}

a {
  text-decoration: none;
}

@media (min-width: 374.9999px) and (max-width: 767.9999px) {
  .header {
    .logo {
      width: 20%;
    }
img{
margin: auto;
}
    input.search {
      width:100%;
    }
  }
}
// @media (min-width: 992px) {
//   .container {
//     width: 970px;
//   }
// }
// @media (min-width: 1200px) {
//   .container {
//     width: 1170px;
//   }
// }
// @media (max-width: 767px) {
//   .header {
//     .logo {
//       width: 100%;
//       height: 50px;
//     }
//   }
//   }
</style>
