<script setup>
import logo from "../img/logo.png";
</script>
<template>
  <div class="w-full h-screen bg-blue-950">
    <div class="w-full h-screen bg-[url('.//img/bg1.png')] bg-cover bg-center" >
      <div class="w-full h-14 flex justify-between px-10 bg-white">
        <div class="w-28 h-full object-cover py-1"><img :src="logo" /></div>
        <div class="flex flex-row gap-5">
          <a href="/homepage"> to go to homepage</a>
          <span class="pt-4">Not a member yet?</span>
          <a href="/register" class="bg-emerald-400 h-8 mt-3 px-2 rounded-md pt-1"
            >Register</a
          >
        </div>
      </div>
      <div class="flex justify-between px-50 py-20">
        <div class="flex flex-col gap-5 w-[500px] mt-45">
          <span class="text-4xl font-bold text-amber-50"
            >Finding jobs with us.</span
          >
          <span class="text-xl break-words text-amber-50"
            >Your dream job is within reach,<br />start your journey now.</span
          >
        </div>
        <!-- login form -->
        <div
          class="flex flex-col items-center w-[450px] bg-white rounded-xl shadow-lg p-8 mt-6"
        >
          <span class="text-3xl font-semibold text-gray-800 mb-5"
            >Login Account</span
          >

          <input
            class="w-60 h-10 pl-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
            type="email"
            name="Gmail"
            placeholder="Email"
          />

          <input
            class="w-60 h-10 pl-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
            type="password"
            name="Password"
            placeholder="Password"
          />

          <span
            class="text-blue-600 text-xs mb-3 cursor-pointer hover:underline ml-33"
            >Forgot Password?</span
          >

          <button
            class="w-60 h-10 bg-blue-700 text-white rounded-md hover:bg-blue-600 transition duration-300 mb-4"
          >
            Login
          </button>
          <div class="flex items-center justify-center mb-3">
            <div class="flex-grow border-t border-gray-300"></div>
            <span class="px-3 text-gray-500 text-sm">Or</span>
            <div class="flex-grow border-t border-gray-300"></div>
          </div>
          <button
            class="w-60 h-10 border border-gray-300 rounded-full flex items-center justify-center gap-2 mb-3 hover:bg-gray-100 transition duration-300"
          >
            <img
              class="w-5 h-5"
              src="https://i.pinimg.com/736x/27/fa/9f/27fa9f7a7ce6789c74f3679be56786c8.jpg"
              alt="Google"
            />
            Sign up with Google
          </button>

          <button
            class="w-60 h-10 border border-gray-300 rounded-full flex items-center justify-center gap-2 mb-3 hover:bg-gray-100 transition duration-300"
          >
            <img
              class="w-5 h-5"
              src="https://i.pinimg.com/736x/a9/bb/c6/a9bbc6529fd4ea32bd2a98b56f3925c2.jpg"
              alt="LinkedIn"
            />
            Sign up with LinkedIn
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

<style scoped></style>
