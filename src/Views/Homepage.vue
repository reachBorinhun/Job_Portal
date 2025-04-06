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
          >Don't Just Survive, Thrive Find Your Perfect Job in Phnom
          Penh.</span
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
        <div class="w-[500px] h-[250px] bg-[url('.//img/images.png')] bg-cover bg-center rounded-xl relative"></div>
      </div>
      <img class="w-55 absolute mt-8 ml-240" src="../img/girl.png" alt="">
    </div>
  </div>
  <!-- Select -->
  <div class="w-full h-[250px] flex flex-col justify-center items-center gap-3">
  <div class="grid grid-cols-2 w-[650px] bg-blue-100 gap-4 p-5 rounded-sm">
    <!-- Search bar - reduced width -->
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
    
    <!-- Location dropdown -->
    <div class="flex justify-between items-center w-full border border-gray-300 rounded-lg bg-white px-2">
      <div class="px-3 py-1.5 text-sm text-gray-500">Location</div>
      <select class="bg-transparent border-none text-sm outline-none py-1.5">
        <option value="">Select</option>
        <option value="phnom-penh">Phnom Penh</option>
        <option value="siem-reap">Siem Reap</option>
        <option value="battambang">Battambang</option>
        <option value="sihanoukville">Sihanoukville</option>
        <option value="remote">Remote</option>
      </select>
    </div>
    
    <!-- Job type dropdown -->
    <div class="flex justify-between items-center w-full border border-gray-300 rounded-lg bg-white px-2">
      <div class="px-3 py-1.5 text-sm text-gray-500">Job type</div>
      <select class="bg-transparent border-none text-sm outline-none py-1.5 grid grid-rows-2">
        <option value="">Select</option>
        <option value="full-time">Full-time</option>
        <option value="part-time">Part-time</option>
        <option value="contract">Contract</option>
        <option value="freelance">Freelance</option>
        <option value="internship">Internship</option>
      </select>
    </div>
    
    <!-- Experience level dropdown -->
    <div class="flex justify-between items-center w-full border border-gray-300 rounded-lg bg-white px-2">
      <div class="px-3 py-1.5 text-sm text-gray-500">Experience level</div>
      <select class="bg-transparent border-none text-sm outline-none py-1.5">
        <option value="">Select</option>
        <option value="entry">Entry level</option>
        <option value="mid">Mid level</option>
        <option value="senior">Senior level</option>
        <option value="executive">Executive</option>
      </select>
    </div>
  </div>
  
  <button class="w-[300px] mx-auto bg-blue-600 text-white text-sm font-medium py-1.5 rounded-lg hover:bg-blue-700 transition duration-300">
    Search
  </button>
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
          class="bg-white rounded-lg shadow-md p-4 border border-gray-200 hover:shadow-lg transition-shadow"
        >
          <h3 class="font-bold text-lg mb-2">Job Title {{ index + 1 }}</h3>
          <p class="text-gray-600 mb-2">Company Name</p>
          <p class="text-gray-500 text-sm mb-3">Location</p>
          <div class="flex justify-between items-center">
            <span class="text-blue-600 font-medium">$50k-$70k</span>
            <button
              class="bg-blue-500 text-white px-3 py-1 rounded-md text-sm hover:bg-blue-600"
            >
              Apply
            </button>
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
import { ref, computed } from "vue";
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
</script>

<style scoped></style>
