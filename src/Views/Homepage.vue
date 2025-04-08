<template>
  <!-- Nav bar -->
  <nav>
    <div class="w-full h-15 flex justify-between px-10">
      <div class="w-28 h-full object-cover py-2"><img :src="logo" /></div>
      <div class="flex justify-between items-center">
        <div class="flex gap-5">
          <button class="bg-sky-500 w-15 h-7 rounded-full text-[14px]">
            Home
          </button>
          <button class="w-15 h-7 rounded-full text-[14px] hover:bg-sky-500">
            Jobs
          </button>
          <button class="w-15 h-7 rounded-full text-[14px] hover:bg-sky-500">
            Contact
          </button>
          <button class="text-[14px] w-21 h-8 bg-green-500 rounded-sm">
            + Post a job
          </button>
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
  <div class="w-full h-[250px] flex flex-col justify-center items-center gap-3">
    <div class="grid grid-cols-2 w-[650px] bg-blue-100 gap-4 p-5 rounded-sm">
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

      <!-- Location dropdown (converted to match the other custom dropdowns) -->
      <div
        class="flex justify-between items-center w-full border border-gray-300 rounded-lg bg-white px-2"
      >
        <div class="px-3 py-1.5 text-sm text-gray-500">Location</div>
        <div class="relative">
          <div
            @click.stop="toggleLocationDropdown"
            class="bg-transparent text-sm py-1.5 cursor-pointer flex items-center"
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

      <!-- Job type dropdown (remains the same) -->
      <div
        class="flex justify-between items-center w-full border border-gray-300 rounded-lg bg-white px-2"
      >
        <div class="px-3 py-1.5 text-sm text-gray-500">Job type</div>
        <div class="relative">
          <div
            @click="toggleDropdown"
            class="bg-transparent text-sm py-1.5 cursor-pointer flex items-center"
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
            class="absolute right-[-8px] mt-2 bg-white border border-gray-300 rounded-lg shadow-lg w-74"
          >
            <div class="grid grid-cols-3 grid-rows-2 gap-2 p-3">
              <div
                @click="selectOption('full-time')"
                class="px-3 py-2 bg-white shadow-lg hover:bg-sky-400 rounded cursor-pointer text-center text-sm"
              >
                Full-time
              </div>
              <div
                @click="selectOption('part-time')"
                class="px-3 py-2 hover:bg-sky-400 shadow-lg rounded cursor-pointer text-center text-sm"
              >
                Part-time
              </div>
              <div
                @click="selectOption('remote')"
                class="px-3 py-2 hover:bg-sky-400 shadow-lg rounded cursor-pointer text-center text-sm"
              >
                Remote
              </div>
              <div
                @click="selectOption('freelance')"
                class="px-3 py-2 hover:bg-sky-400 shadow-lg rounded cursor-pointer text-center text-sm"
              >
                Freelance
              </div>
              <div
                @click="selectOption('internship')"
                class="px-3 py-2 hover:bg-sky-400 shadow-lg rounded cursor-pointer text-center text-sm"
              >
                Internship
              </div>
              <div
                @click="selectOption('contract')"
                class="px-3 py-2 hover:bg-sky-400 rounded shadow-lg cursor-pointer text-center text-sm"
              >
                Contract
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Experience level dropdown (remains the same) -->
      <div
        class="flex justify-between items-center w-full border border-gray-300 rounded-lg bg-white px-2"
      >
        <div class="px-3 py-1.5 text-sm text-gray-500">Experience level</div>
        <div class="relative">
          <div
            @click.stop="toggleExperienceDropdown"
            class="bg-transparent text-sm py-1.5 cursor-pointer flex items-center"
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
                  @click="selectExperience('Entry level')"
                  class="px-3 py-2 bg-white shadow-lg hover:bg-sky-400 rounded cursor-pointer text-center text-sm"
                >
                  Entry level
                </div>
                <div
                  @click="selectExperience('Mid level')"
                  class="px-3 py-2 hover:bg-sky-400 shadow-lg rounded cursor-pointer text-center text-sm"
                >
                  Mid level
                </div>
              </div>
              <!-- Second row - 3 columns -->
              <div class="grid grid-cols-3 gap-2 mb-2">
                <div
                  @click="selectExperience('Senior level')"
                  class="px-1 py-2 hover:bg-sky-400 shadow-lg rounded cursor-pointer text-center text-sm"
                >
                  Senior level
                </div>
                <div
                  @click="selectExperience('Team lead')"
                  class="px-1 py-2 hover:bg-sky-400 shadow-lg rounded cursor-pointer text-center text-sm"
                >
                  Team lead
                </div>
                <div
                  @click="selectExperience('Manager')"
                  class="px-1 py-2 hover:bg-sky-400 shadow-lg rounded cursor-pointer text-center text-sm"
                >
                  Manager
                </div>
              </div>
              <!-- Third row - 1 column -->
              <div class="grid grid-cols-1 gap-2">
                <div
                  @click="selectExperience('Executive')"
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
        class="w-[300px] bg-blue-600 text-white text-sm font-medium py-1.5 rounded-lg hover:bg-blue-700 transition duration-300"
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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6 text-white"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
        />
      </svg>
    </button>
  </div>
</div>
    <div class="flex justify-between px-3 pt-3">
      <span class="font-semibold text-blue-600">Web Developer</span>
      <div>
        <span>Icon 12 days ago</span>
      </div>
    </div>
    <div class="w-[65px] h-[0.1px] bg-gray-600 ml-3 mt-2"></div>
    <div class="flex py-2 px-3 justify-between">
      <div class="flex flex-col gap-1">
        <span class="text-[18px] font-semibold">$800 ~ $1200</span>
        <span class="text-[13px] font-semibold">Icon Full-time</span>
        <span class="text-[13px] font-semibold" >Icon Toul Kork</span>
      </div>
      <div class="flex flex-col py-2 gap-2">
        <button class="px-3 py-1 border border-blue-600 text-[14px] text-blue-600 rounded-3xl">View detail</button>
        <button class="px-3 py-1 bg-blue-600 text-white text-[14px]  rounded-3xl ">Apply</button>
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
