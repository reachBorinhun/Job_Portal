<template>
  <div
    class="w-full h-screen bg-white flex flex-col items-center justify-center"
  >
    <main
      class="w-[450px] h-[500px] bg-white rounded-xl shadow-lg flex flex-col gap-2"
    >
      <img class="w-full" :src="headerimg" alt="" />
      <div class="flex justify-center">
        <img class="w-40" :src="logo" alt="" />
      </div>
      <span class="text-[18px] ml-7 font-medium">Login Account</span>
      <!-- in-register -->
      <div class="flex flex-col gap-4 px-7 pt-2">
        <!-- Gmail Input -->
        <input
          type="gmail"
          id="gmail"
          placeholder="Gmail"
          class="w-5/6 mx-auto px-3 py-1.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
        />

        <!-- Password Input with Eye Icon -->
        <div class="relative w-5/6 mx-auto">
          <input
            :type="showPassword ? 'text' : 'password'"
            id="password"
            placeholder="Password"
            class="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <button
            type="button"
            @click="togglePasswordVisibility"
            class="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
          >
            <svg
              v-if="showPassword"
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M10 3C5.58 3 1.79 6.48 1.39 10.75a1 1 0 000 .5c.4 4.27 4.19 7.75 8.61 7.75s8.21-3.48 8.61-7.75a1 1 0 000-.5C18.21 6.48 14.42 3 10 3zM10 15c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"
              />
              <path d="M10 7a3 3 0 100 6 3 3 0 000-6z" />
            </svg>
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M.293 9.293a1 1 0 011.414 0L4 11.586l2.293-2.293a1 1 0 111.414 1.414L5.414 13l2.293 2.293a1 1 0 01-1.414 1.414L4 14.414l-2.293 2.293a1 1 0 01-1.414-1.414L2.586 13 .293 10.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>

        <button
          class="w-5/6 mx-auto bg-blue-600 text-white text-sm font-medium py-1.5 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Login
        </button>
        <div class="flex items-center justify-center">
          <div class="flex-grow border-t border-gray-300"></div>
          <span class="px-3 text-gray-500 text-sm">Or</span>
          <div class="flex-grow border-t border-gray-300"></div>
        </div>

        <div class="flex flex-col items-center">
          <button
            class="w-60 h-10 border border-gray-300 rounded-full flex items-center justify-center gap-2 mb-3 hover:bg-gray-100 transition duration-300"
          >
            <img
              class="w-5 h-5"
              src="https://i.pinimg.com/736x/27/fa/9f/27fa9f7a7ce6789c74f3679be56786c8.jpg"
              alt="Google"
            />
            Login with Google
          </button>

          <button
            class="w-60 h-10 border border-gray-300 rounded-full flex items-center justify-center gap-2 mb-3 hover:bg-gray-100 transition duration-300"
          >
            <img
              class="w-5 h-5"
              src="https://i.pinimg.com/736x/a9/bb/c6/a9bbc6529fd4ea32bd2a98b56f3925c2.jpg"
              alt="LinkedIn"
            />
            Login with LinkedIn
          </button>
        </div>
        <div class="flex text-[13px] gap-1 pl-50" >
            <span>Don't have account yet?</span>
            <router-link to="/register" class="text-blue-500 underline underline-offset-2  " >Register</router-link>
          </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from "vue";
import headerimg from "../img/headerimg.png";
import logo from "../img/logo.png";

const showPassword = ref(false);
const showConfirmPassword = ref(false);

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
};

const toggleConfirmPasswordVisibility = () => {
  showConfirmPassword.value = !showConfirmPassword.value;
};
</script>

<style scoped></style>
