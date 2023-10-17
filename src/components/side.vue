<template>
    <div class="sidebar">
   <div class="sideTitle">
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 27 28" fill="none">
  <path d="M5.20112 14.962H8.00187C10.8026 14.962 12.203 16.3673 12.203 19.1778V21.9883C12.203 24.7988 10.8026 26.2041 8.00187 26.2041H5.20112C2.40037 26.2041 1 24.7988 1 21.9883V19.1778C1 16.3673 2.40037 14.962 5.20112 14.962Z" stroke="#F97B22" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M18.998 14.962H21.7987C24.5995 14.962 25.9999 16.3673 25.9999 19.1778V21.9883C25.9999 24.7988 24.5995 26.2041 21.7987 26.2041H18.998C16.1972 26.2041 14.7969 24.7988 14.7969 21.9883V19.1778C14.7969 16.3673 16.1972 14.962 18.998 14.962Z" stroke="#F97B22" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M18.998 1.11778H21.7987C24.5995 1.11778 25.9999 2.52304 25.9999 5.33356V8.14408C25.9999 10.9546 24.5995 12.3599 21.7987 12.3599H18.998C16.1972 12.3599 14.7969 10.9546 14.7969 8.14408V5.33356C14.7969 2.52304 16.1972 1.11778 18.998 1.11778Z" stroke="#F97B22" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M5.20112 1.11778H8.00187C10.8026 1.11778 12.203 2.52304 12.203 5.33356V8.14408C12.203 10.9546 10.8026 12.3599 8.00187 12.3599H5.20112C2.40037 12.3599 1 10.9546 1 8.14408V5.33356C1 2.52304 2.40037 1.11778 5.20112 1.11778Z" stroke="#F97B22" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
<p>Dashboard</p>
   </div>
  <router-link to="#" class="navPills"><a >Home</a></router-link>
  <router-link to="#" class="navPills"><a >Workers</a></router-link>
  <router-link to="#" class="navPills"><a >Service History</a></router-link>
  <router-link to="#" class="navPills"><a >Reviews</a></router-link>

  <div class="logOut">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 40 41" fill="none">
       <path d="M26.2682 40.0647H26.0151C17.3685 40.0647 13.2011 36.6614 12.4805 29.0381C12.4026 28.2407 12.9869 27.5212 13.8048 27.4434C14.5837 27.3656 15.3238 27.9685 15.4017 28.7658C15.9664 34.8723 18.8486 37.1476 26.0346 37.1476H26.2877C34.2137 37.1476 37.018 34.3472 37.018 26.4321V13.7524C37.018 5.83738 34.2137 3.03697 26.2877 3.03697H26.0346C18.8096 3.03697 15.9275 5.3512 15.4017 11.5743C15.3043 12.3717 14.6227 12.9745 13.8048 12.8968C12.9869 12.8384 12.4026 12.1189 12.4611 11.3215C13.1232 3.5815 17.3101 0.119873 26.0151 0.119873H26.2682C35.8301 0.119873 39.9196 4.20381 39.9196 13.7524V26.4321C39.9196 35.9808 35.8301 40.0647 26.2682 40.0647Z" fill="#F97B22"/>
       <path d="M25.7979 21.5509H3.63634C2.8379 21.5509 2.17578 20.8897 2.17578 20.0923C2.17578 19.295 2.8379 18.6338 3.63634 18.6338H25.7979C26.5963 18.6338 27.2584 19.295 27.2584 20.0923C27.2584 20.8897 26.5963 21.5509 25.7979 21.5509Z" fill="#F97B22"/>
       <path d="M7.97955 28.066C7.60954 28.066 7.23953 27.9299 6.94741 27.6382L0.423563 21.1233C-0.141188 20.5593 -0.141188 19.6259 0.423563 19.0619L6.94741 12.547C7.51217 11.983 8.44693 11.983 9.01168 12.547C9.57643 13.111 9.57643 14.0445 9.01168 14.6084L3.51996 20.0926L9.01168 25.5768C9.57643 26.1408 9.57643 27.0742 9.01168 27.6382C8.73904 27.9299 8.34956 28.066 7.97955 28.066Z" fill="#F97B22"/>
       </svg>
  <router-link to="#"><a>Log Out</a></router-link>
  </div>

</div>
</template>

<script>
    export default {
        name:'sideCom'
    }
</script>

<style lang="scss" scoped>

@import '../scss/global/colors';
@import '../scss/global/variables';


.sidebar {
  margin: 0;
  padding: 0;
  width: 200px;
  background-color:$whiteColor;
  position: fixed;
  height: 100%;
  overflow: auto;
  font-size: $small;
  a{
    display: block;
  }
  
}


.navPills {
  display: block;
  color:$blueColor;
  padding-left: 25px;
  padding-top: 15px;
  padding-bottom: 15px;
  text-decoration: none;
  font-weight: $bold;
  width: 160px;
//   height: 50px;
  
}

.sideTitle{
    padding: 16px;
    font-size: $paragraph;
    font-weight: $bold;
    color:$blueColor;
   
}

.navPills:hover{
    background-color: $backgroundColor;
    border-bottom: 2px solid $orangeColor;
    z-index: -1;
}
.navPills a:active{
    background-color: $backgroundColor;
    border-bottom: 2px solid $orangeColor;
    z-index: -1;
    }
    
    .sideTitle , .logOut{
        .svg , p{
        display: inline;
    }

    }

    .logOut{
        display: flex;
       margin-top: 270px;
       margin-left: 40px;

       a{
        font-size: $small;
        font-weight: $bold;
        margin-left: 5px;
       }

    }

    a{
        text-decoration: none;
        color: $blueColor;
    }

    body{
        margin: 0;
    }





</style>