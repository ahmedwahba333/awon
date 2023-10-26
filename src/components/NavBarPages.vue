<template>
  <div class="header" id="header">
    <div class="container">
      <router-link to="#" class="logo"><a>Awon</a></router-link>
      <ul class="mainNav">
        <li>
          <router-link to="/"><a>Home</a></router-link>
        </li>
        <li>
          <router-link to="ServicesView"><a>Services</a></router-link>
          <div class="mega-menu">
            <ul class="links">
              <ul>
                <span>House Keeping</span>
                <li>
                  <router-link to="CleaningView"><a>Cleaning</a></router-link>
                </li>
                <li>
                  <router-link to="GardeningView"><a>Gardening</a></router-link>
                </li>
              </ul>
              <ul>
                <span>Caring Services</span>
                <li>
                  <router-link to="BabysittingView"
                    ><a>Baby sitting</a></router-link
                  >
                </li>
                <li>
                  <router-link to="ElderlycareView"
                    ><a>Elderly care</a></router-link
                  >
                </li>
                <li>
                  <router-link to="HousenursingView"
                    ><a>Home nursing</a></router-link
                  >
                </li>
              </ul>
              <ul>
                <span>Food Services</span>
                <li>
                  <router-link to="FoodcateringView"
                    ><a>Food Catering</a></router-link
                  >
                </li>
                <li>
                  <router-link to="ChefsView"><a>Chefs</a></router-link>
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
          <router-link to="allworkerfromcx"><a>Workers</a></router-link>
        </li>
        <li>
          <router-link to="aboutus"><a>About Us</a></router-link>
        </li>
        <li>
          <router-link to="/"><a>Contact Us</a></router-link>
        </li>
        
        <div class="image">
          <!-- <img src="../assets/images/2.jpg" alt="Cx" /> -->
             <button class="loginDrop dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                       <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
                      <path d="M31.9997 64.0005C49.2686 64.0005 63.268 49.7474 63.268 32.1648C63.268 14.5824 49.2686 0.329102 31.9997 0.329102C14.7307 0.329102 0.731445 14.5824 0.731445 32.1648C0.731445 49.7474 14.7307 64.0005 31.9997 64.0005Z" fill="white"/>
                      <path d="M32 16.0239C25.5275 16.0239 20.2744 21.3723 20.2744 27.9622C20.2744 34.4248 25.2461 39.6777 31.8437 39.8688H32.1251H32.344H32.4065C38.7227 39.6459 43.6944 34.4248 43.7256 27.9622C43.7256 21.3723 38.4726 16.0239 32 16.0239Z" fill="#292D32"/>
                      <path d="M53.2016 55.5641C47.6358 60.7851 40.194 64.0006 32.0017 64.0006C23.8094 64.0006 16.3675 60.7851 10.8018 55.5641C11.5522 52.667 13.5846 50.0247 16.5551 47.9872C25.0914 42.1931 38.9745 42.1931 47.4482 47.9872C50.45 50.0247 52.4511 52.667 53.2016 55.5641Z" fill="#292D32"/>
                    </svg>
                    </button>
                    <ul class="dropdown-menu">
                        <li>
                        <div class="dropdown-item">
                            <router-link to="login"><a>Log In</a></router-link>
                        </div>
                        </li> <hr/>
                        <li>
                        <div class="dropdown-item">
                            <router-link to="#showprofile"><a>My Profile</a></router-link>
                        </div>
                        </li>
                    </ul>
          
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
.loginDrop{
  background-color: $blueColor;
  width:fit-content;
  // padding: 5px 15px;
  color:$blueColor;
  border:solid 2px $blueColor;
  border-radius: 10px;
  
}

.dropdown-menu{
  width:fit-content;
  padding: 20px;
  
}

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
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      clip-path: circle();
      height: 50px;
    }
  }
  .mainNav {
    display: flex;
  height: 72px;
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
@media (max-width: 992px) {
  .header {
    .logo {
      width: 100%;
      height: 50px;
    }

    .mainNav {
      margin: auto;

      > li {
        height: 50px;
        > a {
          width: 100%;
          padding: 12px;
          font-size: 8px;
          height: 50px;
        }
      }
    }
    .mega-menu {
      width: 30%;
      .links {
        span {
          padding: 1px;
          font-size: 14px;
        }
        li {
          a {
            font-size: 8px;
          }
        }
      }
    }
  }
}
@media (max-width: 576px) {
  .header {
    .logo {
      width: 100%;
      height: 50px;
    }

    .mainNav {
      margin: auto;

      > li {
        height: 50px;
        > a {
          width: 100%;
          padding: 10px;
          font-size: 8px;
          height: 50px;
        }
      }
    }
    .mega-menu {
      width: 30%;
      .links {
        span {
          padding: 1px;
          font-size: 10px;
        }
        li {
          a {
            font-size: 8px;
          }
        }
      }
    }
  }
}
@media (max-width: 375px) {
    .mainNav {
      > li {
        > a {
          font-size: 8px;
        }
      }
    }
    .mega-menu {
      width: 50%;
      .links {
        span {
          padding: 1px;
          font-size: 10px;
        }
        li {
          a {
            font-size: 8px;
          }
        }
      }
    }
  }


</style>