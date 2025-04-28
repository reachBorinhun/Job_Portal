<template>
  <!-- Nav bar -->
  <nav>
    <div class="w-full h-15 flex justify-between px-10 items-center">
      <div class="w-28 h-full object-cover py-2"><img :src="logo" /></div>
      <div class="flex justify-between items-center ">
        <div class="flex  justify-center items-center gap-5">
          <button class="bg-sky-500 w-15 h-7 rounded-full text-[14px]">
            Home
          </button>
          <button class="w-15 h-7 rounded-full text-[14px] hover:bg-sky-500">
           <a href="/jobpage">Jobs</a>
          </button>
          <button class="w-15 h-7 rounded-full text-[14px] hover:bg-sky-500">
            Contact
          </button>
         
          <button class="text-[13px] w-auto h-8 bg-gradient-to-r from-[#29bf12] to-[#135908] rounded-full flex items-center gap-1 text-white px-2">
  <!-- SVG with explicit white fill -->
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="w-4 h-4 fill-white">
    <path d="M7.00684 12C7.00684 11.8011 7.08585 11.6103 7.22651 11.4697C7.36716 11.329 7.55792 11.25 7.75684 11.25H11.2498V7.757C11.2498 7.55809 11.3289 7.36733 11.4695 7.22667C11.6102 7.08602 11.8009 7.007 11.9998 7.007C12.1987 7.007 12.3895 7.08602 12.5302 7.22667C12.6708 7.36733 12.7498 7.55809 12.7498 7.757V11.25H16.2428C16.4417 11.25 16.6325 11.329 16.7732 11.4697C16.9138 11.6103 16.9928 11.8011 16.9928 12C16.9928 12.1989 16.9138 12.3897 16.7732 12.5303C16.6325 12.671 16.4417 12.75 16.2428 12.75H12.7498V16.243C12.7498 16.4419 12.6708 16.6327 12.5302 16.7733C12.3895 16.914 12.1987 16.993 11.9998 16.993C11.8009 16.993 11.6102 16.914 11.4695 16.7733C11.3289 16.6327 11.2498 16.4419 11.2498 16.243V12.75H7.75684C7.55792 12.75 7.36716 12.671 7.22651 12.5303C7.08585 12.3897 7.00684 12.1989 7.00684 12Z"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.31667 3.769C10.4291 3.42394 13.5702 3.42394 16.6827 3.769C18.5097 3.973 19.9847 5.412 20.1987 7.249C20.5687 10.406 20.5687 13.595 20.1987 16.752C19.9837 18.589 18.5087 20.027 16.6827 20.232C13.5702 20.5771 10.4291 20.5771 7.31667 20.232C5.48967 20.027 4.01467 18.589 3.80067 16.752C3.43233 13.595 3.43233 10.406 3.80067 7.249C4.01467 5.412 5.49067 3.973 7.31667 3.769ZM16.5167 5.259C13.5145 4.92623 10.4848 4.92623 7.48267 5.259C6.92691 5.32066 6.40817 5.56788 6.01025 5.96072C5.61233 6.35356 5.35846 6.86908 5.28967 7.424C4.934 10.465 4.934 13.537 5.28967 16.578C5.35867 17.1327 5.61263 17.648 6.01053 18.0407C6.40844 18.4333 6.92706 18.6804 7.48267 18.742C10.4597 19.074 13.5397 19.074 16.5167 18.742C17.0721 18.6802 17.5905 18.433 17.9882 18.0404C18.3859 17.6478 18.6397 17.1326 18.7087 16.578C19.0643 13.537 19.0643 10.465 18.7087 7.424C18.6395 6.86959 18.3856 6.35465 17.9879 5.96222C17.5902 5.5698 17.0719 5.32278 16.5167 5.261"/>
  </svg>
  Post a job
</button>
<div class="w-[0.7px] h-[30px] bg-gray-400" ></div>
<div class="relative group">
  <!-- Main div -->
  <div class="w-auto h-10 border border-gray-400 rounded-full flex items-center gap-2 text-white px-2 cursor-pointer">
    <div class="w-6 h-6 rounded-full bg-black border border-gray-400 overflow-hidden">
      <img class="w-full h-full object-cover rounded-full" src="../img/Dog.jpg" alt="">
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3" viewBox="0 0 18 18" fill="none">
      <path d="M15.7501 3.75004H2.25006C2.11338 3.75047 1.9794 3.78817 1.86255 3.85908C1.7457 3.92999 1.6504 4.03142 1.58691 4.15246C1.52342 4.2735 1.49414 4.40956 1.50223 4.54601C1.51032 4.68245 1.55546 4.8141 1.63281 4.92679L8.38281 14.6768C8.66256 15.081 9.33606 15.081 9.61656 14.6768L16.3666 4.92679C16.4447 4.81434 16.4905 4.68262 16.499 4.54595C16.5076 4.40928 16.4785 4.27289 16.4149 4.15159C16.3514 4.03029 16.2558 3.92873 16.1386 3.85793C16.0214 3.78714 15.887 3.74983 15.7501 3.75004Z" fill="#919191"/>
    </svg>
  </div>

  <!-- Dropdown card -->
  <div class="absolute right-0 mt-2 hidden group-hover:flex flex-col bg-white text-black shadow-lg rounded-lg p-4 w-60 z-10 gap-2">
  <div class="flex items-center gap-3 pb-2">
    <!-- Circle Profile Image -->
    <div class="w-12 h-12 rounded-full bg-black border border-gray-400 overflow-hidden shrink-0">
      <img class="w-full h-full object-cover" src="../img/Dog.jpg" alt="Profile Image">
    </div>

    <!-- Name & Email -->
    <div class="flex flex-col">
      <span class="font-semibold text-sm">Robeto Le</span>
      <span class="text-xs text-gray-600">robertoleler@domain.com</span>
    </div>
  </div>
  <button  style="background-color: #0496FF" class="py-1.5 rounded-sm text-white cursor-pointer" ><a href="/myprofile">My Account</a></button>
  <button  style="background-color: #E9E9E9" class="py-1.5 rounded-sm text-black">Manage Account</button>
  
  <hr class="my-3 border-gray-300" />

  <button class="text-left text-sm hover:bg-gray-100 px-2 py-1 rounded">
    <div class="flex gap-3 items-center">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none">
<path d="M12 5.49999L11.46 6.01999C11.53 6.09257 11.6138 6.15031 11.7066 6.18974C11.7994 6.22918 11.8992 6.24951 12 6.24951C12.1008 6.24951 12.2006 6.22918 12.2934 6.18974C12.3862 6.15031 12.47 6.09257 12.54 6.01999L12 5.49999ZM7.001 16.42C6.84717 16.2935 6.64939 16.2333 6.45117 16.2526C6.25294 16.2719 6.07051 16.3692 5.944 16.523C5.81749 16.6768 5.75727 16.8746 5.77659 17.0728C5.7959 17.271 5.89317 17.4535 6.047 17.58L7.001 16.42ZM2.342 13.411C2.38928 13.4974 2.45311 13.5736 2.52985 13.6354C2.6066 13.6971 2.69475 13.7431 2.78928 13.7708C2.88381 13.7985 2.98287 13.8073 3.08079 13.7967C3.17871 13.7861 3.27359 13.7563 3.36 13.709C3.44641 13.6617 3.52266 13.5979 3.5844 13.5211C3.64614 13.4444 3.69216 13.3562 3.71983 13.2617C3.74751 13.1672 3.75629 13.0681 3.74568 12.9702C3.73507 12.8723 3.70528 12.7774 3.658 12.691L2.342 13.411ZM2.75 9.13699C2.75 6.98699 3.965 5.18299 5.624 4.42399C7.236 3.68699 9.402 3.88199 11.46 6.01999L12.54 4.98099C10.1 2.44399 7.264 2.02499 5 3.05999C2.786 4.07299 1.25 6.42499 1.25 9.13699H2.75ZM8.497 19.5C9.01 19.904 9.56 20.334 10.117 20.66C10.674 20.986 11.31 21.25 12 21.25V19.75C11.69 19.75 11.326 19.63 10.874 19.365C10.421 19.101 9.952 18.737 9.426 18.322L8.497 19.5ZM15.503 19.5C16.929 18.375 18.753 17.087 20.183 15.476C21.64 13.836 22.75 11.803 22.75 9.13699H21.25C21.25 11.335 20.35 13.028 19.062 14.48C17.747 15.96 16.09 17.127 14.574 18.322L15.503 19.5ZM22.75 9.13699C22.75 6.42499 21.215 4.07299 19 3.05999C16.736 2.02499 13.902 2.44399 11.46 4.97999L12.54 6.01999C14.598 3.88299 16.764 3.68699 18.376 4.42399C20.035 5.18299 21.25 6.98599 21.25 9.13699H22.75ZM14.574 18.322C14.048 18.737 13.579 19.101 13.126 19.365C12.673 19.629 12.31 19.75 12 19.75V21.25C12.69 21.25 13.326 20.985 13.883 20.66C14.441 20.334 14.99 19.904 15.503 19.5L14.574 18.322ZM9.426 18.322C8.63 17.695 7.821 17.095 7.001 16.42L6.047 17.58C6.877 18.263 7.755 18.915 8.497 19.5L9.426 18.322ZM3.658 12.692C3.05552 11.6044 2.74284 10.3802 2.75 9.13699H1.25C1.25 10.775 1.67 12.182 2.342 13.411L3.658 12.692Z" fill="#0A0A0B"/>
</svg>
Saved
    </div>
  </button>
  <button class="text-left text-sm hover:bg-gray-100 px-2 py-1 rounded">
    <div class="flex gap-3 items-center">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none">
<path d="M3 14V10C3 6.229 3 4.343 4.172 3.172C5.344 2.001 7.229 2 11 2H13C16.771 2 18.657 2 19.828 3.172C20.482 3.825 20.771 4.7 20.898 6M21 10V14C21 17.771 21 19.657 19.828 20.828C18.656 21.999 16.771 22 13 22H11C7.229 22 5.343 22 4.172 20.828C3.518 20.175 3.229 19.3 3.102 18M8 14H13M8 10H9M16 10H12" stroke="#0A0A0B" stroke-width="1.5" stroke-linecap="round"/>
</svg>
Applied Job
    </div>
  </button>
  <button class="text-left text-sm hover:bg-gray-100 px-2 py-1 rounded">
    <div class="flex gap-3 items-center">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 18 22" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.4216 0.199982H2.39961C1.92222 0.199982 1.46438 0.389624 1.12682 0.72719C0.789252 1.06476 0.599609 1.52259 0.599609 1.99998V20C0.599609 20.4774 0.789252 20.9352 1.12682 21.2728C1.46438 21.6103 1.92222 21.8 2.39961 21.8H15.5996C16.077 21.8 16.5348 21.6103 16.8724 21.2728C17.21 20.9352 17.3996 20.4774 17.3996 20V7.64238C17.3995 7.19175 17.2304 6.75755 16.9256 6.42558L11.7488 0.783182C11.5801 0.599276 11.375 0.452462 11.1465 0.352063C10.918 0.251664 10.6712 0.199874 10.4216 0.199982ZM1.79961 1.99998C1.79961 1.84085 1.86282 1.68824 1.97535 1.57572C2.08787 1.4632 2.24048 1.39998 2.39961 1.39998H10.4216C10.5049 1.39989 10.5872 1.41713 10.6635 1.4506C10.7397 1.48406 10.8081 1.53303 10.8644 1.59438L16.0412 7.23678C16.1429 7.34738 16.1995 7.49212 16.1996 7.64238V20C16.1996 20.1591 16.1364 20.3117 16.0239 20.4242C15.9114 20.5368 15.7587 20.6 15.5996 20.6H2.39961C2.24048 20.6 2.08787 20.5368 1.97535 20.4242C1.86282 20.3117 1.79961 20.1591 1.79961 20V1.99998Z" fill="#0A0A0B"/>
</svg>
Resume (CV)
    </div>
  </button>
  <hr class="my-3 border-gray-300" />
  <button  class="py-1.5 rounded-sm text-white bg-red-400" >
    <div class="flex justify-center items-center" >
      <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 " viewBox="0 0 25 24" fill="none">
<path d="M10.5 12H20.5M20.5 12L17.5 9M20.5 12L17.5 15" stroke="#D00000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.5 12C4.5 9.87827 5.34285 7.84344 6.84315 6.34315C8.34344 4.84285 10.3783 4 12.5 4M12.5 20C11.3006 20.0007 10.1165 19.7314 9.03542 19.2121C7.95434 18.6928 7.00404 17.9367 6.255 17" stroke="#D00000" stroke-width="1.5" stroke-linecap="round"/>
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
  <!-- Search One -->
  <div class="w-full h-300px bg-sky-600 text-amber-50">
    <div
      class="flex w-full h-full bg-[url('.//img/bg2.png')] bg-cover bg-center py-11 px-23 gap-30"
    >
      <div class="flex flex-col gap-6">
        <h2 class="text-4xl font-semibold leading-13">
          Find a job that suits <br />
          your life
        </h2>
        <span
          >Don't Just Survive, Thrive Find Your Perfect Job in Phnom Penh.</span
        >
        <div class="relative w-80 mx-auto ml-0 text-black">
          <input
            type="text"
            id="searchjob"
            placeholder="Search Job"
            class="w-full pr-10 pl-3 py-1.5 text-sm border bg-white border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
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
      </div>
      <div>
        <div
          class="w-[500px] h-[250px] bg-[url('.//img/images.png')] bg-cover bg-center rounded-xl relative"
        ></div>
      </div>
      <img class="w-55 absolute mt-8 ml-240" src="../img/girl.png" alt="" />
    </div>
  </div>
  <!-- Select -->
  <div class="w-full h-[250px] flex flex-col justify-center items-center gap-3 ">
    <div class="grid grid-cols-2 w-[650px] bg-[rgba(233,233,233,1)] gap-4 p-5 rounded-sm">
      <!-- Search bar -->
      <div class="relative w-full mx-auto ml-0 text-black">
        <input
          type="text"
          id="searchjob"
          placeholder="Search Job"
          class="w-full pr-10 pl-3 py-1.5 text-sm border bg-white border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-4 h-4 absolute right-3 top-1/2 transform -translate-y-1/2 text-black"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </div>

      <!-- Location dropdown (whole div is clickable) -->
      <div
        class="flex justify-between items-center w-full border border-gray-300 rounded-lg bg-white px-2 cursor-pointer"
        @click.stop="toggleLocationDropdown"
      >
        <div class="px-3 py-1.5 text-sm text-gray-500">Location</div>
        <div class="relative">
          <div
            class="bg-transparent text-sm py-1.5 flex items-center"
          >
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

      <!-- Job type dropdown (whole div is clickable) -->
      <div
        class="flex justify-between items-center w-full border border-gray-300 rounded-lg bg-white px-2 cursor-pointer"
        @click.stop="toggleDropdown"
      >
        <div class="px-3 py-1.5 text-sm text-gray-500">Job type</div>
        <div class="relative">
          <div
            class="bg-transparent text-sm py-1.5 flex items-center"
          >
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

      <!-- Experience level dropdown (whole div is clickable) -->
      <div
        class="flex justify-between items-center w-full border border-gray-300 rounded-lg bg-white px-2 cursor-pointer"
        @click.stop="toggleExperienceDropdown"
      >
        <div class="px-3 py-1.5 text-sm text-gray-500">Experience level</div>
        <div class="relative">
          <div
            class="bg-transparent text-sm py-1.5 flex items-center"
          >
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
    </div>

    <!-- Search button outside the grid and centered -->
    <div class="flex justify-center items-center w-full mt-4">
      <button
        class="w-[300px] bg-gradient-to-r from-[rgba(4,150,255,1)] to-[rgba(2,90,153,1)] text-white text-sm font-medium py-1.5 rounded-lg hover:bg-blue-700 transition duration-300"
      >
        Search
      </button>
    </div>
  </div>
  <!-- Job store -->
  <div class="w-full max-w-6xl mx-auto p-4">
    <!-- Job store -->
    <div class="container mx-auto">
      <!-- Grid container -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <!-- First two rows (8 cards) always visible -->
        <div
          v-for="(card, index) in visibleCards"
          :key="index"
          class="bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow flex flex-col"
        >
        <div
  class="w-full h-[130px] bg-[url('.//img/image-11.jpg')] bg-cover bg-center pt-3"
>
  <div class="flex justify-between items-center pr-2">
    <span
      class="px-4 py-2 text-sm bg-white text-center rounded-r-full font-sans"
    >
      ABA Bank
    </span>
    <button class="rounded-full bg-pink-400 p-1">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none" class="w-6 h-6">
<path d="M16 7.46879L15.2913 8.15129C15.3831 8.24656 15.4932 8.32234 15.6149 8.3741C15.7367 8.42586 15.8677 8.45254 16 8.45254C16.1323 8.45254 16.2633 8.42586 16.3851 8.3741C16.5068 8.32234 16.6169 8.24656 16.7087 8.15129L16 7.46879ZM9.43881 21.8013C9.23692 21.6353 8.97733 21.5562 8.71716 21.5816C8.45699 21.6069 8.21754 21.7346 8.0515 21.9365C7.88546 22.1384 7.80642 22.398 7.83177 22.6581C7.85712 22.9183 7.98479 23.1577 8.18669 23.3238L9.43881 21.8013ZM3.32387 17.852C3.38592 17.9654 3.4697 18.0655 3.57043 18.1465C3.67116 18.2275 3.78686 18.2879 3.91093 18.3243C4.035 18.3606 4.16501 18.3721 4.29354 18.3582C4.42206 18.3443 4.54659 18.3052 4.66 18.2431C4.77341 18.1811 4.87349 18.0973 4.95453 17.9965C5.03556 17.8958 5.09596 17.7801 5.13228 17.656C5.1686 17.532 5.18013 17.402 5.1662 17.2734C5.15228 17.1449 5.11317 17.0204 5.05113 16.907L3.32387 17.852ZM3.85938 12.2424C3.85938 9.42048 5.45406 7.05273 7.6315 6.05654C9.74725 5.08923 12.5901 5.34517 15.2913 8.15129L16.7087 6.78761C13.5062 3.45779 9.784 2.90786 6.8125 4.26629C3.90663 5.59586 1.89062 8.68286 1.89062 12.2424H3.85938ZM11.4023 25.8438C12.0756 26.374 12.7975 26.9384 13.5286 27.3663C14.2596 27.7942 15.0944 28.1407 16 28.1407V26.1719C15.5931 26.1719 15.1154 26.0144 14.5221 25.6666C13.9276 25.3201 13.312 24.8424 12.6216 24.2977L11.4023 25.8438ZM20.5977 25.8438C22.4693 24.3672 24.8633 22.6767 26.7402 20.5623C28.6525 18.4098 30.1094 15.7415 30.1094 12.2424H28.1406C28.1406 15.1272 26.9594 17.3493 25.2689 19.255C23.5429 21.1975 21.3681 22.7292 19.3784 24.2977L20.5977 25.8438ZM30.1094 12.2424C30.1094 8.68286 28.0947 5.59586 25.1875 4.26629C22.216 2.90786 18.4964 3.45779 15.2913 6.78629L16.7087 8.15129C19.4099 5.34648 22.2527 5.08923 24.3685 6.05654C26.5459 7.05273 28.1406 9.41917 28.1406 12.2424H30.1094ZM19.3784 24.2977C18.688 24.8424 18.0724 25.3201 17.4779 25.6666C16.8833 26.0131 16.4069 26.1719 16 26.1719V28.1407C16.9056 28.1407 17.7404 27.7929 18.4714 27.3663C19.2038 26.9384 19.9244 26.374 20.5977 25.8438L19.3784 24.2977ZM12.6216 24.2977C11.5769 23.4747 10.5151 22.6872 9.43881 21.8013L8.18669 23.3238C9.27606 24.2202 10.4284 25.076 11.4023 25.8438L12.6216 24.2977ZM5.05113 16.9083C4.26037 15.4809 3.84998 13.8741 3.85938 12.2424H1.89062C1.89062 14.3922 2.44188 16.2389 3.32387 17.852L5.05113 16.9083Z" fill="#F8F9FA"/>
</svg>
    </button>
  </div>
</div>
    <div class="flex justify-between  px-3 pt-3">
      <span class="text-[18px] font-bold bg-gradient-to-r from-[#4361ee] to-[#263788] text-transparent bg-clip-text">
  Web Developer
</span>
      <div class="flex gap-1 items-center ">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" class="w-5 h-5">
  <path d="M21 11.6367C21.4688 11.957 21.8867 12.3203 22.2539 12.7266C22.6211 13.1328 22.9375 13.5781 23.2031 14.0625C23.4688 14.5469 23.6641 15.0586 23.7891 15.5977C23.9141 16.1367 23.9844 16.6875 24 17.25C24 18.1797 23.8242 19.0547 23.4727 19.875C23.1211 20.6953 22.6367 21.4102 22.0195 22.0195C21.4023 22.6289 20.6875 23.1094 19.875 23.4609C19.0625 23.8125 18.1875 23.9922 17.25 24C16.5391 24 15.8516 23.8945 15.1875 23.6836C14.5234 23.4727 13.9141 23.168 13.3594 22.7695C12.8047 22.3711 12.3125 21.8945 11.8828 21.3398C11.4531 20.7852 11.1211 20.1719 10.8867 19.5H1.5V1.5H4.5V0H6V1.5H16.5V0H18V1.5H21V11.6367ZM3 3V6H19.5V3H18V4.5H16.5V3H6V4.5H4.5V3H3ZM10.5352 18C10.5117 17.7578 10.5 17.5078 10.5 17.25C10.5 16.5781 10.5938 15.9258 10.7812 15.293C10.9688 14.6602 11.2539 14.0625 11.6367 13.5H10.5V12H12V13.0078C12.3203 12.6094 12.6758 12.2578 13.0664 11.9531C13.457 11.6484 13.8789 11.3867 14.332 11.168C14.7852 10.9492 15.2578 10.7852 15.75 10.6758C16.2422 10.5664 16.7422 10.5078 17.25 10.5C18.0312 10.5 18.7812 10.6289 19.5 10.8867V7.5H3V18H10.5352ZM17.25 22.5C17.9766 22.5 18.6562 22.3633 19.2891 22.0898C19.9219 21.8164 20.4766 21.4414 20.9531 20.9648C21.4297 20.4883 21.8047 19.9336 22.0781 19.3008C22.3516 18.668 22.4922 17.9844 22.5 17.25C22.5 16.5234 22.3633 15.8438 22.0898 15.2109C21.8164 14.5781 21.4414 14.0234 20.9648 13.5469C20.4883 13.0703 19.9336 12.6953 19.3008 12.4219C18.668 12.1484 17.9844 12.0078 17.25 12C16.5234 12 15.8438 12.1367 15.2109 12.4102C14.5781 12.6836 14.0234 13.0586 13.5469 13.5352C13.0703 14.0117 12.6953 14.5664 12.4219 15.1992C12.1484 15.832 12.0078 16.5156 12 17.25C12 17.9766 12.1367 18.6562 12.4102 19.2891C12.6836 19.9219 13.0586 20.4766 13.5352 20.9531C14.0117 21.4297 14.5664 21.8047 15.1992 22.0781C15.832 22.3516 16.5156 22.4922 17.25 22.5ZM18 16.5H20.25V18H16.5V13.5H18V16.5ZM4.5 12H6V13.5H4.5V12ZM7.5 12H9V13.5H7.5V12ZM7.5 9H9V10.5H7.5V9ZM4.5 15H6V16.5H4.5V15ZM7.5 15H9V16.5H7.5V15ZM12 10.5H10.5V9H12V10.5ZM15 10.5H13.5V9H15V10.5ZM18 10.5H16.5V9H18V10.5Z" fill="#0A0A0B"/>
</svg>

        <span class="text-[13px] font-semibold"> 12 days ago</span>
      </div>
    </div>
    <div class="w-[65px] h-[0.1px] bg-gray-600 ml-3 mt-2"></div>
    <div class="flex py-2 px-3 justify-between">
      <div class="flex flex-col gap-1">
        <span class="text-[18px] font-semibold">$800 ~ $1200</span>
        <div class="flex gap-1 items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none" class="w-4 h-4">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9 2C8.30381 2 7.63613 2.27656 7.14384 2.76884C6.65156 3.26113 6.375 3.92881 6.375 4.625V6.5H4.5C3.70435 6.5 2.94129 6.81607 2.37868 7.37868C1.81607 7.94129 1.5 8.70435 1.5 9.5V20C1.5 20.7956 1.81607 21.5587 2.37868 22.1213C2.94129 22.6839 3.70435 23 4.5 23H19.5C20.2956 23 21.0587 22.6839 21.6213 22.1213C22.1839 21.5587 22.5 20.7956 22.5 20V9.5C22.5 8.70435 22.1839 7.94129 21.6213 7.37868C21.0587 6.81607 20.2956 6.5 19.5 6.5H17.625V4.625C17.625 3.92881 17.3484 3.26113 16.8562 2.76884C16.3639 2.27656 15.6962 2 15 2H9ZM15.375 6.5V4.625C15.375 4.52554 15.3355 4.43016 15.2652 4.35984C15.1948 4.28951 15.0995 4.25 15 4.25H9C8.90054 4.25 8.80516 4.28951 8.73483 4.35984C8.66451 4.43016 8.625 4.52554 8.625 4.625V6.5H15.375ZM4.5 8.75H19.5C19.6989 8.75 19.8897 8.82902 20.0303 8.96967C20.171 9.11032 20.25 9.30109 20.25 9.5V11H3.75V9.5C3.75 9.30109 3.82902 9.11032 3.96967 8.96967C4.11032 8.82902 4.30109 8.75 4.5 8.75ZM3.75 13.25V20C3.75 20.1989 3.82902 20.3897 3.96967 20.5303C4.11032 20.671 4.30109 20.75 4.5 20.75H19.5C19.6989 20.75 19.8897 20.671 20.0303 20.5303C20.171 20.3897 20.25 20.1989 20.25 20V13.25H13.5V15.5H10.5V13.25H3.75Z" fill="#0A0A0B"/>
</svg>
          <span class="text-[13px] font-semibold"> Full-time</span>
        </div>
        <div class="flex gap-1 items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none" class="w-4 h-4">
  <path d="M6.40048 5.26001C7.8908 3.7995 9.89728 2.98614 11.9839 2.99668C14.0705 3.00722 16.0687 3.84081 17.5442 5.3163C19.0197 6.79179 19.8533 8.78995 19.8638 10.8766C19.8744 12.9632 19.061 14.9697 17.6005 16.46L13.4145 20.646C13.0394 21.021 12.5308 21.2316 12.0005 21.2316C11.4702 21.2316 10.9615 21.021 10.5865 20.646L6.40048 16.46C4.91537 14.9747 4.08105 12.9604 4.08105 10.86C4.08105 8.75964 4.91537 6.74528 6.40048 5.26001Z" stroke="#0A0A0B" stroke-width="1.5" stroke-linejoin="round"/>
  <path d="M12 13.86C13.6569 13.86 15 12.5168 15 10.86C15 9.20313 13.6569 7.85999 12 7.85999C10.3431 7.85999 9 9.20313 9 10.86C9 12.5168 10.3431 13.86 12 13.86Z" stroke="#0A0A0B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
          <span class="text-[13px] font-semibold" > Toul Kork</span>
        </div>
      </div>
      <div class="flex flex-col py-2 gap-2">
        <button class="px-3 py-1 border border-[rgba(0,180,216,1)] text-[14px] rounded-3xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-[rgba(0,180,216,1)] to-[rgba(0,95,114,1)]">
  View detail
</button>
<button class="px-3 py-1 text-white text-[14px] rounded-3xl font-medium bg-gradient-to-r from-[rgba(4,150,255,1)] to-[rgba(2,90,153,1)]">
  Apply
</button>
      </div>
    </div>
        </div>
      </div>

      <!-- See more button -->
      <div class="flex float-end">
        <button
          @click="toggleShowMore"
          class="px-4 py-2 text-blue-500 underline underline-offset-2 rounded-md hover:bg-gray-300 flex items-center gap-2"
        >
          <span>{{ showAll ? "Show Less" : "See More" }}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            :class="{ 'rotate-180': showAll }"
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
        </button>
      </div>
    </div>
  </div>
  <!-- Sponsor -->
  <div class="w-full grid grid-cols-6 gap-2 items-center pb-10">
    <img class="w-full h-25 object-contain" src="../img/image 5.png" alt="" />
    <img class="w-full h-16 object-contain" src="../img/image 6.png" alt="" />
    <img class="w-full h-16 object-contain" src="../img/image 7.png" alt="" />
    <img class="w-full h-28 object-contain" src="../img/image 8.png" alt="" />
    <img class="w-full h-16 object-contain" src="../img/image 9.png" alt="" />
    <img class="w-full h-20 object-contain" src="../img/image 10.png" alt="" />
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
import { ref, computed, onMounted, onBeforeUnmount } from "vue";
import logo from "../img/logo.png";

// Sample data - in a real app, this would come from an API
const allCards = ref(
  Array(12)
    .fill()
    .map((_, i) => ({ id: i + 1 }))
);
const showAll = ref(false);

// Show only first 8 cards (2 rows of 4) initially
const visibleCards = computed(() => {
  return showAll.value ? allCards.value : allCards.value.slice(0, 8);
});

const toggleShowMore = () => {
  showAll.value = !showAll.value;
};

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

// Experience level dropdown functionality
const selectedExperienceLevel = ref("");
const isExperienceDropdownOpen = ref(false);

const toggleExperienceDropdown = (event) => {
  // Stop event propagation to prevent immediate closing
  event.stopPropagation();
  isExperienceDropdownOpen.value = !isExperienceDropdownOpen.value;

  // Close other dropdowns if they're open
  if (isExperienceDropdownOpen.value) {
    isDropdownOpen.value = false;
    isLocationDropdownOpen.value = false;
  }
};

const selectExperience = (value) => {
  selectedExperienceLevel.value = value;
  isExperienceDropdownOpen.value = false;
};

// Location dropdown functionality (NEW)
const selectedLocation = ref("");
const isLocationDropdownOpen = ref(false);

const toggleLocationDropdown = (event) => {
  // Stop event propagation to prevent immediate closing
  event.stopPropagation();
  isLocationDropdownOpen.value = !isLocationDropdownOpen.value;

  // Close other dropdowns if they're open
  if (isLocationDropdownOpen.value) {
    isDropdownOpen.value = false;
    isExperienceDropdownOpen.value = false;
  }
};

const selectLocation = (value) => {
  selectedLocation.value = value;
  isLocationDropdownOpen.value = false;
};

const closeDropdownOutside = (event) => {
  // Check if click is outside all dropdowns
  if (!event.target.closest(".relative")) {
    isDropdownOpen.value = false;
    isExperienceDropdownOpen.value = false;
    isLocationDropdownOpen.value = false;
  }
};

// Add event listener for outside clicks when component mounts
onMounted(() => {
  document.addEventListener("click", closeDropdownOutside);
});

// Clean up event listener when component unmounts
onBeforeUnmount(() => {
  document.removeEventListener("click", closeDropdownOutside);
});
</script>

<style scoped></style>
