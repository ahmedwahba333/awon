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
.container {
  padding-left: 40px;
  padding-right: px;
  margin-left: auto;
  margin-right: auto;
}
.header {
  background-color: $blueColor;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    position: relative;
  }
  .logo {
    font-size: 30px;
    color: $whiteColor;;
    font-weight: bold;
    height: 73.56px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .mainNav {
    display: flex;
    > li {
      > a {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 73.56px;
        position: relative;
        color: $whiteColor;;
        padding: 0 30px;
        transition: var(--main-transition);
        overflow: hidden;
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
          background-color: $backgroudColor;
          &::before {
            left: 0;
          }
        }
      }
    }
  }
}
@media (min-width: 768px) {
  .container {
    width: 750px;
  }
}
@media (min-width: 992px) {
  .container {
    width: 970px;
  }
}
@media (min-width: 1200px) {
  .container {
    width: 1170px;
  }
}
@media (max-width: 767px) {
  .header {
    .logo {
      width: 100%;
      height: 50px;
    }
    .mainNav {
      margin: auto;
      > li {
        > a {
          padding: 10px;
          font-size: 14px;
          height: 30px;
        }
      }
    }
  }
}

</style>