<template>
  <div class="bg container-fluid">
    <NavBarPages />
    <div class="child d-flex justify-content-center">
      <form>
        <div class="mb-3 col-lg-6 col-md-4">
          <div>
            <input type="text" class="input" id="inputName" placeholder="Bedroom, Living room" />
          </div>
        </div>
        <div class="mb-3 col-lg-6 col-md-4">
          <div>
            <input type="email" class="input" id="inputEmail" placeholder="Bathroom" />
          </div>
        </div>
        <div class="mb-3 col-lg-6 col-md-4">
          <div>
            <input type="text" class="input" id="inputPhone" placeholder="Kitchen" />
          </div>
        </div>
        <div class="mb-3 col-lg-6 col-md-4"></div>
      </form>
    </div>
    <!-- <div class="row justify-content-center my-5 gap-5">
      <div class="card mb-4" style="width: 18rem">
        <img
          src="../assets/subservices/cleaner3.jpg"
          class="card-img-top Clip-path:circle()"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">Mohamed Tarek</h5>
          <p class="card-text">16 St. Emad Eldein - Down Town - Cairo</p>
          <svg
            class="d-block m-auto"
            xmlns="http://www.w3.org/2000/svg"
            width="125"
            height="22"
            viewBox="0 0 125 22"
            fill="none"
          >
            <path
              d="M10.8425 0.0842438L13.2768 7.57622L21.1543 7.57622L14.7813 12.2065L17.2155 19.6985L10.8425 15.0682L4.46943 19.6985L6.90373 12.2065L0.530669 7.57622L8.4082 7.57622L10.8425 0.0842438Z"
              fill="#F97B22"
            />
            <path
              d="M36.5935 0.0842438L39.0278 7.57622L46.9053 7.57622L40.5322 12.2065L42.9665 19.6985L36.5935 15.0682L30.2204 19.6985L32.6547 12.2065L26.2816 7.57622L34.1592 7.57622L36.5935 0.0842438Z"
              fill="#F97B22"
            />
            <path
              d="M62.3444 0.0842438L64.7787 7.57622L72.6563 7.57622L66.2832 12.2065L68.7175 19.6985L62.3444 15.0682L55.9714 19.6985L58.4057 12.2065L52.0326 7.57622L59.9102 7.57622L62.3444 0.0842438Z"
              fill="#F97B22"
            />
            <path
              d="M88.0954 0.0842438L90.5297 7.57622L98.4072 7.57622L92.0342 12.2065L94.4685 19.6985L88.0954 15.0682L81.7224 19.6985L84.1567 12.2065L77.7836 7.57622L85.6611 7.57622L88.0954 0.0842438Z"
              fill="#F97B22"
            />
            <path
              d="M113.846 0.0842438L116.281 7.57622L124.158 7.57622L117.785 12.2065L120.219 19.6985L113.846 15.0682L107.473 19.6985L109.908 12.2065L103.535 7.57622L111.412 7.57622L113.846 0.0842438Z"
              fill="#F97B22"
            />
          </svg>
          <a href="#" class="btn d-block m-auto mb-3 mt-3">Book Now</a>
        </div>
      </div>
      <div class="card mb-4" style="width: 18rem">
        <img
          src="../assets/subservices/cleaner1.jpg"
          class="card-img-top Clip-path:circle()"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">Salma Osama</h5>
          <p class="card-text">16 St. Emad Eldein - Down Town - Cairo</p>
          <svg
            class="d-block m-auto"
            xmlns="http://www.w3.org/2000/svg"
            width="125"
            height="22"
            viewBox="0 0 125 22"
            fill="none"
          >
            <path
              d="M10.8425 0.0842438L13.2768 7.57622L21.1543 7.57622L14.7813 12.2065L17.2155 19.6985L10.8425 15.0682L4.46943 19.6985L6.90373 12.2065L0.530669 7.57622L8.4082 7.57622L10.8425 0.0842438Z"
              fill="#F97B22"
            />
            <path
              d="M36.5935 0.0842438L39.0278 7.57622L46.9053 7.57622L40.5322 12.2065L42.9665 19.6985L36.5935 15.0682L30.2204 19.6985L32.6547 12.2065L26.2816 7.57622L34.1592 7.57622L36.5935 0.0842438Z"
              fill="#F97B22"
            />
            <path
              d="M62.3444 0.0842438L64.7787 7.57622L72.6563 7.57622L66.2832 12.2065L68.7175 19.6985L62.3444 15.0682L55.9714 19.6985L58.4057 12.2065L52.0326 7.57622L59.9102 7.57622L62.3444 0.0842438Z"
              fill="#F97B22"
            />
            <path
              d="M88.0954 0.0842438L90.5297 7.57622L98.4072 7.57622L92.0342 12.2065L94.4685 19.6985L88.0954 15.0682L81.7224 19.6985L84.1567 12.2065L77.7836 7.57622L85.6611 7.57622L88.0954 0.0842438Z"
              fill="#F97B22"
            />
            <path
              d="M113.846 0.0842438L116.281 7.57622L124.158 7.57622L117.785 12.2065L120.219 19.6985L113.846 15.0682L107.473 19.6985L109.908 12.2065L103.535 7.57622L111.412 7.57622L113.846 0.0842438Z"
              fill="#C3C3C3"
            />
          </svg>
          <a href="#" class="btn d-block m-auto mb-3 mt-3">Book Now</a>
        </div>
      </div>
      <div class="card mb-4" style="width: 18rem">
        <img
          src="../assets/subservices/cleaner2.jpg"
          class="card-img-top Clip-path:circle()"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">Saher Yasser</h5>
          <p class="card-text">16 St. Emad Eldein - Down Town - Cairo</p>
          <svg
            class="d-block m-auto"
            xmlns="http://www.w3.org/2000/svg"
            width="125"
            height="22"
            viewBox="0 0 125 22"
            fill="none"
          >
            <path
              d="M10.8425 0.0842438L13.2768 7.57622L21.1543 7.57622L14.7813 12.2065L17.2155 19.6985L10.8425 15.0682L4.46943 19.6985L6.90373 12.2065L0.530669 7.57622L8.4082 7.57622L10.8425 0.0842438Z"
              fill="#F97B22"
            />
            <path
              d="M36.5935 0.0842438L39.0278 7.57622L46.9053 7.57622L40.5322 12.2065L42.9665 19.6985L36.5935 15.0682L30.2204 19.6985L32.6547 12.2065L26.2816 7.57622L34.1592 7.57622L36.5935 0.0842438Z"
              fill="#F97B22"
            />
            <path
              d="M62.3444 0.0842438L64.7787 7.57622L72.6563 7.57622L66.2832 12.2065L68.7175 19.6985L62.3444 15.0682L55.9714 19.6985L58.4057 12.2065L52.0326 7.57622L59.9102 7.57622L62.3444 0.0842438Z"
              fill="#F97B22"
            />
            <path
              d="M88.0954 0.0842438L90.5297 7.57622L98.4072 7.57622L92.0342 12.2065L94.4685 19.6985L88.0954 15.0682L81.7224 19.6985L84.1567 12.2065L77.7836 7.57622L85.6611 7.57622L88.0954 0.0842438Z"
              fill="#F97B22"
            />
            <path
              d="M113.846 0.0842438L116.281 7.57622L124.158 7.57622L117.785 12.2065L120.219 19.6985L113.846 15.0682L107.473 19.6985L109.908 12.2065L103.535 7.57622L111.412 7.57622L113.846 0.0842438Z"
              fill="#c3c3c3"
            />
          </svg>
          <a href="#" class="btn d-block m-auto mb-3 mt-3">Book Now</a>
        </div>
      </div>
    </div>
    <div class="row justify-content-center my-5 gap-5">
      <div class="card mb-4" style="width: 18rem">
        <img
          src="../assets/subservices/cleaner2.jpg"
          class="card-img-top Clip-path:circle()"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">Mai Sayed</h5>
          <p class="card-text">16 St. Emad Eldein - Down Town - Cairo</p>
          <svg
            class="d-block m-auto"
            xmlns="http://www.w3.org/2000/svg"
            width="125"
            height="22"
            viewBox="0 0 125 22"
            fill="none"
          >
            <path
              d="M10.8425 0.0842438L13.2768 7.57622L21.1543 7.57622L14.7813 12.2065L17.2155 19.6985L10.8425 15.0682L4.46943 19.6985L6.90373 12.2065L0.530669 7.57622L8.4082 7.57622L10.8425 0.0842438Z"
              fill="#F97B22"
            />
            <path
              d="M36.5935 0.0842438L39.0278 7.57622L46.9053 7.57622L40.5322 12.2065L42.9665 19.6985L36.5935 15.0682L30.2204 19.6985L32.6547 12.2065L26.2816 7.57622L34.1592 7.57622L36.5935 0.0842438Z"
              fill="#F97B22"
            />
            <path
              d="M62.3444 0.0842438L64.7787 7.57622L72.6563 7.57622L66.2832 12.2065L68.7175 19.6985L62.3444 15.0682L55.9714 19.6985L58.4057 12.2065L52.0326 7.57622L59.9102 7.57622L62.3444 0.0842438Z"
              fill="#F97B22"
            />
            <path
              d="M88.0954 0.0842438L90.5297 7.57622L98.4072 7.57622L92.0342 12.2065L94.4685 19.6985L88.0954 15.0682L81.7224 19.6985L84.1567 12.2065L77.7836 7.57622L85.6611 7.57622L88.0954 0.0842438Z"
              fill="#F97B22"
            />
            <path
              d="M113.846 0.0842438L116.281 7.57622L124.158 7.57622L117.785 12.2065L120.219 19.6985L113.846 15.0682L107.473 19.6985L109.908 12.2065L103.535 7.57622L111.412 7.57622L113.846 0.0842438Z"
              fill="#F97B22"
            />
          </svg>
          <a href="#" class="btn d-block m-auto mb-3 mt-3">Book Now</a>
        </div>
      </div>
      <div class="card mb-4" style="width: 18rem">
        <img
          src="../assets/subservices/cleaner3.jpg"
          class="card-img-top Clip-path:circle()"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">Mahmoud Bassem</h5>
          <p class="card-text">16 St. Emad Eldein - Down Town - Cairo</p>
          <svg
            class="d-block m-auto"
            xmlns="http://www.w3.org/2000/svg"
            width="125"
            height="22"
            viewBox="0 0 125 22"
            fill="none"
          >
            <path
              d="M10.8425 0.0842438L13.2768 7.57622L21.1543 7.57622L14.7813 12.2065L17.2155 19.6985L10.8425 15.0682L4.46943 19.6985L6.90373 12.2065L0.530669 7.57622L8.4082 7.57622L10.8425 0.0842438Z"
              fill="#F97B22"
            />
            <path
              d="M36.5935 0.0842438L39.0278 7.57622L46.9053 7.57622L40.5322 12.2065L42.9665 19.6985L36.5935 15.0682L30.2204 19.6985L32.6547 12.2065L26.2816 7.57622L34.1592 7.57622L36.5935 0.0842438Z"
              fill="#F97B22"
            />
            <path
              d="M62.3444 0.0842438L64.7787 7.57622L72.6563 7.57622L66.2832 12.2065L68.7175 19.6985L62.3444 15.0682L55.9714 19.6985L58.4057 12.2065L52.0326 7.57622L59.9102 7.57622L62.3444 0.0842438Z"
              fill="#F97B22"
            />
            <path
              d="M88.0954 0.0842438L90.5297 7.57622L98.4072 7.57622L92.0342 12.2065L94.4685 19.6985L88.0954 15.0682L81.7224 19.6985L84.1567 12.2065L77.7836 7.57622L85.6611 7.57622L88.0954 0.0842438Z"
              fill="#F97B22"
            />
            <path
              d="M113.846 0.0842438L116.281 7.57622L124.158 7.57622L117.785 12.2065L120.219 19.6985L113.846 15.0682L107.473 19.6985L109.908 12.2065L103.535 7.57622L111.412 7.57622L113.846 0.0842438Z"
              fill="#F97B22"
            />
          </svg>
          <a href="#" class="btn d-block m-auto mb-3 mt-3">Book Now</a>
        </div>
      </div>
      <div class="card mb-4" style="width: 18rem">
        <img
          src="../assets/subservices/cleaner1.jpg"
          class="card-img-top Clip-path:circle()"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">Mariem Ahmed</h5>
          <p class="card-text">16 St. Emad Eldein - Down Town - Cairo</p>
          <svg
            class="d-block m-auto"
            xmlns="http://www.w3.org/2000/svg"
            width="125"
            height="22"
            viewBox="0 0 125 22"
            fill="none"
          >
            <path
              d="M10.8425 0.0842438L13.2768 7.57622L21.1543 7.57622L14.7813 12.2065L17.2155 19.6985L10.8425 15.0682L4.46943 19.6985L6.90373 12.2065L0.530669 7.57622L8.4082 7.57622L10.8425 0.0842438Z"
              fill="#F97B22"
            />
            <path
              d="M36.5935 0.0842438L39.0278 7.57622L46.9053 7.57622L40.5322 12.2065L42.9665 19.6985L36.5935 15.0682L30.2204 19.6985L32.6547 12.2065L26.2816 7.57622L34.1592 7.57622L36.5935 0.0842438Z"
              fill="#F97B22"
            />
            <path
              d="M62.3444 0.0842438L64.7787 7.57622L72.6563 7.57622L66.2832 12.2065L68.7175 19.6985L62.3444 15.0682L55.9714 19.6985L58.4057 12.2065L52.0326 7.57622L59.9102 7.57622L62.3444 0.0842438Z"
              fill="#F97B22"
            />
            <path
              d="M88.0954 0.0842438L90.5297 7.57622L98.4072 7.57622L92.0342 12.2065L94.4685 19.6985L88.0954 15.0682L81.7224 19.6985L84.1567 12.2065L77.7836 7.57622L85.6611 7.57622L88.0954 0.0842438Z"
              fill="#F97B22"
            />
            <path
              d="M113.846 0.0842438L116.281 7.57622L124.158 7.57622L117.785 12.2065L120.219 19.6985L113.846 15.0682L107.473 19.6985L109.908 12.2065L103.535 7.57622L111.412 7.57622L113.846 0.0842438Z"
              fill="#c3c3c3"
            />
          </svg>
          <a href="#" class="btn d-block m-auto mb-3 mt-3">Book Now</a>
        </div>
      </div>
    </div>
    <div class="row justify-content-center my-5 gap-5">
      <div class="card mb-4" style="width: 18rem">
        <img
          src="../assets/subservices/cleaner3.jpg"
          class="card-img-top Clip-path:circle()"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">Yosef Osama</h5>
          <p class="card-text">16 St. Emad Eldein - Down Town - Cairo</p>
          <svg
            class="d-block m-auto"
            xmlns="http://www.w3.org/2000/svg"
            width="125"
            height="22"
            viewBox="0 0 125 22"
            fill="none"
          >
            <path
              d="M10.8425 0.0842438L13.2768 7.57622L21.1543 7.57622L14.7813 12.2065L17.2155 19.6985L10.8425 15.0682L4.46943 19.6985L6.90373 12.2065L0.530669 7.57622L8.4082 7.57622L10.8425 0.0842438Z"
              fill="#F97B22"
            />
            <path
              d="M36.5935 0.0842438L39.0278 7.57622L46.9053 7.57622L40.5322 12.2065L42.9665 19.6985L36.5935 15.0682L30.2204 19.6985L32.6547 12.2065L26.2816 7.57622L34.1592 7.57622L36.5935 0.0842438Z"
              fill="#F97B22"
            />
            <path
              d="M62.3444 0.0842438L64.7787 7.57622L72.6563 7.57622L66.2832 12.2065L68.7175 19.6985L62.3444 15.0682L55.9714 19.6985L58.4057 12.2065L52.0326 7.57622L59.9102 7.57622L62.3444 0.0842438Z"
              fill="#F97B22"
            />
            <path
              d="M88.0954 0.0842438L90.5297 7.57622L98.4072 7.57622L92.0342 12.2065L94.4685 19.6985L88.0954 15.0682L81.7224 19.6985L84.1567 12.2065L77.7836 7.57622L85.6611 7.57622L88.0954 0.0842438Z"
              fill="#F97B22"
            />
            <path
              d="M113.846 0.0842438L116.281 7.57622L124.158 7.57622L117.785 12.2065L120.219 19.6985L113.846 15.0682L107.473 19.6985L109.908 12.2065L103.535 7.57622L111.412 7.57622L113.846 0.0842438Z"
              fill="#c3c3c3"
            />
          </svg>
          <a href="#" class="btn d-block m-auto mb-3 mt-3">Book Now</a>
        </div>
      </div>
      <div class="card mb-4" style="width: 18rem">
        <img
          src="../assets/subservices/cleaner2.jpg"
          class="card-img-top Clip-path:circle()"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">Aya Osama</h5>
          <p class="card-text">16 St. Emad Eldein - Down Town - Cairo</p>
          <svg
            class="d-block m-auto"
            xmlns="http://www.w3.org/2000/svg"
            width="125"
            height="22"
            viewBox="0 0 125 22"
            fill="none"
          >
            <path
              d="M10.8425 0.0842438L13.2768 7.57622L21.1543 7.57622L14.7813 12.2065L17.2155 19.6985L10.8425 15.0682L4.46943 19.6985L6.90373 12.2065L0.530669 7.57622L8.4082 7.57622L10.8425 0.0842438Z"
              fill="#F97B22"
            />
            <path
              d="M36.5935 0.0842438L39.0278 7.57622L46.9053 7.57622L40.5322 12.2065L42.9665 19.6985L36.5935 15.0682L30.2204 19.6985L32.6547 12.2065L26.2816 7.57622L34.1592 7.57622L36.5935 0.0842438Z"
              fill="#F97B22"
            />
            <path
              d="M62.3444 0.0842438L64.7787 7.57622L72.6563 7.57622L66.2832 12.2065L68.7175 19.6985L62.3444 15.0682L55.9714 19.6985L58.4057 12.2065L52.0326 7.57622L59.9102 7.57622L62.3444 0.0842438Z"
              fill="#F97B22"
            />
            <path
              d="M88.0954 0.0842438L90.5297 7.57622L98.4072 7.57622L92.0342 12.2065L94.4685 19.6985L88.0954 15.0682L81.7224 19.6985L84.1567 12.2065L77.7836 7.57622L85.6611 7.57622L88.0954 0.0842438Z"
              fill="#F97B22"
            />
            <path
              d="M113.846 0.0842438L116.281 7.57622L124.158 7.57622L117.785 12.2065L120.219 19.6985L113.846 15.0682L107.473 19.6985L109.908 12.2065L103.535 7.57622L111.412 7.57622L113.846 0.0842438Z"
              fill="#F97B22"
            />
          </svg>
          <a href="#" class="btn d-block m-auto mb-3 mt-3">Book Now</a>
        </div>
      </div>
      <div class="card mb-4" style="width: 18rem">
        <img
          src="../assets/subservices/babysitter1.jpg"
          class="card-img-top Clip-path:circle()"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">Ola Fayez</h5>
          <p class="card-text">16 St. Emad Eldein - Down Town - Cairo</p>
          <svg
            class="d-block m-auto"
            xmlns="http://www.w3.org/2000/svg"
            width="125"
            height="22"
            viewBox="0 0 125 22"
            fill="none"
          >
            <path
              d="M10.8425 0.0842438L13.2768 7.57622L21.1543 7.57622L14.7813 12.2065L17.2155 19.6985L10.8425 15.0682L4.46943 19.6985L6.90373 12.2065L0.530669 7.57622L8.4082 7.57622L10.8425 0.0842438Z"
              fill="#F97B22"
            />
            <path
              d="M36.5935 0.0842438L39.0278 7.57622L46.9053 7.57622L40.5322 12.2065L42.9665 19.6985L36.5935 15.0682L30.2204 19.6985L32.6547 12.2065L26.2816 7.57622L34.1592 7.57622L36.5935 0.0842438Z"
              fill="#F97B22"
            />
            <path
              d="M62.3444 0.0842438L64.7787 7.57622L72.6563 7.57622L66.2832 12.2065L68.7175 19.6985L62.3444 15.0682L55.9714 19.6985L58.4057 12.2065L52.0326 7.57622L59.9102 7.57622L62.3444 0.0842438Z"
              fill="#F97B22"
            />
            <path
              d="M88.0954 0.0842438L90.5297 7.57622L98.4072 7.57622L92.0342 12.2065L94.4685 19.6985L88.0954 15.0682L81.7224 19.6985L84.1567 12.2065L77.7836 7.57622L85.6611 7.57622L88.0954 0.0842438Z"
              fill="#F97B22"
            />
            <path
              d="M113.846 0.0842438L116.281 7.57622L124.158 7.57622L117.785 12.2065L120.219 19.6985L113.846 15.0682L107.473 19.6985L109.908 12.2065L103.535 7.57622L111.412 7.57622L113.846 0.0842438Z"
              fill="#F97B22"
            />
          </svg>
          <a href="#" class="btn d-block m-auto mb-3 mt-3">Book Now</a>
        </div>
      </div>
    </div> -->
    <!-- http://localhost:8080/img/cleaner1.65740dc5.jpg -->
    <!-- <img src="@/assets/subservices/cleaner1.jpg" alt=""> -->
    <div class="container">
      <div class="row gy-4">
        <div class="card col-md-4 col-sm-6 col-6" v-for="(worker, i) in workerData" :key="i">
          <img :src="`${worker.img}`" class="card-img-top object-fit-cover" :alt="`workerimg${i}`" />
          <div class="card-body">
            <h5 class="card-title">{{ worker['First_name'] }} {{ worker['Last_name'] }}</h5>
            <p class="card-text">16 St. Emad Eldein - Down Town - Cairo</p>
            <svg class="d-block m-auto" xmlns="http://www.w3.org/2000/svg" width="125" height="22" viewBox="0 0 125 22"
              fill="none">
              <path
                d="M10.8425 0.0842438L13.2768 7.57622L21.1543 7.57622L14.7813 12.2065L17.2155 19.6985L10.8425 15.0682L4.46943 19.6985L6.90373 12.2065L0.530669 7.57622L8.4082 7.57622L10.8425 0.0842438Z"
                fill="#F97B22" />
              <path
                d="M36.5935 0.0842438L39.0278 7.57622L46.9053 7.57622L40.5322 12.2065L42.9665 19.6985L36.5935 15.0682L30.2204 19.6985L32.6547 12.2065L26.2816 7.57622L34.1592 7.57622L36.5935 0.0842438Z"
                fill="#F97B22" />
              <path
                d="M62.3444 0.0842438L64.7787 7.57622L72.6563 7.57622L66.2832 12.2065L68.7175 19.6985L62.3444 15.0682L55.9714 19.6985L58.4057 12.2065L52.0326 7.57622L59.9102 7.57622L62.3444 0.0842438Z"
                fill="#F97B22" />
              <path
                d="M88.0954 0.0842438L90.5297 7.57622L98.4072 7.57622L92.0342 12.2065L94.4685 19.6985L88.0954 15.0682L81.7224 19.6985L84.1567 12.2065L77.7836 7.57622L85.6611 7.57622L88.0954 0.0842438Z"
                fill="#F97B22" />
              <path
                d="M113.846 0.0842438L116.281 7.57622L124.158 7.57622L117.785 12.2065L120.219 19.6985L113.846 15.0682L107.473 19.6985L109.908 12.2065L103.535 7.57622L111.412 7.57622L113.846 0.0842438Z"
                fill="#F97B22" />
            </svg>
           <router-link to="workerProfile"> <a class="btn d-block m-auto mb-3 mt-3">Book Now</a></router-link>
          </div>
        </div>
      </div>
    </div>
    <FooterComponent />
  </div>
</template>

<script>
import NavBarPages from "@/components/NavBarPages.vue";
import FooterComponent from "@/components/footer.vue";
import axios from "axios";
export default {
  components: {
    NavBarPages,
    FooterComponent,
  },
  data() {
    return {
      // pathImg: "../assets/subservices/",
      // imgArr:[],
      workerData: [],
    }
  },
  created() {
    axios.get("http://localhost:2000/worker").then((res) => {
      this.workerData = res.data;
      // console.log(res.data);
      // this.pathImg = "../assets/subservices/" + res.data['img'];
    }).catch(err => console.log(err))
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/global/colors";
@import "../scss/global/variables";
@import "../scss/main.scss";

.bg {
  background-color: $backgroundColor;
}

form {
  .input {
    border: 3px solid $blueColor;
    border-radius: 33px;
    width: 716px;
    height: 69px;
    padding: 9px 4px 9px 40px;
    background: white;

    @media (max-width: 767px) {
      width: 350px;
      height: 55px;
    }

    &:focus {
      border-color: $orangeColor;
      outline: none;
    }

    &#inputMessage {
      height: 262px;
    }
  }

  .input[placeholder] {
    font-size: $paragraph;
    font-weight: $semiBold;
  }
}

.child {
  margin: auto;
  margin-top: 50px;
  margin-bottom: 25px;
  //   padding: 15px;
  //   background-color: $whiteColor;
  width: 70%;
  height: auto;
  //   border-radius: $border-radius-big;
}

.serv {
  font-size: $title;
  font-family: "raleway";
  font-weight: bold;
  text-align: center;
  color: $blueColor;
}

.servpara {
  font-size: $paragraph;
  font-family: "raleway";
  color: $blueColor;
}

img {
  margin-top: 15px;
  clip-path: circle();
  height: 200px;
}

.card{
  // width: 270px;
}
.card-title {
  text-align: center;
  font-size: $subTitle;
  font-weight: bold;
  color: $blueColor;
}

.card-text {
  text-align: center;
  font-size: $paragraph;
  color: $blueColor;
}

.btn {
  @include button;
}
</style>
