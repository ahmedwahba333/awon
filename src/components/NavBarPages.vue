<template>
  <div class="header" id="header">
    <div class="container">
      <router-link to="#" class="logo"><a>Awon</a></router-link>
      <ul class="mainNav">
        <li>
          <router-link to="#Home"><a>Home</a></router-link>
        </li>
        <li>
          <router-link to="#Services"><a>Services</a></router-link>
          <div class="mega-menu">
            <ul class="links">
              <ul>
                <span>House Keeping</span>
                <li>
                  <router-link to="#HouseKeeping"><a>Cleaning</a></router-link>
                </li>
                <li>
                  <router-link to="#HouseKeeping"><a>Gardening</a></router-link>
                </li>
              </ul>
              <ul>
                <span>Giving</span>
                <li>
                  <router-link to="#CareGiving"
                    ><a>Baby sitting</a></router-link
                  >
                </li>
                <li>
                  <router-link to="#CareGiving"
                    ><a>Elderly care</a></router-link
                  >
                </li>
                <li>
                  <router-link to="#CareGiving"
                    ><a>Home nursing</a></router-link
                  >
                </li>
              </ul>
              <ul>
                <span>Food Services</span>
                <li>
                  <router-link to="#FoodServices"
                    ><a>Food Catering</a></router-link
                  >
                </li>
                <li>
                  <router-link to="#FoodServices"><a>Chefs</a></router-link>
                </li>
              </ul>
              <ul>
                <span>House Maintenance</span>
                <li>
                  <router-link to="#HouseMaintenance"
                    ><a>Plumbing</a></router-link
                  >
                </li>
                <li>
                  <router-link to="#HouseMaintenance"
                    ><a>Carpentry</a></router-link
                  >
                </li>
                <li>
                  <router-link to="#HouseMaintenance"
                    ><a>Moving Furniture</a></router-link
                  >
                </li>
              </ul>
              <ul>
                <span>Facilities</span>
                <li>
                  <router-link to="#Facilities"><a>House Guard</a></router-link>
                </li>
                <li>
                  <router-link to="#Facilities"><a>Driver</a></router-link>
                </li>
              </ul>
            </ul>
          </div>
        </li>
        <li>
          <router-link to="#Workers"><a>Workers</a></router-link>
        </li>
        <li>
          <router-link to="#About Us"><a>About Us</a></router-link>
        </li>
        <li>
          <router-link to="#Contact Us"><a>Contact Us</a></router-link>
        </li>
        <div class="image">
          <img src="../assets/images/2.jpg" alt="Cx" />
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBarPages",
};
</script>

<style lang="scss" scoped>
@import "../scss/global/colors";
a {
  text-decoration: none;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
// .container {
//   padding-left: 15px;
//   padding-right: 15px;
//   margin-left: auto;
//   margin-right: auto;
// }

.header {
  background-color: $blueColor;
  position: relative;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    position: relative;
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
  .image {
    img {
      clip-path: circle();
      height: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .mainNav {
    display: flex;

    > li {
      &:hover {
        .mega-menu {
          opacity: 1;
          z-index: 100;
          top: calc(100% + 1px);
        }
      }
      > a {
        align-items: center;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 72px;
        position: relative;
        color: $whiteColor;
        padding: 0 30px;
        overflow: hidden;
        font-size: 20px;
        transition: var(--main-transition);
        &::before {
          content: "";
          position: absolute;
          width: 100%;
          height: 4px;
          background-color: $orangeColor;
          top: 0;
          left: -100%;
          transition: var(--main-transition);
        }
        &:hover {
          color: $blueColor;
          background-color: $backgroundColor;
          &::before {
            left: 0;
          }
        }
      }
    }
  }
  .mega-menu {
    position: absolute;
    width: 20%;
    left: 50;
    padding: 15px;
    background-color: $backgroundColor;
    border-bottom: 3px solid $blueColor;
    z-index: -1;
    display: flex;
    gap: 15px;
    top: calc(100% + 50px);
    opacity: 0;
    transition: top var(--main-transition), opacity var(--main-transition);

    .links {
      min-width: 100px;
      flex: 1;
      span {
        color: $blueColor;
        padding: 2px;
        display: block;
        font-size: 18px;
        font-weight: bold;
        text-align: left;
        border-bottom: 1px solid $orangeColor;
      }
      li {
        position: relative;
        &:not(:last-child) {
          // border-bottom: 1px solid $blueColor;
        }
        &::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          width: 0;
          height: 100%;
          background-color: $whiteColor;
          z-index: -1;
          transition: var(--main-transition);
        }
        &:hover {
          &::before {
            width: 100%;
          }
        }

        a {
          color: $blueColor;
          padding: 2px;
          display: block;
          font-size: 14px;
          font-weight: bold;
          text-align: left;
        }
      }
    }
  }
}
@media (min-width: 375px) {
  .container {
    width: 360px;
  }
}
@media (min-width: 576px) {
  .container {
    width: 570px;
  }
}
@media (min-width: 768px) {
  .container {
    width: 720px;
  }
}
@media (min-width: 992px) {
  .container {
    width: 960px;
  }
}
@media (min-width: 1200px) {
  .container {
    width: 1140px;
  }
}
@media (min-width: 1400px) {
  .container {
    width: 1320px;
  }
}
@media (max-width: 767px) {
  .header {
    .logo {
      width: 100%;
      height: 50px;
    }
    .main-nav {
      margin: auto;
      > li {
        > a {
          padding: 10px;
          font-size: 14px;
          height: 40px;
        }
      }
    }
    .mega-menu {
      flex-direction: column;
      gap: 0;
      padding: 5px;
      .links {
        &:first-of-type {
          li {
            &:last-child {
              border-bottom: 1px solid $backgroundColor;
            }
          }
        }
      }
    }
  }
}
</style>