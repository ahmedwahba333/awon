<template>
  <NavBarDash />
  <div class="bg">
    <div class="container">
      <div class="bread row col col-sm-12 col-12">
        <ol class="breadcrumb">
          <div class="col-10 d-inline-flex">
            <li class="breadcrumb-item active mt-2">Dashboard</li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 320 512"
              fill="#F97B22"
              class="m-2"
            >
              <path
                d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"
              />
            </svg>
            <li class="breadcrumb-item active mt-2" aria-current="page">
              Workers
            </li>
          </div>
          <li class="justify-content-end">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="100"
              fill="currentColor"
              class="bi bi-person-add"
              viewBox="0 0 16 16"
            >
              <path
                d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0Zm-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
              />
              <path
                d="M8.256 14a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1h5.256Z"
              />
            </svg>
          </li>
        </ol>
      </div>
      <div class="top row col col-sm-12 col-12">
        <div class="title col-sm-10 col-10">Workers</div>
        <div class="add-icon col-sm-2 col-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="0"
            viewBox="0 0 92 92"
            fill="none"
          >
            <path
              d="M87.4886 5.82623C84.3343 2.23382 79.6467 -0.000488281 74.4771 -0.000488281C69.5704 -0.000488281 65.1018 2.01477 61.9036 5.30051C60.0636 7.18434 58.6617 9.46246 57.8293 12.0034C57.2598 13.7558 56.9531 15.5958 56.9531 17.5235C56.9531 20.8092 57.8731 23.9197 59.4941 26.5483C60.3703 28.0379 61.5094 29.396 62.8237 30.535C65.8904 33.3389 69.9647 35.0475 74.4771 35.0475C76.4047 35.0475 78.2448 34.7408 79.9533 34.1274C83.9839 32.857 87.3572 30.0969 89.4601 26.5483C90.3801 25.0588 91.0811 23.3502 91.4753 21.5978C91.8258 20.2835 92.0011 18.9254 92.0011 17.5235C92.0011 13.0549 90.2925 8.93674 87.4886 5.82623ZM81.0048 20.7216H77.7628V24.1388C77.7628 25.935 76.2733 27.4245 74.4771 27.4245C72.6809 27.4245 71.1914 25.935 71.1914 24.1388V20.7216H67.9494C66.1532 20.7216 64.6637 19.2321 64.6637 17.4359C64.6637 15.6397 66.1532 14.1501 67.9494 14.1501H71.1914V11.0396C71.1914 9.24341 72.6809 7.75387 74.4771 7.75387C76.2733 7.75387 77.7628 9.24341 77.7628 11.0396V14.1501H81.0048C82.801 14.1501 84.2905 15.6397 84.2905 17.4359C84.2905 19.2321 82.8448 20.7216 81.0048 20.7216Z"
              fill="#F97B22"
            />
            <path
              d="M87.6199 48.1901C87.6199 42.451 86.5246 36.9309 84.4656 31.8928C83.1075 32.8566 81.5741 33.6014 79.9531 34.1271C79.4712 34.3023 78.9893 34.4337 78.4636 34.5652C80.1284 38.7709 81.0484 43.371 81.0484 48.1901C81.0484 58.354 76.9303 67.5979 70.2711 74.3446C69.0007 72.7236 67.3797 71.2341 65.452 69.9636C53.5796 61.9902 34.1279 61.9902 22.1678 69.9636C20.2402 71.2341 18.663 72.7236 17.3487 74.3446C10.6896 67.5979 6.57149 58.354 6.57149 48.1901C6.57149 27.6432 23.2631 10.9516 43.8099 10.9516C48.5852 10.9516 53.1853 11.8716 57.391 13.5364C57.5224 13.0107 57.6539 12.5288 57.8291 12.0031C58.3548 10.3821 59.0996 8.89255 60.1072 7.53444C55.0691 5.47538 49.549 4.38013 43.8099 4.38013C19.6707 4.38013 0 24.0508 0 48.1901C0 60.8949 5.47624 72.3293 14.1506 80.3466C14.1506 80.3904 14.1506 80.3904 14.1068 80.4342C14.5449 80.8723 15.0706 81.2228 15.5087 81.617C15.7716 81.8361 15.9906 82.0552 16.2535 82.2304C17.0421 82.8875 17.9183 83.5009 18.7507 84.1142C19.0573 84.3333 19.3202 84.5085 19.6269 84.7276C20.4592 85.2971 21.3354 85.8228 22.2554 86.3047C22.5621 86.48 22.9126 86.699 23.2193 86.8742C24.0955 87.3561 25.0155 87.7942 25.9793 88.1885C26.3298 88.3638 26.6803 88.539 27.0307 88.6704C27.9946 89.0647 28.9584 89.4152 29.9222 89.7219C30.2727 89.8533 30.6231 89.9847 30.9736 90.0724C32.0251 90.379 33.0765 90.6419 34.1279 90.9048C34.4346 90.9924 34.7413 91.08 35.0918 91.1238C36.3184 91.3867 37.5451 91.5619 38.8156 91.6933C38.9908 91.6933 39.1661 91.7371 39.3413 91.781C40.8309 91.9124 42.3204 92 43.8099 92C45.2995 92 46.789 91.9124 48.2347 91.781C48.41 91.781 48.5852 91.7371 48.7605 91.6933C50.0309 91.5619 51.2576 91.3867 52.4843 91.1238C52.791 91.08 53.0976 90.9486 53.4481 90.9048C54.4996 90.6419 55.5948 90.4228 56.6024 90.0724C56.9529 89.9409 57.3034 89.8095 57.6539 89.7219C58.6177 89.3714 59.6253 89.0647 60.5453 88.6704C60.8958 88.539 61.2463 88.3638 61.5968 88.1885C62.5168 87.7942 63.4368 87.3561 64.3568 86.8742C64.7073 86.699 65.0139 86.48 65.3206 86.3047C66.1968 85.779 67.073 85.2971 67.9492 84.7276C68.2559 84.5523 68.5187 84.3333 68.8254 84.1142C69.7016 83.5009 70.534 82.8875 71.3226 82.2304C71.5854 82.0113 71.8045 81.7923 72.0674 81.617C72.5493 81.2228 73.0312 80.8285 73.4693 80.4342C73.4693 80.3904 73.4693 80.3904 73.4255 80.3466C82.1436 72.3293 87.6199 60.8949 87.6199 48.1901Z"
              fill="#193655"
            />
            <path
              d="M43.8115 25.9771C34.7429 25.9771 27.3828 33.3371 27.3828 42.4058C27.3828 51.2992 34.3486 58.5279 43.5925 58.7907H43.9868H44.2934H44.3811C53.2307 58.4841 60.1965 51.2992 60.2403 42.4058C60.2403 33.3371 52.8802 25.9771 43.8115 25.9771Z"
              fill="#193655"
            />
          </svg>
        </div>
      </div>
      <div class="box">
        <div class="row align-items-center">
          <div class="cx-icon col-lg-2 col-md-2 col-sm-2 col-2">
            <img
              src="../assets/images/1.jpg"
              class="card-img-top Clip-path:circle()"
              alt=""
            />
          </div>
          <div class="col-lg-7">
            <div class="ag-name col-lg-12">Fathy Ahmed - Cooking - Mansoura</div>
          </div>
          <div class="icons col-lg-3">
            <router-link to="workerprofileDash"><span class="view">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-eye-fill"
                viewBox="0 0 16 16"
              >
                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                <path
                  d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"
                />
              </svg>
            </span> </router-link>
            <span class="edit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-pencil-square"
                viewBox="0 0 16 16"
              >
                <path
                  d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
                />
                <path
                  fill-rule="evenodd"
                  d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                />
              </svg>
            </span>
            <span class="delete">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-trash3-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
      <div class="box">
        <div class="row align-items-center">
          <div class="cx-icon col-lg-2 col-md-2 col-sm-2 col-2">
            <img
              src="../assets/images/1.jpg"
              class="card-img-top Clip-path:circle()"
              alt=""
            />
          </div>
          <div class="col-lg-7">
            <div class="ag-name col-lg-12">Kholod Essam - baby sitter - Sheikh Zayed </div>
          </div>
          <div class="icons col-lg-3">
            <span class="view">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-eye-fill"
                viewBox="0 0 16 16"
              >
                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                <path
                  d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"
                />
              </svg>
            </span>
            <span class="edit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-pencil-square"
                viewBox="0 0 16 16"
              >
                <path
                  d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
                />
                <path
                  fill-rule="evenodd"
                  d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                />
              </svg>
            </span>
            <span class="delete">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-trash3-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
      <div class="box">
        <div class="row align-items-center">
          <div class="cx-icon col-lg-2 col-md-2 col-sm-2 col-2">
            <img
              src="../assets/images/1.jpg"
              class="card-img-top Clip-path:circle()"
              alt=""
            />
          </div>
          <div class="col-lg-7">
            <div class="ag-name col-lg-12">Rahma Samir - Nursing - Cairo</div>
          </div>
          <div class="icons col-lg-3">
            <span class="view">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-eye-fill"
                viewBox="0 0 16 16"
              >
                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                <path
                  d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"
                />
              </svg>
            </span>
            <span class="edit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-pencil-square"
                viewBox="0 0 16 16"
              >
                <path
                  d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
                />
                <path
                  fill-rule="evenodd"
                  d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                />
              </svg>
            </span>
            <span class="delete">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-trash3-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
      <div class="box">
        <div class="row align-items-center">
          <div class="cx-icon col-lg-2 col-md-2 col-sm-2 col-2">
            <img
              src="../assets/images/1.jpg"
              class="card-img-top Clip-path:circle()"
              alt=""
            />
          </div>
          <div class="col-lg-7">
            <div class="ag-name col-lg-12">Mohammed Ali - Carpentry - Giza</div>
          </div>
          <div class="icons col-lg-3">
            <span class="view">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-eye-fill"
                viewBox="0 0 16 16"
              >
                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                <path
                  d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"
                />
              </svg>
            </span>
            <span class="edit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-pencil-square"
                viewBox="0 0 16 16"
              >
                <path
                  d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
                />
                <path
                  fill-rule="evenodd"
                  d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                />
              </svg>
            </span>
            <span class="delete">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-trash3-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
      <div class="box">
        <div class="row align-items-center">
          <div class="cx-icon col-lg-2 col-md-2 col-sm-2 col-2">
            <img
              src="../assets/images/1.jpg"
              class="card-img-top Clip-path:circle()"
              alt=""
            />
          </div>
          <div class="col-lg-7">
            <div class="ag-name col-lg-12">Rahma Samir - Nursing - Cairo</div>
          </div>
          <div class="icons col-lg-3">
            <span class="view">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-eye-fill"
                viewBox="0 0 16 16"
              >
                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                <path
                  d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"
                />
              </svg>
            </span>
            <span class="edit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-pencil-square"
                viewBox="0 0 16 16"
              >
                <path
                  d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
                />
                <path
                  fill-rule="evenodd"
                  d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                />
              </svg>
            </span>
            <span class="delete">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-trash3-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
      <div class="box">
        <div class="row align-items-center">
          <div class="cx-icon col-lg-2 col-md-2 col-sm-2 col-2">
            <img
              src="../assets/images/1.jpg"
              class="card-img-top Clip-path:circle()"
              alt=""
            />
          </div>
          <div class="col-lg-7">
            <div class="ag-name col-lg-12">Fathy Ahmed - Cooking - Mansoura</div>
          </div>
          <div class="icons col-lg-3">
            <span class="view">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-eye-fill"
                viewBox="0 0 16 16"
              >
                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                <path
                  d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"
                />
              </svg>
            </span>
            <span class="edit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-pencil-square"
                viewBox="0 0 16 16"
              >
                <path
                  d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
                />
                <path
                  fill-rule="evenodd"
                  d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                />
              </svg>
            </span>
            <span class="delete">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-trash3-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
      <div class="box">
        <div class="row align-items-center">
          <div class="cx-icon col-lg-2 col-md-2 col-sm-2 col-2">
            <img
              src="../assets/images/1.jpg"
              class="card-img-top Clip-path:circle()"
              alt=""
            />
          </div>
          <div class="col-lg-7">
            <div class="ag-name col-lg-12">Ali Saber - Cleaning - Giza</div>
          </div>
          <div class="icons col-lg-3">
            <span class="view">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-eye-fill"
                viewBox="0 0 16 16"
              >
                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                <path
                  d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"
                />
              </svg>
            </span>
            <span class="edit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-pencil-square"
                viewBox="0 0 16 16"
              >
                <path
                  d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
                />
                <path
                  fill-rule="evenodd"
                  d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                />
              </svg>
            </span>
            <span class="delete">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-trash3-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
      <div class="box">
        <div class="row align-items-center">
          <div class="cx-icon col-lg-2 col-md-2 col-sm-2 col-2">
            <img
              src="../assets/images/1.jpg"
              class="card-img-top Clip-path:circle()"
              alt=""
            />
          </div>
          <div class="col-lg-7">
            <div class="ag-name col-lg-12">Mohammed Ali - Carpentry - Giza</div>
          </div>
          <div class="icons col-lg-3">
            <span class="view">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-eye-fill"
                viewBox="0 0 16 16"
              >
                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                <path
                  d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"
                />
              </svg>
            </span>
            <span class="edit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-pencil-square"
                viewBox="0 0 16 16"
              >
                <path
                  d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
                />
                <path
                  fill-rule="evenodd"
                  d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                />
              </svg>
            </span>
            <span class="delete">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-trash3-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import NavBarDash from "@/components/NavBarDash.vue";
export default {
  name: "AllWorker",
  components: {
    NavBarDash,
  },
};
</script>
<style lang="scss" scoped>
@import "../scss/global/colors";
@import "../scss/global/variables";

.bg {
  background-color: $backgroundColor;
}
.title {
  font-weight: bold;
  font-size: $subTitle;
  color: $blueColor;
}
.box {
  @include box;
  margin: 20px;
  padding: 20px;
}

.add-icon {
  display: flex;
  justify-content: end;
}
.cx-icon {
  display: flex;
  vertical-align: middle;
  justify-content: center;
  align-items: center;
  padding: 1%;
}
.icons {
  display: flex;
  vertical-align: middle;
  justify-content: center;
  align-items: center;
}
.edit {
  padding: 5%;
}

.top {
  padding: 15px;
  padding-left: 20px;
}
.bread {
  padding: 10px;
  color: $blueColor;
}
.ag-name {
  padding: 1.5%;
  font-size: $paragraph;
  color: $blueColor;
}
.breadcrumb-item {
  background-color: transparent;
}
svg {
  color: $orangeColor;
  &:hover {
    color: $blueColor;
  }
}
img {
  clip-path: circle();
}
</style>
