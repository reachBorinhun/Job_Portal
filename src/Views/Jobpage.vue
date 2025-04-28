<template>
  <nav>
    <div
      class="w-full h-15 flex justify-between px-10 items-center border border-b-gray-200 mb-5"
    >
      <div class="w-28 h-full object-cover py-2"><img :src="logo" /></div>
      <div class="flex justify-between items-center">
        <div class="flex justify-center items-center gap-5">
          <button class="w-15 h-7 rounded-full text-[14px]">
            <a href="/homepage">Home</a>
          </button>
          <button
            class="w-15 h-7 rounded-full text-[14px] bg-sky-500 hover:bg-sky-500"
          >
            <a href="/jobpage">Jobs</a>
          </button>
          <button class="w-15 h-7 rounded-full text-[14px] hover:bg-sky-500">
            Contact
          </button>

          <button
            class="text-[13px] w-auto h-8 bg-gradient-to-r from-[#29bf12] to-[#135908] rounded-full flex items-center gap-1 text-white px-2"
          >
            <!-- SVG with explicit white fill -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              class="w-4 h-4 fill-white"
            >
              <path
                d="M7.00684 12C7.00684 11.8011 7.08585 11.6103 7.22651 11.4697C7.36716 11.329 7.55792 11.25 7.75684 11.25H11.2498V7.757C11.2498 7.55809 11.3289 7.36733 11.4695 7.22667C11.6102 7.08602 11.8009 7.007 11.9998 7.007C12.1987 7.007 12.3895 7.08602 12.5302 7.22667C12.6708 7.36733 12.7498 7.55809 12.7498 7.757V11.25H16.2428C16.4417 11.25 16.6325 11.329 16.7732 11.4697C16.9138 11.6103 16.9928 11.8011 16.9928 12C16.9928 12.1989 16.9138 12.3897 16.7732 12.5303C16.6325 12.671 16.4417 12.75 16.2428 12.75H12.7498V16.243C12.7498 16.4419 12.6708 16.6327 12.5302 16.7733C12.3895 16.914 12.1987 16.993 11.9998 16.993C11.8009 16.993 11.6102 16.914 11.4695 16.7733C11.3289 16.6327 11.2498 16.4419 11.2498 16.243V12.75H7.75684C7.55792 12.75 7.36716 12.671 7.22651 12.5303C7.08585 12.3897 7.00684 12.1989 7.00684 12Z"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.31667 3.769C10.4291 3.42394 13.5702 3.42394 16.6827 3.769C18.5097 3.973 19.9847 5.412 20.1987 7.249C20.5687 10.406 20.5687 13.595 20.1987 16.752C19.9837 18.589 18.5087 20.027 16.6827 20.232C13.5702 20.5771 10.4291 20.5771 7.31667 20.232C5.48967 20.027 4.01467 18.589 3.80067 16.752C3.43233 13.595 3.43233 10.406 3.80067 7.249C4.01467 5.412 5.49067 3.973 7.31667 3.769ZM16.5167 5.259C13.5145 4.92623 10.4848 4.92623 7.48267 5.259C6.92691 5.32066 6.40817 5.56788 6.01025 5.96072C5.61233 6.35356 5.35846 6.86908 5.28967 7.424C4.934 10.465 4.934 13.537 5.28967 16.578C5.35867 17.1327 5.61263 17.648 6.01053 18.0407C6.40844 18.4333 6.92706 18.6804 7.48267 18.742C10.4597 19.074 13.5397 19.074 16.5167 18.742C17.0721 18.6802 17.5905 18.433 17.9882 18.0404C18.3859 17.6478 18.6397 17.1326 18.7087 16.578C19.0643 13.537 19.0643 10.465 18.7087 7.424C18.6395 6.86959 18.3856 6.35465 17.9879 5.96222C17.5902 5.5698 17.0719 5.32278 16.5167 5.261"
              />
            </svg>
            Post a job
          </button>
          <div class="w-[0.7px] h-[30px] bg-gray-400"></div>
          <div class="relative group">
            <!-- Main div -->
            <div
              class="w-auto h-10 border border-gray-400 rounded-full flex items-center gap-2 text-white px-2 cursor-pointer"
            >
              <div
                class="w-6 h-6 rounded-full bg-black border border-gray-400 overflow-hidden"
              >
                <img
                  class="w-full h-full object-cover rounded-full"
                  src="../img/Dog.jpg"
                  alt=""
                />
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-3 h-3"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M15.7501 3.75004H2.25006C2.11338 3.75047 1.9794 3.78817 1.86255 3.85908C1.7457 3.92999 1.6504 4.03142 1.58691 4.15246C1.52342 4.2735 1.49414 4.40956 1.50223 4.54601C1.51032 4.68245 1.55546 4.8141 1.63281 4.92679L8.38281 14.6768C8.66256 15.081 9.33606 15.081 9.61656 14.6768L16.3666 4.92679C16.4447 4.81434 16.4905 4.68262 16.499 4.54595C16.5076 4.40928 16.4785 4.27289 16.4149 4.15159C16.3514 4.03029 16.2558 3.92873 16.1386 3.85793C16.0214 3.78714 15.887 3.74983 15.7501 3.75004Z"
                  fill="#919191"
                />
              </svg>
            </div>

            <!-- Dropdown card -->
            <div
              class="absolute right-0 mt-2 hidden group-hover:flex flex-col bg-white text-black shadow-lg rounded-lg p-4 w-60 z-10 gap-2"
            >
              <div class="flex items-center gap-3 pb-2">
                <!-- Circle Profile Image -->
                <div
                  class="w-12 h-12 rounded-full bg-black border border-gray-400 overflow-hidden shrink-0"
                >
                  <img
                    class="w-full h-full object-cover"
                    src="../img/Dog.jpg"
                    alt="Profile Image"
                  />
                </div>

                <!-- Name & Email -->
                <div class="flex flex-col">
                  <span class="font-semibold text-sm">Robeto Le</span>
                  <span class="text-xs text-gray-600"
                    >robertoleler@domain.com</span
                  >
                </div>
              </div>
              <button
                style="background-color: #0496ff"
                class="py-1.5 rounded-sm text-white"
              >
              <a href="/myprofile">My profile</a>
                
              </button>
              <button
                style="background-color: #e9e9e9"
                class="py-1.5 rounded-sm text-black"
              >
                Manage Account
              </button>

              <hr class="my-3 border-gray-300" />

              <button
                class="text-left text-sm hover:bg-gray-100 px-2 py-1 rounded"
              >
                <div class="flex gap-3 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12 5.49999L11.46 6.01999C11.53 6.09257 11.6138 6.15031 11.7066 6.18974C11.7994 6.22918 11.8992 6.24951 12 6.24951C12.1008 6.24951 12.2006 6.22918 12.2934 6.18974C12.3862 6.15031 12.47 6.09257 12.54 6.01999L12 5.49999ZM7.001 16.42C6.84717 16.2935 6.64939 16.2333 6.45117 16.2526C6.25294 16.2719 6.07051 16.3692 5.944 16.523C5.81749 16.6768 5.75727 16.8746 5.77659 17.0728C5.7959 17.271 5.89317 17.4535 6.047 17.58L7.001 16.42ZM2.342 13.411C2.38928 13.4974 2.45311 13.5736 2.52985 13.6354C2.6066 13.6971 2.69475 13.7431 2.78928 13.7708C2.88381 13.7985 2.98287 13.8073 3.08079 13.7967C3.17871 13.7861 3.27359 13.7563 3.36 13.709C3.44641 13.6617 3.52266 13.5979 3.5844 13.5211C3.64614 13.4444 3.69216 13.3562 3.71983 13.2617C3.74751 13.1672 3.75629 13.0681 3.74568 12.9702C3.73507 12.8723 3.70528 12.7774 3.658 12.691L2.342 13.411ZM2.75 9.13699C2.75 6.98699 3.965 5.18299 5.624 4.42399C7.236 3.68699 9.402 3.88199 11.46 6.01999L12.54 4.98099C10.1 2.44399 7.264 2.02499 5 3.05999C2.786 4.07299 1.25 6.42499 1.25 9.13699H2.75ZM8.497 19.5C9.01 19.904 9.56 20.334 10.117 20.66C10.674 20.986 11.31 21.25 12 21.25V19.75C11.69 19.75 11.326 19.63 10.874 19.365C10.421 19.101 9.952 18.737 9.426 18.322L8.497 19.5ZM15.503 19.5C16.929 18.375 18.753 17.087 20.183 15.476C21.64 13.836 22.75 11.803 22.75 9.13699H21.25C21.25 11.335 20.35 13.028 19.062 14.48C17.747 15.96 16.09 17.127 14.574 18.322L15.503 19.5ZM22.75 9.13699C22.75 6.42499 21.215 4.07299 19 3.05999C16.736 2.02499 13.902 2.44399 11.46 4.97999L12.54 6.01999C14.598 3.88299 16.764 3.68699 18.376 4.42399C20.035 5.18299 21.25 6.98599 21.25 9.13699H22.75ZM14.574 18.322C14.048 18.737 13.579 19.101 13.126 19.365C12.673 19.629 12.31 19.75 12 19.75V21.25C12.69 21.25 13.326 20.985 13.883 20.66C14.441 20.334 14.99 19.904 15.503 19.5L14.574 18.322ZM9.426 18.322C8.63 17.695 7.821 17.095 7.001 16.42L6.047 17.58C6.877 18.263 7.755 18.915 8.497 19.5L9.426 18.322ZM3.658 12.692C3.05552 11.6044 2.74284 10.3802 2.75 9.13699H1.25C1.25 10.775 1.67 12.182 2.342 13.411L3.658 12.692Z"
                      fill="#0A0A0B"
                    />
                  </svg>
                  Saved
                </div>
              </button>
              <button
                class="text-left text-sm hover:bg-gray-100 px-2 py-1 rounded"
              >
                <div class="flex gap-3 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M3 14V10C3 6.229 3 4.343 4.172 3.172C5.344 2.001 7.229 2 11 2H13C16.771 2 18.657 2 19.828 3.172C20.482 3.825 20.771 4.7 20.898 6M21 10V14C21 17.771 21 19.657 19.828 20.828C18.656 21.999 16.771 22 13 22H11C7.229 22 5.343 22 4.172 20.828C3.518 20.175 3.229 19.3 3.102 18M8 14H13M8 10H9M16 10H12"
                      stroke="#0A0A0B"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                  Applied Job
                </div>
              </button>
              <button
                class="text-left text-sm hover:bg-gray-100 px-2 py-1 rounded"
              >
                <div class="flex gap-3 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5"
                    viewBox="0 0 18 22"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10.4216 0.199982H2.39961C1.92222 0.199982 1.46438 0.389624 1.12682 0.72719C0.789252 1.06476 0.599609 1.52259 0.599609 1.99998V20C0.599609 20.4774 0.789252 20.9352 1.12682 21.2728C1.46438 21.6103 1.92222 21.8 2.39961 21.8H15.5996C16.077 21.8 16.5348 21.6103 16.8724 21.2728C17.21 20.9352 17.3996 20.4774 17.3996 20V7.64238C17.3995 7.19175 17.2304 6.75755 16.9256 6.42558L11.7488 0.783182C11.5801 0.599276 11.375 0.452462 11.1465 0.352063C10.918 0.251664 10.6712 0.199874 10.4216 0.199982ZM1.79961 1.99998C1.79961 1.84085 1.86282 1.68824 1.97535 1.57572C2.08787 1.4632 2.24048 1.39998 2.39961 1.39998H10.4216C10.5049 1.39989 10.5872 1.41713 10.6635 1.4506C10.7397 1.48406 10.8081 1.53303 10.8644 1.59438L16.0412 7.23678C16.1429 7.34738 16.1995 7.49212 16.1996 7.64238V20C16.1996 20.1591 16.1364 20.3117 16.0239 20.4242C15.9114 20.5368 15.7587 20.6 15.5996 20.6H2.39961C2.24048 20.6 2.08787 20.5368 1.97535 20.4242C1.86282 20.3117 1.79961 20.1591 1.79961 20V1.99998Z"
                      fill="#0A0A0B"
                    />
                  </svg>
                  Resume (CV)
                </div>
              </button>
              <hr class="my-3 border-gray-300" />
              <button class="py-1.5 rounded-sm text-white bg-red-400">
                <div class="flex justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6"
                    viewBox="0 0 25 24"
                    fill="none"
                  >
                    <path
                      d="M10.5 12H20.5M20.5 12L17.5 9M20.5 12L17.5 15"
                      stroke="#D00000"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M4.5 12C4.5 9.87827 5.34285 7.84344 6.84315 6.34315C8.34344 4.84285 10.3783 4 12.5 4M12.5 20C11.3006 20.0007 10.1165 19.7314 9.03542 19.2121C7.95434 18.6928 7.00404 17.9367 6.255 17"
                      stroke="#D00000"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                  Log Out
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <div class="w-full flex justify-center px-4">
    <div
      class="flex border border-gray-500 px-10 py-3 gap-10 w-max items-center rounded-sm"
    >
      <div class="relative w-45 h-auto ml-0 text-black">
        <input
          type="text"
          id="searchjob"
          placeholder="Search Job"
          class="w-full pr-10 pl-3 py-1.5 text-sm bg-white border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          class="w-4 h-4 absolute right-3 top-1/2 transform -translate-y-1/2 text-black"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </div>
      <div class="w-[0.7px] h-[20px] bg-gray-400"></div>
      <!-- For Location -->
      <div
        class="flex justify-between items-center w-40 rounded-lg bg-white px-2 cursor-pointer"
        @click.stop="toggleLocationDropdown"
      >
        <div class="px-3 py-1.5 text-sm text-gray-500 flex justify-start gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-4 h-4"
            viewBox="0 0 24 25"
            fill="none"
          >
            <path
              d="M12.5598 21.32C12.3966 21.4372 12.2007 21.5003 11.9998 21.5003C11.7988 21.5003 11.603 21.4372 11.4398 21.32C6.61078 17.878 1.48578 10.798 6.66678 5.682C8.08912 4.28285 10.0046 3.49912 11.9998 3.5C13.9998 3.5 15.9188 4.285 17.3328 5.681C22.5138 10.797 17.3888 17.876 12.5598 21.32Z"
              stroke="#0A0A0B"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12 12.5C12.5304 12.5 13.0391 12.2893 13.4142 11.9142C13.7893 11.5391 14 11.0304 14 10.5C14 9.96957 13.7893 9.46086 13.4142 9.08579C13.0391 8.71071 12.5304 8.5 12 8.5C11.4696 8.5 10.9609 8.71071 10.5858 9.08579C10.2107 9.46086 10 9.96957 10 10.5C10 11.0304 10.2107 11.5391 10.5858 11.9142C10.9609 12.2893 11.4696 12.5 12 12.5Z"
              stroke="#0A0A0B"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          Location
        </div>
        <div class="relative">
          <div class="bg-transparent text-sm py-1.5 flex items-center">
            {{ selectedLocation }}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 ml-1"
              :class="{ 'rotate-180': isLocationDropdownOpen }"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
          <div
            v-if="isLocationDropdownOpen"
            class="absolute right-[-8px] mt-2 bg-white border border-gray-300 rounded-lg shadow-lg w-48 z-10"
          >
            <div class="p-2">
              <div
                @click="selectLocation('Phnom Penh')"
                class="px-3 py-2 hover:bg-sky-400 shadow-lg rounded cursor-pointer text-sm"
              >
                Phnom Penh
              </div>
              <div
                @click="selectLocation('Siem Reap')"
                class="px-3 py-2 hover:bg-sky-400 shadow-lg rounded cursor-pointer text-sm mt-1"
              >
                Siem Reap
              </div>
              <div
                @click="selectLocation('Battambang')"
                class="px-3 py-2 hover:bg-sky-400 shadow-lg rounded cursor-pointer text-sm mt-1"
              >
                Battambang
              </div>
              <div
                @click="selectLocation('Sihanoukville')"
                class="px-3 py-2 hover:bg-sky-400 shadow-lg rounded cursor-pointer text-sm mt-1"
              >
                Sihanoukville
              </div>
              <div
                @click="selectLocation('Remote')"
                class="px-3 py-2 hover:bg-sky-400 shadow-lg rounded cursor-pointer text-sm mt-1"
              >
                Remote
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-[0.7px] h-[20px] bg-gray-400"></div>
      <!-- Job type dropdown (whole div is clickable) -->
      <div
        class="flex justify-between items-center w-auto rounded-lg bg-white px-2 cursor-pointer"
        @click.stop="toggleDropdown"
      >
        <div class="px-3 py-1.5 text-sm text-gray-500 flex gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-4 h-4"
            viewBox="0 0 24 25"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9 2C8.30381 2 7.63613 2.27656 7.14384 2.76884C6.65156 3.26113 6.375 3.92881 6.375 4.625V6.5H4.5C3.70435 6.5 2.94129 6.81607 2.37868 7.37868C1.81607 7.94129 1.5 8.70435 1.5 9.5V20C1.5 20.7956 1.81607 21.5587 2.37868 22.1213C2.94129 22.6839 3.70435 23 4.5 23H19.5C20.2956 23 21.0587 22.6839 21.6213 22.1213C22.1839 21.5587 22.5 20.7956 22.5 20V9.5C22.5 8.70435 22.1839 7.94129 21.6213 7.37868C21.0587 6.81607 20.2956 6.5 19.5 6.5H17.625V4.625C17.625 3.92881 17.3484 3.26113 16.8562 2.76884C16.3639 2.27656 15.6962 2 15 2H9ZM15.375 6.5V4.625C15.375 4.52554 15.3355 4.43016 15.2652 4.35984C15.1948 4.28951 15.0995 4.25 15 4.25H9C8.90054 4.25 8.80516 4.28951 8.73483 4.35984C8.66451 4.43016 8.625 4.52554 8.625 4.625V6.5H15.375ZM4.5 8.75H19.5C19.6989 8.75 19.8897 8.82902 20.0303 8.96967C20.171 9.11032 20.25 9.30109 20.25 9.5V11H3.75V9.5C3.75 9.30109 3.82902 9.11032 3.96967 8.96967C4.11032 8.82902 4.30109 8.75 4.5 8.75ZM3.75 13.25V20C3.75 20.1989 3.82902 20.3897 3.96967 20.5303C4.11032 20.671 4.30109 20.75 4.5 20.75H19.5C19.6989 20.75 19.8897 20.671 20.0303 20.5303C20.171 20.3897 20.25 20.1989 20.25 20V13.25H13.5V15.5H10.5V13.25H3.75Z"
              fill="#171717"
            />
          </svg>

          Job type
        </div>
        <div class="relative">
          <div class="bg-transparent text-sm py-1.5 flex items-center">
            {{ selectedJobType }}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 ml-1"
              :class="{ 'rotate-180': isDropdownOpen }"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
          <div
            v-if="isDropdownOpen"
            class="absolute right-[-8px] mt-2 bg-white border border-gray-300 rounded-lg shadow-lg w-74 z-10"
          >
            <div class="grid grid-cols-3 grid-rows-2 gap-2 p-3">
              <div
                @click.stop="selectOption('full-time')"
                class="px-3 py-2 bg-white shadow-lg hover:bg-sky-400 rounded cursor-pointer text-center text-sm"
              >
                Full-time
              </div>
              <div
                @click.stop="selectOption('part-time')"
                class="px-3 py-2 hover:bg-sky-400 shadow-lg rounded cursor-pointer text-center text-sm"
              >
                Part-time
              </div>
              <div
                @click.stop="selectOption('remote')"
                class="px-3 py-2 hover:bg-sky-400 shadow-lg rounded cursor-pointer text-center text-sm"
              >
                Remote
              </div>
              <div
                @click.stop="selectOption('freelance')"
                class="px-3 py-2 hover:bg-sky-400 shadow-lg rounded cursor-pointer text-center text-sm"
              >
                Freelance
              </div>
              <div
                @click.stop="selectOption('internship')"
                class="px-3 py-2 hover:bg-sky-400 shadow-lg rounded cursor-pointer text-center text-sm"
              >
                Internship
              </div>
              <div
                @click.stop="selectOption('contract')"
                class="px-3 py-2 hover:bg-sky-400 rounded shadow-lg cursor-pointer text-center text-sm"
              >
                Contract
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-[0.7px] h-[20px] bg-gray-400"></div>
      <div
        class="flex justify-between items-center w-auto rounded-lg bg-white px-2 cursor-pointer"
        @click.stop="toggleExperienceDropdown"
      >
        <div class="px-3 py-1.5 text-sm text-gray-500 flex gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-4 h-4"
            viewBox="0 0 24 25"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9 2C8.30381 2 7.63613 2.27656 7.14384 2.76884C6.65156 3.26113 6.375 3.92881 6.375 4.625V6.5H4.5C3.70435 6.5 2.94129 6.81607 2.37868 7.37868C1.81607 7.94129 1.5 8.70435 1.5 9.5V20C1.5 20.7956 1.81607 21.5587 2.37868 22.1213C2.94129 22.6839 3.70435 23 4.5 23H19.5C20.2956 23 21.0587 22.6839 21.6213 22.1213C22.1839 21.5587 22.5 20.7956 22.5 20V9.5C22.5 8.70435 22.1839 7.94129 21.6213 7.37868C21.0587 6.81607 20.2956 6.5 19.5 6.5H17.625V4.625C17.625 3.92881 17.3484 3.26113 16.8562 2.76884C16.3639 2.27656 15.6962 2 15 2H9ZM15.375 6.5V4.625C15.375 4.52554 15.3355 4.43016 15.2652 4.35984C15.1948 4.28951 15.0995 4.25 15 4.25H9C8.90054 4.25 8.80516 4.28951 8.73483 4.35984C8.66451 4.43016 8.625 4.52554 8.625 4.625V6.5H15.375ZM4.5 8.75H19.5C19.6989 8.75 19.8897 8.82902 20.0303 8.96967C20.171 9.11032 20.25 9.30109 20.25 9.5V11H3.75V9.5C3.75 9.30109 3.82902 9.11032 3.96967 8.96967C4.11032 8.82902 4.30109 8.75 4.5 8.75ZM3.75 13.25V20C3.75 20.1989 3.82902 20.3897 3.96967 20.5303C4.11032 20.671 4.30109 20.75 4.5 20.75H19.5C19.6989 20.75 19.8897 20.671 20.0303 20.5303C20.171 20.3897 20.25 20.1989 20.25 20V13.25H13.5V15.5H10.5V13.25H3.75Z"
              fill="#171717"
            />
          </svg>

          Experience level
        </div>
        <div class="relative">
          <div class="bg-transparent text-sm py-1.5 flex items-center">
            {{ selectedExperienceLevel }}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 ml-1"
              :class="{ 'rotate-180': isExperienceDropdownOpen }"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
          <div
            v-if="isExperienceDropdownOpen"
            class="absolute right-[-8px] mt-2 bg-white border border-gray-300 rounded-lg shadow-lg w-74 z-10"
          >
            <div class="p-3">
              <!-- First row - 2 columns -->
              <div class="grid grid-cols-2 gap-2 mb-2">
                <div
                  @click.stop="selectExperience('Entry level')"
                  class="px-3 py-2 bg-white shadow-lg hover:bg-sky-400 rounded cursor-pointer text-center text-sm"
                >
                  Entry level
                </div>
                <div
                  @click.stop="selectExperience('Mid level')"
                  class="px-3 py-2 hover:bg-sky-400 shadow-lg rounded cursor-pointer text-center text-sm"
                >
                  Mid level
                </div>
              </div>
              <!-- Second row - 3 columns -->
              <div class="grid grid-cols-3 gap-2 mb-2">
                <div
                  @click.stop="selectExperience('Senior level')"
                  class="px-1 py-2 hover:bg-sky-400 shadow-lg rounded cursor-pointer text-center text-sm"
                >
                  Senior level
                </div>
                <div
                  @click.stop="selectExperience('Team lead')"
                  class="px-1 py-2 hover:bg-sky-400 shadow-lg rounded cursor-pointer text-center text-sm"
                >
                  Team lead
                </div>
                <div
                  @click.stop="selectExperience('Manager')"
                  class="px-1 py-2 hover:bg-sky-400 shadow-lg rounded cursor-pointer text-center text-sm"
                >
                  Manager
                </div>
              </div>
              <!-- Third row - 1 column -->
              <div class="grid grid-cols-1 gap-2">
                <div
                  @click.stop="selectExperience('Executive')"
                  class="px-3 py-2 hover:bg-sky-400 rounded shadow-lg cursor-pointer text-center text-sm w-36"
                >
                  Executive
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-[0.7px] h-[20px] bg-gray-400"></div>
      <!-- Salary Type Dropdown -->
      <div
        class="flex justify-between items-center w-40 rounded-lg bg-white px-2 cursor-pointer"
        @click.stop="toggleSalaryDropdown"
      >
        <div
          class="px-3 py-1.5 text-sm text-gray-500 flex gap-2 justify-center items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-4 h-4"
            viewBox="0 0 24 25"
            fill="none"
          >
            <path
              d="M19 11.642C18.6681 11.5944 18.3345 11.5587 18 11.535M6 13.465C5.65867 13.441 5.32533 13.4053 5 13.358M14.5 12.5C14.5 13.163 14.2366 13.7989 13.7678 14.2678C13.2989 14.7366 12.663 15 12 15C11.337 15 10.7011 14.7366 10.2322 14.2678C9.76339 13.7989 9.5 13.163 9.5 12.5C9.5 11.837 9.76339 11.2011 10.2322 10.7322C10.7011 10.2634 11.337 10 12 10C12.663 10 13.2989 10.2634 13.7678 10.7322C14.2366 11.2011 14.5 11.837 14.5 12.5Z"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12 20C10.668 20.622 8.917 21 7 21C5.934 21 4.92 20.883 4 20.673C2.5 20.329 2 19.426 2 17.886V7.114C2 6.129 3.04 5.453 4 5.673C4.92 5.883 5.934 6 7 6C8.917 6 10.668 5.622 12 5C13.332 4.378 15.083 4 17 4C18.066 4 19.08 4.117 20 4.327C21.582 4.69 22 5.62 22 7.114V17.886C22 18.871 20.96 19.547 20 19.327C19.08 19.117 18.066 19 17 19C15.083 19 13.332 19.378 12 20Z"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          Salary
        </div>
        <div class="relative">
          <div class="bg-transparent text-sm py-1.5 flex items-center">
            {{ selectedSalary }}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 ml-1"
              :class="{ 'rotate-180': isSalaryDropdownOpen }"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
          <div
            v-if="isSalaryDropdownOpen"
            class="absolute right-[-8px] mt-2 bg-white border border-gray-300 rounded-lg shadow-lg w-74 z-10"
          >
            <div class="grid grid-cols-3 gap-2 p-3">
              <div
                v-for="amount in salaryOptions"
                :key="amount"
                @click.stop="selectSalary(amount)"
                class="px-3 py-2 bg-white shadow-lg hover:bg-sky-400 rounded cursor-pointer text-center text-sm"
              >
                ${{ amount }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
   

   <!-- Second Section -->
    <div class="flex w-auto h-auto px-37 pr-20 pt-9 gap-30">
      <!-- Col 1 -->
       <div class=" flex flex-col" >
        <!-- Drop down one -->
         <div class="relative inline-block" id="jobExploreContainer">
         <!-- Dropdown Button -->
         <div
           class="w-60 bg-green-500 text-white rounded-md px-4 py-2 flex items-center justify-between cursor-pointer hover:bg-green-600 transition-colors"
           @click="toggleDropdownn"
         >
           <span class="font-medium">Explore jobs</span>
           <svg
             xmlns="http://www.w3.org/2000/svg"
             class="h-4 w-4 ml-1 transition-transform duration-300"
             id="jobExploreArrow"
             fill="none"
             viewBox="0 0 24 24"
             stroke="currentColor"
           >
             <path
               stroke-linecap="round"
               stroke-linejoin="round"
               stroke-width="2"
               d="M19 9l-7 7-7-7"
             />
           </svg>
         </div>
   
         <!-- Dropdown Menu -->
         <div
           class="absolute left-0 mt-1 w-60 bg-white rounded-md shadow-lg z-10 border border-gray-200 overflow-hidden"
           v-show="jobExploreMenuOpen"
           id="jobExploreMenu"
         >
           <div class="py-1">
             <!-- Job Categories -->
             <div class="px-4 py-2 text-sm font-semibold text-gray-700 bg-gray-50">
               Popular Categories
             </div>
   
             <a
               href="#"
               class="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
             >
               <svg
                 xmlns="http://www.w3.org/2000/svg"
                 class="h-4 w-4 mr-2 text-blue-500"
                 fill="none"
                 viewBox="0 0 24 24"
                 stroke="currentColor"
               >
                 <path
                   stroke-linecap="round"
                   stroke-linejoin="round"
                   stroke-width="2"
                   d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                 />
               </svg>
               Software Development
             </a>
   
             <a
               href="#"
               class="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
             >
               <svg
                 xmlns="http://www.w3.org/2000/svg"
                 class="h-4 w-4 mr-2 text-purple-500"
                 fill="none"
                 viewBox="0 0 24 24"
                 stroke="currentColor"
               >
                 <path
                   stroke-linecap="round"
                   stroke-linejoin="round"
                   stroke-width="2"
                   d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                 />
               </svg>
               Data Science & Analytics
             </a>
   
             <a
               href="#"
               class="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
             >
               <svg
                 xmlns="http://www.w3.org/2000/svg"
                 class="h-4 w-4 mr-2 text-green-500"
                 fill="none"
                 viewBox="0 0 24 24"
                 stroke="currentColor"
               >
                 <path
                   stroke-linecap="round"
                   stroke-linejoin="round"
                   stroke-width="2"
                   d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                 />
               </svg>
               Finance & Accounting
             </a>
   
             <div class="border-t border-gray-200"></div>
             <div class="px-4 py-2 text-sm font-semibold text-gray-700 bg-gray-50">
               Industries
             </div>
   
             <a
               href="#"
               class="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
             >
               <svg
                 xmlns="http://www.w3.org/2000/svg"
                 class="h-4 w-4 mr-2 text-amber-500"
                 fill="none"
                 viewBox="0 0 24 24"
                 stroke="currentColor"
               >
                 <path
                   stroke-linecap="round"
                   stroke-linejoin="round"
                   stroke-width="2"
                   d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                 />
               </svg>
               Healthcare
             </a>
   
             <a
               href="#"
               class="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
             >
               <svg
                 xmlns="http://www.w3.org/2000/svg"
                 class="h-4 w-4 mr-2 text-red-500"
                 fill="none"
                 viewBox="0 0 24 24"
                 stroke="currentColor"
               >
                 <path
                   stroke-linecap="round"
                   stroke-linejoin="round"
                   stroke-width="2"
                   d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                 />
               </svg>
               Real Estate
             </a>
   
             <a
               href="#"
               class="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
             >
               <svg
                 xmlns="http://www.w3.org/2000/svg"
                 class="h-4 w-4 mr-2 text-indigo-500"
                 fill="none"
                 viewBox="0 0 24 24"
                 stroke="currentColor"
               >
                 <path
                   stroke-linecap="round"
                   stroke-linejoin="round"
                   stroke-width="2"
                   d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                 />
               </svg>
               Technology
             </a>
   
             <div class="border-t border-gray-200"></div>
   
             <a
               href="#"
               class="flex items-center justify-between px-4 py-2 text-sm font-medium text-green-600 hover:bg-gray-100"
             >
               <span>View all job categories</span>
               <svg
                 xmlns="http://www.w3.org/2000/svg"
                 class="h-4 w-4"
                 fill="none"
                 viewBox="0 0 24 24"
                 stroke="currentColor"
               >
                 <path
                   stroke-linecap="round"
                   stroke-linejoin="round"
                   stroke-width="2"
                   d="M9 5l7 7-7 7"
                 />
               </svg>
             </a>
           </div>
         </div>
         </div>
         <!-- Drop down two -->
<div class="relative inline-block mt-4" id="companyExploreContainer">
  <!-- Dropdown Button -->
  <div
    class="w-60 bg-blue-500 text-white rounded-md px-4 py-2 flex items-center justify-between cursor-pointer hover:bg-blue-600 transition-colors"
    @click="toggleCompanyDropdown"
  >
    <span class="font-medium">Explore Companies</span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-4 w-4 ml-1 transition-transform duration-300"
      id="companyExploreArrow"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M19 9l-7 7-7-7"
      />
    </svg>
  </div>

  <!-- Dropdown Menu -->
  <div
    class="absolute left-0 mt-1 w-60 bg-white rounded-md shadow-lg z-10 border border-gray-200 overflow-hidden"
    v-show="companyExploreMenuOpen"
    id="companyExploreMenu"
  >
    <div class="py-1">
      <div class="px-4 py-2 text-sm font-semibold text-gray-700 bg-gray-50">
        Top Companies
      </div>

      <a href="#" class="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
        <span class="mr-2 font-bold text-indigo-500">🏢</span>
        Google
      </a>

      <a href="#" class="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
        <span class="mr-2 font-bold text-green-500">🏢</span>
        Microsoft
      </a>

      <a href="#" class="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
        <span class="mr-2 font-bold text-yellow-500">🏢</span>
        Amazon
      </a>

      <a href="#" class="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
        <span class="mr-2 font-bold text-blue-400">🏢</span>
        Meta
      </a>

      <a href="#" class="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
        <span class="mr-2 font-bold text-red-400">🏢</span>
        Netflix
      </a>

      <div class="border-t border-gray-200"></div>

      <a href="#" class="flex items-center justify-between px-4 py-2 text-sm font-medium text-blue-600 hover:bg-gray-100">
        <span>View all companies</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </a>
    </div>
  </div>
</div>
       </div>
      <!-- Col 2 -->
       <!-- Each card -->
       <div class="flex-row gap-5">
      <div class="w-full h-auto p-5 bg-amber-50 flex justify-between items-start gap-8 rounded-sm mb-10">
  
        <!-- Image Section -->
        <div class="w-[150px] h-[120px] bg-cover ">
          <img
            class="w-full h-full object-cover rounded-sm"
            src="../img/image-11.jpg"
            alt="Job Image"
          />
        </div>
      
        <!-- Col 2-1: Job Info -->
        <div class="flex flex-col flex-3 pl-5 gap-2 pr-15">
          <div class="flex gap-3">
            <span class="font-semibold text-lg">Web Developer</span>
            <span class="text-gray-600">ABA BANK</span>
          </div>
      
          <div class="flex flex-row gap-4">
            <div class="flex flex-col gap-0.5">
              <span class="text-sm text-gray-500">Job Type</span>
              <span>Full-time</span>
            </div>
            <div class="flex flex-col gap-0.5">
              <span class="text-sm text-gray-500">Location</span>
              <span>Phnom Penh</span>
            </div>
            <div class="flex flex-col gap-0.5">
              <span class="text-sm text-gray-500">Level</span>
              <span>Mid-Senior</span>
            </div>
            <div class="flex flex-col gap-0.5">
              <span class="text-sm text-gray-500">Experience</span>
              <span>2+ years</span>
            </div>
          </div>
      
          <span class="text-sm text-gray-700">
            Job Opportunity with ABA Bank! <br />
            We're looking for talented, passionate, and ambitious...
          </span>
        </div>
      
        <!-- Col 2-2: Salary & Action -->
        <div class="flex flex-col items-end gap-2 text-right">
          <span class="text-green-600 font-semibold">$700 ~ $1200</span>
          <div class="flex gap-2 text-sm text-gray-600">
            <span class="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 25" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 18.3C16.034 18.3 19.686 16.05 21.648 12.5C19.686 8.95 16.034 6.7 12 6.7C7.966 6.7 4.314 8.95 2.352 12.5C4.314 16.05 7.966 18.3 12 18.3ZM12 5.5C16.808 5.5 20.972 8.348 23 12.5C20.972 16.652 16.808 19.5 12 19.5C7.192 19.5 3.028 16.652 1 12.5C3.028 8.348 7.192 5.5 12 5.5ZM12 15.3C12.7426 15.3 13.4548 15.005 13.9799 14.4799C14.505 13.9548 14.8 13.2426 14.8 12.5C14.8 11.7574 14.505 11.0452 13.9799 10.5201C13.4548 9.995 12.7426 9.7 12 9.7C11.2574 9.7 10.5452 9.995 10.0201 10.5201C9.495 11.0452 9.2 11.7574 9.2 12.5C9.2 13.2426 9.495 13.9548 10.0201 14.4799C10.5452 15.005 11.2574 15.3 12 15.3ZM12 16.5C10.9391 16.5 9.92172 16.0786 9.17157 15.3284C8.42143 14.5783 8 13.5609 8 12.5C8 11.4391 8.42143 10.4217 9.17157 9.67157C9.92172 8.92143 10.9391 8.5 12 8.5C13.0609 8.5 14.0783 8.92143 14.8284 9.67157C15.5786 10.4217 16 11.4391 16 12.5C16 13.5609 15.5786 14.5783 14.8284 15.3284C14.0783 16.0786 13.0609 16.5 12 16.5Z" fill="#919191"/>
</svg>
              102 views</span>
            <span class="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 25" fill="none">
<path d="M5 5.5H18C18.7956 5.5 19.5587 5.81607 20.1213 6.37868C20.6839 6.94129 21 7.70435 21 8.5V17.5C21 18.2956 20.6839 19.0587 20.1213 19.6213C19.5587 20.1839 18.7956 20.5 18 20.5H5C4.20435 20.5 3.44129 20.1839 2.87868 19.6213C2.31607 19.0587 2 18.2956 2 17.5V8.5C2 7.70435 2.31607 6.94129 2.87868 6.37868C3.44129 5.81607 4.20435 5.5 5 5.5ZM5 6.5C4.5 6.5 4.06 6.67 3.72 6.97L11.5 12L19.28 6.97C18.94 6.67 18.5 6.5 18 6.5H5ZM11.5 13.21L3.13 7.78C3.05 8 3 8.25 3 8.5V17.5C3 18.0304 3.21071 18.5391 3.58579 18.9142C3.96086 19.2893 4.46957 19.5 5 19.5H18C18.5304 19.5 19.0391 19.2893 19.4142 18.9142C19.7893 18.5391 20 18.0304 20 17.5V8.5C20 8.25 19.95 8 19.87 7.78L11.5 13.21Z" fill="#919191"/>
</svg>
              56 applicants</span>
          </div>
          <span class="text-xs text-gray-500 flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 25" fill="none">
<path d="M12 3.5C7.03125 3.5 3 7.53125 3 12.5C3 17.4688 7.03125 21.5 12 21.5C16.9688 21.5 21 17.4688 21 12.5C21 7.53125 16.9688 3.5 12 3.5Z" stroke="#919191" stroke-width="1.5" stroke-miterlimit="10"/>
<path d="M12 6.5V13.25H16.5" stroke="#919191" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
            7 days ago</span>
          <button class="mt-1 px-4 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700">
            Apply
          </button>
        </div>
      </div>
      <div class="w-full h-auto p-5 bg-amber-50 flex justify-between items-start gap-8 rounded-sm mb-10">
  
        <!-- Image Section -->
        <div class="w-[150px] h-[120px] bg-cover ">
          <img
            class="w-full h-full object-cover rounded-sm"
            src="../img/image-11.jpg"
            alt="Job Image"
          />
        </div>
      
        <!-- Col 2-1: Job Info -->
        <div class="flex flex-col flex-3 pl-5 gap-2 pr-15">
          <div class="flex gap-3">
            <span class="font-semibold text-lg">Web Developer</span>
            <span class="text-gray-600">ABA BANK</span>
          </div>
      
          <div class="flex flex-row gap-4">
            <div class="flex flex-col gap-0.5">
              <span class="text-sm text-gray-500">Job Type</span>
              <span>Full-time</span>
            </div>
            <div class="flex flex-col gap-0.5">
              <span class="text-sm text-gray-500">Location</span>
              <span>Phnom Penh</span>
            </div>
            <div class="flex flex-col gap-0.5">
              <span class="text-sm text-gray-500">Level</span>
              <span>Mid-Senior</span>
            </div>
            <div class="flex flex-col gap-0.5">
              <span class="text-sm text-gray-500">Experience</span>
              <span>2+ years</span>
            </div>
          </div>
      
          <span class="text-sm text-gray-700">
            Job Opportunity with ABA Bank! <br />
            We're looking for talented, passionate, and ambitious...
          </span>
        </div>
      
        <!-- Col 2-2: Salary & Action -->
        <div class="flex flex-col items-end gap-2 text-right">
          <span class="text-green-600 font-semibold">$700 ~ $1200</span>
          <div class="flex gap-2 text-sm text-gray-600">
            <span class="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 25" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 18.3C16.034 18.3 19.686 16.05 21.648 12.5C19.686 8.95 16.034 6.7 12 6.7C7.966 6.7 4.314 8.95 2.352 12.5C4.314 16.05 7.966 18.3 12 18.3ZM12 5.5C16.808 5.5 20.972 8.348 23 12.5C20.972 16.652 16.808 19.5 12 19.5C7.192 19.5 3.028 16.652 1 12.5C3.028 8.348 7.192 5.5 12 5.5ZM12 15.3C12.7426 15.3 13.4548 15.005 13.9799 14.4799C14.505 13.9548 14.8 13.2426 14.8 12.5C14.8 11.7574 14.505 11.0452 13.9799 10.5201C13.4548 9.995 12.7426 9.7 12 9.7C11.2574 9.7 10.5452 9.995 10.0201 10.5201C9.495 11.0452 9.2 11.7574 9.2 12.5C9.2 13.2426 9.495 13.9548 10.0201 14.4799C10.5452 15.005 11.2574 15.3 12 15.3ZM12 16.5C10.9391 16.5 9.92172 16.0786 9.17157 15.3284C8.42143 14.5783 8 13.5609 8 12.5C8 11.4391 8.42143 10.4217 9.17157 9.67157C9.92172 8.92143 10.9391 8.5 12 8.5C13.0609 8.5 14.0783 8.92143 14.8284 9.67157C15.5786 10.4217 16 11.4391 16 12.5C16 13.5609 15.5786 14.5783 14.8284 15.3284C14.0783 16.0786 13.0609 16.5 12 16.5Z" fill="#919191"/>
</svg>
              102 views</span>
            <span class="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 25" fill="none">
<path d="M5 5.5H18C18.7956 5.5 19.5587 5.81607 20.1213 6.37868C20.6839 6.94129 21 7.70435 21 8.5V17.5C21 18.2956 20.6839 19.0587 20.1213 19.6213C19.5587 20.1839 18.7956 20.5 18 20.5H5C4.20435 20.5 3.44129 20.1839 2.87868 19.6213C2.31607 19.0587 2 18.2956 2 17.5V8.5C2 7.70435 2.31607 6.94129 2.87868 6.37868C3.44129 5.81607 4.20435 5.5 5 5.5ZM5 6.5C4.5 6.5 4.06 6.67 3.72 6.97L11.5 12L19.28 6.97C18.94 6.67 18.5 6.5 18 6.5H5ZM11.5 13.21L3.13 7.78C3.05 8 3 8.25 3 8.5V17.5C3 18.0304 3.21071 18.5391 3.58579 18.9142C3.96086 19.2893 4.46957 19.5 5 19.5H18C18.5304 19.5 19.0391 19.2893 19.4142 18.9142C19.7893 18.5391 20 18.0304 20 17.5V8.5C20 8.25 19.95 8 19.87 7.78L11.5 13.21Z" fill="#919191"/>
</svg>
              56 applicants</span>
          </div>
          <span class="text-xs text-gray-500 flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 25" fill="none">
<path d="M12 3.5C7.03125 3.5 3 7.53125 3 12.5C3 17.4688 7.03125 21.5 12 21.5C16.9688 21.5 21 17.4688 21 12.5C21 7.53125 16.9688 3.5 12 3.5Z" stroke="#919191" stroke-width="1.5" stroke-miterlimit="10"/>
<path d="M12 6.5V13.25H16.5" stroke="#919191" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
            7 days ago</span>
          <button class="mt-1 px-4 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700">
            Apply
          </button>
        </div>
      </div>
      <div class="w-full h-auto p-5 bg-amber-50a flex justify-between items-start gap-8 rounded-sm mb-10">
  
        <!-- Image Section -->
        <div class="w-[150px] h-[120px] bg-cover ">
          <img
            class="w-full h-full object-cover rounded-sm"
            src="../img/image-11.jpg"
            alt="Job Image"
          />
        </div>
      
        <!-- Col 2-1: Job Info -->
        <div class="flex flex-col flex-3 pl-5 gap-2 pr-15">
          <div class="flex gap-3">
            <span class="font-semibold text-lg">Web Developer</span>
            <span class="text-gray-600">ABA BANK</span>
          </div>
      
          <div class="flex flex-row gap-4">
            <div class="flex flex-col gap-0.5">
              <span class="text-sm text-gray-500">Job Type</span>
              <span>Full-time</span>
            </div>
            <div class="flex flex-col gap-0.5">
              <span class="text-sm text-gray-500">Location</span>
              <span>Phnom Penh</span>
            </div>
            <div class="flex flex-col gap-0.5">
              <span class="text-sm text-gray-500">Level</span>
              <span>Mid-Senior</span>
            </div>
            <div class="flex flex-col gap-0.5">
              <span class="text-sm text-gray-500">Experience</span>
              <span>2+ years</span>
            </div>
          </div>
      
          <span class="text-sm text-gray-700">
            Job Opportunity with ABA Bank! <br />
            We're looking for talented, passionate, and ambitious...
          </span>
        </div>
      
        <!-- Col 2-2: Salary & Action -->
        <div class="flex flex-col items-end gap-2 text-right">
          <span class="text-green-600 font-semibold">$700 ~ $1200</span>
          <div class="flex gap-2 text-sm text-gray-600">
            <span class="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 25" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 18.3C16.034 18.3 19.686 16.05 21.648 12.5C19.686 8.95 16.034 6.7 12 6.7C7.966 6.7 4.314 8.95 2.352 12.5C4.314 16.05 7.966 18.3 12 18.3ZM12 5.5C16.808 5.5 20.972 8.348 23 12.5C20.972 16.652 16.808 19.5 12 19.5C7.192 19.5 3.028 16.652 1 12.5C3.028 8.348 7.192 5.5 12 5.5ZM12 15.3C12.7426 15.3 13.4548 15.005 13.9799 14.4799C14.505 13.9548 14.8 13.2426 14.8 12.5C14.8 11.7574 14.505 11.0452 13.9799 10.5201C13.4548 9.995 12.7426 9.7 12 9.7C11.2574 9.7 10.5452 9.995 10.0201 10.5201C9.495 11.0452 9.2 11.7574 9.2 12.5C9.2 13.2426 9.495 13.9548 10.0201 14.4799C10.5452 15.005 11.2574 15.3 12 15.3ZM12 16.5C10.9391 16.5 9.92172 16.0786 9.17157 15.3284C8.42143 14.5783 8 13.5609 8 12.5C8 11.4391 8.42143 10.4217 9.17157 9.67157C9.92172 8.92143 10.9391 8.5 12 8.5C13.0609 8.5 14.0783 8.92143 14.8284 9.67157C15.5786 10.4217 16 11.4391 16 12.5C16 13.5609 15.5786 14.5783 14.8284 15.3284C14.0783 16.0786 13.0609 16.5 12 16.5Z" fill="#919191"/>
</svg>
              102 views</span>
            <span class="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 25" fill="none">
<path d="M5 5.5H18C18.7956 5.5 19.5587 5.81607 20.1213 6.37868C20.6839 6.94129 21 7.70435 21 8.5V17.5C21 18.2956 20.6839 19.0587 20.1213 19.6213C19.5587 20.1839 18.7956 20.5 18 20.5H5C4.20435 20.5 3.44129 20.1839 2.87868 19.6213C2.31607 19.0587 2 18.2956 2 17.5V8.5C2 7.70435 2.31607 6.94129 2.87868 6.37868C3.44129 5.81607 4.20435 5.5 5 5.5ZM5 6.5C4.5 6.5 4.06 6.67 3.72 6.97L11.5 12L19.28 6.97C18.94 6.67 18.5 6.5 18 6.5H5ZM11.5 13.21L3.13 7.78C3.05 8 3 8.25 3 8.5V17.5C3 18.0304 3.21071 18.5391 3.58579 18.9142C3.96086 19.2893 4.46957 19.5 5 19.5H18C18.5304 19.5 19.0391 19.2893 19.4142 18.9142C19.7893 18.5391 20 18.0304 20 17.5V8.5C20 8.25 19.95 8 19.87 7.78L11.5 13.21Z" fill="#919191"/>
</svg>
              56 applicants</span>
          </div>
          <span class="text-xs text-gray-500 flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 25" fill="none">
<path d="M12 3.5C7.03125 3.5 3 7.53125 3 12.5C3 17.4688 7.03125 21.5 12 21.5C16.9688 21.5 21 17.4688 21 12.5C21 7.53125 16.9688 3.5 12 3.5Z" stroke="#919191" stroke-width="1.5" stroke-miterlimit="10"/>
<path d="M12 6.5V13.25H16.5" stroke="#919191" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
            7 days ago</span>
          <button class="mt-1 px-4 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700">
            Apply
          </button>
        </div>
      </div>
      <div class="w-full h-auto p-5 bg-amber-50 flex justify-between items-start gap-8 rounded-sm mb-10">
  
        <!-- Image Section -->
        <div class="w-[150px] h-[120px] bg-cover ">
          <img
            class="w-full h-full object-cover rounded-sm"
            src="../img/image-11.jpg"
            alt="Job Image"
          />
        </div>
      
        <!-- Col 2-1: Job Info -->
        <div class="flex flex-col flex-3 pl-5 gap-2 pr-15">
          <div class="flex gap-3">
            <span class="font-semibold text-lg">Web Developer</span>
            <span class="text-gray-600">ABA BANK</span>
          </div>
      
          <div class="flex flex-row gap-4">
            <div class="flex flex-col gap-0.5">
              <span class="text-sm text-gray-500">Job Type</span>
              <span>Full-time</span>
            </div>
            <div class="flex flex-col gap-0.5">
              <span class="text-sm text-gray-500">Location</span>
              <span>Phnom Penh</span>
            </div>
            <div class="flex flex-col gap-0.5">
              <span class="text-sm text-gray-500">Level</span>
              <span>Mid-Senior</span>
            </div>
            <div class="flex flex-col gap-0.5">
              <span class="text-sm text-gray-500">Experience</span>
              <span>2+ years</span>
            </div>
          </div>
      
          <span class="text-sm text-gray-700">
            Job Opportunity with ABA Bank! <br />
            We're looking for talented, passionate, and ambitious...
          </span>
        </div>
      
        <!-- Col 2-2: Salary & Action -->
        <div class="flex flex-col items-end gap-2 text-right">
          <span class="text-green-600 font-semibold">$700 ~ $1200</span>
          <div class="flex gap-2 text-sm text-gray-600">
            <span class="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 25" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 18.3C16.034 18.3 19.686 16.05 21.648 12.5C19.686 8.95 16.034 6.7 12 6.7C7.966 6.7 4.314 8.95 2.352 12.5C4.314 16.05 7.966 18.3 12 18.3ZM12 5.5C16.808 5.5 20.972 8.348 23 12.5C20.972 16.652 16.808 19.5 12 19.5C7.192 19.5 3.028 16.652 1 12.5C3.028 8.348 7.192 5.5 12 5.5ZM12 15.3C12.7426 15.3 13.4548 15.005 13.9799 14.4799C14.505 13.9548 14.8 13.2426 14.8 12.5C14.8 11.7574 14.505 11.0452 13.9799 10.5201C13.4548 9.995 12.7426 9.7 12 9.7C11.2574 9.7 10.5452 9.995 10.0201 10.5201C9.495 11.0452 9.2 11.7574 9.2 12.5C9.2 13.2426 9.495 13.9548 10.0201 14.4799C10.5452 15.005 11.2574 15.3 12 15.3ZM12 16.5C10.9391 16.5 9.92172 16.0786 9.17157 15.3284C8.42143 14.5783 8 13.5609 8 12.5C8 11.4391 8.42143 10.4217 9.17157 9.67157C9.92172 8.92143 10.9391 8.5 12 8.5C13.0609 8.5 14.0783 8.92143 14.8284 9.67157C15.5786 10.4217 16 11.4391 16 12.5C16 13.5609 15.5786 14.5783 14.8284 15.3284C14.0783 16.0786 13.0609 16.5 12 16.5Z" fill="#919191"/>
</svg>
              102 views</span>
            <span class="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 25" fill="none">
<path d="M5 5.5H18C18.7956 5.5 19.5587 5.81607 20.1213 6.37868C20.6839 6.94129 21 7.70435 21 8.5V17.5C21 18.2956 20.6839 19.0587 20.1213 19.6213C19.5587 20.1839 18.7956 20.5 18 20.5H5C4.20435 20.5 3.44129 20.1839 2.87868 19.6213C2.31607 19.0587 2 18.2956 2 17.5V8.5C2 7.70435 2.31607 6.94129 2.87868 6.37868C3.44129 5.81607 4.20435 5.5 5 5.5ZM5 6.5C4.5 6.5 4.06 6.67 3.72 6.97L11.5 12L19.28 6.97C18.94 6.67 18.5 6.5 18 6.5H5ZM11.5 13.21L3.13 7.78C3.05 8 3 8.25 3 8.5V17.5C3 18.0304 3.21071 18.5391 3.58579 18.9142C3.96086 19.2893 4.46957 19.5 5 19.5H18C18.5304 19.5 19.0391 19.2893 19.4142 18.9142C19.7893 18.5391 20 18.0304 20 17.5V8.5C20 8.25 19.95 8 19.87 7.78L11.5 13.21Z" fill="#919191"/>
</svg>
              56 applicants</span>
          </div>
          <span class="text-xs text-gray-500 flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 25" fill="none">
<path d="M12 3.5C7.03125 3.5 3 7.53125 3 12.5C3 17.4688 7.03125 21.5 12 21.5C16.9688 21.5 21 17.4688 21 12.5C21 7.53125 16.9688 3.5 12 3.5Z" stroke="#919191" stroke-width="1.5" stroke-miterlimit="10"/>
<path d="M12 6.5V13.25H16.5" stroke="#919191" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
            7 days ago</span>
          <button class="mt-1 px-4 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700">
            Apply
          </button>
        </div>
      </div>
      
    </div>
    </div>
      <!-- Footer -->
  <div class="w-full bg-blue-950 text-blue-50 flex justify-between p-15">
    <!-- Left  -->
    <div class="flex flex-col gap-4">
      <h2 class="text-2xl">Contact Us</h2>
      <div class="flex flex-col gap-1">
        <div class="flex gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
            />
          </svg>
          <span
            >Russian Federation Boulevard, Toul Kork, Phnom Penh, Cambodia</span
          >
        </div>
        <div class="flex gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="{1.5}"
            stroke="currentColor"
            class="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
            />
          </svg>
          <span>(+855) 853 616 11</span>
        </div>
        <div class="flex gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="{1.5}"
            stroke="currentColor"
            class="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
            />
          </svg>

          <span>ITjob@gmail.com</span>
        </div>
      </div>
    </div>
    <!-- Right -->
    <div class="flex flex-col justify-between gap-4">
      <div class="w-full flex justify-center">
        <img class="w-25 h-11" src="../img/logo.png" alt="" />
      </div>
      <div class="flex flex-row gap-2">
        <span>Follow Us on:</span>
        <div class="flex gap-4">
          <img class="w-7 h-7" src="../img/logos_facebook.svg" alt="" />
          <img class="w-7 h-7" src="../img/logos_telegram.svg" alt="" />
          <img class="w-7 h-7" src="../img/logos_tiktok-icon.svg" alt="" />
          <img class="w-7 h-7" src="../img/skill-icons_instagram.svg" alt="" />
          <img class="w-7 h-7" src="../img/devicon_linkedin.svg" alt="" />
        </div>
      </div>
      <div class="flex gap-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="{1.5}"
          stroke="currentColor"
          class="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7.864 4.243A7.5 7.5 0 0 1 19.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 0 0 4.5 10.5a7.464 7.464 0 0 1-1.15 3.993m1.989 3.559A11.209 11.209 0 0 0 8.25 10.5a3.75 3.75 0 1 1 7.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 0 1-3.6 9.75m6.633-4.596a18.666 18.666 0 0 1-2.485 5.33"
          />
        </svg>

        <span>2025 ITJobs (Cambodia) Co., Ltd. All Rights Reserved.</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import logo from "../img/logo.png";

// Job type dropdown functionality
const selectedJobType = ref("");
const isDropdownOpen = ref(false);

const toggleDropdown = (event) => {
  // Prevent the native select from opening
  event.preventDefault();
  isDropdownOpen.value = !isDropdownOpen.value;

  // Close other dropdowns if they're open
  if (isDropdownOpen.value) {
    isExperienceDropdownOpen.value = false;
    isLocationDropdownOpen.value = false;
  }
};

const selectOption = (value) => {
  selectedJobType.value = value;
  isDropdownOpen.value = false;
};

// === Experience Level Dropdown ===
const selectedExperienceLevel = ref("");
const isExperienceDropdownOpen = ref(false);

const toggleExperienceDropdown = (event) => {
  event.stopPropagation();
  isExperienceDropdownOpen.value = !isExperienceDropdownOpen.value;

  if (isExperienceDropdownOpen.value) {
    isJobDropdownOpen.value = false;
    isLocationDropdownOpen.value = false;
    isMoneyDropdownOpen.value = false;
  }
};

const selectExperience = (value) => {
  selectedExperienceLevel.value = value;
  isExperienceDropdownOpen.value = false;
};

// === Location Dropdown ===
const selectedLocation = ref("");
const isLocationDropdownOpen = ref(false);

const toggleLocationDropdown = (event) => {
  event.stopPropagation();
  isLocationDropdownOpen.value = !isLocationDropdownOpen.value;

  if (isLocationDropdownOpen.value) {
    isJobDropdownOpen.value = false;
    isExperienceDropdownOpen.value = false;
    isMoneyDropdownOpen.value = false;
  }
};

const selectLocation = (value) => {
  selectedLocation.value = value;
  isLocationDropdownOpen.value = false;
};

// For money

const selectedSalary = ref("$200");
const isSalaryDropdownOpen = ref(false);
const salaryOptions = [200, 300, 400, 500, 600, 700];

const toggleSalaryDropdown = () => {
  isSalaryDropdownOpen.value = !isSalaryDropdownOpen.value;
  isDropdownOpen.value = false; // close other dropdowns if needed
};

const selectSalary = (amount) => {
  selectedSalary.value = `$${amount}`;
  isSalaryDropdownOpen.value = false;
};
// for col 1
const jobExploreMenuOpen = ref(false);

const toggleDropdownn = () => {
  jobExploreMenuOpen.value = !jobExploreMenuOpen.value;
};

const closeDropdownn = (e) => {
  const container = document.getElementById("jobExploreContainer");
  if (container && !container.contains(e.target)) {
    jobExploreMenuOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", closeDropdownn);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", closeDropdownn);
});

// For second drop down
const companyExploreMenuOpen = ref(false)

function toggleCompanyDropdown() {
  companyExploreMenuOpen.value = !companyExploreMenuOpen.value
}
</script>

<style scoped></style>
