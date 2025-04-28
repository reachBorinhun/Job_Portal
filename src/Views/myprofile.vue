<template>
    <!-- Nav bar -->
    <nav>
    <div class="w-full h-15 flex justify-between px-10 items-center border border-b-gray-300 mb-10">
      <div class="w-28 h-full object-cover py-2"><img :src="logo" /></div>
      <div class="flex justify-between items-center ">
        <div class="flex  justify-center items-center gap-5">
          <button class=" w-15 h-7 rounded-full text-[14px]">
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
  <button  style="background-color: #0496FF" class="py-1.5 rounded-sm text-white" ><a href="/myprofile">My Account</a></button>
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
  <div class="w-full h-[40px] flex justify-center items-center px-10  bg-white">
  <div class=" flex h-[60px] justify-between items-center w-full border border-gray-300 shadow-sm px-6 py-2 rounded bg-gray-50">
    
    <!-- Left: Image + Text -->
    <div class="flex items-center gap-4">
      <img src="../img/08821aa731d3481260f50167e7dafaf3e877a700.png" alt="Logo" class="w-[68px] h-auto object-contain" />
      <div class="w-px h-6 bg-gray-300"></div>
      <p class="text-sm text-gray-700 whitespace-nowrap">Set up your profile in minutes with a resume.</p>
    </div>

    <!-- Right: Button -->
    <button  style="background-color: #0089EB;" class="px-4 py-2 text-white text-sm rounded hover:bg-blue-700 transition">
      Upload Resume
    </button>
    
  </div>
</div>


</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from "vue";
import logo from "../img/logo.png";

</script>

